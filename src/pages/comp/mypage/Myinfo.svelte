<script>
  import { user } from "../../../common/store/common.store";

  import Clipboard from "svelte-clipboard";

  let userData;

  const unsubscribe = user.subscribe((value) => {
    userData = value;
  });
</script>

<div class="flex flex-col justify-center my-32">
  <Clipboard
    text={userData.wallet}
    let:copy
    on:copy={() => {
      alert("wallet has copied");
    }}
  >
    <button class="border-none text-2xl" on:click={copy}
      >{userData.wallet}</button
    >
  </Clipboard>
</div>
