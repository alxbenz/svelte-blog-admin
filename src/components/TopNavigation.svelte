<script lang="ts">
	import Add from '../icons/Add.svelte';

	let classes: string;
	export { classes as class };
</script>

<div class={`flex items-center justify-between bg-gray-700 px-8 text-sm text-white ${classes}`}>
	<div>
		<a href="/posts/new" class="flex items-center rounded-lg text-xs border border-cyan-500 p-2">
			<Add class="mr-2 h-4 w-4 text-cyan-500" />
			New Post
		</a>
	</div>
	<div>right</div>
</div>
