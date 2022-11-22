<style lang="scss">
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

<Header />
<main>
	<slot />
</main>
<Footer />

