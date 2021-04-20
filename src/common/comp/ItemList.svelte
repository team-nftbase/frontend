<script>
  import Card from "common/comp/Card.svelte";
  import { _ } from "svelte-i18n";

  export let assetsList;
  export let status = "normal";
  export let checkedItems = [];
</script>

<div class="grid grid-cols-4 gap-4 mt-2">
  {#each assetsList as itemInfo}
    <Card {itemInfo} {status} {checkedItems} />
  {/each}
</div>
{#if assetsList.length === 0}
  <div class="mb-24">
    <p class="flex justify-center items-center mt-24">
      {$_("common.no_assets")}
    </p>
  </div>
{/if}
