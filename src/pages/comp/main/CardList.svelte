<script>
  import Link from "svelte-routing/src/Link.svelte";
  import Card from "./Card.svelte";
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
  class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-4">
  {#each list as itemInfo}
    <Card {itemInfo} />
  {/each}
</div>
