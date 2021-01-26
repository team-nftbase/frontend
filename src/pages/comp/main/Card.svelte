<script>
  import Link from "svelte-routing/src/Link.svelte";
  import { _ } from "svelte-i18n";

  export let itemInfo;
</script>

<Link to="itemdetail" class="rounded-lg border-2 text-black">
  <img class="rounded-t-lg" src={itemInfo.img} alt="main_image" />
  <hr />
  <div class="flex flex-row justify-between p-4">
    <div class="text-left">
      <p class="text-sm text-gray-400">{itemInfo.collection}</p>
      <p>{itemInfo.title}</p>
    </div>
    <div class="text-right">
      <p class="text-sm text-gray-400">{$_("common.price")}</p>
      <p>{itemInfo.price}</p>
    </div>
  </div>
</Link>
