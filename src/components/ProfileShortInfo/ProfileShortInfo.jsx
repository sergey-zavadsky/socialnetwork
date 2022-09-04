import React from 'react';
import style from './css/style.module.scss';

function ProfileShortInfo() {
	return (
		<div className={style.profileShortInfo}>
			<div>Photo</div>
			<div>name</div>
			<div>title</div>
			<div>following</div>
			<div>followers</div>
		</div>
	);
}

export { ProfileShortInfo };
