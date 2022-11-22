<style lang="scss">
	header {
		position: absolute;
		width: 100%;
		height: 65px;
		background-color: #fff;
		
		font-family: 'urbanist';

		.logo {
			display: flex;
			align-items: center;
			height: 100%;
			padding: .3em .5em;
			gap: .2em;
			user-select: none;
			cursor: pointer;
	
			img {
				max-height: 45px;
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

