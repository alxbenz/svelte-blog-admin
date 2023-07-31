<script>
	import '../app.postcss';
	import Footer from '../components/Footer.svelte';
	import SidebarNavigation from '../components/SidebarNavigation.svelte';
	import TopNavigation from '../components/TopNavigation.svelte';

	import './styles.css';
</script>

<div class="app fixed flex h-screen w-screen">
	<SidebarNavigation />

	<main class="w-full">
		<TopNavigation class="h-20 w-full" />
		<div class="h-[calc(100%-8em)] w-full overflow-auto p-8 bg-gray-50">
			<slot />
		</div>
		<Footer class="h-12 w-full" />
	</main> 
</div>

<style>
</style>
