<style lang="scss">
	.app {
		font-family: 'urbanist';
	}
	
	main {
		height: 100vh;
		width: 100vw;
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