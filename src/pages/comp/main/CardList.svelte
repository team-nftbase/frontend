<script>
  import Card from "./Card.svelte";
  export let list;
  export let title;
</script>

<div class="flex justify-between mt-12 mb-4">
  <p class="font-bold">{title}</p>
  <div class="flex">
    <a href="/" class="font-bold">View all</a>
    <span class="material-icons"> keyboard_arrow_right </span>
  </div>
</div>
<div
  class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-4">
  {#each list as itemInfo}
    <Card {itemInfo} />
  {/each}
</div>
