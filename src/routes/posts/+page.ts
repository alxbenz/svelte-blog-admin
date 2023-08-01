import { API } from '../../config';
import type { Post } from '../../types';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const response = await fetch(`${API.POSTS}`);
	const posts = (await response.json()) as Post;

	return { posts: posts };
}
