import { API } from '../config';
import type { PostResponse, Post } from '../types';

interface UpdatePost {
	post: Post;
	id: string;
}

export async function updatePost({ post, id }: UpdatePost) {
	const response = await fetch(`${API.POST}/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(post)
	});

	if (!response.ok) throw new Error(response.statusText);

	return (await response.json()) as PostResponse;
}
