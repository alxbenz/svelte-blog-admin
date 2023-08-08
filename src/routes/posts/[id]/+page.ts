import { API } from '../../../config';
import type { Post } from '../../../types';

/** @type {import('./$types').PageLoad} */
export async function load({ params }: { params: { id: string } }) {
	const response = await fetch(`${API.POST}/${params.id}`);
	const post = (await response.json()) as Post;

	return { post };
}
