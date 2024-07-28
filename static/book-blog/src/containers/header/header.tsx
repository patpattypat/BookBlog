import React from 'react';
import { Link} from 'react-router-dom';
import './header.scss';

export const Header: React.FC = () => {
	return (
		<div className="header">
			<div className="logo">
				Logo
			</div>
			<div className="menu">
				<Link className="btn btn-menu" to="/about">About</Link>
				<Link className="btn btn-menu" to="/library">Bibliothek</Link>
				<Link className="btn btn-menu" to="/cards">Karten</Link>
				<Link className="btn btn-menu" to="/blog">Blog</Link>
			</div>
		</div>
	);
}