<script>
  import { each } from "svelte/internal";

  import { collections } from "../../store/explore.store";

  let collections_value;

  const unsubscribe = collections.subscribe((value) => {
    collections_value = value;
  });

  const handlerCollections = (name) => {
    collections.update((collections) => {
      collections[name] = !collections[name];
      return collections;
    });
  };
</script>

<div class="border-2 rounded-lg p-2 mr-2">
  <p class="text-xl font-bold">Collections</p>
  <hr />
  <div class="flex flex-col pt-2">
    {#each Object.keys(collections_value) as collItem}
      <button
        class={`${collections_value[collItem] ? 'bg-gray-700 text-white' : ''} rounded-lg p-2 text-left focus:outline-none`}
        on:click={(_) => handlerCollections(collItem)}>
        {collItem}
      </button>
    {/each}
  </div>
</div>
