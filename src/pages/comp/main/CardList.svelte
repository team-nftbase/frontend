<script>
  import Skeleton from "svelte-skeleton";
  import Link from "svelte-routing/src/Link.svelte";
  import { Card, HorizenLine } from "common/comp/index.js";
  import { _ } from "svelte-i18n";

  export let list;
  export let title;
</script>

<div class="flex justify-between mt-12 mb-3">
  <p id="title">{title}</p>
  <Link to="explore">
    <div class="flex items-center">
      <p id="view_all">{$_("main.view_all")}</p>
      <img class="h-6" src="images/arrow-right.png" alt="arrow" />
    </div>
  </Link>
</div>
<div class="flex justify-between" style="margin-bottom:22px;">
  <HorizenLine width={30} />
  <HorizenLine width={30} />
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

<style>
  #title {
    font-weight: 700;
    font-size: 24px;
  }
  #view_all {
    font-weight: 400;
    font-size: 24px;
    margin-right: 15px;
    color: black;
  }
</style>
