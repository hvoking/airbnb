// App imports
import './styles.scss';

export const ReCenter = ({ setViewport, viewport, placeCoordinates }: any) => {
	const reCenter = () => {
		setViewport({...viewport , placeCoordinates})
	}

	return (
		<img 
			className="airbnb-recenter-image" 
			src={process.env.PUBLIC_URL + "/static/maps/reCenter.svg"}
			alt="reCenter" 
			onClick={reCenter}
		/>
	)
}

ReCenter.displayName="ReCenter";