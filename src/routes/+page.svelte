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
</script>

<svelte:head>
	<title>Hades 2 Builder</title>
	<meta name="description" content="Custom build creator for Hades 2" />
</svelte:head>

<body>
	<div class="container">

		<h1>Hades 2 Build Creator</h1>

		<div class="main-traits">
			<div class="slot-menu">
				<button on:click={toggleOpenAttack}>
					<img src={genImagePath("attack", attackTrait)}>
				</button>
				<h5>{mainTraitName("attack", attackTrait)}</h5>
				{#if isOpenAttack}
					<ul transition:slide>
						{#each mainGods as option}
							<li>
								<button on:click = {toggleOpenAttack} on:click = {() => attackTrait = option}>
									<img src={genImagePath("attack", option)}>
								</button>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
			<div class="slot-menu">
				<button on:click={toggleOpenSpecial}>
					<img src={genImagePath("special", specialTrait)}>
				</button>
				<h5>{mainTraitName("special", specialTrait)}</h5>
				{#if isOpenSpecial}
					<ul transition:slide>
						{#each mainGods as option}
							<li>
								<button on:click = {toggleOpenSpecial} on:click = {() => specialTrait = option}>
									<img src={genImagePath("special", option)}>
								</button>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
			<div class="slot-menu">
				<button on:click={toggleOpenCast}>
					<img src={genImagePath("cast", castTrait)}>
				</button>
				<h5>{mainTraitName("cast", castTrait)}</h5>
				{#if isOpenCast}
					<ul transition:slide>
						{#each mainGods as option}
							<li>
								<button on:click = {toggleOpenCast} on:click = {() => castTrait = option}>
									<img src={genImagePath("cast", option)}>
								</button>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
			<div class="slot-menu">
				<button on:click={toggleOpenSprint}>
					<img src={genImagePath("sprint", sprintTrait)}>
				</button>
				<h5>{mainTraitName("sprint", sprintTrait)}</h5>
				{#if isOpenSprint}
					<ul transition:slide>
						{#each mainGods as option}
							<li>
								<button on:click = {toggleOpenSprint} on:click = {() => sprintTrait = option}>
									<img src={genImagePath("sprint", option)}>
								</button>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
			<div class="slot-menu">
				<button on:click={toggleOpenGain}>
					<img src={genImagePath("gain", gainTrait)}>
				</button>
				<h5>{mainTraitName("gain", gainTrait)}</h5>
				{#if isOpenGain}
					<ul transition:slide>
						{#each mainGods as option}
							<li>
								<button on:click = {toggleOpenGain} on:click = {() => gainTrait = option}>
									<img src={genImagePath("gain", option)}>
								</button>
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
	img{
		height: 75px;
		width: 75px;
	}
	li {
		height: 75px;
		width: 75px;	
		padding-top: 5px;
		padding-bottom: 5px;
		align-self: center;
	}
	ul{
		padding: 5px;
		border: 2px;
		border-style: solid;
		border-radius: 10px;
		border-color: rgb(120, 120, 197);
		list-style-type: none;
		background: rgb(56, 56, 93);
		width: 75px;
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
		height: 90px;
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
		height: 1000px;
		width: 100%;
		background: rgb(31, 31, 45);
	}
</style>
