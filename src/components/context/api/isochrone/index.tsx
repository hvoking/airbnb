// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useGeo } from '../../filters/geo';

const IsochroneApiContext: React.Context<any> = createContext(null)

export const useIsochroneApi = () => {
	return (
		useContext(IsochroneApiContext)
	)
}

export const IsochroneApiProvider = ({children}: any) => {
	const { viewport } = useGeo();

	const [ routingProfile, setRoutingProfile ] = useState("walking");
	const [ contoursMinutes, setContoursMinutes ] = useState(30);
	const [ isochroneData, setIsochroneData ] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
		    const tempUrl = `
		    	https://api.mapbox.com/isochrone/v1/mapbox/
		    	${routingProfile}/
		    	${viewport.longitude}%2C
		    	${viewport.latitude}
		    	?contours_minutes=${contoursMinutes}
		    	&polygons=true
		    	&denoise=1
		    	&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}
		    `;
		    const url = tempUrl.replace(/\s/g, '');
		    const res = await fetch(url);
		    const receivedData = await res.json();
		    setIsochroneData(receivedData);
		}
		viewport && fetchData();
	}, [ viewport, routingProfile, contoursMinutes ]);

	return (
		<IsochroneApiContext.Provider value={{ 
			isochroneData,
			routingProfile, setRoutingProfile,
			contoursMinutes, setContoursMinutes,
		}}>
			{children}
		</IsochroneApiContext.Provider>
	)
}

IsochroneApiContext.displayName = "IsochroneApiContext";