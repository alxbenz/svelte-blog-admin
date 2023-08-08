import { API } from '../config';
import type { PostResponse, Post } from '../types';

export async function createPost(post: Post) {
	const response = await fetch(`${API.POST}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(post)
	});

	if (!response.ok) throw new Error(response.statusText);

	return (await response.json()) as PostResponse;
}
