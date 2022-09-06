import React from 'react';
import './App.css';
import {
	NavigationBar,
	ProfileShortInfo,
	Posts,
	NewsFeed,
	Suggestions,
} from './components';

function App() {
	return (
		<div className="app">
			<NavigationBar />
			<ProfileShortInfo />
			<Posts />
			<NewsFeed />
			<Suggestions />
		</div>
	);
}

export default App;
