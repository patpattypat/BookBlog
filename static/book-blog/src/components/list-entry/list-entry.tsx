import React from 'react';
import './list-entry.scss';

interface IListEntryProps {
	text: string;
	imageUrl?: string;
	date?: string;
	title?: string;
};

export const ListEntry: React.FC<IListEntryProps> = (props) => {
	return (
		<div className="list-entry">
			{
				'date' in props && 'title' in props && (
					<div className="details">
						<div className="date">
							Date: {props.date}
						</div>
						<div className="title" >
							{props.title}
						</div>
					</div>
				)
			}
			{
				'imageUrl' in props && (
					<div className="image">
						<img src={props.imageUrl} alt="small img"/>
					</div>
				)			
			}
			<div className="text">
				{props.text}
			</div>
		</div>
	);
}