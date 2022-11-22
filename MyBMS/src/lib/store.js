import { writable } from "svelte/store";

export const UserType = {
	Unknown: 0,
	Patient: 1,
	Doctor: 2
}

export const ClientName = [undefined, "Samuel Philippe", "Sarah Duval"];

export const userType = writable(UserType.Unknown);

export const PatientList = [
	{ name: "Thomas Raoul", city: "Nice", drug: ["a", "b"]},
	{ name: "Yoann Noyer", city: "Antibes", drug: ["c"]},
	{ name: "Emilio Barsotti", city: "Monaco", drug: ["b"]},
	{ name: "Jessica Lemoine", city: "Nice", drug: ["d", "a"]},
	{ name: "Jonathan Dupuy", city: "Nice", drug: ["a", "c", "e"]},
	{ name: "", city: "Cannes", drug: ["d"]},
	{ name: "", city: "Nice", drug: ["c", "f"]},
	{ name: "", city: "Cannes", drug: ["a", "b"]},
	{ name: "", city: "Antibes", drug: ["a", "d"]},
	{ name: "", city: "Monaco", drug: ["c", "d"]},
];