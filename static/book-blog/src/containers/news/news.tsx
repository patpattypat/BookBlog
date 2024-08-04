import React from 'react';
import {Header} from '../header';
import {Footer} from '../footer';
import {NewsList} from '../../components';

export const News: React.FC = () => {
	return (
		<div className="news">

			<Header />
	
			<div className="content">
				<NewsList />
			</div>
	
			<Footer />
		</div>
	);
}
