import React from 'react';
import style from './css/style.module.scss';

function SearchBar() {
	return <input className={style.searchBar} type="text" placeholder="Search" />;
}

export { SearchBar };
