<script>
  import { onMount } from "svelte";
  import { Status, Collections, Categories } from "./comp/explore";
  import { ItemList} from 'common/comp/index.js';

  let assetsList = [];
  onMount(async () => {
    const res = await fetch(
      `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=500`
    );
    const { assets } = await res.json();
    assetsList = assets.filter(
      (item) => item.animation_url || item.collection.image_url
    );
  console.log(assetsList);
  });
</script>

<div class="flex w-full p-4">
  <div class="w-1/5">
    <Status />
    <Collections />
  </div>
  <div class="flex flex-col w-4/5">
    <div class="flex justify-between">
      <Categories />
      <button class="flex items-center px-4 focus:outline-none rounded-2xl">
        <span class="material-icons"> tune </span>
        <p>Filter & Sort</p>
      </button>
    </div>
    <ItemList {assetsList} />
  </div>
</div>
