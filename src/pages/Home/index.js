import React from 'react';
import './index.css';
import Header from '../../components/header';
import Landing from '../../components/landing';

export default function Home() {
	return (
		<div className="App">
			<Header />
			<Landing />
		</div>
	);
}
