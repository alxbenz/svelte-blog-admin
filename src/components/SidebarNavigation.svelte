<script lang="ts">
	import Home from '../icons/Home.svelte';
	import List from '../icons/List.svelte';

	export let totalPosts: number = 0;
</script>

<div class="h-full w-60 bg-gray-800 p-4 text-gray-100">
	<div class="mb-4 h-12 w-full bg-gray-950 flex justify-center items-center">Logo AREA</div>

	<h3 class="mt-8 mb-4 text-xs font-semibold uppercase text-gray-500">Overview</h3>
	<a class="my-2 flex items-center text-sm text-gray-200 hover:text-gray-200" href="/">
		<span class="mr-2 w-8">
			<Home />
		</span>
		<span class="w-32">Home</span>
	</a>

	<h3 class="mb-4 mt-12 text-xs font-semibold uppercase text-gray-500">Posts</h3>

	<a class="my-2 flex items-center text-sm text-gray-200 hover:text-gray-200" href="/posts">
		<span class="mr-2 w-8">
			<List />
		</span>
		<span class="w-32">View Posts</span>
		<span class="ml-2 w-8 text-xs text-gray-400">({totalPosts})</span>
	</a>
	
	...
</div>
