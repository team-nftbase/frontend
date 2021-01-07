<script>
  import { categories } from "../../store/explore.store";

  let categories_value;

  const unsubscribe = categories.subscribe((value) => {
    categories_value = value;
  });

  const handlerCategories = (name) => {
    categories.update((categories) => {
      categories[name] = !categories[name];
      return categories;
    });
  };
</script>

<div>
  {#each Object.keys(categories_value) as catItem}
    <button
      class={`${categories_value[catItem] ? 'bg-gray-700 text-white' : ''} rounded-2xl py-1 px-4 mr-4`}
      on:click={(_) => handlerCategories(catItem)}>
      {catItem}
    </button>
  {/each}
</div>
