/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import style from './css/style.module.scss';

function SavedPost(props) {
	return (
		<div className={style.post}>
			<img
				className={style.avatar}
				src="https://w7.pngwing.com/pngs/5/350/png-transparent-orange-haired-cartoon-male-character-illustration-philip-j-fry-bender-leela-sticker-futurama-child-face-heroes-thumbnail.png"
				alt="Phillip"
			/>
			<button name="Delete" type="button">
				Delete
			</button>
			<button name="Like" type="button">
				Like
			</button>
			<button name="Reply" type="submit">
				Reply
			</button>
			<div>{props.message}</div>
		</div>
	);
}

export { SavedPost };
