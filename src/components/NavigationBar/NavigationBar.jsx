import React from 'react';
import { SearchBar, Profile } from '../index';
import style from './css/style.module.scss';

function NavigationBar() {
	return (
		<nav className={style.navigationBar}>
			<SearchBar />
			<ul className={style.ul}>
				<li>
					<a href="link">Home</a>
				</li>
				<li>
					<a href="link">Companies</a>
				</li>
				<li>
					<a href="link">Projects</a>
				</li>
				<li>
					<a href="link">Profiles</a>
				</li>
				<li>
					<a href="link">Jobs</a>
				</li>
				<li>
					<a href="link">Messages</a>
				</li>
				<li>
					<a href="link">Notification</a>
				</li>
			</ul>
			<Profile />
		</nav>
	);
}

export { NavigationBar };
