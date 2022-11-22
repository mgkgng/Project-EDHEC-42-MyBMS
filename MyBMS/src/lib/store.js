import { writable } from "svelte/store";

export const UserType = {
	Unknown: 0,
	Patient: 1,
	Doctor: 2
}

export const ClientName = [undefined, "Samuel Philippe", "Sarah Duval"];

export const userType = writable(UserType.Unknown);

export const PatientList = [
	{ name: "Thomas Raoul", city: "Nice", prescriptions: ["a", "b"]},
	{ name: "Yoann Noyer", city: "Antibes", prescriptions: ["c"]},
	{ name: "Emilio Barsotti", city: "Monaco", prescriptions: ["b"]},
	{ name: "Jessica Lemoine", city: "Nice", prescriptions: ["d", "a"]},
	{ name: "Jonathan Dupuy", city: "Nice", prescriptions: ["a", "c", "e"]},
	{ name: "", city: "Cannes", prescriptions: ["d"]},
	{ name: "", city: "Nice", prescriptions: ["c", "f"]},
	{ name: "", city: "Cannes", prescriptions: ["a", "b"]},
	{ name: "", city: "Antibes", prescriptions: ["a", "d"]},
	{ name: "", city: "Monaco", prescriptions: ["c", "d"]},
];