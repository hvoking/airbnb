// App imports
import { Header } from './header';
import { Graphics } from './graphics';
import { Listing } from './listing';
import { Maps } from './maps';
import './styles.scss';

// Context imports
import { MainProvider } from '../context'

export const Main = () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
	
	return (
		<MainProvider>
		<div className="wrapper">
			<Header/>
			<div className="airbnb-wrapper">
				<Listing/>
				<Maps/>
				<Graphics/>
			</div>
		</div>
		</MainProvider>
	)
}

Main.displayName="Main";