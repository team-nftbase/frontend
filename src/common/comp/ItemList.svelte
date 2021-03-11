<script>
  import Card from "common/comp/Card.svelte";
  import { _ } from "svelte-i18n";

  export let assetsList;
</script>

<div
  class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 mt-2"
>
  {#each assetsList as itemInfo}
    <Card {itemInfo} />
  {/each}
</div>
{#if assetsList.length === 0}
  <div>
    <p class="flex justify-center items-center mt-24">{$_("common.no_assets")}</p>
  </div>
{/if}
