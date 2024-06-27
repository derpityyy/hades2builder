<script>
// @ts-nocheck

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
			Poseidon: "Tidal Ring",
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
		Zeus: ["Zeus-Air_Quality", "Zeus-Divine_Vengeance", "Zeus-Lightning_Lance", "Zeus-Static_Shock", "Zeus-Spirit_Surge", "Zeus-Double_Strike", "Zeus-Toasting_Fork", "Zeus-Electric_Overload", "Zeus-Shocking_Loss"],
		Hera: ["Hera-Proper_Upbringing", "Hera-Bridal_Glow", "Hera-Uncommon_Grace", "Hera-Nasty_Comeback", "Hera-Blood_Line", "Hera-Family_Trade", "Hera-Hereditary_Bane", "Hera-Dying_Wish", "Hera-Brave_Face"],
		Poseidon: ["Poseidon-Water_Fitness", "Poseidon-Double_Up", "Poseidon-Hydraulic_Might", "Poseidon-Flood_Control", "Poseidon-Splash_Fount", "Poseidon-Ocean's_Bounty", "Poseidon-Geyser_Spout","Poseidon-Slippery_Slope", "Poseidon-Splash_Fount", "Poseidon-King_Tide"],
		Hestia: ["Hestia-Slow_Cooker", "Hestia-Glowing_Coal", "Hestia-Controlled_Burn", "Hestia-Burnt_Offering", "Hestia-Flammable_Coating", "Hestia-Fire_Extinguisher", "Hestia-Natural_Gas", "Hestia-Spontaneous_Combustion", "Hestia-Pyro_Technique"],
		Hephaestus: ["Hephaestus-Martial_Art", "Hephaestus-Molten_Touch", "Hephaestus-Trusty_Shield", "Hephaestus-Tough_Trade", "Hephaestus-Mint_Condition", "Hephaestus-Heavy_Metal", "Hephaestus-Uncanny_Fortitude", "Hephaestus-Furnace_Blast", "Hephaestus-Fine_Tuning"],
		Apollo: ["Apollo-Self_Healing", "Apollo-Super_Nova", "Apollo-Light_Smite", "Apollo-Extra_Dose", "Apollo-Perfect_Image", "Apollo-Back_Burner", "Apollo-Prominence_Flare", "Apollo-Dazzling_Display", "Apollo-Exceptional_Talent"],
		Aphrodite: ["Aphrodite-Wispy_Wiles", "Aphrodite-Healthy_Rebound", "Aphrodite-Secret_Crush", "Aphrodite-Life_Affirmation", "Aphrodite-Shameless_Attitude", "Aphrodite-Heart_Breaker", "Aphrodite-Broken_Resolve", "Aphrodite-Sweet_Surrender", "Aphrodite-Ecstatic_Obsession"],
		Demeter: ["Demeter-Frosty_Veneer", "Demeter-Rare_Crop", "Demeter-Local_Climate", "Demeter-Gale_Force", "Demeter-Plentiful_Forage", "Demeter-Winter_Coat", "Demeter-Weed_Killer", "Demeter-Cold_Storage", "Demeter-Winter_Harvest"],
		Hermes: ["Hermes-Tall_Order", "Hermes-Greater_Evasion", "Hermes-Saved_Breath", "Hermes-Swift_Flourish", "Hermes-Swift_Strike", "Hermes-Midnight_Oil", "Hermes-Quick_Buck", "Hermes-Hard_Target", "Hermes-Witty_Retort", "Hermes-Nitro_Boost", "Hermes-Mean_Streak", "Hermes-Close_Call"],
		Hammer: ["Hammer-Rapid_Thrasher", "Hammer-Melting_Swipe", "Hammer-Wicked_Thrasher", "Hammer-Cross_Cataclysm", "Hammer-Vampiric_Cataclysm", "Hammer-Rapid_Moonshot", "Hammer-Shimmering_Moonshot", "Hammer-Extending_Wallop", "Hammer-Mirrored_Thrasher", "Hammer-Aetheric_Moonburst", "Hammer-Giga_Moonburst", "Hammer-Dual_Moonshot"],
		Chaos: ["Chaos-Strike", "Chaos-Flourish", "Chaos-Chasm", "Chaos-Soul", "Chaos-Mind", "Chaos-Will", "Chaos-Prowess", "Chaos-Finesse", "Chaos-Revelation", "Chaos-Favor", "Chaos-Affluence", "Chaos-Creation", "Chaos-Talent", "Chaos-Celerity", "Chaos-Blood", "Chaos-Discovery", "Chaos-Chant", "Chaos-Defiance"],
		Duo: ["Duo-Glorious_Disaster", "Duo-Hail_Storm", "Duo-Thermal_Dynamics", "Duo-Killer_Current", "Duo-Master_Conductor", "Duo-Romantic_Spark", "Duo-King's_Ransom",
		"Duo-Elementary_Particles", "Duo-Spiteful_Strength", "Duo-Cherished_Heirloom", "Duo-Ecstatic_Obsession", "Duo-Golden_Rule", "Duo-Sun_Worshipper", "Duo-Queen's_Ransom",
		"Duo-Island_Getaway", "Duo-Natural_Selection", "Duo-Seismic_Hammer", "Duo-Beach_Ball", "Duo-Scalding_Vapor",
		"Duo-Boreal_Gust", "Duo-Room_Temperature", "Duo-Freezer_Burn", "Duo-Hearty_Appetite",
		"Duo-Phoenix_Skin", "Duo-Sunny_Disposition", "Duo-Rude_Awakening",
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
		return ["Zeus-Air_Quality", "Hera-Proper_Upbringing", "Poseidon-Water_Fitness", "Demeter-Frosty_Veneer", "Apollo-Self_Healing", "Aphrodite-Wispy_Wiles", "Hephaestus-Martial_Art", "Hestia-Slow_Cooker", "Hermes-Tall_Order"].includes(trait)
	}

	function isLegendary(trait){
		return ["Zeus-Shocking_Loss", "Hera-Brave_Face", "Poseidon-King_Tide", "Demeter-Winter_Harvest", "Apollo-Exceptional_Talent", "Aphrodite-Ecstatic_Obsession", "Hephaestus-Fine_Tuning", "Hestia-Pyro_Technique", "Hermes-Close_Call", "Chaos-Defiance"].includes(trait)
	}

	function isDuo(trait){
		return ["Duo-Glorious_Disaster", "Duo-Hail_Storm", "Duo-Thermal_Dynamics", "Duo-Killer_Current", "Duo-Master_Conductor", "Duo-Romantic_Spark", "Duo-King's_Ransom",
		"Duo-Elementary_Particles", "Duo-Spiteful_Strength", "Duo-Cherished_Heirloom", "Duo-Ecstatic_Obsession", "Duo-Golden_Rule", "Duo-Sun_Worshipper", "Duo-Queen's_Ransom",
		"Duo-Island_Getaway", "Duo-Natural_Selection", "Duo-Seismic_Hammer", "Duo-Beach_Ball", "Duo-Scalding_Vapor",
		"Duo-Boreal_Gust", "Duo-Room_Temperature", "Duo-Freezer_Burn", "Duo-Hearty_Appetite",
		"Duo-Phoenix_Skin", "Duo-Sunny_Disposition", "Duo-Rude_Awakening",
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
				if(["Apollo-Super_Nova", "Apollo-Perfect_Image", "Apollo-Exceptional_Talent"]){
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

	let descriptionActive = false
	let description = ''

// <b>0/<span style="color: #4d82ff">0</span>/<span style="color: #8b4dff">0</span>/<span style="color: #ff4d4d">0</span></b>
// <img class="icon" src="">
// <span style="color: #26e6ff"></span> Magick color
// ▸ Ω 

	function showDescription(fullTrait){
		const source = fullTrait.split("-")[0]
		const trait = fullTrait.split("-")[1]
		descriptionActive = true

		switch (source){
			case "None":
				description = ''
				break
			case "Zeus":
				description = {
					Attack: 'Your <b>Attacks</b> inflict <b>Blitz</b>.<br>' + 
					'▸ Blitz Damage:<br>' +
					'<b>80/<span style="color: #4d82ff">120</span>/<span style="color: #8b4dff">160</span>/<span style="color: #ff4d4d">200</span></b>',
					Special: 'Your <b>Specials</b> inflict <b>Blitz</b>.<br>' + 
					'▸ Blitz Damage:<br>' +
					'<b>100/<span style="color: #4d82ff">140</span>/<span style="color: #8b4dff">220</span>/<span style="color: #ff4d4d">200</span></b>',
					Cast: 'Your <b>Casts</b> also causes lightning bolts to repeatedly strike <b>1</b> foe at a time.<br>' + 
					'▸ Blitz Damage <i>(every 0.25 Sec.)</i>:<br>' +
					'<b>20/<span style="color: #4d82ff">30</span>/<span style="color: #8b4dff">40</span>/<span style="color: #ff4d4d">50</span></b>',
					Sprint: 'Your <b>Sprint</b> causes nearby foes to be struck by lightning bolts, which use <span style="color: #26e6ff"><b>3</b> <img class="icon" src="/Icons/Magick.webp"></span> each.<br>' + 
					'▸ Blitz Damage <i>(every 0.15 Sec.)</i>:<br>' +
					'<b>20/<span style="color: #4d82ff">25</span>/<span style="color: #8b4dff">30</span>/<span style="color: #ff4d4d">35</span></b>',
					Gain: 'In each <b>Encounter</b>, an <b>Aether Font</b> appears in the area and restores all <img class="icon" src="/Icons/Magick.webp"> when used.<br>' +
					'▸ Reappearance Time: <br>' +
					'<b>10/<span style="color: #4d82ff">9</span>/<span style="color: #8b4dff">8</span>/<span style="color: #ff4d4d">7</span> Sec.</b>',
					Air_Quality: 'While you have at least <b>5</b> <img class="icon" src="/Icons/Air.webp">, you can never deal less damage than the limit. <br>' +
					'▸ Minimum Damage per Hit:<br>'+
					'<span style="color: #60fa57"><b>30</b></span>',
					Divine_Vengeance: 'After you take damage, your foe is struck by lightning, and again <b>50%</b> of the time.<br>' +
					'▸ Bolt Damage:<br>' + 
					'<b>100</b> (up to: <b>2/<span style="color: #4d82ff">3</span>/<span style="color: #8b4dff">4</span>/<span style="color: #ff4d4d">5</span></b> times)',
					Lightning_Lance: 'Hold <b>Cast</b> to aim where the binding circle appears. Foes within are struck by lightning. <br>' +
					'▸ Lightning Damage:<br>' +
					'<b>50/<span style="color: #4d82ff">70</span>/<span style="color: #8b4dff">90</span>/<span style="color: #ff4d4d">110</span></b>',
					Static_Shock: 'After you enter a <b>Location</b>, <b>Prime <span style="color: #26e6ff">50</span></b> <img class="icon" src="/Icons/Magick.webp"> to make your strikes emit chain-lightning.<br>' +
					'▸ Lightning Damage:<br>' +
					'<b>10/<span style="color: #4d82ff">15</span>/<span style="color: #8b4dff">20</span>/<span style="color: #ff4d4d">25</span></b>',
					Spirit_Surge: 'While you have no more than <span style="color: #26e6ff"><b>10</b></span> <img class="icon" src="/Icons/Magick.webp">, <b>all</b> foes are occasionally struck by lightning.<br>' +
					'▸ Bolt Damage <i>(every 5 Sec.)</i>:<br>' +
					'<b>60/<span style="color: #4d82ff">75</span>/<span style="color: #8b4dff">90</span>/<span style="color: #ff4d4d">105</span></b>',
					Double_Strike: 'Your lightning bolt effects may strike <b>1</b> more time.<br>' +
					'▸ Bonus Strike Chance:<br>' +
					'<b>+10%/<span style="color: #4d82ff">15%</span>/<span style="color: #8b4dff">20%</span>/<span style="color: #ff4d4d">25%</span></b>',
					Toasting_Fork: 'Your <b>Blitz</b> effects deal damage even if they expire without being activated.<br>' +
					'▸ Blitz Expiration Damage:<br>' +
					'<b>75%/<span style="color: #4d82ff">100%</span>/<span style="color: #8b4dff">125%</span>/<span style="color: #ff4d4d">150%</span></b>',
					Electric_Overload: 'Whenever your <b>Blitz</b> effects activate, a bolt of chain-lightning fires from the foe.<br>' +
					'▸ Lightning Damage:<br>' +
					'<b>10/<span style="color: #4d82ff">15</span>/<span style="color: #8b4dff">20</span>/<span style="color: #ff4d4d">25</span></b>',
					Shocking_Loss: 'Whenever you first deal damage to susceptible foes, you may destroy them outright.</b>.<br>' +
					'▸ Instant Destruction Chance:<br>' +
					'<span style="color: #60fa57"><b>20%</b></span>'
				}[trait]
				break
			case "Hera":
				description = {
					Attack: 'Your <b>Attacks</b> deal more damage and inflict <b>Hitch</b>.<br>' +
					'▸ Attack Damage:<br>' + 
					'<b>+50%/<span style="color: #4d82ff">60%</span>/<span style="color: #8b4dff">70%</span>/<span style="color: #ff4d4d">80%</span></b>',
					Special: 'Your <b>Specials</b> deal more damage and inflict <b>Hitch</b>.<br>' +
					'▸ Special Damage:<br>' +
					'<b>+50%/<span style="color: #4d82ff">60%</span>/<span style="color: #8b4dff">70%</span>/<span style="color: #ff4d4d">80%</span></b>',
					Cast: 'Your <b>Casts</b> deal damage and inflict <b>Hitch</b> whenever foes join the <b>Encounter</b>, anywhere!<br>' +
					'▸ On-Spawn Damage:<br>' +
					'<b>50/<span style="color: #4d82ff">75</span>/<span style="color: #8b4dff">100</span>/<span style="color: #ff4d4d">125</span></b>',
					Sprint: 'Your <b>Sprint</b> inflicts <b>Hitch</b> on contact with foes, and deals damage when it does.<br>' +
					'▸ Damage with Hitch:<br>' +
					'<b>60/<span style="color: #4d82ff">90</span>/<span style="color: #8b4dff">120</span>/<span style="color: #ff4d4d">150</span></b>',
					Gain: '<s>you win</s> Whenever you run out of <img class="icon" src="/Icons/Magick.webp">, <b>Prime</b> to restore <b>all</b> <img class="icon" src="/Icons/Magick.webp"> up to the reduced limit.<br>' +
					'▸ Magick Primed:<br>' +
					'<b>20/<span style="color: #4d82ff">18</span>/<span style="color: #8b4dff">16</span>/<span style="color: #ff4d4d">14</span></b>',
					Proper_Upbringing: 'While you have at least <b>3</b> <img class="icon" src="/Icons/Earth.webp">, <b>all</b> your <b>Common Boons</b> gain <b>Rarity</b>.<br>' +
					'▸ Improved Rarity:<br>' +
					'<span style="color: #4d82ff"><b>Rare</b></span>',
					Bridal_Glow: 'Your <b>Boons</b> become <b>Heroic</b>, then lose <b>Rarity</b> every <b>5 Encounters</b>.<br>' +
					'▸ Random Boons Affected:<br>' +
					'<b>2/<span style="color: #4d82ff">3</span>/<span style="color: #8b4dff">4</span>/<span style="color: #ff4d4d">5</span></b>',
					Uncommon_Grace: 'While none of your other <b>Boons</b> are <b>Common</b>, deal more damage.<br>' +
					'▸ Common-Less Bonus Damage:<br>' +
					'<b>+10%/<span style="color: #4d82ff">15%</span>/<span style="color: #8b4dff">20%</span>/<span style="color: #ff4d4d">25%</span></b>',
					Nasty_Comeback: 'After you take damage, inflict your foe with <b>Hitch</b> and deal damage in greater measure.<br>' +
					'▸ Damage Reflected:<br>' +
					'<b>500%/<span style="color: #4d82ff">700%</span>/<span style="color: #8b4dff">1000%</span>/<span style="color: #ff4d4d">1250%</span></b>',
					Blood_Line: 'Your <b>Ω Moves</b> create a rift that strikes foes in front of and behind you, but use <span style="color: #26e6ff"><b>+15</b></span> <img class="icon" src="/Icons/Magick.webp">.<br>' +
					'▸ Rift Damage:<br>' +
					'<b>100/<span style="color: #4d82ff">120</span>/<span style="color: #8b4dff">140</span>/<span style="color: #ff4d4d">160</span></b>',
					Family_Trade: 'Any <b>Sacrifice Boons</b> you choose are stronger. One will be offered as soon as possible.<br>' +
					'▸ Bonus Levels: <br>' +
					'<b>+2/<span style="color: #4d82ff">3</span>/<span style="color: #8b4dff">4</span>/<span style="color: #ff4d4d">5</span></b>',
					Hereditary_Bane: 'Your <b>Hitch</b> effects deal more damage and last <b>+5 Sec.</b><br>' +
					'▸ Hitch Damage:<br>' +
					'<b>+10%/<span style="color: #4d82ff">15%</span>/<span style="color: #8b4dff">20%</span>/<span style="color: #ff4d4d">25%</span></b>',
					Dying_Wish: 'Whenever <b>Hitch</b>-afflicted foes are slain, damage <b>all</b> other <b>Hitch</b>-afflicted foes.<br>' +
					'▸ Hitch Death Damage:<br>' +
					'<b>40/<span style="color: #4d82ff">60</span>/<span style="color: #8b4dff">80</span>/<span style="color: #ff4d4d">100</span></b>',
					Brave_Face: 'Automatically use <img class="icon" src="/Icons/Magick.webp"> to resist up to <b>50%</b>. of any damage.<br>' +
					'▸ Magick Cost per Damage Point:<br>' +
					'<span style="color: #60fa57"><b>5</b></span>'
				}[trait]
				break
			case "Poseidon":
				description = {
					Attack: 'Your <b>Attacks</b> hit foes with a splash that knocks other foes away.<br>' +
					'▸ Splash Damage:<br>' +
					'<b>15/<span style="color: #4d82ff">20</span>/<span style="color: #8b4dff">25</span>/<span style="color: #ff4d4d">30</span></b>',
					Special: 'Your <b>Specials</b> hit foes with a splash that knocks other foes away.<br>' +
					'▸ Splash Damage:<br>' +
					'<b>20/<span style="color: #4d82ff">30</span>/<span style="color: #8b4dff">40</span>/<span style="color: #ff4d4d">50</span></b>',
					Cast: 'Your <b>Casts</b> also immediately hit foes in front of you with a powerful splash.<br>' +
					'▸ Splash Damage:<br>' +
					'<b>90/<span style="color: #4d82ff">135</span>/<span style="color: #8b4dff">180</span>/<span style="color: #ff4d4d">225</span></b>',
					Sprint: 'Your <b>Sprint</b> deals damage on impact and knocks foes away, but uses <span style="color: #26e6ff"><b>5</b></span> <img class="icon" src="/Icons/Magick.webp"> per hit.<br>' +
					'▸ Impact Damage:<br>' +
					'<b>80/<span style="color: #4d82ff">120</span>/<span style="color: #8b4dff">160</span>/<span style="color: #ff4d4d">200</span></b>',
					Gain: 'After you strike foes with your <b>Weapon</b>, a <b>Spirit Bubble</b> may appear.<br>' +
					'▸ Spirit Bubble Chance:<br>' +
					'<b>10%/<span style="color: #4d82ff">12%</span>/<span style="color: #8b4dff">14%</span>/<span style="color: #ff4d4d">16%</span></b>',
					Water_Fitness: 'Gain <img class="icon" src="/Icons/MaxHealth.webp"> for each <img class="icon" src="/Icons/Water.webp"> you have.<br>' +
					'▸ Max Life per Watyer Boon:<br>' +
					'<span style="color: #60fa57"><b>+15</b></span>',
					Double_Up: 'Whenever you claim rewards other than <b>Boons</b>, <img class="icon" src="/Icons/Hammer.webp">, or rare resources, a copy may appear.<br>' +
					'▸ Double Reward Chance:<br>' +
					'<b>20%/<span style="color: #4d82ff">25%</span>/<span style="color: #8b4dff">30%</span>/<span style="color: #ff4d4d">35%</span></b>',
					Hydraulic_Might: 'At the start of each <b>Encounter</b>, your <b>Attacks</b> and <b>Specials</b> are stronger for <b>10 Sec.</b><br>' +
					'▸ Initial Damage Bonus:<br>' +
					'<b>+100%/<span style="color: #4d82ff">133%</span>/<span style="color: #8b4dff">166%</span>/<span style="color: #ff4d4d">200%</span></b>',
					Flood_Control: 'After you enter a <b>Location</b>, <b>Prime</b> <span style="color: #26e6ff"><b>30</b></span> <img class="icon" src="/Icons/Magick.webp"> to reduce any damage you would take.<br>' +
					'▸ Damage Reduction per Hit:<br>' +
					'<b>-2/<span style="color: #4d82ff">3</span>/<span style="color: #8b4dff">4</span>/<span style="color: #ff4d4d">5</span></b>',
					Splash_Fount: 'Whenever you use <b>Ω Moves</b>, create a watery blast near the first foe you damage.<br>' +
					'▸ Delayed Blast Damage:<br>' +
					'<b>50/<span style="color: #4d82ff">70</span>/<span style="color: #8b4dff">90</span>/<span style="color: #ff4d4d">110</span></b>',
					"Ocean's_Bounty": 'Any <b>Minor Finds</b> and <img class="icon" src="/Icons/Gold.webp"> are worth more. Receive <img class="icon" src="/Icons/Gold.webp">, <img class="icon" src="/Icons/MaxHealth.webp">, and sometimes <img class="icon" src="/Icons/Ashes.webp"> and <img class="icon" src="/Icons/Psyche.webp">, now.<br>' +
					'▸ Reward Value:<br>' +
					'<b>+50%/<span style="color: #4d82ff">55%</span>/<span style="color: #8b4dff">60%</span>/<span style="color: #ff4d4d">65%</span></b>',
					Geyser_Spout: 'Your <b>Ω Cast</b> immediately detonates, dealing damage and knocking foes away.<br>' +
					'▸ Omega Cast Damage:<br>' +
					'<b>200/<span style="color: #4d82ff">240</span>/<span style="color: #8b4dff">280</span>/<span style="color: #ff4d4d">320</span></b>',
					Slippery_Slope: 'Your splash effects from <b>Poseidon</b> also inflict <b>Slip</b> on foes.<br>' +
					'▸ Slip Bonus Damage:<br>' +
					'<b>+5%/<span style="color: #4d82ff">10%</span>/<span style="color: #8b4dff">15%</span>/<span style="color: #ff4d4d">20%</span></b>',
					King_Tide: 'Your splash effects from <b>Poseidon</b> are larger and deal bonus damage to <b>Guardians</b>.<br>' +
					'▸ Splash Damage vs. Guardians:<br>' +
					'<span style="color: #60fa57"><b>+200%</b></span>'
				}[trait]
				break
			case "Demeter":
				description = {
					Attack: 'Your <b>Attacks</b> deal more damage and inflict <b>Freeze</b>.<br>' +
					'▸ Attack Damage:<br>' +
					'<b>+30%/<span style="color: #4d82ff">45%</span>/<span style="color: #8b4dff">60%</span>/<span style="color: #ff4d4d">75%</span></b>',
					Special: 'Your <b>Specials</b> now deal more damage and inflict <b>Freeze</b>.<br>' +
					'▸ Special Damage:<br>' +
					'<b>+40%/<span style="color: #4d82ff">60%</span>/<span style="color: #8b4dff">80%</span>/<span style="color: #ff4d4d">100%</span></b>',
					Cast: 'Your <b>Casts</b> repeatedly deal damage in the area and inflict <b>Freeze</b>.<br>' +
					'▸ Special Damage <i>(every 0.5 Sec.)</i>:<br>' +
					'<b>10/<span style="color: #4d82ff">15</span>/<span style="color: #8b4dff">20</span>/<span style="color: #ff4d4d">25</span></b>',
					Sprint: 'Your <b>Sprint</b> forms a <b>Cyclone</b> around you that lingers after you stop.<br>' +
					'▸ Cyclone Damage <i>(every 0.25 Sec.)</i>:<br>' +
					'<b>4/<span style="color: #4d82ff">6</span>/<span style="color: #8b4dff">8</span>/<span style="color: #ff4d4d">10</span></b>',
					Gain: 'After remaining inactive for <b>1 Sec.</b>, rapidly restore <img class="icon" src="/Icons/Magick.webp"> until you act.<br>' +
					'▸ Magick Restoration <i>(every 1 Sec.)</i>:<br>' +
					'<b>40%/<span style="color: #4d82ff">60%</span>/<span style="color: #8b4dff">80%</span>/<span style="color: #ff4d4d">100%</span></b>',
					Frosty_Veneer: 'While you have at least <b>6</b> <img class="icon" src="/Icons/Water.webp">, you cannot take more damage per hit than the limit.<br>' +
					'▸ Max Damage per Hit:<br>' +
					'<span style="color: #60fa57"><b>15</b></span>',
					Rare_Crop: 'Your <b>Boons</b> become <b>Common</b>, then gain <b>Rarity</b> every <b>3 Encounters</b>.<br>' +
					'▸ Random Boons Affected:<br>' +
					'<b>1/<span style="color: #4d82ff">2</span>/<span style="color: #8b4dff">3</span>/<span style="color: #ff4d4d">4</span></b>',
					Local_Climate: 'Your <b>Ω Cast</b> deals bonus damage and follows you, even as you start to <b>Channel</b> it.<br>' +
					'▸ Cast Damage:<br>' +
					'<b>+20%/<span style="color: #4d82ff">30%</span>/<span style="color: #8b4dff">40%</span>/<span style="color: #ff4d4d">50%</span></b>',
					Gale_Force: 'Your <b>Casts</b> also create a <b>Cyclone</b> at the binding circle.<br>' +
					'▸ Cyclone Damage <i>(every 0.25 Sec.)</i>:<br>' +
					'<b>4/<span style="color: #4d82ff">8</span>/<span style="color: #8b4dff">12</span>/<span style="color: #ff4d4d">16</span></b>',
					Plentiful_Forage: 'Whenever you gather plants, seeds, or mushrooms, gain <img class="icon" src="/Icons/MaxHealth.webp">. Receive 1 <img class="icon" src="/Icons/MysterySeed.webp"> now.<br>' +
					'▸ Max Life from Gathering:<br>' +
					'<b>+5/<span style="color: #4d82ff">8</span>/<span style="color: #8b4dff">10</span>/<span style="color: #ff4d4d">13</span></b>',
					Winter_Coat: 'After you enter a <b>Location</b>, <b>Prime</b> a barrier that absorbs <b>1</b> instance of damage.<br>' +
					'▸ Magick Primed:<br>' +
					'<b>20/<span style="color: #4d82ff">15</span>/<span style="color: #8b4dff">10</span>/<span style="color: #ff4d4d">5</span></b>',
					Weed_Killer: 'Your <b>Ω Attack</b> deals more damage, but uses <span style="color: #26e6ff"><b>+10</b></span> <img class="icon" src="/Icons/Magick.webp">.<br>' +
					'▸ Omega Attack Damage:<br>' +
					'<b>+50%/<span style="color: #4d82ff">75%</span>/<span style="color: #8b4dff">100%</span>/<span style="color: #ff4d4d">125%</span></b>',
					Cold_Storage: 'Your <b>Freeze</b> effects last longer.<br>' +
					'▸ Freeze Duration:<br>' +
					'<b>+2/<span style="color: #4d82ff">3</span>/<span style="color: #8b4dff">4</span>/<span style="color: #ff4d4d">5</span> Sec.</b>',
					Winter_Harvest: '<b>Freeze</b>-afflicted foes shatter at <b>10%</b> <img class="icon" src="/Icons/Health.webp">, dealing damage in the area.<br>' +
					'▸ Shatter Area Damage:<br>' +
					'<span style="color: #60fa57"><b>100</b></span>'
				}[trait]
				break
			case "Apollo":
				description = {
					Attack: 'Your <b>Attacks</b> deal more damage in a larger area.<br>' +
					'▸ Attack Damage:<br>' +
					'<b>+40%/<span style="color: #4d82ff">60%</span>/<span style="color: #8b4dff">80%</span>/<span style="color: #ff4d4d">100%</span></b>',
					Special: 'Your <b>Specials</b> deal more damage in a larger area.<br>' +
					'▸ Special Damage:<br>' +
					'<b>+60%/<span style="color: #4d82ff">80%</span>/<span style="color: #8b4dff">100%</span>/<span style="color: #ff4d4d">120%</span></b>',
					Cast: 'Your <b>Casts</b> inflict <b>Daze</b>, and deal a burst of damage before they expire.<br>' +
					'▸ Cast Damage:<br>' +
					'<b>60/<span style="color: #4d82ff">90</span>/<span style="color: #8b4dff">120</span>/<span style="color: #ff4d4d">150</span></b>',
					Sprint: 'Your <b>Sprint</b> is faster and inflicts <b>Daze</b> on nearby foes.<br>' +
					'▸ Sprint Speed:<br>' +
					'<b>+30%/<span style="color: #4d82ff">40%</span>/<span style="color: #8b4dff">50%</span>/<span style="color: #ff4d4d">60%</span></b>',
					Gain: 'If you stand in your <b>Casts</b> when they expire, immediately restore <img class="icon" src="/Icons/Magick.webp">.<br>' +
					'▸ Magick Restored:<br>' +
					'<b>50/<span style="color: #4d82ff">75</span>/<span style="color: #8b4dff">100</span>/<span style="color: #ff4d4d">125</span></b>',
					Self_Healing: 'While you have at least <b>3</b> <img class="icon" src="/Icons/Fire.webp">, whenever you take damage, restore some <img class="icon" src="/Icons/Health.webp">.<br>' +
					'▸ Damage Recovered <i>(over 5 Sec.)</i>:<br>' +
					'<span style="color: #60fa57"><b>30%</b></span>',
					Super_Nova: 'Your <b>Casts</b> expand in size until they expire.<br>' +
					'▸ Max Cast Size:<br>' +
					'<b>40%/<span style="color: #4d82ff">50%</span>/<span style="color: #8b4dff">60%</span>/<span style="color: #ff4d4d">70%</span></b>',
					Light_Smite: 'After you take damage, your foe takes damage and you inflict <b>Daze</b> on <b>all</b> foes.<br>' +
					'▸ Revenge Damage:<br>' +
					'<b>50/<span style="color: #4d82ff">75</span>/<span style="color: #8b4dff">100</span>/<span style="color: #ff4d4d">125</span></b>',
					Extra_Dose: 'Your <b>Attack</b> has a chance to hit <b>2</b> times.<br>' +
					'▸ Double Strike Chance:<br>' +
					'<b>+5%/<span style="color: #4d82ff">8%</span>/<span style="color: #8b4dff">10%</span>/<span style="color: #ff4d4d">13%</span></b>',
					Perfect_Image: 'In each <b>Encounter</b>, you deal more damage until you take damage. If you take no more for <b>15 Sec.</b>, regain this.<br>' +
					'▸ No-Hit Bonus Damage:<br>' +
					'<b>+10%/<span style="color: #4d82ff">15%</span>/<span style="color: #8b4dff">20%</span>/<span style="color: #ff4d4d">25%</span></b>',
					Back_Burner: 'Foes with <b>Daze</b> take more damage if struck from behind.<br>' +
					'▸ Backstab Damage:<br>' +
					'<b>+50%/<span style="color: #4d82ff">75%</span>/<span style="color: #8b4dff">100%</span>/<span style="color: #ff4d4d">125%</span></b>',
					Prominence_Flare: 'After your <b>Ω Cast</b> expires, rapidly deal damage in the area for <b>2 Sec.</b><br>' +
					'▸ Omega Cast Damage <i>(every .13 Sec.)</i>:<br>' +
					'<b>10/<span style="color: #4d82ff">12</span>/<span style="color: #8b4dff">14</span>/<span style="color: #ff4d4d">16</span></b>',
					Dazzling_Display: 'Your attacks may inflict <b>Daze</b>.<br>' +
					'▸ Daze Chance:<br>' +
					'<b>+10%/<span style="color: #4d82ff">15%</span>/<span style="color: #8b4dff">20%</span>/<span style="color: #ff4d4d">25%</span></b>',
					Exceptional_Talent: 'Your <b>Ω Attack</b> and <b>Ω Special</b> fire <b>2</b> times, but use more <img class="icon" src="/Icons/Magick.webp">.<br>' +
					'▸ Omega Move Cost:<br>' +
					'<span style="color: #ba0202"><b>+20</b></span> <img class="icon" src="/Icons/Magick.webp">'
				}[trait]
				break
			case "Aphrodite":
				description = {
					Attack: 'Your <b>Attacks</b> deal more damage to nearby foes.<br>' +
					'▸ Close-Up Damage:<br>' +
					'<b>+80%/<span style="color: #4d82ff">+100%</span>/<span style="color: #8b4dff">+120%</span>/<span style="color: #ff4d4d">+140%</span></b>',
					Special:'Your <b>Specials</b> deal more damage to nearby foes.<br>' +
					'▸ Close-Up Damage:<br>' +
					'<b>+100%/<span style="color: #4d82ff">+150%</span>/<span style="color: #8b4dff">+200%</span>/<span style="color: #ff4d4d">+250%</span></b>',
					Cast: 'Your <b>Casts</b> drag foes in and inflicts <b>Weak</b>.<br>' +
					'▸ Weak Damage Reduction:<br>' +
					'<b>+10%/<span style="color: #4d82ff">+15%</span>/<span style="color: #8b4dff">+20%</span>/<span style="color: #ff4d4d">+25%</span></b>',
					Sprint: 'Your <b>Dash</b> blasts foes near where you start and end, and inflicts <b>Weak</b>.<br>' +
					'▸ Blast Damage:<br>' +
					'<b>20/<span style="color: #4d82ff">30</span>/<span style="color: #8b4dff">40</span>/<span style="color: #ff4d4d">50</span></b>',
					Gain: 'In each <b>Encounter</b>, <b>1</b> foe is always <b>Weak</b>. You gradually restore <img class="icon" src="/Icons/Magick.webp"> near <b>Weak</b> foes.<br>' +
					'▸ Magick Restoration <i>(every 1 Sec.)</i>:<br>' +
					'<b>6/<span style="color: #4d82ff">8</span>/<span style="color: #8b4dff">10</span>/<span style="color: #ff4d4d">12</span></b>',
					Wispy_Wiles: 'While you have at least <b>4</b> <img class="icon" src="/Icons/Air.webp">, you may <b>Dodge</b> any damage.<br>' +
					'▸ Dodge Chance:<br>' +
					'<span style="color: #60fa57"><b>+15%</b></span>',
					Healthy_Rebound: 'Whenever you exit a <b>Location</b>, restore <b>100%</b> <img class="icon" src="/Icons/Health.webp"> if you have not lost too much.<br>' +
					'▸ Min Life Required:<br>' +
					'<b>80%/<span style="color: #4d82ff">70%</span>/<span style="color: #8b4dff">60%</span>/<span style="color: #ff4d4d">50%</span></b>',
					Secret_Crush: 'After you enter a <b>Location</b>, <b>Prime</b> <span style="color: #26e6ff"><b>20</b></span> <img class="icon" src="/Icons/Magick.webp"> to add <b>Power</b> to your <b>Attack</b>.<br>' +
					'▸ Attack Power:<br>' +
					'<b>+5/<span style="color: #4d82ff">+7</span>/<span style="color: #8b4dff">+9</span>/<span style="color: #ff4d4d">+11</span></b>',
					Life_Affirmation: 'Any <img class="icon" src="/Icons/MaxHealth.webp"> rewards you find have greater effect.<br>' +
					'▸ Bonus Life Gain:<br>' +
					'<b>+40%/<span style="color: #4d82ff">+50%</span>/<span style="color: #8b4dff">+60%</span>/<span style="color: #ff4d4d">+70%</span></b>',
					Shameless_Attitude: 'While you have at least <b>80%</b> <img class="icon" src="/Icons/Health.webp">, you deal more damage.<br>' +
					'▸ High-Life Bonus Damage:<br>' +
					'<b>+10%/<span style="color: #4d82ff">+15%</span>/<span style="color: #8b4dff">+20%</span>/<span style="color: #ff4d4d">+25%</span></b>',
					Heart_Breaker: 'Whenever you use <span style="color: #26e6ff"><b>30</b></span> <img class="icon" src="/Icons/Magick.webp">, create a <b>Heartthrob</b>.<br>' +
					'▸ Heartthrob Damage:<br>' +
					'<b>120/<span style="color: #4d82ff">180</span>/<span style="color: #8b4dff">240</span>/<span style="color: #ff4d4d">300</span></b>',
					Broken_Resolve: 'Your <b>Weak</b> effects are more potent.<br>' +
					'▸ Weak Damage Reduction:<br>' +
					'<b>+10%/<span style="color: #4d82ff">+12%</span>/<span style="color: #8b4dff">+14%</span>/<span style="color: #ff4d4d">+16%</span></b>',
					Sweet_Surrender: '<b>Weak</b>-afflicted foes take more damage.<br>' +
					'▸ Damage vs. Weak:<br>' +
					'<b>+10%/<span style="color: #4d82ff">+15%</span>/<span style="color: #8b4dff">+20%</span>/<span style="color: #ff4d4d">+25%</span></b>',
					Ecstatic_Obsession: 'During <b>Encounters</b> with multiple foes, <b>1</b> foe is always afflicted with <b>Charm</b>.<br>' +
					'▸ Foes Required:<br>' +
					'<span style="color: #60fa57"><b>3</b></span> <i>(or more)</i>'
				}[trait]
				break
			case "Hephaestus":
				description = {
					Attack: 'Your <b>Attacks</b> occasionally create a blast that deals <b>200</b> damage in the area.<br>' +
					'▸ Blast Recharge Time:<br>' +
					'<b>12 Sec./<span style="color: #4d82ff">10 Sec.</span>/<span style="color: #8b4dff">8 Sec.</span>/<span style="color: #ff4d4d">6 Sec.</span></b>',
					Special: 'Your <b>Specials</b> occasionally create a blast that deals <b>400</b> damage in the area.<br>' +
					'▸ Blast Recharge Time:<br>' +
					'<b>20 Sec./<span style="color: #4d82ff">18 Sec.</span>/<span style="color: #8b4dff">16 Sec.</span>/<span style="color: #ff4d4d">14 Sec.</span></b>',
					Cast: 'Your <b>Casts</b> deal damage <b>3</b> times in succession, but in a smaller area.<br>' +
					'▸ Cast Damage <i>(every 1 Sec.)</i>:<br>' +
					'<b>50/<span style="color: #4d82ff">70</span>/<span style="color: #8b4dff">80</span>/<span style="color: #ff4d4d">90</span></b>',
					Sprint: 'After you <b>Sprint</b> for <b>1 Sec.</b>, use <span style="color: #26e6ff"><b>10</b></span> <img class="icon" src="/Icons/Magick.webp"> to create a blast that deals damage to nearby foes.<br>' +
					'▸ Area Damage:<br>' +
					'<b>200/<span style="color: #4d82ff">300</span>/<span style="color: #8b4dff">400</span>/<span style="color: #ff4d4d">500</span></b>',
					Gain: 'You take <b>-10%</b> damage, and restore some <img class="icon" src="/Icons/Magick.webp"> whenever you take damage.<br>' +
					'▸ Magick Restore from Damage:<br>' +
					'<b>50/<span style="color: #4d82ff">75</span>/<span style="color: #8b4dff">100</span>/<span style="color: #ff4d4d">125</span></b>',
					Martial_Art: 'Your <b>Attack</b> and <b>Special</b> deal more damage for each <img class="icon" src="/Icons/Earth.webp"> you have.<br>' +
					'▸ Damage per Earth Boon:<br>' +
					'<span style="color: #60fa57"><b>+5%</b></span>',
					Molten_Touch: 'Your <b>Attacks</b> and <b>Specials</b> deal bonus damage to <b>Armor</b>.<br>' +
					'▸ Damage vs. Armor:<br>' +
					'<b>+20%/<span style="color: #4d82ff">+30%</span>/<span style="color: #8b4dff">+40%</span>/<span style="color: #ff4d4d">+50%</span></b>',
					Trusty_Shield: 'After you enter a <b>Location</b>, <b>Prime</b> <span style="color: #26e6ff"><b>30</b></span> <img class="icon" src="/Icons/Magick.webp"> to gain <b>Armor</b> until the next <b>Location</b>.<br>' +
					'▸ Starting Armor:<br>' +
					'<b>+10 <img class="icon" src="/Icons/Armor.webp">/<span style="color: #4d82ff">+15 <img class="icon" src="/Icons/Armor.webp"></span>/<span style="color: #8b4dff">+20 <img class="icon" src="/Icons/Armor.webp"></span>/<span style="color: #ff4d4d">+25 <img class="icon" src="/Icons/Armor.webp"></span></b>',
					Tough_Trade: 'If you take damage during your <b>Attacks</b> or <b>Specials</b>, they are stronger if they hit.<br>' +
					'▸ Bonus Weapon Damage:<br>' +
					'<b>+100%/<span style="color: #4d82ff">+125%</span>/<span style="color: #8b4dff">+150%</span>/<span style="color: #ff4d4d">+175%</span></b>',
					Mint_Condition: 'At the start of each <b>Encounter</b>, you are briefly <b>Impervious</b>.<br>' +
					'▸ Impervious Duration:<br>' +
					'<b>8 Sec./<span style="color: #4d82ff">10 Sec.</span>/<span style="color: #8b4dff">12 Sec.</span>/<span style="color: #ff4d4d">14 Sec.</span></b>',
					Heavy_Metal: "Gain some <img class='icon' src='/Icons/Armor.webp'>. Foes' attacks cannot knock you away.<br>" +
					'▸ Armor Gained:<br>' +
					'<b>+50 <img class="icon" src="/Icons/Armor.webp">/<span style="color: #4d82ff">+75 <img class="icon" src="/Icons/Armor.webp"></span>/<span style="color: #8b4dff">+100 <img class="icon" src="/Icons/Armor.webp"></span>/<span style="color: #ff4d4d">+125 <img class="icon" src="/Icons/Armor.webp"></span></b>',
					Uncanny_Fortitude: 'Gain bonus <img class="icon" src="/Icons/MaxHealth.webp"> based on your <img class="icon" src="/Icons/Magick.webp"> limit.<br>' +
					'▸ Max Life from Magick:<br>' +
					'<b>+20%/<span style="color: #4d82ff">+30%</span>/<span style="color: #8b4dff">+40%</span>/<span style="color: #ff4d4d">+50%</span></b>',
					Furnace_Blast: 'Your blast effects from <b>Hephaestus</b> also inflict <b>Vent</b> on foes.<br>' +
					'▸ Vent Damage:<br>' +
					'<b>300/<span style="color: #4d82ff">400</span>/<span style="color: #8b4dff">500</span>/<span style="color: #ff4d4d">600</span></b>',
					Fine_Tuning: 'Your <b>Aspect</b> of the <b>Nocturnal Arms</b> is even stronger.<br>' +
					'▸ Bonus Aspect Ranks:<br>' +
					'<span style="color: #60fa57"><b>+1</b></span>'
				}[trait]
				break
			case "Hestia":
				description = {
					Attack: 'Your <b>Attacks</b> inflict <b>Scorch</b>.<br>' +
					'▸ Scorch Damage:<br>' +
					'<b>20/<span style="color: #4d82ff">25</span>/<span style="color: #8b4dff">30</span>/<span style="color: #ff4d4d">35</span></b>',
					Special: 'Your <b>Specials</b> inflict <b>Scorch</b>.<br>' +
					'▸ Scorch Damage:<br>' +
					'<b>15/<span style="color: #4d82ff">20</span>/<span style="color: #8b4dff">25</span>/<span style="color: #ff4d4d">30</span></b>',
					Cast: 'Your <b>Casts</b> repeatedly inflict <b>Scorch</b> on foes.<br>' +
					'▸ Scorch Damage <i>(every 1 Sec.)</i>:<br>' +
					'<b>30/<span style="color: #4d82ff">45</span>/<span style="color: #8b4dff">60</span>/<span style="color: #ff4d4d">75</span></b>',
					Sprint: 'Your <b>Sprint</b> destroys most ranged shots near you, and inflicts <b>Scorch</b> on foes that fired.<br>' +
					'▸ Scorch Damage per Projectile:<br>' +
					'<b>2/<span style="color: #4d82ff">4</span>/<span style="color: #8b4dff">6</span>/<span style="color: #ff4d4d">8</span></b>',
					Gain: 'Rapidly restore <img class="icon" src="/Icons/Magick.webp">, but you have <span style="color: #ba0202"><b>-20%</b></span> <img class="icon" src="/Icons/MaxHealth.webp">.<br>' +
					'▸ Magick Restoration <i>(every 1 Sec.)</i>:<br>' +
					'<b>+7/<span style="color: #4d82ff">+10</span>/<span style="color: #8b4dff">+13</span>/<span style="color: #ff4d4d">+16</span></b>',
					Slow_Cooker: 'Your <b>Attacks</b> and <b>Specials</b> gain <b>Power</b> for each <img class="icon" src="/Icons/Fire.webp"> you have.<br>' +
					'▸ Power per Fire Boon:<br>' +
					'<span style="color: #60fa57"><b>+2</b></span>',
					Glowing_Coal: 'Hold <b>Cast</b> to aim a fiery projectile that explodes on impact. The binding circle forms there.<br>' +
					'▸ Blast Damage:<br>' +
					'<b>50/<span style="color: #4d82ff">70</span>/<span style="color: #8b4dff">90</span>/<span style="color: #ff4d4d">110</span></b>',
					Controlled_Burn: 'Your <b>Ω Special</b> also launches a fiery projectile, but uses <span style="color: #26e6ff"><b>+10</b></span> <img class="icon" src="/Icons/Magick.webp">.<br>' +
					'▸ Blast Damage:<br>' +
					'<b>80/<span style="color: #4d82ff">120</span>/<span style="color: #8b4dff">160</span>/<span style="color: #ff4d4d">200</span></b>',
					Burnt_Offering: 'Gain <img class="icon" src="/Icons/MaxHealth.webp"> and <img class="icon" src="/Icons/Magick.webp">, but give up <b>1 Boon</b> selected by <b>Hestia</b>.<br>' +
					'▸ Max Life & Magick:<br>' +
					'<b>+50/<span style="color: #4d82ff">+60</span>/<span style="color: #8b4dff">+70</span>/<span style="color: #ff4d4d">+80</span></b>',
					Flammable_Coating: 'Your <b>Scorch</b> effects deal bonus damage to <b>Armor</b>.<br>' +
					'▸ Scorch Damage vs. Armor:<br>' +
					'<b>+100%/<span style="color: #4d82ff">+150%</span>/<span style="color: #8b4dff">+200%</span>/<span style="color: #ff4d4d">+250%</span></b>',
					Fire_Extinguisher: 'Foes with at least <b>300 Scorch</b> take a burst of damage that consumes the effect.<br>' +
					'▸ Damage from Scorch:<br>' +
					'<b>50%/<span style="color: #4d82ff">62%</span>/<span style="color: #8b4dff">75%</span>/<span style="color: #ff4d4d">87%</span></b>',
					Natural_Gas: 'Whenever <b>Scorch</b>-afflicted foes are slain, they damage nearby foes.<br>' +
					'▸ Blast Damage:<br>' +
					'<b>60/<span style="color: #4d82ff">90</span>/<span style="color: #8b4dff">120</span>/<span style="color: #ff4d4d">150</span></b>',
					Spontaneous_Combustion: 'Your <b>Ω Special</b> inflicts bonus <b>Scorch</b> if foes are unafflicted.<br>' +
					'▸ Scorch Damage:<br>' +
					'<b>60/<span style="color: #4d82ff">90</span>/<span style="color: #8b4dff">120</span>/<span style="color: #ff4d4d">150</span></b>',
					Pyro_Technique: 'Your <b>Scorch</b> effects deal damage faster.<br>' +
					'▸ Scorch Damage Rate:<br>' +
					'<span style="color: #60fa57"><b>+100%</b></span>'
				}[trait]
				break
			case "Hermes": 
				description = {
					Tall_Order: 'While you have at least <b>2</b> of each <img class="icon" src="/Icons/Earth.webp"> <img class="icon" src="/Icons/Water.webp"> <img class="icon" src="/Icons/Air.webp"> <img class="icon" src="/Icons/Fire.webp"> <b>Elements</b>, you deal more damage.<br>' +
					'▸ Infused Damage:<br>' +
					'<span style="color: #60fa57"><b>+20%</b></span>',
					Greater_Evasion: 'Whenever you are struck, you may <b>Dodge</b> any damage.<br>' +
					'▸ Dodge Chance:<br>' +
					'<b>+10%/<span style="color: #4d82ff">+15%</span>/<span style="color: #8b4dff">+20%</span>/<span style="color: #ff4d4d">+25%</span></b>',
					Saved_Breath: 'Your <b>Ω Cast</b> uses less <img class="icon" src="/Icons/Magick.webp">.<br>' +
					'▸ Omega Cast Cost:<br>' +
					'<b>-50%/<span style="color: #4d82ff">-60%</span>/<span style="color: #8b4dff">-70%</span>/<span style="color: #ff4d4d">-80%</span></b>',
					Swift_Flourish: 'Your <b>Specials</b> are faster.<br>' +
					'▸ Special Speed:<br>' +
					'<b>+15%/<span style="color: #4d82ff">+20%</span>/<span style="color: #8b4dff">+24%</span>/<span style="color: #ff4d4d">+29%</span></b>',
					Swift_Strike: 'Your <b>Attacks</b> are faster.<br>' +
					'▸ Attack Speed:<br>' +
					'<b>+10%/<span style="color: #4d82ff">+15%</span>/<span style="color: #8b4dff">+20%</span>/<span style="color: #ff4d4d">+25%</span></b>',
					Midnight_Oil: 'While your <b>Hex</b> is ready, you move and strike faster.<br>' +
					'▸ Bonus Move & Weapon Speed:<br>' +
					'<b>+15%/<span style="color: #4d82ff">+20%</span>/<span style="color: #8b4dff">+25%</span>/<span style="color: #ff4d4d">+30%</span></b>',
					Quick_Buck: 'You find <img class="icon" src="/Icons/Gold.webp"> in greater quantities. Receive <span style="color: #fff933"><b>100</b></span> <img class="icon" src="/Icons/Gold.webp"> now, plus the bonus!<br>' +
					'▸ Bonus Gold:<br>' +
					'<b>+20%/<span style="color: #4d82ff">+30%</span>/<span style="color: #8b4dff">+40%</span>/<span style="color: #ff4d4d">+50%</span></b>',
					Hard_Target: "Most foes' ranged shots are slower.<br>" +
					'▸ Foe Projectile Speed:<br>' +
					'<b>-30%/<span style="color: #4d82ff">-40%</span>/<span style="color: #8b4dff">-50%</span>/<span style="color: #ff4d4d">-60%</span></b>',
					Witty_Retort: 'Your <b>Hex</b> requires using less <img class="icon" src="/Icons/Magick.webp"> before it is ready.<br>' +
					'▸ Reduced Magick Cost:<br>' +
					'<b>-15%/<span style="color: #4d82ff">-20%</span>/<span style="color: #8b4dff">-25%</span>/<span style="color: #ff4d4d">-30%</span></b>',
					Nitro_Boost: 'Your <b>Sprint</b> is <b>15%</b> faster and gives you a barrier that ignores instances of damage.<br>' +
					'▸ Hits Blocked per Encounter:<br>' +
					'<b>1/<span style="color: #4d82ff">2</span>/<span style="color: #8b4dff">3</span>/<span style="color: #ff4d4d">4</span></b>',
					Mean_Streak: 'Each time you slay a foe, deal more damage for the next <b>30 Sec.</b><br>' +
					'▸ Bonus Damage per Slain Foe:<br>' +
					'<b>+1%/<span style="color: #4d82ff">+1.5%</span>/<span style="color: #8b4dff">+2%</span>/<span style="color: #ff4d4d">+2.5%</span></b>',
					Close_Call: 'Gain <b>+1</b> use of <b>Death Defiance</b> that makes everything else move <b>90%</b> slower.<br>' +
					'▸ Slow Duration:<br>' +
					'<span style="color: #60fa57"><b>8 Sec.</b></span>'
				}[trait]
				break
			case "Chaos":
				description = {
					Strike: 'Your <b>Attacks</b> deal <br><b>+20%–50%/<span style="color: #4d82ff">30%–75%</span>/<span style="color: #8b4dff">40%–100%</span>/<span style="color: #ff4d4d">50%–125%</span></b> damage.',
					Flourish: 'Your <b>Specials</b> deal <br><b>+30%–60%/<span style="color: #4d82ff">45%–90%</span>/<span style="color: #8b4dff">60%–120%</span>/<span style="color: #ff4d4d">75%–150%</span></b> damage.',
					Chasm: 'Your <b>Casts</b> deal <br><b>+20%–50%/<span style="color: #4d82ff">30%–75%</span>/<span style="color: #8b4dff">40%–100%</span>/<span style="color: #ff4d4d">50%–125%</span></b> damage.',
					Soul: 'Gain <br><b>26–35/<span style="color: #4d82ff">52–70</span>/<span style="color: #8b4dff">78–105</span>/<span style="color: #ff4d4d">104–140</span></b> <img class="icon" src="/Icons/MaxHealth.webp">.',
					Mind: 'Gain <br><b>30–40/<span style="color: #4d82ff">45–60</span>/<span style="color: #8b4dff">60–80</span>/<span style="color: #ff4d4d">75–100</span></b> <img class="icon" src="/Icons/Magick.webp">.',
					Will: 'Restore <br><b>4–6/<span style="color: #4d82ff">8–12</span>/<span style="color: #8b4dff">12–18</span>/<span style="color: #ff4d4d">16–24</span></b> <img class="icon" src="/Icons/Magick.webp"> every 1 second.',
					Prowess: 'Your <b>Attacks</b> deal <br><b>+10–14/<span style="color: #4d82ff">15–21</span>/<span style="color: #8b4dff">20–28</span>/<span style="color: #ff4d4d">25–35</span></b> damage.',
					Finesse: 'Your <b>Specials</b> deal <br><b>+15–20/<span style="color: #4d82ff">22–30</span>/<span style="color: #8b4dff">30–40</span>/<span style="color: #ff4d4d">37–50</span></b> damage.',
					Revelation: 'Channel your <b>Ω</b> moves <br><b>10%–15%/<span style="color: #4d82ff">15%–22%</span>/<span style="color: #8b4dff">20%–30%</span>/<span style="color: #ff4d4d">25%–37%</span></b> faster.',
					Favor: 'Boons have a <br><b>+40%–50%/<span style="color: #4d82ff">54%–67%</span>/<span style="color: #8b4dff">67%–84%</span>/<span style="color: #ff4d4d">80%–100%</span></b> chance to be <span style="color: #4d82ff"><b>Rare</b></span> or better.',
					Affluence: 'Any <img class="icon" src="/Icons/Gold.webp"> you find is worth <b>+40%–60%/<span style="color: #4d82ff">80%–120%</span>/<span style="color: #8b4dff">120%–180%</span>/<span style="color: #ff4d4d">160%–240%</span></b> more.',
					Creation: 'Gain <b>1/<span style="color: #4d82ff">2</span>/<span style="color: #8b4dff">3</span>/<span style="color: #ff4d4d">4</span></b> <img class="icon" src="/Icons/Earth.webp"> <img class="icon" src="/Icons/Water.webp"> <img class="icon" src="/Icons/Air.webp"> <img class="icon" src="/Icons/Fire.webp"> <img class="icon" src="/Icons/Aether.webp">',
					Talent: 'You use <b>20%–30%/<span style="color: #4d82ff">30%–45%</span>/<span style="color: #8b4dff">40%–60%</span>/<span style="color: #ff4d4d">50%–75%</span></b> less <img class="icon" src="/Icons/Magick.webp">.',
					Celerity: '',




					Discovery: 'You have a <b>+56%–70%/<span style="color: #4d82ff">64%–80%</span>/<span style="color: #8b4dff">72%–90%</span>/<span style="color: #ff4d4d">80%–100%</span></b> chance to find <span style="color: #60fa57"><b>+100%</b></span> resources with your <b>gathering tools</b>.',

				}[trait]
				break
			default:
				description = 'default'
		}
			
	}

	function hideDescription(){
		descriptionActive = false
	}

	let mouseX = 0
	let mouseY = 0

	function trackMousePosition(event){
		mouseX = event.clientX
		mouseY = event.clientY
	}
	
	let scrollX
	let scrollY
</script>

<svelte:window bind:scrollX={scrollX} bind:scrollY={scrollY}/>

<svelte:head>         
	<title>Hades 2 Builder</title>
	<meta name="description" content="Custom build creator for Hades 2" />
</svelte:head>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<body>
	<div class="container" on:mousemove={trackMousePosition} on:mouseup={hideDescription}>

		<h1>Hades 2 Build Creator</h1>
		<h5>Created by derpity</h5>
		<h5>Please contact me on discord if you have ideas for additions or high resolution image files!</h5>
		<div class="trait-box">
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={() => openMenu(menus.ATTACK)} on:mouseover={() => showDescription(attackTrait + "-Attack")}>
						<img class="trait-image" src={genImagePath("attack", attackTrait)}>
					</button>
					<img class="element" src={mainTraitElementImagePath("attack", attackTrait)}>
				</div>
				<h5>{mainTraitName("attack", attackTrait)}</h5>
			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={() => openMenu(menus.SPECIAL)} on:mouseover={() => showDescription(specialTrait + "-Special")} on:mouseout={hideDescription}>
						<img class="trait-image" src={genImagePath("special", specialTrait)}>
					</button>
					<img class="element" src={mainTraitElementImagePath("special", specialTrait)}>
				</div>
				<h5>{mainTraitName("special", specialTrait)}</h5>
			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={() => openMenu(menus.CAST)} on:mouseover={() => showDescription(castTrait + "-Cast")} on:mouseout={hideDescription}>
						<img class="trait-image" src={genImagePath("cast", castTrait)}>
					</button>
					<img class="element" src={mainTraitElementImagePath("cast", castTrait)}>
				</div>
				<h5>{mainTraitName("cast", castTrait)}</h5>
			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={() => openMenu(menus.SPRINT)} on:mouseover={() => showDescription(sprintTrait + "-Sprint")} on:mouseout={hideDescription}>
						<img class="trait-image" src={genImagePath("sprint", sprintTrait)}>
					</button>
					<img class="element" src={mainTraitElementImagePath("sprint", sprintTrait)}>
				</div>
				<h5>{mainTraitName("sprint", sprintTrait)}</h5>
			</div>
			<div class="slot">
				<div class="trait-container">
					<button class="trait-button" on:click={() => openMenu(menus.GAIN)} on:mouseover={() => showDescription(gainTrait + "-Gain")} on:mouseout={hideDescription}>
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
							<button class="trait-button" on:click = {closeMenu} on:click = {() => attackTrait = option} on:mouseover={() => showDescription(option + "-Attack")} on:mouseout={hideDescription}>
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
							<button class="trait-button" on:click = {closeMenu} on:click = {() => specialTrait = option} on:mouseover={() => showDescription(option + "-Special")} on:mouseout={hideDescription}>
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
							<button class="trait-button" on:click = {closeMenu} on:click = {() => castTrait = option} on:mouseover={() => showDescription(option + "-Cast")} on:mouseout={hideDescription}>
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
							<button class="trait-button" on:click = {closeMenu} on:click = {() => sprintTrait = option} on:mouseover={() => showDescription(option + "-Sprint")} on:mouseout={hideDescription}>
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
							<button class="trait-button" on:click = {closeMenu} on:click = {() => gainTrait = option} on:mouseover={() => showDescription(option + "-Gain")} on:mouseout={hideDescription}>
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
						<button class="trait-button" class:legendary={isLegendary(trait)} class:infusion={isInfusion(trait)} class:duo={isDuo(trait)} on:click={() => removeTrait(trait)} on:mouseover={() => showDescription(trait)} on:mouseout={hideDescription}>
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
						<button class="trait-button" class:legendary={isLegendary(trait)} class:infusion={isInfusion(trait)} class:duo={isDuo(trait)} on:click={() => addTrait(trait)} on:mouseover={() => showDescription(trait)} on:mouseout={hideDescription}>
							<img class="trait-image" src={genImagePath(tab, trait)}>
						</button>
						<img class="element" src={otherTraitElementImagePath(trait)}>
					</div>
					<h5>{replaceUnderscore(trait.split("-")[1])}</h5>
				</div>
			{/each}
		</div>
		{#if descriptionActive}
			{#if description != ""}
				{#if mouseX <= 215}
					<div class="description-box" style="left: calc({mouseX}px + 15px); top: calc({mouseY}px + {scrollY}px);">
						<h5 class="description-text">{@html description}</h5>
					</div>
				{:else}
					<div class="description-box" style="left: calc({mouseX}px - 210px); top: calc({mouseY}px + {scrollY}px);">
						<h5 class="description-text">{@html description}</h5>
					</div>
				{/if}
			{/if}
		{/if}
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
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		height: auto;
		width: 100%;
		padding-left: 7px;
		padding-bottom: 50px;;
		
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
	.description-box {
		width: 200px;
		height: auto;
		border: 2px;
		border-style: solid;
		border-radius: 10px;
		border-color: rgb(120, 120, 197);
		list-style-type: none;
		background: rgb(56, 56, 93);
		position: absolute;
		z-index: 1;
	}
	.description-text {
		font-family: Helvetica;
		color: rgb(223, 239, 255);
		margin: 0;
		padding: 5px;
		text-align: left;
		text-wrap: wrap;
	}
	:global(.icon) {
		height: 20px;
		margin: 0;
		margin-bottom: -5px;
	}
</style>
