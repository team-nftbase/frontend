<script>
  import Skeleton from "svelte-skeleton";
  import Link from "svelte-routing/src/Link.svelte";
  import Card from "common/comp/Card.svelte";
  import { _ } from "svelte-i18n";

  export let list;
  export let title;
</script>

<div class="flex justify-between mt-12 mb-4">
  <p class="font-bold">{title}</p>
  <div class="flex">
    <Link to="explore" class="font-bold">{$_("main.view_all")}</Link>
    <span class="material-icons"> keyboard_arrow_right </span>
  </div>
</div>
<div
  class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-4"
>
  {#each list as itemInfo}
    <Card {itemInfo} />
  {/each}
  {#if !list.length}
    {#each [0, 1, 2, 3, 4] as item}
      <Skeleton height="100%" width="100%">
        <rect width="100%" height="100%" x="0" y="0" rx="12" ry="12" />
      </Skeleton>
    {/each}
  {/if}
</div>
