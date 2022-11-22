<style lang="scss">
	.container {
		display: flex;
		justify-content: center;
		align-items: center;

		color: #000;

		gap: 3em;
		user-select: none;
	}

	.slogan {
		font-size: 30px;
	}

	.login {
		width: 30em;
		height: 250px;
		background-color: #fff;

		border-radius: .4em;

		display: flex;
		flex-direction: column;

		justify-content: center;
		align-items: center;

		gap: .2em;

		h2 {
			margin: .5em;
		}
	}

	.flemme {
		float: right;
		p {
			margin-top: .4em;
		}
	}

	.login-box {
		display: flex;
		flex-direction: row;
		gap: .3em;
		padding-left: 2.5em;
	}

	.input-box {
		display: flex;
		flex-direction: column;
		gap: .3em;

		input {
			width: 13em;
			height: 2em;
		}
	}

	.button-box {
		display: flex;
		flex-direction: column;
		padding: 0;
		align-items: center;

		button {
			background-color: $mauve;
			width: 5em;
			height: 100%;
			border: none;
			border-radius: .5em;
			cursor: pointer;
			transition: .2s;

			&:hover {
				background-color: transparentize($main, 0.1);
			}
		}
		a {
			font-size: 14px;
		}
	}

	.etc-box {
		display: flex;
		flex-direction: column;
	}


	

</style>

<script>
    import { goto } from "$app/navigation";

	let id = "";
	let password = "";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="container">
	<div class="slogan">
		<i style="font-size: 40px;">
			"Ensemble, nous pourrons vaincre."
		</i>
	</div>
	<div class="login">
		<h2>Veuillez vous connecter</h2>
		<div class="login-box">
			<div class="flemme">
				<p>Identifiant :</p>
				<p>Mot de passe :</p>
			</div>
			<div class="input-box">
				<input type="text" bind:value={id}>
				<input type="password" bind:value={password}>
			</div>
			<div class="button-box">
				<button on:click={() => {
					goto('/home');
				}}>Connex.</button>
			<a href="/">S'enregistrer</a>
			</div>
		</div>
		<div class="etc-box">
			<a href="/">Mot de passe oublié?</a>
		</div>
	</div>
</div>
