import {writable} from 'svelte/store';

export const mainGods = ["None", "Zeus", "Hera", "Poseidon", "Apollo", "Demeter", "Aphrodite", "Hephaestus", "Hestia"]
export let attackTrait = writable("None")
export let specialTrait = writable("None")
export let castTrait = writable("None")
export let sprintTrait = writable("None")
export let regenTrait = writable("None")