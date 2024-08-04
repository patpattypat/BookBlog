import React from 'react';
import {Header} from '../header';
import {Footer} from '../footer';
import { useParams } from "react-router-dom";
import { LoremIpsum } from 'react-lorem-ipsum';
import './story-page.scss';

export const StoryPage: React.FC = () => {
	const {storyId} = useParams();
	
	return (
		<div className="story-page">
			<Header />

			<div className="story-page__title">
				{storyId}
			</div>
			<div className="story-page__content" >
				<LoremIpsum p={8} />
			</div>

			<Footer />
		</div>
	);
}