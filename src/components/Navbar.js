import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
	const [ click, setClick ] = useState(false);

	const handleClick = () => setClick(!click);
	return (
		<Fragment>
			<nav className="navbar">
				{/* <div className="nav-container"> */}
				<NavLink exact to="/" className="nav-logo-sml">
					DD ECO SOURCING
					{/* <i className="fas fa-code" /> */}
				</NavLink>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					{/* <li className="nav-item">
							<NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
								Home
							</NavLink>
						</li> */}
					<li>
						<NavLink exact to="/" className="nav-logo">
							DD ECO SOURCING
							{/* <i className="fas fa-code" /> */}
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink exact to="/about" activeClassName="active" className="nav-links" onClick={handleClick}>
							Know Us
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact
							to="/knowledge"
							activeClassName="active"
							className="nav-links"
							onClick={handleClick}
						>
							Knowledge Centre
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact
							to="/products"
							activeClassName="active"
							className="nav-links"
							onClick={handleClick}
						>
							Products
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact
							to="/applications"
							activeClassName="active"
							className="nav-links"
							onClick={handleClick}
						>
							Applications
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact
							to="/contact"
							activeClassName="active"
							className="nav-links"
							onClick={handleClick}
						>
							Contact Us
						</NavLink>
					</li>
				</ul>
				<div className="nav-icon" onClick={handleClick}>
					{/* <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}
					{!click && <MenuIcon className="icon" />}
					{click && <CloseIcon className="icon" />}
				</div>
				{/* </div> */}
			</nav>
		</Fragment>
	);
}

export default Navbar;
