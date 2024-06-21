<script>
	import {slide} from 'svelte/transition'
	let isOpenAttack = false
	let isOpenSpecial = false
	let isOpenCast = false
	let isOpenSprint = false
	let isOpenGain = false

	const mainGods = ["None", "Zeus", "Hera", "Poseidon", "Demeter", "Apollo", "Aphrodite", "Hephaestus", "Hestia"]

	let attackTrait = "None"
	let specialTrait = "None"
	let castTrait = "None"
	let sprintTrait = "None"
	let gainTrait = "None"
	/**
	 * @param {string} type
	 * @param {string} god
	 */
	function mainTraitName(type, god){
		if (god == "None"){
			return god
		}
		return "Filler Text"
	}
	/**
	 * @param {string} type
	 * @param {string} value
	 */
	function genImagePath(type, value){
		return "/" + type + "/" + value + ".webp"
	}

	function toggleOpenAttack(){
		isOpenAttack = !isOpenAttack
	}
	function toggleOpenSpecial(){
		isOpenSpecial = !isOpenSpecial
	}
	function toggleOpenCast(){
		isOpenCast = !isOpenCast
	}
	function toggleOpenSprint(){
		isOpenSprint = !isOpenSprint
	}
	function toggleOpenGain(){
		isOpenGain = !isOpenGain
	}

	const mainTraitElements = {
		attack: {
			"None": "None",
			"Apollo": "Air",
			"Zeus": "Air",
			"Aphrodite": "Water",
			"Demeter": "Water",
			"Poseidon": "Water",
			"Hera": "Earth",
			"Hephaestus": "Fire",
			"Hestia": "Fire"
		}
	}


	/**
	 * @param {string} value
	 * @param {string} type
	 */
	function mainTraitElementImagePath(type, value){
		let element = mainTraitElements[type][value]
		return "/element/" + element + ".webp"
	}
</script>

<svelte:head>
	<title>Hades 2 Builder</title>
	<meta name="description" content="Custom build creator for Hades 2" />
</svelte:head>

<!-- svelte-ignore a11y-missing-attribute -->
<body>
	<div class="container">

		<h1>Hades 2 Build Creator</h1>

		<div class="main-traits">
			<div class="slot-menu">
				<div class="trait-element">
					<button class="trait-container" on:click={toggleOpenAttack}>
					
						<img class="trait-image" src={genImagePath("attack", attackTrait)}>
					</button>
					<img class="element" src={mainTraitElementImagePath("attack", attackTrait)}>
				</div>
				<h5>{mainTraitName("attack", attackTrait)}</h5>
				{#if isOpenAttack}
					<ul transition:slide>
						{#each mainGods as option}
							<li>
								<div class="trait-element">
									<button class="trait-container" on:click = {toggleOpenAttack} on:click = {() => attackTrait = option}>
										<img class="trait-image" src={genImagePath("attack", option)}>
									</button>
									<img class="element" src={mainTraitElementImagePath("attack", option)}>
								</div>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
			<div class="slot-menu">
				<div class="trait-element">
					<button class="trait-container" on:click={toggleOpenSpecial}>
						<img class="trait-image" src={genImagePath("special", specialTrait)}>
					</button>
					<img class="element" src={genImagePath("special", specialTrait)}>
				</div>
				<h5>{mainTraitName("special", specialTrait)}</h5>
				{#if isOpenSpecial}
					<ul transition:slide>
						{#each mainGods as option}
							<li>
								<div class="trait-element">
									<button class="trait-container" on:click = {toggleOpenSpecial} on:click = {() => specialTrait = option}>
										<img class="trait-image" src={genImagePath("special", option)}>
									</button>
									<img class="element" src={genImagePath("special", option)}>
								</div>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
			<div class="slot-menu">
				<div class="trait-element">
					<button class="trait-container" on:click={toggleOpenCast}>
						<img class="trait-image" src={genImagePath("cast", castTrait)}>
					</button>
					<img class="element" src={genImagePath("cast", castTrait)}>
				</div>
				<h5>{mainTraitName("cast", castTrait)}</h5>
				{#if isOpenCast}
					<ul transition:slide>
						{#each mainGods as option}
							<li>
								<div class="trait-element">
									<button class="trait-container" on:click = {toggleOpenCast} on:click = {() => castTrait = option}>
										<img class="trait-image" src={genImagePath("cast", option)}>
									</button>
									<img class="element" src={genImagePath("cast", option)}>
								</div>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
			<div class="slot-menu">
				<div class="trait-element">
					<button class="trait-container" on:click={toggleOpenSprint}>
						<img class="trait-image" src={genImagePath("sprint", sprintTrait)}>
					</button>
					<img class="element" src={genImagePath("sprint", sprintTrait)}>
				</div>
				<h5>{mainTraitName("sprint", sprintTrait)}</h5>
				{#if isOpenSprint}
					<ul transition:slide>
						{#each mainGods as option}
							<li>
								<div class="trait-element">
									<button class="trait-container" on:click = {toggleOpenSprint} on:click = {() => sprintTrait = option}>
										<img class="trait-image" src={genImagePath("sprint", option)}>
									</button>
									<img class="element" src={genImagePath("sprint", option)}>
								</div>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
			<div class="slot-menu">
				<div class="trait-element">
					<button class="trait-container" on:click={toggleOpenGain}>
						<img class="trait-image" src={genImagePath("gain", gainTrait)}>
					</button>
					<img class="element" src={genImagePath("gain", gainTrait)}>
				</div>
				<h5>{mainTraitName("gain", gainTrait)}</h5>
				{#if isOpenGain}
					<ul transition:slide>
						{#each mainGods as option}
							<li>
								<div class="trait-element">
									<button class="trait-container" on:click = {toggleOpenGain} on:click = {() => gainTrait = option}>
										<img class="trait-image" src={genImagePath("gain", option)}>
									</button>
									<img class="element" src={genImagePath("gain", option)}>
								</div>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	</div>
</body>

<style>
	body{
		width: 100%;
		height: 100vh;
		margin: 0;
		padding: 0;
	}
	h1{
		font-family: "Helvetica";
		font-weight: 750;
		color: rgb(223, 239, 255);
	}
	h5{
		font-family: Helvetica;
		color: rgb(223, 239, 255);
		margin: 0;
	}
	button{
		background:transparent;
		border: 0;
		padding: 0;
		height: 75px;
		width: 75px;
	}
	.trait-element{
		position: relative;
		height: 75px;
		width: 125px;
		margin-top: 10px;
	}
	.trait-image{
		height: 75px;
		width: 75px;
	}
	.trait-container{
		position: absolute;
		left: 25px;
	}
	.element {
		height: 40px;
		width: 40px;
		position: absolute;
		left: 75px;
		top: -10px;
		z-index: 1;
	}
	li {
		height: 75px;
		width: 125px;	
		padding-top: 5px;
		padding-bottom: 5px;
		align-self: center;
	}
	ul{
		padding: 0;
		padding-top: 10px;
		padding-bottom: 15px;
		border: 2px;
		border-style: solid;
		border-radius: 10px;
		border-color: rgb(120, 120, 197);
		list-style-type: none;
		background: rgb(56, 56, 93);
		width: 125px;
		align-items: center;
		margin: 0;
		margin-top: 20px;
	}
	.slot-menu {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 20%;
	}
	.main-traits {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		
		justify-content: space-between;
		height: 100px;
		width: 750px;
		padding: 5px;
		border: 2px;
		border-style: solid;
		border-radius: 10px;
		border-color: rgb(120, 120, 197);
		list-style-type: none;
		background: rgb(56, 56, 93);
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		height: 2000px;
		width: 100%;
		background: rgb(31, 31, 45);
	}
</style>
