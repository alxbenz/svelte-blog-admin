import { API } from '../config';

export async function deletePost( id : string) {
	const response = await fetch(`${API.POST}/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	if (!response.ok) throw new Error(response.statusText);

	return true;
}
