import { writable } from "svelte/store";

export const UserType = {
	Unknown: 0,
	Patient: 1,
	Doctor: 2
}

export const ClientName = [undefined, "Samuel Philippe", "Sarah Duval"];

export const userType = writable(UserType.Unknown);

export const PatientList = [
	{ name: "Yoann Noyer", city: "Antibes", prescriptions: ["eliquis"]},
	{ name: "Emilio Barsotti", city: "Monaco", prescriptions: ["imnovid"]},
	{ name: "Safa Rahim", city: "Nice", prescriptions: ["hydrea", "imnovid"]},
	{ name: "Jessica Lemoine", city: "Nice", prescriptions: ["onureg", "hydrea"]},
	{ name: "Jonathan Dupuy", city: "Nice", prescriptions: ["hydrea", "eliquis", "reblozyl"]},
	{ name: "Carmen Rosales", city: "Cannes", prescriptions: ["onureg"]},
	{ name: "Fatma Fabre", city: "Nice", prescriptions: ["eliquis", "vidaza"]},
	{ name: "Agnès Cattaneo", city: "Cannes", prescriptions: ["hydrea", "imnovid"]},
	{ name: "Mathias De Leon", city: "Antibes", prescriptions: ["hydrea", "onureg"]},
	{ name: "Tayeb Fierro", city: "Monaco", prescriptions: ["eliquis", "onureg"]},
];