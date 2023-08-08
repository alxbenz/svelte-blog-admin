<script lang="ts">
	import { goto } from '$app/navigation';
	import { updatePost } from '$lib/updatePost';
	import PostForm from '../../../components/PostForm.svelte';
	import type { Post, PostResponse } from '../../../types';

	/** @type {import('./$types').PageData} */
	export let data: {
		post: PostResponse;
	};

	const handleSave = async (post: Post) => {
		// TODO - add loading state
		try {
			const result = await updatePost({
				post,
				id: data.post._id
			});

			goto(`/posts`);
		} catch (e) {
			console.error(e);
		}
	};
</script>

<div>
	<PostForm post={data.post} savePost={handleSave} headline="Edit post" subline="subline here" />
</div>
