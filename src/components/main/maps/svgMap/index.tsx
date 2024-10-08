// React imports
import { useRef } from 'react';

// App imports
import { Hexagons } from './hexagons';
import { SVGWrapper } from './svg';
import './styles.scss';

// Context imports
import { usePolygonApi } from '../../../context/api/polygon';
import { useSvgMapSizes } from '../../../context/sizes/svgMap';
import { useGeo } from '../../../context/filters/geo';

// Third-party imports
import * as d3 from 'd3';

export const SvgMap = () => {
	const svgContainerRef = useRef<any>(null);

	const { polygonData } = usePolygonApi();
	const { innerWidth, innerHeight } = useSvgMapSizes();
	const { viewport, setViewport } = useGeo();

	if (!polygonData || !polygonData[0]) return (<></>)

	const city = polygonData[0].city_geom[0];

	const projection = d3.geoIdentity()
		.reflectY(true)
		.fitSize([ innerWidth, innerHeight ], city)

	const path = d3.geoPath(projection);

	const onClick = (e: any) => {
		const rect = svgContainerRef.current.getBoundingClientRect();
		const adjustedCoordinates: any = [e.clientX - rect.left, e.clientY - rect.top];
	    const [lng, lat]: any = projection.invert(adjustedCoordinates);
	    setViewport((prev: any) => ({ ...prev, latitude: lat, longitude: lng }));
	}

	const pinCoordinates: any = projection([viewport.longitude, viewport.latitude]);

	return (
		<div className="airbnb-svgmap-wrapper">
			<div ref={svgContainerRef}>
				<SVGWrapper>
					<g onClick={onClick}>
						<Hexagons path={path}/>
						<image
						  x={pinCoordinates[0] - 3}
						  y={pinCoordinates[1] - 10}
						  width={6}
						  height={10}
						  href={process.env.PUBLIC_URL + "/static/maps/marker.svg"}
						  className="pin-marker"
						/>
					</g>
				</SVGWrapper>
			</div>
		</div>
	)
}

SvgMap.displayName="SvgMap";