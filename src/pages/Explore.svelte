<script>
  import { onMount } from "svelte";
  import { Status, Collections, Categories } from "./comp/explore";
  import { ItemList } from "common/comp/index.js";
  import axios from "axios";
  import { base_url } from "common/properties.js";
  import { _ } from "svelte-i18n";

  let assetsList = [];
  onMount(async () => {
    const assets = await axios.post(base_url + "api/explore/selectListAll", null);
    assetsList = assets.data.filter((item) => item.image_thumbnail);
    console.log(assets)
  });
</script>

<div class="container mx-auto p-4">
  <!-- <div class="w-1/5">
    <Status />
    <Collections />
  </div> -->
    <div class="flex justify-between">
      <Categories />
      <button class="flex items-center px-4 focus:outline-none rounded-2xl">
        <span class="material-icons"> tune </span>
        <p>{$_("explore.filter_sort")}</p>
      </button>
    </div>
    <ItemList {assetsList} />
</div>
