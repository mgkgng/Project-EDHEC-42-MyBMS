<style lang="scss">
	header {
		position: absolute;
		width: 100%;
		height: 60px;
		background-color: #fff;

		padding: .5em .8em;

		font-family: 'urbanist';

		.logo {
			display: flex;
			align-items: center;
			height: 100%;
			padding: .3em .4em;
			gap: .3em;
			user-select: none;
			cursor: pointer;
	
			img {
				height: 80%;
				padding-bottom: 1em;
			}
	
			h2 { margin-top: .3em; }
		}
	}


	.class {
		height: 100%;
	}

	
</style>

<script>
    import { goto } from "$app/navigation";
</script>

<header>
	<div class="flex logo" on:click={() => { goto('/'); }}>
		<img class="logo" src="/logo.png" alt="SvelteKit" />
		<h2>Brystol Myers Squibb / MyBMS</h2>
	</div>
</header>

