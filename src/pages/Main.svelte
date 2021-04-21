<script>
  import { onMount } from "svelte";
  import CardList from "./comp/main/CardList.svelte";
  import Tagbar from "./comp/main/Tagbar.svelte";
  import { navigate } from "svelte-routing";
  import { _ } from "svelte-i18n";
  let assetsList = [];
  import axios from "axios";
  import { base_url } from "common/properties.js";

  onMount(async () => {
    const response = await axios.post(
      base_url + "api/main/selectListAll",
      null
    );
    assetsList = response.data;
  });
</script>

<Tagbar />
<div id="headerMain" class="bg-fixed">
  <div class="container mx-auto">
    <p id="title" class="text-white font-bold recoleta_font">
      {$_("main.title")}
    </p>
    <p id="subtitle" class="text-white">
      {$_("main.sub_title")}
    </p>
    <button
      class="bg-black text-white border-0"
      on:click={() => {
        navigate(`explore`, { replace: true });
      }}>{$_("main.explore_artworks")}</button
    >
  </div>
</div>

<div class="container px-1 2xl:px-48 mx-auto my-12">
  <CardList title="Digital Art" list={assetsList.slice(0, 4)} />
  <CardList title="Virtual Worlds" list={assetsList.slice(4, 8)} />
  <CardList title="COLLECTIBLES" list={assetsList.slice(8, 12)} />
</div>

<style>
  p {
    color: white;
  }

  #headerMain {
    background-image: url(/images/Gradient.png);
    padding-left: 180px;
    padding-top: 81px;
    padding-bottom: 85px;
    background-repeat: no-repeat;
    background-size: cover;
  }
  #title {
    width: 900px;
    font-size: 72px;
    margin-bottom: 11px;
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
