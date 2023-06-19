import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import image1 from '../../assets/images/home/1.webp';
import image2 from '../../assets/images/home/2.webp';
import image3 from '../../assets/images/home/3.webp';
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
			<div className="content-whole explore-whole">
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
			<section>
				<div className="section-img-cont">
					<div className="explore-img section-img">
						<img src={image2} alt="explore" />
					</div>
				</div>
			</section>
			<div className="content-whole story-whole">
				<div className="explore-cont story-cont">
					<h2>Read Our Story</h2>
					<p>
						Read Our Story Growing up in Delhi, we witnessed that our home town gradually becoming one of
						the most polluted cities in the world. Day by day we experienced the receding air quality,
						disappearing wildlife, growing noise pollution and our depleting water source.
					</p>
				</div>
				<div className="section-num two">
					<h2>02</h2>
				</div>
			</div>
			<section>
				<div className="section-img-cont">
					<div className="story-img section-img">
						<img src={image3} alt="explore" />
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Home;
