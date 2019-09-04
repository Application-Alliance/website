import React from 'react';
import './index.css';

// Import subsections
import Header from '../../components/header';
import Landing from '../../components/landing';
import About from '../../components/about';
import Community from '../../components/community';

export default function Home() {
	return (
		<div className="App">
			<Header />
			<Landing />
			<About />
			<Community />
		</div>
	);
}
