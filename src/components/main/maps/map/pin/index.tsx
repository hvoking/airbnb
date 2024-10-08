// React imports
import { useCallback } from 'react';

// App imports
import './styles.scss';

// Context imports
import { useGeo } from '../../../../context/filters/geo';

// Third-party imports
import { Marker } from 'react-map-gl';

export const Pin = () => {
	const { viewport, setViewport } = useGeo();

	const onMarkerDragEnd = useCallback((event: any) => {
		setViewport((prev: any) => ({
			...prev,
			longitude: event.lngLat.lng,
			latitude: event.lngLat.lat
		}));
	}, []);
	  
	return (
		<Marker
	      longitude={viewport.longitude}
	      latitude={viewport.latitude}
	      anchor="bottom"
	      draggable
	      onDragEnd={onMarkerDragEnd}
	    >
	      <img 
		      style={{width: "25px"}} 
		      src={process.env.PUBLIC_URL + "/static/maps/marker.svg"}
		      alt="marker"
	     />
	    </Marker>
	)
}

Pin.displayName="Pin";