<style lang="scss">
	.app {
		position: relative;
		font-family: 'urbanist';
		width: 100vw;
		max-width: 100vw;
		min-height: 100vh;
	}
	
	main {
		background-color: $mauve;
	}
</style>

<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="app">
	<Header/>
	<main><slot /></main>
	<Footer />
</div>