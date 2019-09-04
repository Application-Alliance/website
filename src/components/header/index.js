import React from 'react';
import { HamburgerButton } from 'react-hamburger-button';
import './index.css';

class Header extends React.Component {

	showMenu(event) {
		event.preventDefault();
		
		this.setState({
			showMenu: !this.state.showMenu,
			open: !this.state.open
		});
	}

	linkCloseMenu(event) {
		event.preventDefault();

		this.setState({
			showMenu: false,
			open: false
		});
	}

	setSticky(event) {
		event.preventDefault();

		if (window.scrollY > 36) {
			this.setState({
				isSticky: 'fixed',
				bottomPadding: '3px'
			})
		} else {
			this.setState({
				isSticky: 'relative',
				bottomPadding: '0px'
			})
		}
	}

	updateDimensions() {
		if (window.innerWidth > 800) {
			this.setState({
				showMenu: false,
				open: false,
				showMenuIcon: false
			});
		}
		else {
			this.setState({
				showMenuIcon: true
			});
		}
	}
	
	constructor() {
		super();
		
		this.state = {
			showMenu: false,
			showMenuIcon: true,
			isSticky: 'relative',
			bottomPadding: '0px'
		};
		
		this.showMenu = this.showMenu.bind(this);
		this.linkCloseMenu = this.linkCloseMenu.bind(this);
		this.setSticky = this.setSticky.bind(this);
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener('resize', this.updateDimensions.bind(this));
		window.addEventListener('scroll', this.setSticky.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions.bind(this));
		window.removeEventListener('scroll', this.setSticky.bind(this));
	}

	render() {
		return(
			<div className="header">
				<div className="subheader">
					<span>Catch us at the <a href='https://google.com' rel='noopener noreferrer' target='_blank'>CU job fair</a> next month.</span>
				</div>
				<div className="mainheader" style={{position: this.state.isSticky, paddingBottom: this.state.bottomPadding}}>
					<div>
						
					</div>
					<div>
						<ul>
							<li><a href="#about" >About</a></li>
							<li><a href="#community" >Community</a></li>
							<li><a href="#openings" >Openings</a></li>
							<li><a className="exploreButton" href='#explore'>Explore</a></li>
						</ul>
						{
							this.state.showMenuIcon
								? (
									<HamburgerButton
										open={this.state.open}
										onClick={this.showMenu}
										strokeWidth={3}
										color="#000"
										height={17}
										width={25}
									/>
								)
								: (
									null
								)
						}
					</div>
					{
						this.state.showMenu
							? (
								<div>
									<ul>
										<li><a href="#about">About</a></li>
										<li><a href="#community">Community</a></li>
										<li><a href="#openings">Openings</a></li>
										<li><a className="exploreButton" href='#explore'>Explore</a></li>
									</ul>
								</div>
							)
							: (
								null
							)
					}
				</div>
			</div>
		);
	}
}

export default Header;
