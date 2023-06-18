import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import image1 from '../../assets/images/home/1.webp';
import './Home.css';

const Home = () => {
	return (
		<Fragment>
			<Navbar />
			<main>
				<div className="cover">
					<img src={image1} alt="" />
				</div>
				<div className="title">
					<h1>
						DD ECO <br />SOURCING
					</h1>
					<p>Cotton powering circular economy</p>
				</div>
			</main>
		</Fragment>
	);
};

export default Home;
