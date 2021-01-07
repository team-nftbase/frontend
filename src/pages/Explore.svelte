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
      <p>filter & sort</p>
    </div>
    <ItemList />
  </div>
</div>
