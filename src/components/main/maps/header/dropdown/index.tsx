// App imports
import { IsoDropdown } from './iso';
import { FiltersDropdown } from './type';
import './styles.scss';

// Context imports
import { useIsochroneApi } from '../../../../context/api/isochrone';

export const Dropdown = () => {
	const { routingProfile, setRoutingProfile, contoursMinutes, setContoursMinutes } = useIsochroneApi();

	const transportListOfValues: any = {
		"walking": process.env.PUBLIC_URL + "/static/maps/header/walking-active.svg",
		"cycling": process.env.PUBLIC_URL + "/static/maps/header/cycling-active.svg",
		"driving": process.env.PUBLIC_URL + "/static/maps/header/driving-active.svg"
	}

	const minutesDict: any = {
		"5": "5 min",
		"10": "10 min",
		"15": "15 min",
		"30": "30 min",
		"60": "60 min",
	}

	return (
		<div className="map-header">
			<IsoDropdown
				listOfValues = {transportListOfValues}
				currentState={routingProfile}
				setState={setRoutingProfile}
			/>
			<FiltersDropdown
				imoveisDict={minutesDict}
				propertyName={`${contoursMinutes} min`}
				setPropertyTypeId={setContoursMinutes}
			/>
		</div>
	)
}

Dropdown.displayName="Dropdown";