<script>
  import Clipboard from "svelte-clipboard";
  import { _ } from "svelte-i18n";

  export let userData;

  if (!window.ethereum.selectedAddress) location.href = "/";
</script>

<div class="flex flex-col justify-center my-32">
  <Clipboard
    text={userData.wallet}
    let:copy
    on:copy={() => {
      alert($_("myinfo.alert"));
    }}
  >
    <button class="border-none text-2xl" on:click={copy}
      >{userData.wallet}</button
    >
  </Clipboard>
</div>
