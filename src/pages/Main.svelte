<script>
  import { onMount } from "svelte";
  import CardList from "./comp/main/CardList.svelte";
  import Tagbar from "./comp/main/Tagbar.svelte";
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

<Tagbar />
<div id="headerMain">
  <p id="title" class="text-white font-bold mb-12">
    {$_("main.title")}
  </p>
  <p id="subtitle" class="text-white">
    {$_("main.sub_title")}
  </p>
  <button class="bg-black text-white border-0">Explore artworks</button>
</div>

<div class="container mx-auto my-12">
  <CardList title="Digital Art" list={assetsList.slice(0, 5)} />
  <CardList title="Virtual Worlds" list={assetsList.slice(5, 10)} />
  <CardList title="COLLECTIBLES" list={assetsList.slice(10, 15)} />
</div>

<style>
  p {
    color: white;
  }

  #headerMain {
    background-image: url(/images/Gradient.png);
    padding-left: 231px;
    padding-top: 81px;
    padding-bottom: 85px;
  }
  #title {
    width: 772px;
    font-size: 72px;
  }
  #subtitle {
    font-size: 18px;
  }
  button {
    width: 212px;
    padding: 22px 37px 22px 37px;
    font-size: 18px;
    margin-top: 33px;
    border-radius: 15px;
  }
</style>
