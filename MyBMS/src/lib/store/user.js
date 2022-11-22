import { writable } from "svelte/store";

export const UserType = {
	Unknown: 0,
	Patient: 1,
	Doctor: 2
}

class User {
	constructor() {
		this.userType = UserType.Unknown;
	}
}

export const user = writable(new User());