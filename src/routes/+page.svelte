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

	const mainTraitNames = {
		attack: {
			Zeus: "Heaven Strike",
			Hera: "Sworn Strike",
			Poseidon: "Wave Strike",
			Demeter: "Ice Strike",
			Apollo: "Nova Strike",
			Aphrodite: "Flutter Strike",
			Hephaestus: "Volcanic Strike",
			Hestia: "Flame Strike"
		},
		special: {
			Zeus: "Heaven Flourish",
			Hera: "Sworn Flourish",
			Poseidon: "Wave Flourish",
			Demeter: "Ice Flourish",
			Apollo: "Nova Flourish",
			Aphrodite: "Flutter Flourish",
			Hephaestus: "Volcanic Flourish",
			Hestia: "Flame Flourish"
		},
		cast: {
			Zeus: "Storm Ring",
			Hera: "Engagement Ring",
			Poseidon: "Geyser Ring",
			Demeter: "Arctic Ring",
			Apollo: "Solar Ring",
			Aphrodite: "Rapture Ring",
			Hephaestus: "Anvil Ring",
			Hestia: "Smolder Ring"
		},
		sprint: {
			Zeus: "Thunder Sprint",
			Hera: "Nexus Sprint",
			Poseidon: "Breaker Sprint",
			Demeter: "Frigid Sprint",
			Apollo: "Blinding Sprint",
			Aphrodite: "Passion Dash",
			Hephaestus: "Smithy Sprint",
			Hestia: "Soot Sprint"
		},
		gain: {
			Zeus: "Ionic Gain",
			Hera: "Born Gain",
			Poseidon: "Fluid Gain",
			Demeter: "Tranquil Gain",
			Apollo: "Lucid Gain",
			Aphrodite: "Glamour Gain",
			Hephaestus: "Fixed Gain",
			Hestia: "Hearth Gain"
		}
	}
	/**
	 * @param {string} type
	 * @param {string} god
	 */
	function mainTraitName(type, god){
		if (god == "None"){
			return god
		}
		let traitName = mainTraitNames[type][god]
		return traitName
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
			Apollo: "Air",
			Zeus: "Air",
			Aphrodite: "Water",
			Demeter: "Water",
			Poseidon: "Water",
			Hera: "Earth",
			Hephaestus: "Fire",
			Hestia: "Fire"
		},
		special: {
			Apollo: "Air",
			Zeus: "Air",
			Aphrodite: "Water",
			Demeter: "Water",
			Poseidon: "Water",
			Hera: "Earth",
			Hephaestus: "Fire",
			Hestia: "Fire"
		},
		cast: {
			Apollo: "Fire",
			Zeus: "Air",
			Aphrodite: "Water",
			Demeter: "Earth",
			Poseidon: "Water",
			Hera: "Earth",
			Hephaestus: "Earth",
			Hestia: "Fire"
		},
		sprint: {
			Apollo: "Fire",
			Zeus: "Air",
			Aphrodite: "Water",
			Demeter: "Water",
			Poseidon: "Water",
			Hera: "Earth",
			Hephaestus: "Fire",
			Hestia: "Fire"
		},
		gain: {
			Apollo: "Air",
			Zeus: "Air",
			Aphrodite: "Air",
			Demeter: "Earth",
			Poseidon: "Water",
			Hera: "Earth",
			Hephaestus: "Earth",
			Hestia: "Fire"
		}
	}


	/**
	 * @param {string} value
	 * @param {string} type
	 */
	function mainTraitElementImagePath(type, value){
		if (value == "None") {
			return "/element/None.webp"
		}
		let element = mainTraitElements[type][value]
		return "/element/" + element + ".webp"
	}

	let keepsake = "None"
	const keepsakes = ["None", "Silver_Wheel", "Knuckle_Bones", "Luckier_Tooth", "Ghost_Onion", "Evil_Eye", "Engraved_Pin", "Discordant_Bell", "Gold_Purse", "Metallic_Droplet", "White_Antler", "Moon_Beam", "Cloud_Bangle", "Iridescent_Fan", "Vivid_Sea", "Barley_Sheaf", "Purest_Hope", "Beautiful_Mirror", "Adamant_Shard", "Everlasting_Ember", "Lion_Fang", "Blackened_Fleece", "Silken_Sash", "Aromatic_Phial", "Concave_Stone", "Experimental_Hammer", "Transcendent_Embryo"]
	let isOpenKeepsake = false

	function toggleOpenKeepsake(){
		isOpenKeepsake = !isOpenKeepsake
	}
	function keepsakeToName(keepsake){
		return keepsake.replace("_", " ")
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

		<div class="main-traits" id="top-traits">
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={toggleOpenAttack}>
					
						<img class="trait-image" src={genImagePath("attack", attackTrait)}>
					</button>
					<img class="element" src={mainTraitElementImagePath("attack", attackTrait)}>
				</div>
				<h5>{mainTraitName("attack", attackTrait)}</h5>
				{#if isOpenAttack}
					<ul transition:slide>
						{#each mainGods as option}
							<li>
								<div class="trait-container">
									<button class="trait-button" on:click = {toggleOpenAttack} on:click = {() => attackTrait = option}>
										<img class="trait-image" src={genImagePath("attack", option)}>
									</button>
									<img class="element" src={mainTraitElementImagePath("attack", option)}>
								</div>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={toggleOpenSpecial}>
						<img class="trait-image" src={genImagePath("special", specialTrait)}>
					</button>
					<img class="element" src={mainTraitElementImagePath("special", specialTrait)}>
				</div>
				<h5>{mainTraitName("special", specialTrait)}</h5>
				{#if isOpenSpecial}
					<ul transition:slide>
						{#each mainGods as option}
							<li>
								<div class="trait-container">
									<button class="trait-button" on:click = {toggleOpenSpecial} on:click = {() => specialTrait = option}>
										<img class="trait-image" src={genImagePath("special", option)}>
									</button>
									<img class="element" src={mainTraitElementImagePath("special", option)}>
								</div>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={toggleOpenCast}>
						<img class="trait-image" src={genImagePath("cast", castTrait)}>
					</button>
					<img class="element" src={mainTraitElementImagePath("cast", castTrait)}>
				</div>
				<h5>{mainTraitName("cast", castTrait)}</h5>
				{#if isOpenCast}
					<ul transition:slide>
						{#each mainGods as option}
							<li>
								<div class="trait-container">
									<button class="trait-button" on:click = {toggleOpenCast} on:click = {() => castTrait = option}>
										<img class="trait-image" src={genImagePath("cast", option)}>
									</button>
									<img class="element" src={mainTraitElementImagePath("cast", option)}>
								</div>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={toggleOpenSprint}>
						<img class="trait-image" src={genImagePath("sprint", sprintTrait)}>
					</button>
					<img class="element" src={mainTraitElementImagePath("sprint", sprintTrait)}>
				</div>
				<h5>{mainTraitName("sprint", sprintTrait)}</h5>
				{#if isOpenSprint}
					<ul transition:slide>
						{#each mainGods as option}
							<li>
								<div class="trait-container">
									<button class="trait-button" on:click = {toggleOpenSprint} on:click = {() => sprintTrait = option}>
										<img class="trait-image" src={genImagePath("sprint", option)}>
									</button>
									<img class="element" src={mainTraitElementImagePath("sprint", option)}>
								</div>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={toggleOpenGain}>
						<img class="trait-image" src={genImagePath("gain", gainTrait)}>
					</button>
					<img class="element" src={mainTraitElementImagePath("gain", gainTrait)}>
				</div>
				<h5>{mainTraitName("gain", gainTrait)}</h5>
				{#if isOpenGain}
					<ul transition:slide>
						{#each mainGods as option}
							<li>
								<div class="trait-container">
									<button class="trait-button" on:click = {toggleOpenGain} on:click = {() => gainTrait = option}>
										<img class="trait-image" src={genImagePath("gain", option)}>
									</button>
									<img class="element" src={mainTraitElementImagePath("gain", option)}>
								</div>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
		<div class="main-traits">
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={toggleOpenKeepsake}>
						<img class="trait-image" src={genImagePath("keepsake", keepsake)}>
					</button>
				</div>
				<h5>{keepsakeToName(keepsake)}</h5>
			</div>
		</div>
		{#if isOpenKeepsake}
			<div class="keepsake-box">
				{#each keepsakes as option}
					<div class="slot">
						<div class="trait-container">
							<button class="trait-button" on:click = {() => keepsake = option} on:click = {toggleOpenKeepsake}>
								<img class="trait-image" src={genImagePath("keepsake", option)}>
							</button>
							
						</div>
						<h5>{keepsakeToName(option)}</h5>
					</div>
				{/each}
			</div>
		{/if}
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
	.trait-container{
		position: relative;
		height: 75px;
		width: 125px;
		margin-top: 10px;
	}
	.trait-image{
		height: 75px;
		width: 75px;
	}
	.trait-button{
		position: absolute;
		left: 25px;
		z-index: 0;
	}
	.element {
		height: 40px;
		width: auto;
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
		margin-top: 17px;
	}
	.slot {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 20%;
	}
	.main-traits {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		flex-wrap: wrap;

		margin-top: 10px;
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
	#top-traits {
		z-index: 1;
	}
	.keepsake-box {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		flex-wrap: wrap;

		margin-top: 10px;
		height: 610px;
		width: 750px;
		padding: 5px;
		padding-bottom: 10px;
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
