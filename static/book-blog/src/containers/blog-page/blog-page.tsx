import React from 'react';
import {Header} from '../header';
import {Footer} from '../footer';
import {BlogList} from '../../components';

export const BlogPage: React.FC = () => {
	return (
		<div className="blog-page">
			<Header />
			
			<div className="content" >
				<BlogList />
			</div >
			
			<Footer />
		</div>
	);
}