<script>
  import { Link } from "svelte-routing";
  import { _ } from "svelte-i18n";
</script>

<div class="container mx-auto py-12 px-72">
  <p class="text-3xl text-center">{$_("create.create_collectible")}</p>
  <div class="flex w-full mt-24">
    <Link
    to="create_single"
      class="w-1/2 mx-4 py-32 text-3xl border-2 rounded-md text-center"
    ><p class="text-black">{$_("create.single")}</p></Link
    >
    <button disabled class="w-1/2 mx-4 py-32 text-3xl border-2 rounded-md text-center"
      >{$_("create.multiple")}</button
    >
  </div>
</div>
