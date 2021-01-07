<script>
  import { collections } from "../../store/explore.store";

  let collections_value;
  let filter_text = "";

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
  <div class="flex flex-row px-4 py-2 my-2 rounded-lg border-2 border-gray-300">
    <span class="material-icons mr-2"> search </span>
    <input
      class="border-transparent focus:outline-none w-full"
      bind:value={filter_text}
      placeholder="Search items, collections, and accounts" />
    <button
      class="flex items-center border-0 focus:outline-none"
      on:click={() => {
        filter_text = '';
      }}><span class="material-icons"> clear </span></button>
  </div>
  <div class="flex flex-col pt-2">
    {#each Object.keys(collections_value).filter((item) =>
      item.includes(filter_text)
    ) as collItem}
      <button
        class={`${collections_value[collItem] ? 'bg-gray-700 text-white' : ''} rounded-lg mb-2 p-2 text-left focus:outline-none`}
        on:click={(_) => handlerCollections(collItem)}>
        {collItem}
      </button>
    {/each}
  </div>
</div>
