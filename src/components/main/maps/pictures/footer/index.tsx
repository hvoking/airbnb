// App imports
import './styles.scss';

export const ImagesFooter = ({propertyInfo}: any) => {
	const rooms = propertyInfo.rooms;
	
	return (
		<div className="pictures-footer">
			<div className="pictures-footer-item">
				<img 
					width="30px" 
					height="20px" 
					src={process.env.PUBLIC_URL + "/static/maps/bed.svg"} alt="bed"
				/>
				<div>{rooms} {rooms === 1 ? 'room' : 'rooms'}</div>
			</div>
		</div>
	)
}

ImagesFooter.displayName="ImagesFooter";