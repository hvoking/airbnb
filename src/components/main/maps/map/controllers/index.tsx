// App imports
import { ReCenter } from './reCenter';
import './styles.scss';

// Context imports
import { useGeo } from '../../../../context/filters/geo';

// Third party imports
import { NavigationControl } from 'react-map-gl';

export const MapControllers = () => {
	const { viewport, setViewport, placeCoordinates } = useGeo();

	return (
		<>
			<NavigationControl/>
			<ReCenter
				viewport={viewport}
				setViewport={setViewport}
				placeCoordinates={placeCoordinates}
			/>
		</>
	)
}

MapControllers.displayName="MapControllers";