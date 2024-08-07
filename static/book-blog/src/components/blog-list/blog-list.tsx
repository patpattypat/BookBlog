import React from 'react';
import { loremIpsum  } from 'react-lorem-ipsum';
import {ListEntry} from '../../components';
import './blog-list.scss';

export const BlogList: React.FC = () => {	
	return (
		<div className="blog-list">
			<div className="blog-list__title">
				Blog
			</div>
			<ListEntry imageUrl="home-pictures/small-1.jpg" date="01.05.2000" title="This is an old entry" text={loremIpsum()[0]} />
			<ListEntry imageUrl="home-pictures/small-3.jpg" date="04.08.2024" title="This is an example" text={loremIpsum()[0]} />
			<ListEntry  imageUrl="home-pictures/horizontal-1.jpg"date="04.08.2024" title="This is an example" text={loremIpsum()[0]} />
			<ListEntry imageUrl="home-pictures/big-1.jpg" date="25.10.2030" title="This is a future event" text={loremIpsum()[0]} />
			<ListEntry imageUrl="home-pictures/small-2.jpg" date="10.03.2015" title="This is an other example" text={loremIpsum()[0]} />
			<ListEntry imageUrl="home-pictures/vertical-1.jpg" date="10.11.2014" title="This is so amazing!" text={loremIpsum()[0]} />
		</div>
	);
}