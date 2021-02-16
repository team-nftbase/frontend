<script>
  import { onMount } from "svelte";

  import CardList from "./comp/main/CardList.svelte";
  import { _ } from "svelte-i18n";
  let assetsList = [];

  onMount(async () => {
    const res = await fetch(
      `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=500`
    );
    const { assets } = await res.json();
    assetsList = assets.filter(
      (item) => item.animation_url || item.collection.image_url
    );
  });

</script>

<div class="bg-blue-700 p-24">
  <p class="text-5xl text-white font-bold mb-12">
    {$_("main.title")}
  </p>
  <p class="text-xl text-white">
    {$_("main.sub_title")}
  </p>
</div>

<div class="container mx-auto my-12">
  <CardList title="Digital Art" list={assetsList.slice(0, 5)} />
  <CardList title="Virtual Worlds" list={assetsList.slice(5, 10)} />
  <CardList title="COLLECTIBLES" list={assetsList.slice(10, 15)} />
</div>
