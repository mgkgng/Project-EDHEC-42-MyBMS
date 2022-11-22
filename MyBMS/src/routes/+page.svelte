<style lang="scss">
	.index {
		width: 100%;
		justify-content: center;
		align-items: center;
		color: #000;

		gap: 1.5em;
		user-select: none;

		.slogan {
			font-size: 30px;
		}
	
		.login {
			width: 450px;
			height: 300px;
			background-color: #fff;
			padding-left: 5em;
			padding-right: 2em;
			border: 2px solid $white-t6;
			border-radius: .4em;
	
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: .2em;

			h2 { padding-left: 3em; }

			.login-box {
				gap: .3em;
				padding: 0 2.5em;
				align-items: center;
				border: 1px solid #000;
				border-radius: .3em;

				.input-name {
					min-width: 120px;
					p { padding-bottom: .1em; }
				}
				.input {
					display: flex;
					flex-direction: column;
					gap: .3em;
			
					input {
						width: 13em;
						height: 2em;
					}
				}
				button {
					background-color: $mauve;
					width: 5em;
					height: 5em;
					border: none;
					border-radius: 50%;
					cursor: pointer;
					transition: .2s;
			
					&:hover {
						background-color: transparentize($main, 0.1);
					}
				}
			}
			.forgot {
				font-size: 14px; 
				padding-left: 10em;
			}
		}
	}

	.client {
		padding-top: 60px;
		width: 100%;
		gap: 0;

		.profile {
			position: relative;
			width: 100%;
			height: 180px;
			background-color: gray;
			padding: 1.5em 1.5em;

			display: flex;
			align-items: center;

			.img-wrapper {
				border: 2px solid $white-t6;
				border-radius: .3em;
				width: 9em;
				height: 11em;
				padding: .5em;
				
				img {
					width: 100%;
					height: 100%;
					border-radius: .2em;
					object-fit: cover;
				}
			}

			.name {
				position: absolute;
				color: #fff;
				font-size: 26px;
				left: 8em;
				bottom: .6em;
			}
		}
		
		.grid1 {
			width: 100%;

			.patients {
			}
		}
	}
</style>

<script>
    import { goto } from "$app/navigation";
	import { userType, UserType, ClientName } from "$lib/store.js";
    import { onMount } from "svelte";

	let id = "";
	let password = "";
	let loaded =false;

	onMount(() => {
		let cookie = document.cookie;
		if (cookie)
			$userType = parseInt(cookie.split('=')[1]);
		loaded = true;
	});

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#if loaded}
{#if $userType == UserType.Unknown}
<div class="flex index">
	<div class="slogan">
		<i style="font-size: 40px;">
			"Ensemble, nous pourrons vaincre."
		</i>
	</div>
	<div class="vflex login">
		<h2>Veuillez vous connecter</h2>
		<div class="flex login-box">
			<div class="input-name">
				<p>Identifiant :</p>
				<p>Mot de passe :</p>
			</div>
			<div class="input">
				<input type="text" bind:value={id}>
				<input type="password" bind:value={password}>
			</div>
			<button on:click={() => {
				if (id == "doctor" && password == "mybmsdoctor")
					document.cookie = "userType=" + UserType.Doctor;
				else if (id == "patient" && password == "mybmspatient")
					document.cookie = "userType=" + UserType.Patient;
				window.location.reload();
			}}>Connex.</button>
		</div>
		<a class="forgot" href="/">Mot de passe oublié?</a>
		<div class="flex condition">
			<input type="checkbox" id="cond1">
			<label for="cond1">J’accepte que mes données soit utilisé par BMS</label>
		</div>
		<div class="flex condition">
			<input type="checkbox" id="cond2">
			<label for="cond2">J’accepte d’être informé des nouveautées et de recevoir la Newsletter de BMS</label>
		</div>
	</div>
</div>
{:else}
<div class="vflex client">
	<div class="profile">
		<div class="img-wrapper">
			<img src="sarah.jpg" alt="sarah">
		</div>
		<div class="name">{ClientName[$userType]}</div>
	</div>
	<div class="flex grid1">
		<div class="container patients">
			<h2>La liste des patients</h2>
			<div class="list"></div>
		</div>
		<div class="container actu">
			<h2>Actualités</h2>
		</div>
	</div>
</div>
{/if}
{/if}