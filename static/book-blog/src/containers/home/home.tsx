import React from 'react';
import {Header} from '../header';
import './home.scss';

export const Home: React.FC = () => {
	return (
		<div className="home">
			<Header />
			<div className="content" >
				Home
				 <div className="grid-container">
				 	<div className="grid-item">
				  		<img src="home-pictures/small-1.jpg" alt="small img"/>
						<span className="text about">About me</span>
				  	</div>
				 	<div className="grid-item">
				   		<img src="home-pictures/small-2.jpg" alt="small img 2" />
					</div>
				  	<div className="grid-item vertical">
					 	<img src="home-pictures/vertical-1.jpg" alt="vertical img 1" />
					<span className="text aktuelles">Aktuelles</span>
					</div>
				  	<div className="grid-item big">
					 	<img src="home-pictures/big-1.jpg" alt="big img 1" />
					<span className="text stories">Kurzgeschichten</span>
					</div>
				  	<div className="grid-item">
					 	<img src="home-pictures/small-3.jpg" alt="small img 3" />
					</div>
				  	<div className="grid-item">
					 	<img src="home-pictures/small-4.jpg" alt="small img 4" />
					</div>
				  	<div className="grid-item horizontal">
					 	<img src="home-pictures/horizontal-1.jpg" alt="horizontal img 1" />
					<span className="text blog">Blog</span>
					</div>
				  	<div className="grid-item">
					 	<img src="home-pictures/small-5.jpg" alt="small img 5" />
					<span className="text cards">Karten</span>
					</div>
				  	<div className="grid-item horizontal">
					 	<img src="home-pictures/horizontal-2.jpg" alt="horizontal img 2" />
					</div>
				</div> 
			</div >
		</div>
	);
}