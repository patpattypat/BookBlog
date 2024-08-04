import React from 'react';
import './list-entry.scss';

interface IListEntryPropsTex extends IListEntryPropsBase {
	date: string;
	title: string;
}

interface IListEntryPropsImg extends IListEntryPropsBase {
	imageUrl: string;
}

interface IListEntryPropsBase {
	text: string;
};

export const ListEntry: React.FC<IListEntryPropsTex | IListEntryPropsImg> = (props) => {
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