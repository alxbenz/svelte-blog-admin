<script lang="ts">
	import type { Post } from '../../types';

	/** @type {import('./$types').PageData} */
	export let data: {
		posts: Post[];
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
			<a
				class="my-2 flex items-center border-b-2 bg-gray-100 p-4 text-sm transition-all hover:border-b-gray-300 hover:bg-white"
				href={`/posts/${post._id}`}
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
					/{post.slug}
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

				<span class="mx-2 inline-block w-1/6" />
			</a>
		{/each}
	</ul>
</div>
