import { writable } from 'svelte/store';

export const status = writable('normal');

export const checkedItems = writable([]);