<script lang="ts">
	import { goto } from '$app/navigation';
	import { createPost } from '$lib/createPost';
	import PostForm from '../../../components/PostForm.svelte';
	import type { Post } from '../../../types';

	const handleSave = async (post: Post) => {
		// TODO - add loading state
		try {
			const result = await createPost(post);

			// TODO - trigger update to sidebar
			goto(`/posts/${result._id}`);
		} catch (e) {
			console.error(e);
		}
	};
</script>

<div>
	<PostForm savePost={handleSave} headline="Edit post" subline="subline here" />
</div>
