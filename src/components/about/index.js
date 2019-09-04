import React from 'react';
import './index.css';

class About extends React.Component {
	render() {
		return(
			<div className="about">
				<div className="about-cta">
					<div className="pageItem">
						<h1>Build the Decentralized Future</h1>
						<p>Ethereum is a global, open-source platform for decentralized applications. On Ethereum, you can write code that controls digital value, runs exactly as programmed, and is accessible anywhere in the world. With over 6,000 developers building applications in decentralized finance, social networking, gaming, development, and more, the eco-system is growing at an exponential rate.</p>
					</div>
				</div>
				<div className="about-expanded">
					<div className="pageItem">
						<h1>Why Ethereum?</h1>
						<p>Right now, thousands of developers all over the world are building applications on Ethereum, and inventing new kinds of applications, many of which you can use today.</p>
						<div>
							<a className="featureItem" href="https://google.com">
								<div>
									<div>

									</div>
									<div>

									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
