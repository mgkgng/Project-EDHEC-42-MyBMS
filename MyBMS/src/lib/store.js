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
	{ name: "Safa Rahim", city: "Nice", age: 52, sex: 'F',  drug: ["hydrea", "imnovid"]},
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
	{ name: "Pharmacie Gambetta", address: "34 bd Gambetta 06000 Nice"},
	{ name: "Pharmacie de France", address: "13 bd Gambetta 06000 Nice"},
	{ name: "Pharmacie Lyautey", address: "33 av du Maréchal Lyautey 06000 Nice"},
])

PharmaciesInCity.set("06400", [
	{ name: "Pharmacie de la Californie", address: "137 rue d'Antibes 06400 Cannes"},
	{ name: "Pharmacie du Casino", address: "9 sq Mérimée 06400 Cannes"},
	{ name: "Pharmacie du Bocage", address: "26 av des Coteaux 06400 Cannes"},
	{ name: "Pharmacie du Pont Carnot", address: "2 bd Carnot 06400 Cannes"},
])

export const Specialities = ["oncology", "cardiology", "immunology", "hematology", "fibrosis"]

export const ForumTopics = [
	{title: "Somnolence après prise du traitement le matin", author: "Marshall P.", date: "12/11/2022", like: 254, commentNb: 6, visitNb: 2514},
	{title: "Convalescence après embolie pulmonaire", author: "Hubert T.", date: "14/10/2022", like: 687, commentNb: 37, visitNb: 3425},
	{title: "Eviter l'exposition au soleil pendant le traitement en été", author: "Florine F.", date: "22/11/2022", like: 78, commentNb: 4, visitNb: 1732},
	{title: "Palpitations fortes même au repos", author: "Salim D.", date: "21/11/2022", like: 12, commentNb: 1, visitNb: 47},
	{title: "Besoin de conseils après pose de pacemaker", author: "Daniela R.", date: "15/11/2022", like: 65, commentNb: 10, visitNb: 537},
	{title: "Douleurs post ponction lombaire", author: "Robert N.", date: "7/11/2022", like: 465, commentNb: 54, visitNb: 2737},
	{title: "[Conseils] Quelle alimentation pour réduire le cholestérol", author: "Rumi W.", date: "19/11/2022", like: 132, commentNb: 6, visitNb: 437},
	{title: "Compatibilité avec un traitement anxiolytique ?", author: "Tristan F.", date: "20/11/2022", like: 57, commentNb: 13, visitNb: 256},
	{title: "Mon apnée du sommeil a disparu", author: "Gontran A.", date: "1/11/2022", like: 210, commentNb: 43, visitNb: 88},
	{title: "Reprendre une activité sportive après un traitement", author: "Marin G.", date: "5/11/2022", like: 32, commentNb: 3, visitNb: 132},
];

export const userType = writable(UserType.Unknown);
