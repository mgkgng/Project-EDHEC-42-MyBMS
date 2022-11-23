<style lang="scss">
	.index {
		width: 100%;
		height: 90vh;
		color: #000;

		gap: 3em;
		user-select: none;

		.slogan {
			position: absolute;
			top: 40%;
			left: 10%;
			font-size: 30px;
		}
	
		.login {
			position: absolute;
			top: 30%;
			left: 50%;
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
				bottom: 1.4em;
				z-index: 1;
			}

			.type {
				position: absolute;
				color: #fff;
				font-size: 15px;
				left: 14em;
				bottom: 1em;
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
		
		.func {
			width: 75%;
			min-height: 45em;
			opacity: .8;

			h1 {
				font-family: 'caviar-dreams';
			}

			.patients {
				.list {
					background-color: #fff;
					width: 80%;
					height: 80%;
					overflow-y: scroll;
					border: 2px solid #000;
					font-size: 13px;

					.line {
						text-align: center;
						width: 100%;
						display: grid;
						grid-template-columns: 30% 10% 10% 50%;
						cursor: pointer;

						&:first-child {
							width: 100%;
							border-bottom: 1px solid #000;
						}
						&:not(:first-child):hover { background-color: transparentize(#000, .9); }
					}
				}
			}
			.actu {
				margin-left: 0;
				.list {
					background-color: #fff;
					overflow-y: scroll;
					.line {
						display: grid;
						grid-template-columns: 20% 80%;
						border-top: 1px solid #000;
						padding: 2em .5em;
	
						&:nth-child(odd) {
							background: rgb(230, 230, 230);
						}
					}
				}
			}
			.where {
				margin-left: 0;
				.input {
					width: 80%;
					gap: 0.2em;
					justify-content: center;
					align-items: center;
					margin-bottom: .5em;
					input {
						width: 80%;
						padding-left: .5em;
						height: 2em;
						border-radius: .2em;
					}
					button {
						width: 20%;
						height: 2.5em;
						font-size: 12px;
					}
				}
				.list {
					background-color: #fff;
					border: 2px solid #000;
					width: 80%;
					height: 80%;
					position: relative;
					
					.no-result {
						position: absolute;
						top: 45%;
						left: 35%;
					}
					.line {
						display: grid;
						grid-template-columns: 45% 55%;
					}
				}
			}
			.forum {
				margin-top: 0;
				width: 900px;

				.forum-body {
					width: 90%;
					height: 620px;
					background-color: #fff;
					border: 2px solid #000;
					border-radius: .2em;

					.choice {
						width: 100%;
						height: 2em;
						margin: .8em 0;
						background-color: rgb(230, 230, 230);
						justify-content: center;
						align-items: center;

						select {
							height: 1.5em;
						}
					}
					.content {
						width: 100%;
						height: 563px;
						background-color: rgb(230, 230, 230);
						justify-content: center;
						align-items: center;
						gap: 0;

						h2 {
							background-color: #fff;
							padding: .5em;
							border: 2px solid #000;
						}

						.list {
							background-color: #fff;
							width: 75%;
							height: 70%;
							border: 2px solid #000;
							padding: 0 2em;
							overflow-y: scroll;

							.line {
								width: 100%;
								height: 2em;
								padding: .2em 0;
								border-bottom: 1px solid #000;
								display: grid;
								grid-template-columns: 40% 12% 12% 12% 12% 12%;
							}
						}
					}
				}
			}
		}
	}
</style>

<script>
	import { userType, UserType, ClientName, PatientList, ForumTopics, PharmaciesInCity } from "$lib/store.js";
    import { onMount } from "svelte";

	let id = "";
	let password = "";
	let loaded = false;
	let searchCode = "";
	let searchResult = [];
	let speciality = "";

	function cutTitle(title) {
		return ((title.length > 30) ? title.substr(0, 28) + '...' : title);
	}

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
			<label for="cond1">J’accepte que mes données soit utilisées par BMS</label>
		</div>
		<div class="flex condition">
			<input type="checkbox" id="cond2">
			<label for="cond2">J’accepte d’être informé(e) des nouveautés et de recevoir la Newsletter de BMS</label>
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
			<img src="banner_profile3.png" alt="banner	">
		</div>
	</div>
	<div class="flex func">
		<div class="wrap-container patients">
			<h1>Vos patients MyBMS</h1>
			<div class="list">
				<div class="line">
					<p>Nom</p>
					<p>Age</p>
					<p>Sexe</p>
					<p>Prescriptions</p>
				</div>
				{#each PatientList as patient}
				<div class="line info">
					<p>{patient.name}</p>
					<p>{patient.age}</p>
					<p>{patient.sex}</p>
					<p>{patient.drug.toString().toUpperCase().split(",").join(", ")}</p>
				</div>
				{/each}
			</div>
		</div>
		<div class="wrap-container actu">
			<h1>Actualités BMS</h1>
			<div class="list">
				<div class="line">
					<p>11/21/2022</p>
					<a href="https://investors.bms.com/iframes/press-releases/press-release-details/2022/Bristol-Myers-Squibb-Data-at-ASH-2022-Highlight-Innovative-Therapeutic-Platforms-Across-a-Range-of-Blood-Diseases/default.aspx">Bristol Myers Squibb Data at ASH 2022 Highlight Innovative Therapeutic Platforms Across a Range of Blood Diseases</a>
				</div>
				<div class="line">
					<p>11/09/2022</p>
					<a href="https://investors.bms.com/iframes/press-releases/press-release-details/2022/Bristol-Myers-Squibb-to-Participate-in-the-Wolfe-Research-Healthcare-Conference/default.aspx">Bristol Myers Squibb to Participate in the Wolfe Research Healthcare Conference</a>
				</div>
				<div class="line">
					<p>11/02/2022</p>
					<a href="https://investors.bms.com/iframes/press-releases/press-release-details/2022/Data-Reinforcing-Impact-of-Bristol-Myers-Squibb-Cardiovascular-Portfolio-to-be-Presented-at-American-Heart-Association-Scientific-Sessions-2022/default.aspx">
						Data Reinforcing Impact of Bristol Myers Squibb Cardiovascular Portfolio to be Presented at American Heart Association Scientific Sessions 2022</a>
				</div>
				<div class="line">
					<p>10/31/2022</p>
					<a href="https://investors.bms.com/iframes/press-releases/press-release-details/2022/Bristol-Myers-Squibb-Announces-Positive-Topline-Results-of-Phase-3-COMMANDS-Trial/default.aspx">Bristol Myers Squibb Announces Positive Topline Results of Phase 3 COMMANDS Trial</a>
				</div>
				<div class="line">
					<p>10/26/2022</p>
					<a href="https://investors.bms.com/iframes/press-releases/press-release-details/2022/New-Zeposia-ozanimod-Data-Highlight-COVID-19-Outcomes-and-Preservation-of-Long-Term-Cognitive-Function-from-Separate-Analyses-in-Patients-with-Relapsing-Forms-of-Multiple-Sclerosis/default.aspx">New Zeposia (ozanimod) Data Highlight COVID-19 Outcomes and Preservation of Long-Term Cognitive Function from Separate Analyses in Patients with Relapsing Forms of Multiple Sclerosis</a>
				</div>
				<div class="line">
					<p>10/25/2022</p>
					<a href="https://investors.bms.com/iframes/press-releases/press-release-details/2022/Bristol-Myers-Squibb-Reports-Third-Quarter-Financial-Results-for-2022/default.aspx">Bristol Myers Squibb Reports Third Quarter Financial Results for 2022</a>
				</div>
			</div>
		</div>
		<div class="wrap-container where">
			<h1>Où trouver nos produits</h1>
			<div class="flex input">
				<input type="text" placeholder="Code postal" bind:value={searchCode}>
				<button on:click={() => {
					if (PharmaciesInCity.has(searchCode))
						searchResult = PharmaciesInCity.get(searchCode);
				}}>Recherche</button>
			</div>
			<div class="list">
				{#if !searchResult.length}
				<div class="no-result">Aucun résultat</div>
				{:else}
				<div class="line">
					<p>Nom</p>
					<p>address</p>
				</div>
				{#each searchResult as result}
				<div class="line">
					<p>{result.name}</p>
					<p>{result.address}</p>
				</div>
				{/each}
				{/if}
			</div>
		</div>
	</div>
	<div class="flex func">
		<div class="wrap-container forum">
			<h1>Forum</h1>
			<div class="forum-body">
				<div class="flex choice">
					<p>Sélectionnez la spécialité:</p>
					<select>
						<option value="Option 1">Option 1</option>
						<option value="Option 2">Option 2</option>
						<option value="Option 3">Option 3</option>
						<option value="Option 4">Option 4</option>
						<option value="Option 5">Option 5</option>
						<option value="Option 6">Option that has too long of a value to fit</option>
					</select>
				</div>
				<div class="vflex content">
					<h2>Spécialité {speciality}</h2>
					<div class="list">
						<div class="line" style="font-size: 13px;">
							<p>Sujet</p>
							<p>Auteur</p>
							<p>Likes</p>
							<p>Cmts</p>
							<p>Vues</p>
							<p>Date de Màj</p>
						</div>
						{#each ForumTopics as topic}
						<div class="line">
							<p>{cutTitle(topic.title)}</p>
							<p>{topic.author}</p>
							<p>{topic.like}</p>
							<p>{topic.commentNb}</p>
							<p>{topic.visitNb}</p>
							<p>{topic.date}</p>
						</div>
						{/each}
						<div></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
{/if}
{/if}