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
			height: 220px;
			// padding: 1.5em 1.5em;
			background-color: gray;

			display: flex;
			align-items: center;

			.img-wrapper {
				border: 2px solid $white-t6;
				border-radius: .3em;
				width: 9em;
				height: 11em;
				padding: .5em;
				z-index: 1;
				margin-left: 2em;
				
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
				bottom: 1em;
				z-index: 1;
			}

			.type {
				position: absolute;
				color: #fff;
				font-size: 15px;
				left: 14em;
				bottom: .6em;
				z-index: 1;
			}

			.banner {
				position: absolute;
				width: 100%;
				height: 100%;

				.cover {
					position: absolute;
					width: 100%;
					height: 100%;
					backdrop-filter: blur(6px);
				}
				img {
					width: 100%;
					height: 100%;
					z-index: 0;
					object-fit: cover;
				}
			}
		}
		
		.first {
			z-index: 1;
			.patients {
			}
			.actu {
				.list {
					overflow-y: scroll;
					.line {
						display: grid;
						grid-template-columns: 80% 20%;
						border-top: 1px solid #000;
						padding: 2em .5em;
	
						&:nth-child(odd) {
							background: rgb(230, 230, 230);
						}
	
					}
				}
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
	$: console.log(ClientName, $userType);

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
			<img src="sarah2.jpg" alt="sarah">
		</div>
		<div class="name">{ClientName[$userType]}</div>
		<div class="type">Cardiologue</div>
		<div class="banner">
			<div class="cover"></div>
			<img src="banner_profile1.png" alt="banner	">
		</div>
	</div>
	<div class="first flex">
		<div class="container patients">
			<h2>La liste des patients</h2>
			<div class="list"></div>
		</div>
		<div class="container actu">
			<h2>Actualités BMS</h2>
			<div class="list">
				<div class="line">
					<a href="https://investors.bms.com/iframes/press-releases/press-release-details/2022/Bristol-Myers-Squibb-Data-at-ASH-2022-Highlight-Innovative-Therapeutic-Platforms-Across-a-Range-of-Blood-Diseases/default.aspx">Bristol Myers Squibb Data at ASH 2022 Highlight Innovative Therapeutic Platforms Across a Range of Blood Diseases</a>
					<p>11/21/2022</p>
				</div>
				<div class="line">
					<a href="https://investors.bms.com/iframes/press-releases/press-release-details/2022/Bristol-Myers-Squibb-to-Participate-in-the-Wolfe-Research-Healthcare-Conference/default.aspx">Bristol Myers Squibb to Participate in the Wolfe Research Healthcare Conference</a>
					<p>11/09/2022</p>
				</div>
				<div class="line">
					<a href="https://investors.bms.com/iframes/press-releases/press-release-details/2022/Data-Reinforcing-Impact-of-Bristol-Myers-Squibb-Cardiovascular-Portfolio-to-be-Presented-at-American-Heart-Association-Scientific-Sessions-2022/default.aspx">
						Data Reinforcing Impact of Bristol Myers Squibb Cardiovascular Portfolio to be Presented at American Heart Association Scientific Sessions 2022</a>
					<p>11/02/2022</p>
				</div>
				<div class="line">
					<a href="https://investors.bms.com/iframes/press-releases/press-release-details/2022/Bristol-Myers-Squibb-Announces-Positive-Topline-Results-of-Phase-3-COMMANDS-Trial/default.aspx">Bristol Myers Squibb Announces Positive Topline Results of Phase 3 COMMANDS Trial</a>
					<p>10/31/2022</p>
				</div>
				<div class="line">
					<a href="https://investors.bms.com/iframes/press-releases/press-release-details/2022/New-Zeposia-ozanimod-Data-Highlight-COVID-19-Outcomes-and-Preservation-of-Long-Term-Cognitive-Function-from-Separate-Analyses-in-Patients-with-Relapsing-Forms-of-Multiple-Sclerosis/default.aspx">New Zeposia (ozanimod) Data Highlight COVID-19 Outcomes and Preservation of Long-Term Cognitive Function from Separate Analyses in Patients with Relapsing Forms of Multiple Sclerosis</a>
					<p>10/26/2022</p>
				</div>
				<div class="line">
					<a href="https://investors.bms.com/iframes/press-releases/press-release-details/2022/Bristol-Myers-Squibb-Reports-Third-Quarter-Financial-Results-for-2022/default.aspx">Bristol Myers Squibb Reports Third Quarter Financial Results for 2022</a>
					<p>10/25/2022</p>
				</div>
			</div>
		</div>
		<div class="container"></div>
	</div>
	<div class="second flex">
		<div class="container forum">
			
		</div>
		
	</div>
</div>
{/if}
{/if}