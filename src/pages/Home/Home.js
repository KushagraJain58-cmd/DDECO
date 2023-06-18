import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import image1 from '../../assets/images/home/1.webp';
import image2 from '../../assets/images/home/2.webp';
import './Home.css';

const Home = () => {
	return (
		<Fragment>
			<Navbar />
			<main>
				<div className="cover">
					<img src={image1} alt="cover_image" />
				</div>
				<div className="title">
					<h1>
						DD ECO <br />SOURCING
					</h1>
					<p>Cotton powering circular economy</p>
				</div>
			</main>
			<div className="explore-whole">
				<div className="explore-cont">
					<h2>Explore The Topics</h2>
					<p>
						We at DD Eco sourcing strive to create a planet positive textile industry with our range of
						recycled fibers, organic cotton and hemp fibers. Our fibers are ideal for garments, home
						textiles furnishing, apparels, open ended yarn and blended yarn.
					</p>
				</div>
				<div className="section-num">
					<h2>01</h2>
				</div>
			</div>

			<div className="explore">
				<div className="explore-img">
					<img src={image2} alt="explore" />
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
