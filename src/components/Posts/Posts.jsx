import React from 'react';
import style from './css/style.module.scss';
import { SavedPost } from './SavedPost';
import { PostMessage } from './PostMessage';

function Posts() {
	return (
		<div className={style.postsBlock}>
			<PostMessage />
			<SavedPost message="This is my first post" />
			<SavedPost message="This is my second post" />
		</div>
	);
}

export { Posts };
