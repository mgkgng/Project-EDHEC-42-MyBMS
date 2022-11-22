import { writable } from "svelte/store";

export const UserType = {
	Unknown: 0,
	Patient: 1,
	Doctor: 2
}

export const ClientName = [undefined, "Samuel Philippe", "Sarah Duval"];

export const PatientList = [
	{ name: "Yoann Noyer", city: "Antibes", age: 45, sex: 'M', drug: ["c"]},
	{ name: "Emilio Barsotti", city: "Monaco", age: 65, sex: 'M', drug: ["b"]},
	{ name: "Safa Rahim", city: "Nice", age: 52, sex: 'M',  drug: ["a", "b"]},
	{ name: "Jessica Lemoine", city: "Nice", age: 38, sex: 'F',  drug: ["d", "a"]},
	{ name: "Jonathan Dupuy", city: "Nice", age: 77, sex: 'M',  drug: ["a", "c", "e"]},
	{ name: "Carmen Rosales", city: "Cannes", age: 53, sex: 'F',  drug: ["d"]},
	{ name: "Fatma Fabre", city: "Nice", age: 48, sex: 'F',  drug: ["c", "f"]},
	{ name: "Agnès Cattaneo", city: "Cannes", age: 99, sex: 'F',  drug: ["a", "b"]},
	{ name: "Mathias De Leon", city: "Antibes", age: 69, sex: 'M',  drug: ["a", "d"]},
	{ name: "Tayeb Fierro", city: "Monaco", age: 70, sex: 'M',  drug: ["c", "d"]},
];

export const userType = writable(UserType.Unknown);