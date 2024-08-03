import React from 'react';
import { Link} from 'react-router-dom';
import './header.scss';
import { ReactComponent as Heaader } from './assets/header.svg';

export const Header: React.FC = () => {
	return (
		<div className="header">
			<div className="logo">
				<Link className="btn btn-home" to="/">
					<Heaader />
				</Link>
			</div>
			<div className="menu">
				<Link className="btn btn-menu" to="/">Home</Link>
				<div className="divider" >&bull; </div>
				<Link className="btn btn-menu" to="/autorin">Autorin</Link>
				<div className="divider"  >&bull; </div>
				<Link className="btn btn-menu" to="/blog">Blog</Link>
				<div className="divider" >&bull; </div>
				<Link className="btn btn-menu" to="/bibliothek">Bibliothek</Link>
				<div className="divider" >&bull; </div>
				<Link className="btn btn-menu" to="/karten">Karten</Link>
			</div>
		</div>
	);
}