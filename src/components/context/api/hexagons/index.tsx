// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Context imports
import { useIsochroneApi } from '../isochrone';

const HexagonsApiContext: React.Context<any> = createContext(null)

export const useHexagonsApi = () => {
	return (
		useContext(HexagonsApiContext)
	)
}

export const HexagonsApiProvider = ({children}: any) => {
	const { isochroneData } = useIsochroneApi();

	const [ hexagonsData, setHexagonsData ] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
			const tempUrl = `
				${process.env.REACT_APP_API_URL}/
				hexagons_api
			`;
			const url = tempUrl.replace(/\s/g, '');
			const res = await fetch(url);
			const receivedData = await res.json();
			setHexagonsData(receivedData[0]);
		}
		isochroneData && fetchData();
	}, [ isochroneData ]);

	return (
		<HexagonsApiContext.Provider value={{ hexagonsData }}>
			{children}
		</HexagonsApiContext.Provider>
	)
}

HexagonsApiContext.displayName = "HexagonsApiContext";