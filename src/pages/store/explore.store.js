import { writable } from 'svelte/store';

export const status = writable({
  on_sale: true,
  on_auction: true,
  new: true,
  has_placed_bids: true,
});

export const collections = writable({
  coll_1: false,
  coll_2: false,
  coll_3: false,
  coll_4: false,
  coll_5: false,
});

export const categories = writable({
  Art: false,
  Domains: false,
  'Virtual Worlds': false,
  Collectibles: false,
  Game: false,
  Defi: false,
  Others: false,
});