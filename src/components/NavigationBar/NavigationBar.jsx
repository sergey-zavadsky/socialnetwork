import React from 'react';
import { SearchBar, Profile } from '../index';
import style from './css/style.module.scss';

function NavigationBar() {
	return (
		<nav className={style.navigationBar}>
			<SearchBar />
			<ul className={style.ul}>
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
