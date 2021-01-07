<script>
  import { Status, Collections, Categories, ItemList } from "./comp/explore";
</script>

<div class="flex w-full p-4">
  <div class="w-1/5">
    <Status />
    <Collections />
  </div>
  <div class="flex flex-col w-4/5">
    <div class="flex justify-between">
      <Categories />
      <button class="flex items-center px-4 focus:outline-none rounded-2xl">
        <span class="material-icons"> filter_list </span><p> Filter & Sort</p>
      </button>
    </div>
    <ItemList />
  </div>
</div>
