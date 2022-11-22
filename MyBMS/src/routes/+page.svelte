<style lang="scss">
	.index {
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
		color: #000;

		gap: 2em;
		user-select: none;

		.slogan {
			font-size: 30px;
		}
	
		.login {
			width: 450px;
			height: 300px;
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

	.client {
		padding-top: 60px;
		width: 100%;
		height: 100%;

		.profile {
			position: relative;
			width: 100%;
			height: 180px;
			background-color: gray;
			padding: 1em 1.5em;

			.img-wrapper {
				border: 2px solid $white-t6;
				border-radius: .3em;
				width: 9em;
				height: 100%;
			}

			.name {
				position: absolute;
				color: #fff;
				font-size: 26px;
				left: 7.2em;
				bottom: .5em;
			}
		}
	}
	

</style>

<script>
    import { goto } from "$app/navigation";
	import { UserType, ClientName } from "$lib/store.js";
    import { onMount } from "svelte";

	let userType = 0;
	let id = "";
	let password = "";

	onMount(() => {
		let cookie = document.cookie;
		if (cookie)
			userType = parseInt(cookie.split('=')[1]);
	});

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#if userType == UserType.Unknown}
<div class="flex index">
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
					console.log(password);
					if (id == "doctor" && password == "mybmsdoctor")
						document.cookie = "userType=" + UserType.Doctor;
					else if (id == "patient" && password == "mybmspatient")
						document.cookie = "userType=" + UserType.Patient;
					window.location.reload();
				}}>Connex.</button>
			<a href="/">S'enregistrer</a>
			</div>
		</div>
		<div class="etc-box">
			<a href="/">Mot de passe oublié?</a>
		</div>
	</div>
</div>
{:else}
<div class="vflex client">
	<div class="profile">
		<div class="img-wrapper">
			<img src="" alt="">
		</div>
		<div class="name">{ClientName[userType]}</div>
	</div>
	
	<button on:click={() => {
		document.cookie = 'userType=; Max-Age=-99999999;';  
		window.location.reload();
	}}>Logout</button>
	<div class="actu">
		<h2>Actualités</h2>
	</div>
</div>
{/if}
