<script>
	import {slide} from 'svelte/transition'

	const menus = Object.freeze({
		NONE: 0,
		ATTACK: 1,
		SPECIAL: 2,
		CAST: 3,
		SPRINT: 4,
		GAIN: 5,
		KEEPSAKE: 6,
		HEX: 7,
		WEAPON: 8,
		ASPECT: 9,
		FAMILIAR: 10,
		ARTEMIS: 11,
		ARACHNE: 12,
		HADES: 13,
		MEDEA: 14,
		CIRCE: 15,
		ICARUS: 16,
	})
	
	let currentMenu = menus.NONE

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

	function openMenu(newMenu){
		currentMenu = newMenu
	}

	function closeMenu(){
		currentMenu = menus.NONE
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

	let hex = "None"
	const hexes = ["None", "Phase_Shift", "Twilight_Curse", "Lunar_Ray", "Wolf_Howl", "Moon_Water", "Night_Bloom", "Total_Eclipse", "Dark_Side"]

	let weapon = "Witch's_Staff"
	const weapons = ["Witch's_Staff", "Sister_Blades", "Umbral_Flames", "Moonstone_Axe", "Argent_Skull"]

	let aspect = "Melinoë"
	let aspects = ["Melinoë", "Circe", "Momus"]

	function resetAspects(weapon){
		aspect = "Melinoë"
		chosenTraits = chosenTraits.filter(function(a) { return a.split("-")[0] != "Hammer" })

		switch(weapon){
			case "Witch's_Staff":
				aspects = ["Melinoë", "Circe", "Momus"]
				otherTraits["Hammer"] = ["Hammer-Rapid_Thrasher", "Hammer-Melting_Swipe", "Hammer-Wicked_Thrasher", "Hammer-Cross_Cataclysm", "Hammer-Vampiric_Cataclysm", "Hammer-Rapid_Moonshot", "Hammer-Shimmering_Moonshot", "Hammer-Extending_Wallop", "Hammer-Mirrored_Thrasher", "Hammer-Aetheric_Moonburst", "Hammer-Giga_Moonburst", "Hammer-Dual_Moonshot"]
				break
			case "Sister_Blades":
				aspects = ["Melinoë", "Artemis", "Pan"]
				otherTraits["Hammer"] = ["Hammer-Final_Slice", "Hammer-Skulking_Slice", "Hammer-Explosive_Ambush", "Hammer-Sudden_Flurry", "Hammer-Flick_Knives", "Hammer-Escalating_Ambush", "Hammer-Rapid_Onslaught", "Hammer-Melting_Dart", "Hammer-Spiral_Knives", "Hammer-Dancing_Knives", "Hammer-Sureshot_Flurry", "Hammer-Hook_Knives"]
				break
			case "Umbral_Flames":
				aspects = ["Melinoë", "Moros", "Eos"]
				otherTraits["Hammer"] = ["Hammer-Sustained_Spark", "Hammer-Clean_Candle", "Hammer-Inverted_Spark", "Hammer-Triple_Helix", "Hammer-Rising_Coil", "Hammer-Mega_Spark", "Hammer-Origin_Coil", "Hammer-Crushing_Comet", "Hammer-Melting_Coil", "Hammer-Clean_Helix", "Hammer-Leaden_Spark", "Hammer-Split_Spark"]
				break
			case "Moonstone_Axe":
				aspects = ["Melinoë", "Charon", "Thanatos"]
				otherTraits["Hammer"] = ["Hammer-Melting_Shredder", "Hammer-Rapid_Slash", "Hammer-Empowering_Guard", "Hammer-Sudden_Cleaver", "Hammer-Dashing_Heave", "Hammer-Psychic_Whirlwind", "Hammer-Executioner's_Chop", "Hammer-Advancing_Whirlwind", "Hammer-Giga_Cleaver", "Hammer-Furious_Whirlwind", "Hammer-Unyielding_Slash", "Hammer-Hell_Splitter"]
				break
			case "Argent_Skull":
				aspects = ["Melinoë", "Medea", "Persephone"]
				otherTraits["Hammer"] = ["Hammer-Fetching_Array", "Hammer-Bolstered_Array", "Hammer-Looming_Ignition", "Hammer-Twisting_Crash", "Hammer-Mega_Driver", "Hammer-Possessed_Array", "Hammer-Destructive_Array", "Hammer-Melting_Tackle", "Hammer-Sudden_Driver", "Hammer-Full_Salvo", "Hammer-Rocket_Bombard", "Hammer-Colossus_Driver"]
				break
			default:
				aspects = ["Melinoë", "Circe", "Momus"]
		}
	}

	let familiar = "None"
	const familiars = ["None", "Frinos", "Toula"]

	function replaceUnderscore(str){
		return str.replace(/_/g, " ")
	}

	let chosenTraits = []

	let otherTraits = {
		Zeus: ["Zeus-Air_Quality", "Zeus-Divine_Vengeance", "Zeus-Lightning_Lance", "Zeus-Spirit_Surge", "Zeus-Second_Strike", "Zeus-Toasting_Fork", "Zeus-Electric_Overload", "Zeus-Shocking_Loss"],
		Hera: ["Hera-Proper_Upbringing", "Hera-Bridal_Glow", "Hera-Nasty_Comeback", "Hera-Keen_Intuition", "Hera-Family_Trade", "Hera-Hereditary_Bane", "Hera-Dying_Wish", "Hera-Brave_Face"],
		Poseidon: ["Poseidon-Water_Fitness", "Poseidon-Double_Up", "Poseidon-Hydraulic_Might", "Poseidon-Flood_Control", "Poseidon-Sunken_Treasure", "Poseidon-Ocean's_Bounty", "Poseidon-Slippery_Slope", "Poseidon-Crashing_Wave", "Poseidon-King_Tide"],
		Hestia: ["Hestia-Slow_Cooker", "Hestia-Glowing_Coal", "Hestia-Controlled_Burn", "Hestia-Burnt_Offering", "Hestia-Flammable_Coating", "Hestia-Fire_Extinguisher", "Hestia-Natural_Gas", "Hestia-Spontaneous_Combustion", "Hestia-Pyro_Technique"],
		Hephaestus: ["Hephaestus-Martial_Art", "Hephaestus-Molten_Touch", "Hephaestus-Trusty_Shield", "Hephaestus-Tough_Trade", "Hephaestus-Mint_Condition", "Hephaestus-Heavy_Metal", "Hephaestus-Uncanny_Fortitude", "Hephaestus-Furnace_Blast", "Hephaestus-Fine_Tuning"],
		Apollo: ["Apollo-Self_Healing", "Apollo-Super_Nova", "Apollo-Light_Smite", "Apollo-Extra_Dose", "Apollo-Perfect_Image", "Apollo-Back_Burner", "Apollo-Critical_Miss", "Apollo-Dazzling_Display", "Apollo-Exceptional_Talent"],
		Aphrodite: ["Aphrodite-Wispy_Wiles", "Aphrodite-Healthy_Rebound", "Aphrodite-Secret_Crush", "Aphrodite-Life_Affirmation", "Aphrodite-Shameless_Attitude", "Aphrodite-Heart_Breaker", "Aphrodite-Broken_Resolve", "Aphrodite-Sweet_Surrender", "Aphrodite-Ecstatic_Obsession"],
		Demeter: ["Demeter-Coarse_Grit", "Demeter-Rare_Crop", "Demeter-Local_Climate", "Demeter-Gale_Force", "Demeter-Plentiful_Forage", "Demeter-Winter_Coat", "Demeter-Weed_Killer", "Demeter-Cold_Storage", "Demeter-Winter_Harvest"],
		Hermes: ["Hermes-Tall_Order", "Hermes-Greater_Evasion", "Hermes-Saved_Breath", "Hermes-Swift_Flourish", "Hermes-Swift_Strike", "Hermes-Midnight_Oil", "Hermes-Quick_Buck", "Hermes-Hard_Target", "Hermes-Witty_Retort", "Hermes-Nitro_Boost", "Hermes-Mean_Streak", "Hermes-Close_Call"],
		Hammer: ["Hammer-Rapid_Thrasher", "Hammer-Melting_Swipe", "Hammer-Wicked_Thrasher", "Hammer-Cross_Cataclysm", "Hammer-Vampiric_Cataclysm", "Hammer-Rapid_Moonshot", "Hammer-Shimmering_Moonshot", "Hammer-Extending_Wallop", "Hammer-Mirrored_Thrasher", "Hammer-Aetheric_Moonburst", "Hammer-Giga_Moonburst", "Hammer-Dual_Moonshot"],
		Chaos: ["Chaos-Strike", "Chaos-Flourish", "Chaos-Chasm", "Chaos-Soul", "Chaos-Mind", "Chaos-Will", "Chaos-Prowess", "Chaos-Finesse", "Chaos-Revelation", "Chaos-Favor", "Chaos-Affluence", "Chaos-Creation", "Chaos-Talent", "Chaos-Celerity", "Chaos-Blood", "Chaos-Discovery", "Chaos-Chant", "Chaos-Defiance"],
		Duo: ["Duo-Glorious_Disaster", "Duo-Apocalyptic_Storm", "Duo-Thermal_Dynamics", "Duo-Killer_Current", "Duo-Master_Conductor", "Duo-Romantic_Spark", "Duo-King's_Ransom",
		"Duo-Funeral_Pyre", "Duo-Spiteful_Strength", "Duo-Cherished_Heirloom", "Duo-Soul_Mate", "Duo-Golden_Rule", "Duo-Sun_Worshipper", "Duo-Queen's_Ransom",
		"Duo-Island_Getaway", "Duo-Natural_Selection", "Duo-Seismic_Hammer", "Duo-Beach_Ball", "Duo-Scalding_Vapor",
		"Duo-Torrential_Downpour", "Duo-Room_Temperature", "Duo-Freezer_Burn", "Duo-Hearty_Appetite",
		"Duo-Phoenix_Skin", "Duo-Sunny_Disposition", "Duo-Stellar_Slam",
		"Duo-Soft_Caress", "Duo-Burning_Desire",
		"Duo-Chain_Reaction"]
	}


	let Artemis = ["Artemis-None", "Artemis-Pressure_Points", "Artemis-Silver_Streak", "Artemis-First_Blood", "Artemis-Lethal_Snare", "Artemis-Easy_Shot", "Artemis-Support_Fire", "Artemis-Death_Warrant"]
	let Arachne = ["None", "Scarlet_Dress", "Onyx_Dress", "Moonlight_Dress", "Azure_Dress", "Emerald_Dress"]
	let Hades = ["None", "Howling_Soul", "Deep_Dissent", "Last_Grasp", "Unseen_Ire", "Life_Tax", "Old_Grudge"]

	let ArtemisTrait = "Artemis-None"
	let ArachneTrait = "None"
	let HadesTrait = "None"

	
	let Medea = ["None", "Life_From_The_Dead", "Malice_In_Kind", "Wealth_From_The_Dead", "Suffering_on_Sight", "Corrosion_on_Sight", "Enfeeblement_of_Cowards", "Traces_of_Spirit"]
	let Circe = ["None", "Lapis_Lazuli_Insight", "Word_of_Greater_Girth", "Word_of_Smaller_Stature", "Chants_to_the_Bewitched", "Old_Herbal_Remedy", "Red_Citrine_Divination", "Black_Night_Banishment"]
	let Icarus = ["None", "Destructive_Coating", "Protective_Coating", "Hazard_Boom", "Ingenious_Strike", "Ingenious_Flourish", "Explosive_Intent", "Supply_Chain"]

	let MedeaTrait = "None"
	let CirceTrait = "None"
	let IcarusTrait = "None"
	
	function addTrait(trait){
		const source = trait.split("-")[0]
		chosenTraits.push(trait)
		chosenTraits = chosenTraits
		otherTraits[source] = otherTraits[source].filter(function(a) { return a != trait })
	}

	function removeTrait(trait){
		const source = trait.split("-")[0]
		chosenTraits = chosenTraits.filter(function(a) { return a != trait })
		otherTraits[source].push(trait)
		otherTraits = otherTraits
	}

	function isInfusion(trait){
		return ["Zeus-Air_Quality", "Hera-Proper_Upbringing", "Poseidon-Water_Fitness", "Demeter-Coarse_Grit", "Apollo-Self_Healing", "Aphrodite-Wispy_Wiles", "Hephaestus-Martial_Art", "Hestia-Slow_Cooker", "Hermes-Tall_Order"].includes(trait)
	}

	function isLegendary(trait){
		return ["Zeus-Shocking_Loss", "Hera-Brave_Face", "Poseidon-King_Tide", "Demeter-Winter_Harvest", "Apollo-Exceptional_Talent", "Aphrodite-Ecstatic_Obsession", "Hephaestus-Fine_Tuning", "Hestia-Pyro_Technique", "Hermes-Close_Call", "Chaos-Defiance"].includes(trait)
	}

	function isDuo(trait){
		return ["Duo-Glorious_Disaster", "Duo-Apocalyptic_Storm", "Duo-Thermal_Dynamics", "Duo-Killer_Current", "Duo-Master_Conductor", "Duo-Romantic_Spark", "Duo-King's_Ransom",
		"Duo-Funeral_Pyre", "Duo-Spiteful_Strength", "Duo-Cherished_Heirloom", "Duo-Soul_Mate", "Duo-Golden_Rule", "Duo-Sun_Worshipper", "Duo-Queen's_Ransom",
		"Duo-Island_Getaway", "Duo-Natural_Selection", "Duo-Seismic_Hammer", "Duo-Beach_Ball", "Duo-Scalding_Vapor",
		"Duo-Torrential_Downpour", "Duo-Room_Temperature", "Duo-Freezer_Burn", "Duo-Hearty_Appetite",
		"Duo-Phoenix_Skin", "Duo-Sunny_Disposition", "Duo-Stellar_Slam",
		"Duo-Soft_Caress", "Duo-Burning_Desire",
		"Duo-Chain_Reaction"].includes(trait)
	}

	let tabs = ["Zeus", "Hera", "Poseidon", "Demeter", "Apollo", "Aphrodite", "Hephaestus", "Hestia", "Hermes", "Chaos", "Hammer", "Duo"]
	let tab = "Zeus"

	function otherTraitElementImagePath(trait){
		return "/element/" + otherTraitToElement(trait) + ".webp"
	}
	function otherTraitToElement(trait){
		const source = trait.split("-")[0]

		if (isInfusion(trait) || source == "Chaos" || source == "Hammer"){
			return "None"
		}
		if (isDuo(trait)){
			return "Aether"
		}

		switch (source){
			case "Zeus":
				return "Air"
			case "Hera":
				return "Earth"
			case "Poseidon":
				return "Water"
			case "Demeter":
				if (["Demeter-Gale_Force", "Demeter-Cold_Storage"].includes(trait)){
					return "Water"
				}
				return "Earth"
			case "Apollo":
				if(["Apollo-Super_Nova", "Apollo-Perfect_Image", "Apollo-Critical_Miss", "Apollo-Exceptional_Talent"]){
					return "Air"
				}
				return "Fire"
			case "Aphrodite":
				if(["Aphrodite-Healthy_Rebound", "Aphrodite-Life_Affirmation", "Aphrodite-Shameless_Attitude", "Aphrodite-Ecstatic_Obsession"].includes(trait)){
					return "Air"
				}
				return "Water"
			case "Hephaestus":
				if(["Hephaestus-Molten_Touch", "Hephaestus-Tough_Trade", "Hephaestus-Furnace_Blast"].includes(trait)){
					return "Fire"
				}
				return "Earth"
			case "Hestia":
				return "Fire"
			case "Hermes":
				if(trait == "Hermes-Nitro_Boost"){
					return "Fire"
				}
				if(["Hermes-Saved_Breath", "Hermes-Swift_Flourish", "Hermes-Swift_Strike", "Hermes-Witty_Retort"].includes(trait)){
					return "Earth"
				}
				return "Air"
			case "Artemis":
				if(trait == "Artemis-None"){
					return "None"
				}
				if(["Artemis-Silver_Streak", "Artemis-Easy_Shot", "Artemis-Support_Fire"].includes(trait)){
					return "Air"
				}
				return "Earth"
			default:
				return "None"
		}
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
		<h5>Created by derpity</h5>
		<h5>Please contact me on discord if you have ideas for additions or high resolution image files!</h5>

		//main traits, weapon, aspect, keepsake, familiar, hex
		<div class="trait-box">
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={() => openMenu(menus.ATTACK)}>
						<img class="trait-image" src={genImagePath("attack", attackTrait)}>
					</button>
					<img class="element" src={mainTraitElementImagePath("attack", attackTrait)}>
				</div>
				<h5>{mainTraitName("attack", attackTrait)}</h5>
			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={() => openMenu(menus.SPECIAL)}>
						<img class="trait-image" src={genImagePath("special", specialTrait)}>
					</button>
					<img class="element" src={mainTraitElementImagePath("special", specialTrait)}>
				</div>
				<h5>{mainTraitName("special", specialTrait)}</h5>
			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={() => openMenu(menus.CAST)}>
						<img class="trait-image" src={genImagePath("cast", castTrait)}>
					</button>
					<img class="element" src={mainTraitElementImagePath("cast", castTrait)}>
				</div>
				<h5>{mainTraitName("cast", castTrait)}</h5>
			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={() => openMenu(menus.SPRINT)}>
						<img class="trait-image" src={genImagePath("sprint", sprintTrait)}>
					</button>
					<img class="element" src={mainTraitElementImagePath("sprint", sprintTrait)}>
				</div>
				<h5>{mainTraitName("sprint", sprintTrait)}</h5>
			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={() => openMenu(menus.GAIN)}>
						<img class="trait-image" src={genImagePath("gain", gainTrait)}>
					</button>
					<img class="element" src={mainTraitElementImagePath("gain", gainTrait)}>
				</div>
				<h5>{mainTraitName("gain", gainTrait)}</h5>
			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={() => openMenu(menus.WEAPON)}>
						<img class="trait-image" src={genImagePath("weapon", weapon)}>
					</button>
				</div>
				<h5>{replaceUnderscore(weapon)}</h5>

			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={() => openMenu(menus.ASPECT)}>
						<img class="trait-image" src={genImagePath(weapon, aspect)}>
					</button>
				</div>
				<h5>{"Aspect of " + aspect}</h5>
			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={() => openMenu(menus.KEEPSAKE)}>
						<img class="trait-image" src={genImagePath("keepsake", keepsake)}>
					</button>
				</div>
				<h5>{replaceUnderscore(keepsake)}</h5>
			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={() => openMenu(menus.FAMILIAR)}>
						<img class="trait-image" src={genImagePath("familiar", familiar)}>
					</button>
				</div>
				<h5>{familiar}</h5>
			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={() => openMenu(menus.HEX)}>
						<img class="trait-image" src={genImagePath("hex", hex)}>
					</button>
				</div>
				<h5>{replaceUnderscore(hex)}</h5>
			</div>
		</div>

		//unique encounter traits
		<div class="trait-box">
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={() => openMenu(menus.ARTEMIS)}>
						<img class="trait-image" src={genImagePath("Artemis", ArtemisTrait)}>
					</button>
					<img class="element" src={otherTraitElementImagePath(ArtemisTrait)}>
				</div>
				<h5>{replaceUnderscore(ArtemisTrait.split("-")[1])}</h5>
			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={() => openMenu(menus.ARACHNE)}>
						<img class="trait-image" src={genImagePath("Arachne", ArachneTrait)}>
					</button>
				</div>
				<h5>{replaceUnderscore(ArachneTrait)}</h5>
			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={() => openMenu(menus.HADES)}>
						<img class="trait-image" src={genImagePath("Hades", HadesTrait)}>
					</button>
				</div>
				<h5>{replaceUnderscore(HadesTrait)}</h5>
			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={() => openMenu(menus.MEDEA)}>
						<img class="trait-image" src={genImagePath("Medea", MedeaTrait)}>
					</button>
				</div>
				<h5>{replaceUnderscore(MedeaTrait)}</h5>
			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={() => openMenu(menus.CIRCE)}>
						<img class="trait-image" src={genImagePath("Circe", CirceTrait)}>
					</button>
				</div>
				<h5>{replaceUnderscore(CirceTrait)}</h5>
			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={() => openMenu(menus.ICARUS)}>
						<img class="trait-image" src={genImagePath("Icarus", IcarusTrait)}>
					</button>
				</div>
				<h5>{replaceUnderscore(IcarusTrait)}</h5>
			</div>
		</div>
		{#if currentMenu == menus.ATTACK}
			<div class="choice-box" transition:slide>
				{#each mainGods as option}
					<div class="slot">
						<div class="trait-container">
							<button class="trait-button" on:click = {closeMenu} on:click = {() => attackTrait = option}>
								<img class="trait-image" src={genImagePath("attack", option)}>
							</button>
							<img class="element" src={mainTraitElementImagePath("attack", option)}>
						</div>
						<h5>{mainTraitName("attack", option)}</h5>
					</div>
				{/each}
			</div>
		{/if}
		{#if currentMenu == menus.SPECIAL}
			<div class="choice-box" transition:slide>
				{#each mainGods as option}
					<div class="slot">
						<div class="trait-container">
							<button class="trait-button" on:click = {closeMenu} on:click = {() => specialTrait = option}>
								<img class="trait-image" src={genImagePath("special", option)}>
							</button>
							<img class="element" src={mainTraitElementImagePath("special", option)}>
						</div>
						<h5>{mainTraitName("special", option)}</h5>
					</div>
				{/each}
			</div>
		{/if}
		{#if currentMenu == menus.CAST}
			<div class="choice-box" transition:slide>
				{#each mainGods as option}
					<div class="slot">
						<div class="trait-container">
							<button class="trait-button" on:click = {closeMenu} on:click = {() => castTrait = option}>
								<img class="trait-image" src={genImagePath("cast", option)}>
							</button>
							<img class="element" src={mainTraitElementImagePath("cast", option)}>
						</div>
						<h5>{mainTraitName("cast", option)}</h5>
					</div>
				{/each}
			</div>
		{/if}
		{#if currentMenu == menus.SPRINT}
			<div class="choice-box" transition:slide>
				{#each mainGods as option}
					<div class="slot">
						<div class="trait-container">
							<button class="trait-button" on:click = {closeMenu} on:click = {() => sprintTrait = option}>
								<img class="trait-image" src={genImagePath("sprint", option)}>
							</button>
							<img class="element" src={mainTraitElementImagePath("sprint", option)}>
						</div>
						<h5>{mainTraitName("sprint", option)}</h5>
					</div>
				{/each}
			</div>
		{/if}
		{#if currentMenu == menus.GAIN}
			<div class="choice-box" transition:slide>
				{#each mainGods as option}
					<div class="slot">
						<div class="trait-container">
							<button class="trait-button" on:click = {closeMenu} on:click = {() => gainTrait = option}>
								<img class="trait-image" src={genImagePath("gain", option)}>
							</button>
							<img class="element" src={mainTraitElementImagePath("gain", option)}>
						</div>
						<h5>{mainTraitName("gain", option)}</h5>
					</div>
				{/each}
			</div>
		{/if}
		{#if currentMenu == menus.WEAPON}
			<div class="choice-box" transition:slide>
				{#each weapons as option}
					<div class="slot">
						<div class="trait-container">
							<button class="trait-button" on:click = {closeMenu} on:click = {() => weapon = option} on:click={() => resetAspects(option)}>
								<img class="trait-image" src={genImagePath("weapon", option)}>
							</button>
						</div>
						<h5>{replaceUnderscore(option)}</h5>
					</div>
				{/each}
			</div>
		{/if}
		{#if currentMenu == menus.ASPECT}
			<div class="choice-box" transition:slide>
				{#each aspects as option}
					<div class="slot">
						<div class="trait-container">
							<button class="trait-button" on:click = {closeMenu} on:click = {() => aspect = option}>
								<img class="trait-image" src={genImagePath(weapon, option)}>
							</button>
						</div>
						<h5>{"Aspect of " + option}</h5>
					</div>
				{/each}
			</div>
		{/if}
		{#if currentMenu == menus.KEEPSAKE}
			<div class="choice-box" transition:slide>
				{#each keepsakes as option}
					<div class="slot">
						<div class="trait-container">
							<button class="trait-button" on:click = {closeMenu} on:click = {() => keepsake = option}>
								<img class="trait-image" src={genImagePath("keepsake", option)}>
							</button>
							
						</div>
						<h5>{replaceUnderscore(option)}</h5>
					</div>
				{/each}
			</div>
		{/if}
		{#if currentMenu == menus.FAMILIAR}
			<div class="choice-box" transition:slide>
				{#each familiars as option}
					<div class="slot">
						<div class="trait-container">
							<button class="trait-button" on:click = {closeMenu} on:click = {() => familiar = option}>
								<img class="trait-image" src={genImagePath("familiar", option)}>
							</button>
						</div>
						<h5>{option}</h5>
					</div>
				{/each}
			</div>
		{/if}
		{#if currentMenu == menus.HEX}
			<div class="choice-box" transition:slide>
				{#each hexes as option}
					<div class="slot">
						<div class="trait-container">
							<button class="trait-button" on:click = {closeMenu} on:click = {() => hex = option}>
								<img class="trait-image" src={genImagePath("hex", option)}>
							</button>
						</div>
						<h5>{replaceUnderscore(option)}</h5>
					</div>
				{/each}
			</div>
		{/if}
		{#if currentMenu == menus.ARTEMIS}
			<div class="choice-box" transition:slide>
				{#each Artemis as option}
					<div class="slot">
						<div class="trait-container">
							<button class="trait-button" on:click = {closeMenu} on:click = {() => ArtemisTrait = option}>
								<img class="trait-image" src={genImagePath("Artemis", option)}>
							</button>
							<img class="element" src={otherTraitElementImagePath(option)}>
						</div>
						<h5>{replaceUnderscore(option.split("-")[1])}</h5>
					</div>
				{/each}
			</div>
		{/if}
		{#if currentMenu == menus.ARACHNE}
			<div class="choice-box" transition:slide>
				{#each Arachne as option}
					<div class="slot">
						<div class="trait-container">
							<button class="trait-button" on:click = {closeMenu} on:click = {() => ArachneTrait = option}>
								<img class="trait-image" src={genImagePath("Arachne", option)}>
							</button>
						</div>
						<h5>{replaceUnderscore(option)}</h5>
					</div>
				{/each}
			</div>
		{/if}
		{#if currentMenu == menus.HADES}
			<div class="choice-box" transition:slide>
				{#each Hades as option}
					<div class="slot">
						<div class="trait-container">
							<button class="trait-button" on:click = {closeMenu} on:click = {() => HadesTrait = option}>
								<img class="trait-image" src={genImagePath("Hades", option)}>
							</button>
						</div>
						<h5>{replaceUnderscore(option)}</h5>
					</div>
				{/each}
			</div>
		{/if}
		{#if currentMenu == menus.MEDEA}
			<div class="choice-box" transition:slide>
				{#each Medea as option}
					<div class="slot">
						<div class="trait-container">
							<button class="trait-button" on:click = {closeMenu} on:click = {() => MedeaTrait = option}>
								<img class="trait-image" src={genImagePath("Medea", option)}>
							</button>
						</div>
						<h5>{replaceUnderscore(option)}</h5>
					</div>
				{/each}
			</div>
		{/if}
		{#if currentMenu == menus.CIRCE}
			<div class="choice-box" transition:slide>
				{#each Circe as option}
					<div class="slot">
						<div class="trait-container">
							<button class="trait-button" on:click = {closeMenu} on:click = {() => CirceTrait = option}>
								<img class="trait-image" src={genImagePath("Circe", option)}>
							</button>
						</div>
						<h5>{replaceUnderscore(option)}</h5>
					</div>
				{/each}
			</div>
		{/if}
		{#if currentMenu == menus.ICARUS}
			<div class="choice-box" transition:slide>
				{#each Icarus as option}
					<div class="slot">
						<div class="trait-container">
							<button class="trait-button" on:click = {closeMenu} on:click = {() => IcarusTrait = option}>
								<img class="trait-image" src={genImagePath("Icarus", option)}>
							</button>
						</div>
						<h5>{replaceUnderscore(option)}</h5>
					</div>
				{/each}
			</div>
		{/if}
		<div class="trait-box">
			{#each chosenTraits as trait}
				<div class="slot">
					<div class="trait-container">
						<button class="trait-button" class:legendary={isLegendary(trait)} class:infusion={isInfusion(trait)} class:duo={isDuo(trait)} on:click={() => removeTrait(trait)}>
							<img class="trait-image" src={genImagePath(trait.split("-")[0], trait)}>
						</button>
						<img class="element" src={otherTraitElementImagePath(trait)}>
					</div>
					<h5>{replaceUnderscore(trait.split("-")[1])}</h5>
				</div>
			{/each}
		</div>
		<div class="tab-menu">
			{#each tabs as option}
				<button class="tab" class:selected-tab={option == tab} on:click={() => tab = option}>
					{option}
				</button>
			{/each}
		</div>
		<div class="trait-menu">
			{#each otherTraits[tab] as trait}
				<div class="slot">
					<div class="trait-container">
						<button class="trait-button" class:legendary={isLegendary(trait)} class:infusion={isInfusion(trait)} class:duo={isDuo(trait)} on:click={() => addTrait(trait)} >
							<img class="trait-image" src={genImagePath(tab, trait)}>
						</button>
						<img class="element" src={otherTraitElementImagePath(trait)}>
					</div>
					<h5>{replaceUnderscore(trait.split("-")[1])}</h5>
				</div>
			{/each}
		</div>
	</div>
</body>

<style>
	body{
		width: auto;
		height: auto;
		margin: 0;
		padding: 0;
		background: rgb(31, 31, 45);
	}
	h1{
		font-family: "Helvetica";
		font-weight: 750;
		color: rgb(223, 239, 255);
		text-align: center;
	}
	h5{
		font-family: Helvetica;
		color: rgb(223, 239, 255);
		margin: 0;
		text-align: center;
	}
	button{
		font-family: "Helvetica";
		background:transparent;
		border: 0;
		padding: 0;
		height: 75px;
		width: 75px;
		cursor: pointer;
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
		border: 3px solid rgb(77, 77, 134);
		border-radius: 25px;
		box-sizing: border-box;
	}
	.legendary .trait-image{
		border-color: #ffd573;
	}
	.duo .trait-image{
		border-color: #52ffc2;
	}
	.infusion .trait-image{
		border-color: #ff0bbd;
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
	.slot {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: max(20%, 100px);
	}
	.trait-box {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		flex-wrap: wrap;

		margin-top: 10px;
		height: auto;
		width: min(750px, 100vw);
		padding: 5px;
		padding-bottom: 10px;
		border: 2px;
		border-style: solid;
		border-radius: 10px;
		border-color: rgb(120, 120, 197);
		list-style-type: none;
		background: rgb(56, 56, 93);
	}
	.choice-box {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		flex-wrap: wrap;

		margin-top: 10px;
		height: auto;
		
		width: min(750px, 100vw);
		padding: 5px;
		padding-bottom: 10px;
		border: 2px;
		border-style: solid;
		border-radius: 10px;
		border-color: rgb(189, 189, 255);
		list-style-type: none;
		background: rgb(56, 56, 93);	
		z-index: 1;
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		height: auto;
		width: 100%;
		padding: 7px;
		
	}
	.tab {
		background: rgb(56, 56, 93);
		width: auto;
		padding-left: 5px;
		padding-right: 5px;
		height: 30px;
		border: 1px solid rgb(120, 120, 197);
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		color: rgb(223, 239, 255);
	}
	.selected-tab{
		border-color: rgb(189, 189, 255);
		border-width: 2px;
	}
	.tab-menu {
		width: min(750px, 100vw);
		margin-top: 10px;
		margin-left: -14px;
	}
	.trait-menu {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		flex-wrap: wrap;

		margin-top: -1px;
		height: auto;
		width: min(750px, 100vw);
		padding: 5px;
		padding-bottom: 10px;
		border: 2px;
		border-style: solid;
		border-radius: 10px;
		border-top-left-radius: 0;
		border-color: rgb(189, 189, 255);
		list-style-type: none;
		background: rgb(56, 56, 93);	
	}
</style>
