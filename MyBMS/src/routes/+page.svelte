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
			border-bottom: 2px solid $white-t6;

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
			width: 100%;
			min-height: 45em;
			opacity: .8;
			align-items: center;
			justify-content: center;

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
			.patient {
				.list {
					background-color: #fff;
					padding: 0 2em;
					border: 2px solid #000;
					border-radius: .3em;
				}
			}

			.info-patient {
				.first {
					width: 100%;
					align-items: center;
					height: 30%;
					gap: .2em;
					.list {
						border: 2px solid #000;
						width: 75%;
						height: 100%;
						padding: 1em 1.5em;
						gap: 0;
						background-color: rgb(230, 230, 230);

						.line {
							width: 100%;
							display: grid;
							height: 2em;
							grid-template-columns: 38% 62%;
						}
						p {
							margin: 0;
						}
					}
				}
				.second {
					.content {
						gap: 0;
						align-items: center;
						background-color: rgb(230, 230, 230);
						border: 2px solid #000;
						
						textarea {
							width: 25em;
							height: 15em;
							resize: none;
							padding: .5em;
						}
	
						.choice {
							gap: 0;
							padding: 0;
							width: 65%;
							height: 1.5em;
							justify-content: center;
							align-items: center;
							border: 1px solid #000;
	
						}
						.choice input[type="radio"] {
							display: none;
						}
	
						.choice label {
							display: inline-block;
							border: 1px solid #000;
							border-left: none;
							width: 1.2em;
							height: 100%;
							padding: 0 .2em;
							text-align: center;
							font-size: 17px;
							cursor: pointer;

							&:last-child {
								border-right: 0;
							}
	
						}
						.choice input[type="radio"]:checked+label { background-color: red; }
	
						button {
							margin: .5em;
							width: 5em;
							height: 3em;
							border-radius: .3em;
							transition: .2s;
	
							&:hover {
								background-color: $main;
							}
						}
					}
					p {
						margin: 1em;
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
					overflow: hidden;

					.no-result {
						position: absolute;
						top: 45%;
						left: 35%;
					}
					.line {
						display: grid;
						grid-template-columns: 45% 55%;
						padding-left: .4em;
						width: 100%;

						&:first-child {
							border-bottom: 1px solid #000;
						}

						p {
							padding: 0 .5em;
							&:first-child {
								border-right: 1px solid #000;
							}
						}
					}
				}
			}
			.forum {
				margin-top: 0;
				width: 1200px;

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
							width: 85%;
							height: 70%;
							border: 2px solid #000;
							padding: 0 2em;
							overflow-y: scroll;

							.line {
								width: 100%;
								border-bottom: 1px solid #000;
								display: grid;
								grid-template-columns: 60% 10% 8% 6% 8% 8%;
								align-items: center;
								gap: 0;
								padding: .5em 0;

								&:hover {
									background-color: rgb(230, 230, 230);	
								}
							}
							.pages {
								margin: 1.5em;
								justify-content: center;
							}
						}
					}
				}
			}
		}
	}
</style>

<script>
	import { userType, UserType, ClientName, PatientList, 
		ForumTopics, PharmaciesInCity, Specialities } from "$lib/store.js";
    import { onMount } from "svelte";

	let id = "";
	let password = "";
	let loaded = false;
	let searchCode = "";
	let searchResult = [];
	let speciality = Specialities[0];
	let patientState;

	function cutTitle(title) {
		return ((title.length > 58) ? title.substr(0, 58) + '...' : title);
	}

	function sortTopics(topics){
		return topics.sort((a, b) => { return b.like - a.like; });
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
		<a class="forgot" href="/">Mot de passe oubli???</a>
		<div class="flex condition">
			<input type="checkbox" id="cond1">
			<label for="cond1">J???accepte que mes donn??es soient utilis??es par BMS</label>
		</div>
		<div class="flex condition">
			<input type="checkbox" id="cond2">
			<label for="cond2">J???accepte d?????tre inform??(e) des nouveaut??s et de recevoir la Newsletter de BMS</label>
		</div>
	</div>
</div>
{:else}
<div class="vflex client">
	<div class="profile">
		<div class="img-wrapper">
			<img src={($userType == UserType.Doctor) ? "sarah2.jpg" : "default_user.png"} alt="user">
		</div>
		{#if $userType == UserType.Doctor}
		<div class="name">{ClientName[$userType]}</div>
		<div class="type">Cardiologue</div>
		{/if}
		<div class="banner">
			<div class="cover"></div>
			<img src="banner_profile3.png" alt="banner	">
		</div>
	</div>
	<div class="flex func">
		{#if $userType == UserType.Doctor}
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
		{:else}
		<div class="wrap-container info-patient">
			<div class="vflex first">
				<h1>Vos informations patient</h1>
				<div class="vflex list">
					<div class="flex line">
						<p>Votre m??decin:</p>
						<p>Mme Sarah Duval</p>
					</div>
					<div class="flex line">
						<p>Mes prescriptions:</p>
						<p>HYDREA, IMNOVID</p>
					</div>
				</div>
			</div>
			<div class="second">
				<h1>Avez-vous besoin d'aide ?</h1>

				<div class="vflex content">
					<p>Avez-vous une question?</p>
					<textarea placeholder="??crivez votre question ici"></textarea>
					<p>Quelle est l'urgence de votre besoin ?</p>
					<div class="flex choice">
						<input type=radio id="stat1" bind:group={patientState} name="patientState" value={0}>
						<label for="stat1">1</label>
						<input type=radio id="stat2" bind:group={patientState} name="patientState" value={1}>
						<label for="stat2">2</label>
						<input type=radio id="stat3" bind:group={patientState} name="patientState" value={2}>
						<label for="stat3">3</label>
						<input type=radio id="stat4" bind:group={patientState} name="patientState" value={3}>
						<label for="stat4">4</label>
						<input type=radio id="stat5" bind:group={patientState} name="patientState" value={4}>
						<label for="stat5">5</label>
						<input type=radio id="stat6" bind:group={patientState} name="patientState" value={5}>
						<label for="stat6">6</label>
						<input type=radio id="stat7" bind:group={patientState} name="patientState" value={6}>
						<label for="stat7">7</label>
						<input type=radio id="stat8" bind:group={patientState} name="patientState" value={7}>
						<label for="stat8">8</label>
						<input type=radio id="stat9" bind:group={patientState} name="patientState" value={8}>
						<label for="stat9">9</label>
						<input type=radio id="stat10" bind:group={patientState} name="patientState" value={9}>
						<label for="stat10">10</label>
					</div>
					<button on:click={() => { window.location.reload(); }}>Envoyer</button>
				</div>
			</div>
		</div>
		{/if}
		<div class="wrap-container actu">
			<h1>Actualit??s BMS</h1>
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
			<h1>{($userType == UserType.Doctor) ? "O?? trouver nos produits" : "O?? trouver vos produits"}</h1>
			<div class="flex input">
				<input type="text" placeholder="Code postal" bind:value={searchCode}>

				<button on:click={() => {
					if (PharmaciesInCity.has(searchCode))
						searchResult = PharmaciesInCity.get(searchCode);
				}}>Recherche</button>
			</div>
			<div class="list">
				{#if !searchResult.length}
				<div class="no-result">Aucun r??sultat</div>
				{:else}
				<div class="line">
					<p>Nom</p>
					<p>Address</p>
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
				{#if $userType == UserType.Doctor}
				<div class="flex choice">
					<p>S??lectionnez la sp??cialit??:</p>
					<select value={speciality}>
						{#each Specialities as spe}
						<option value={spe}>{spe}</option>
						{/each}
					</select>
				</div>
				{/if}
				<div class="vflex content" style={($userType == UserType.Doctor) ? "height: 563px;" : "height: 100%;"}>
					<h2>Forum Sp??cialit?? {speciality}</h2>
					<div class="list">
						<div class="line" style="font-size: 13px;">
							<p>Sujet</p>
							<p>Auteur</p>
							<p>Likes</p>
							<p>Cmts</p>
							<p>Vues</p>
							<p>Date de M??j</p>
						</div>
						{#each sortTopics(ForumTopics) as topic}
						<div class="flex line">
							<a href="">{cutTitle(topic.title)}</a>
							<p>{topic.author}</p>
							<p>{topic.like}</p>
							<p>{topic.commentNb}</p>
							<p>{topic.visitNb}</p>
							<p>{topic.date}</p>
						</div>
						{/each}
						<div class="flex pages">
							<a href="/">&lt</a>
							{#each Array(10) as _, i}
								<a href="/">{i + 1}</a>
							{/each}
							<a href="/">&gt</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
{/if}
{/if}