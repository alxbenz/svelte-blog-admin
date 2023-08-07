<script lang="ts">
	import type { Post } from '../../types';

	/** @type {import('./$types').PageData} */
	export let data: {
		posts: Post[];
	};
</script>

<div>
	<div class="my-2 px-4 text-xs">
		<span class="mx-2 inline-block w-1/6">slug</span>
		<span class="mx-2 inline-block w-1/6">title</span>
		<span class="mx-2 inline-block w-1/6">content</span>
		<span class="mx-2 inline-block w-32">published</span>
		<span class="mx-2 inline-block w-1/6">actions</span>
	</div>
	<ul>
		{#each data.posts as post}
			<li class="my-2 border-b-2 bg-gray-100 p-4 text-sm hover:border-b-gray-300 hover:bg-white transition-all">
				<span class="mx-2 inline-block w-1/6">
					/{post.slug}
				</span>
				<span class="mx-2 inline-block w-1/6">
					{post.title}
				</span>
				<span class="mx-2 inline-block w-1/6 text-ellipsis whitespace-nowrap">
					{post.content}
				</span>
				<span class="mx-2 inline-block w-32">
					<span
						class={`mr-2 inline-block h-2 w-2 rounded-full ${
							post.published ? 'bg-green-500' : 'bg-orange-500'
						}`}
					/>
					<span class="text-xs">{post.published ? 'published' : 'draft'}</span>
				</span>
                <span class="mx-2 inline-block w-1/6">
                    TODO
                </span>
			</li>
		{/each}
	</ul>
</div>
