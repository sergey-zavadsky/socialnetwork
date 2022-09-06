import React from 'react';
import style from './css/style.module.scss';

function PostMessage() {
	return (
		<div>
			<textarea className={style.postMessage} placeholder="Post a message" />
			<button className={style.button} type="submit">
				Add
			</button>
		</div>
	);
}

export { PostMessage };
