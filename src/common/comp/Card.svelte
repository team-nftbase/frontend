<script>
  import Link from "svelte-routing/src/Link.svelte";
  import { _ } from "svelte-i18n";

  export let itemInfo;
</script>

<Link
  to={`itemdetail/${itemInfo.asset_contract.address}/${itemInfo.token_id}`}
  class="rounded-lg border-2 text-black"
>
  <div class="flex justify-center">
    {#if itemInfo.image_thumbnail_url && itemInfo.image_thumbnail_url.slice(-3) !== "mp4"}
      <img
        class="h-64 rounded-t-lg"
        src={itemInfo.image_thumbnail_url}
        alt="main_image"
      />
    {:else if itemInfo.image_thumbnail_url}
      <video src={itemInfo.image_thumbnail_url}
        ><track default kind="captions" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    {:else if itemInfo.animation_url}
      <video src={itemInfo.animation_url}
        ><track default kind="captions" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    {/if}
  </div>
  <hr />
  <div class="flex flex-row justify-between p-4">
    <div class="text-left">
      <p class="flex text-sm text-gray-400">
        {#if itemInfo.collection.image_url}
          <img
            class="w-6 max-h-6 mr-1"
            src={itemInfo.collection.image_url}
            alt="collection_image"
          />
        {/if}
        {itemInfo.collection.name}
      </p>
      <p>{itemInfo.name}</p>
    </div>
    {#if itemInfo.price}
      <div class="text-right">
        <p class="text-sm text-gray-400">{$_("common.price")}</p>
        <p>{itemInfo.price}</p>
      </div>
    {/if}
  </div>
</Link>
