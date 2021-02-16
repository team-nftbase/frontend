import { writable } from 'svelte/store';

export const user = writable({
  wallet: null,
  eth:null,
});