<style lang="scss">
	html {
		height: 100vh;
		width: 100vw;
		margin: 0;
		font-family: 'urbanist';
	}

	body {
		margin: 0;
	}

	.app {
		min-height: 100vh;
		background-color: $background;
	}

</style>

<script>
	import Header from './Header.svelte';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
</div>

