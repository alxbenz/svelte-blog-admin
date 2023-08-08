<script lang="ts">
	import { deletePost } from '$lib/deletePost';
	import type { PostResponse } from '../../types';

	/** @type {import('./$types').PageData} */
	export let data: {
		posts: PostResponse[];
	};

	const handleDelete = async (id: string) => {
		try {
			if (window.confirm('Are you sure you want to delete this post?')) {
				await deletePost(id);
				location.reload();
			}
		} catch (e) {
			console.error(e);
		}
	};
</script>

<div>
	<div class="my-2 flex items-center px-4 text-xs">
		<span class="mx-2 inline-block w-6" />
		<span class="mx-2 inline-block w-1/6">slug</span>
		<span class="mx-2 inline-block w-1/6">title</span>
		<span class="mx-2 inline-block w-1/6">content</span>
		<span class="mx-2 inline-block w-1/12">created</span>
		<span class="mx-2 inline-block w-1/12">updated</span>
		<span class="mx-2 inline-block w-1/6">actions</span>
	</div>
	<ul>
		{#each data.posts as post}
			<li
				class="my-2 flex items-center border-b-2 bg-gray-100 p-4 text-sm transition-all hover:border-b-gray-300 hover:bg-white"
			>
				<span class="mx-2 inline-flex w-6 flex-shrink-0 items-center">
					<span
						title={post.published ? 'published' : 'draft'}
						class={`mr-2 inline-block h-3 w-3 rounded-full ${
							post.published ? 'bg-green-500' : 'bg-orange-500'
						}`}
					/>
				</span>
				<span class="mx-2 inline-block w-1/6">
					<a class="underline hover:no-underline text-cyan-800" href={`/posts/${post._id}`}>/{post.slug} </a>
				</span>
				<span class="mx-2 inline-block w-1/6">
					{post.title}
				</span>
				<span
					class="mx-2 inline-block w-1/6 overflow-hidden text-ellipsis whitespace-nowrap"
					title={post.content}
				>
					{post.content}
				</span>
				<span class="mx-2 inline-block w-1/12">
					{new Date(post.createdAt).toLocaleDateString()}
				</span>
				<span class="mx-2 inline-block w-1/12">
					{new Date(post.updatedAt).toLocaleDateString()}
				</span>

				<span class="mx-2 inline-block w-1/6">
					<a
						href={`/posts/${post._id}`}
						class="mr-2 rounded-md bg-cyan-300 px-2 py-1 text-xs hover:bg-cyan-400 hover:shadow-md"
						>edit</a
					>
					<button
						class="mr-2 rounded-md bg-red-300 px-2 py-1 text-xs hover:bg-red-400 hover:shadow-md"
						on:click={(e) => {
							e.preventDefault();
							handleDelete(post._id);
						}}>delete</button
					>
				</span>
			</li>
		{/each}
	</ul>
</div>
