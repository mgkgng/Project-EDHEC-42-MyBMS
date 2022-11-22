<style lang="scss">
	footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 50px;
		background-color: #fff;

		display: flex;
		flex-direction: column;
		justify-content: space-around;
		user-select: none;

		.lang {
			padding-left: .8em;

			.choice { cursor: pointer; }
			.selected {
				padding-bottom: .1em;
				border-bottom: 1px solid #6c6c6c;
			}
		}
	}
</style>

<script>
	let langSet = ["English", "Français", "Deutsch", "Español", "Italiano"];
	let langSelected = "Français";
</script>

<footer>
	<div class="flex lang">
		{#each langSet as lang}
		<div class="{(lang != langSelected) ? "choice" : "selected"}" on:click={() => {
			langSelected = lang;
		}}>{lang}</div>
		{/each}
	</div>
</footer>