<script>
  import { _ } from "svelte-i18n";

  let innerHeight;
</script>

<svelte:window bind:innerHeight={innerHeight} />

<div class="flex flex-col items-center py-32">
  <p class="text-3xl">{$_("getwallet.need_wallet")}</p>
  <img class="w-32 m-12" src="images/metamask.png" alt="metamask_image" />
  <a
    class="w-64 text-center p-2 rounded-xl bg-blue-600"
    href="https://metamask.io/download.html"
    ><p class="text-white">{$_("getwallet.get_metamask")}</p></a
  >
  <p class="mt-4 text-xs" style={`margin-bottom:${innerHeight - 700}px`}>
    {$_("getwallet.powered_by_wallet")}
  </p>
</div>
