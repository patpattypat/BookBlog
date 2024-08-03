import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import './list-entry.scss';

export const ListEntry: React.FC = () => {
	return (
		<div className="list-entry">
			<div className="image">
				<img src="home-pictures/small-1.jpg" alt="small img"/>
			</div>
			<div className="text">
				<LoremIpsum p={1} />
			</div>
		</div>
	);
}