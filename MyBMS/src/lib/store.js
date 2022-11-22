import { writable } from "svelte/store";

export const UserType = {
	Unknown: 0,
	Patient: 1,
	Doctor: 2
}

export const ClientName = [undefined, "Samuel Philippe", "Sarah Duval"];

export const PatientList = [
	{ name: "Yoann Noyer", city: "Antibes", age: 45, sex: 'M', drug: ["eliquis"]},
	{ name: "Emilio Barsotti", city: "Monaco", age: 65, sex: 'M', drug: ["imnovid"]},
	{ name: "Safa Rahim", city: "Nice", age: 52, sex: 'M',  drug: ["hydrea", "imnovid"]},
	{ name: "Jessica Lemoine", city: "Nice", age: 38, sex: 'F',  drug: ["onureg", "hydrea"]},
	{ name: "Jonathan Dupuy", city: "Nice", age: 77, sex: 'M',  drug: ["hydrea", "eliquis", "reblozyl"]},
	{ name: "Carmen Rosales", city: "Cannes", age: 53, sex: 'F',  drug: ["onureg"]},
	{ name: "Fatma Fabre", city: "Nice", age: 48, sex: 'F',  drug: ["eliquis", "vidaza"]},
	{ name: "Agnès Cattaneo", city: "Cannes", age: 99, sex: 'F',  drug: ["hydrea", "imnovid"]},
	{ name: "Mathias De Leon", city: "Antibes", age: 69, sex: 'M',  drug: ["hydrea", "onureg"]},
	{ name: "Tayeb Fierro", city: "Monaco", age: 70, sex: 'M',  drug: ["eliquis", "onureg"]},
];

export const PharmaciesInCity = new Map();
PharmaciesInCity.set("06000", [
	{ name: "Pharmacie Riviera 24h24 (de garde)", address: "66 av. Jean Médecin 06000 Nice"},
])


export const Specialities = ["oncology", "cardiology", "immunology", "hematology", "fibrosis"]

export const ForumTopics = [
	{title: "", author: "", date: "", like: 254, dislike: 12, commentNb: 6},
	{title: ""},
	{},
];

export const userType = writable(UserType.Unknown);
