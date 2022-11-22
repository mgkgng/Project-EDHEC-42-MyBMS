<style lang="scss">
	header {
		position: absolute;
		width: 100%;
		height: 65px;
		background-color: #fff;
		
		display: flex;
		flex-direction: row;
		z-index: 1;
		
		.logo {
			display: flex;
			align-items: center;
			width: 30em;
			height: 100%;
			padding: .3em .8em;
			gap: .5em;
			user-select: none;
			cursor: pointer;
	
			img {
				max-height: 45px;
				padding-bottom: 1em;
			}
	
			h2 { margin-top: .3em; }
		}

		.logout {
			margin-left: auto;
			width: 3em;
 			order: 2;
			height: 100%;
			display: flex;
			align-items: center;
			font-size: 18px;
			cursor: pointer;
			padding-left: .8em;
			padding-right: .8em;
			color: rgb(23, 23, 23);

			&:hover { background-color: transparentize(#000, .95); }
		}
		// .logout {
		// 	right: .5em;
		// 	top: 1.3em;
		// 	font-size: 15px;

		// }
	}	
</style>

<script>
    import { goto } from "$app/navigation";
	import { userType, UserType } from "$lib/store.js";
	
</script>

<header>
	<div class="flex logo" on:click={() => { window.location.reload(); }}>
		<img src="/logo.png" alt="logo" />
		<h2>Brystol Myers Squibb / MyBMS</h2>
	</div>
	{#if $userType != UserType.Unknown}
	<div class="logout" on:click={() => {
		document.cookie = 'userType=; Max-Age=-99999999;';  
		window.location.reload();
	}}>Logout</div>
	{/if}
</header>