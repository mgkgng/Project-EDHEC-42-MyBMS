import { writable } from "svelte/store";

export const UserType = {
	Unknown: 0,
	Patient: 1,
	Doctor: 2
}

export const ClientName = [undefined, "Samuel Philippe", "Sarah Duval"];

export const userType = writable(UserType.Unknown);

export const PatientList = [
	{ name: "Yoann Noyer", city: "Antibes", prescriptions: ["c"]},
	{ name: "Emilio Barsotti", city: "Monaco", prescriptions: ["b"]},
	{ name: "Safa Rahim", city: "Nice", prescriptions: ["a", "b"]},
	{ name: "Jessica Lemoine", city: "Nice", prescriptions: ["d", "a"]},
	{ name: "Jonathan Dupuy", city: "Nice", prescriptions: ["a", "c", "e"]},
	{ name: "Carmen Rosales", city: "Cannes", prescriptions: ["d"]},
	{ name: "Fatma Fabre", city: "Nice", prescriptions: ["c", "f"]},
	{ name: "Agnès Cattaneo", city: "Cannes", prescriptions: ["a", "b"]},
	{ name: "Mathias De Leon", city: "Antibes", prescriptions: ["a", "d"]},
	{ name: "Tayeb Fierro", city: "Monaco", prescriptions: ["c", "d"]},
];