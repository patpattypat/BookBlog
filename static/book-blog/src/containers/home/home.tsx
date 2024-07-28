import React from 'react';
import {Header} from '../header';
import './home.scss';

export const Home: React.FC = () => {
	return (
		<div className="home">
			<Header />
			<div className="content" >
				Home
			</div >
		</div>
	);
}