import React from 'react';
import {Header} from '../header';
import {Footer} from '../footer';
import {ListEntry} from '../../components';

export const News: React.FC = () => {
	return (
		<div className="news">

			<Header />
	
			<div className="content">
				<ListEntry />
				<ListEntry />
				<ListEntry />
				<ListEntry />
				<ListEntry />
				<ListEntry />
			</div>
	
			<Footer />
		</div>
	);
}
