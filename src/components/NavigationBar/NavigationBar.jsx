import React from 'react';
import { SearchBar, Profile } from '../index';
import './css/style.scss';

function NavigationBar() {
	return (
		<nav className="navigationBar">
			<SearchBar />
			<ul className="ul">
				<li>Home</li>
				<li>Companies</li>
				<li>Projects</li>
				<li>Profiles</li>
				<li>Jobs</li>
				<li>Messages</li>
				<li>Notification</li>
			</ul>
			<Profile />
		</nav>
	);
}

export { NavigationBar };
