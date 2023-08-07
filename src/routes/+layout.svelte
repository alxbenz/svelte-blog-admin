<script lang="ts">
	import '../app.postcss';
	import Footer from '../components/Footer.svelte';
	import SidebarNavigation from '../components/SidebarNavigation.svelte';
	import TopNavigation from '../components/TopNavigation.svelte';

	import './styles.css';

	/** @type {import('./$types').PageData} */
	export let data: {
		totalPosts: number;
	};
</script>

<div class="app fixed flex h-screen w-screen">
	<SidebarNavigation totalPosts={data.totalPosts} />

	<main class="w-full">
		<TopNavigation class="h-20 w-full" />
		<div class="h-[calc(100%-8em)] w-full overflow-auto p-6 bg-gray-100">
			<div class="p-6 bg-white w-full h-full overflow-auto">
				<slot />
			</div>
		</div>
		<Footer class="h-12 w-full" />
	</main> 
</div>

<style>
</style>
