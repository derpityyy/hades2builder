<script>
	import {slide} from 'svelte/transition'
	let isOpenAttack = false
	let isOpenSpecial = false
	let isOpenCast = false
	let isOpenSprint = false
	let isOpenRegen = false

	const mainGods = ["None", "Zeus", "Hera", "Poseidon", "Demeter", "Apollo", "Aphrodite", "Hephaestus", "Hestia"]

	let attackTrait = "None"
	let specialTrait = "None"
	let castTrait = "None"
	let sprintTrait = "None"
	let regenTrait = "None"

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
</script>

<svelte:head>
	<title>Hades 2 Builder</title>
	<meta name="description" content="Custom build creator for Hades 2" />
</svelte:head>

<body>
	<div class="main-traits">
		<div class="slot-menu">
			<button on:click={toggleOpenAttack}>
				<img src={genImagePath("attack", attackTrait)}>
			</button>
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
	</div>
</body>

<style>
	body{
		background: rgb(31, 31, 45);
		width: 100%;
		height: 100vh;
		margin: 0;
		padding: 0;
	}
	h1{
		font-family: Helvetica;
		color: rgb(223, 239, 255);
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
		width: 100px;
	}
	.main-traits {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		
		justify-content: space-evenly;
		height: 75px;
		width: 750px;
		padding: 5px;
		border: 2px;
		border-style: solid;
		border-radius: 10px;
		border-color: rgb(120, 120, 197);
		list-style-type: none;
		background: rgb(56, 56, 93);
	}
</style>
