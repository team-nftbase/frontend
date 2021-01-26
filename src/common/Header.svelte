<script>
  import { Link } from "svelte-routing";
  import { slide } from "svelte/transition";
  import { user } from "./store/common.store";
  import { login } from "./account";
  import { locale, locales } from "svelte-i18n";
  // import { Us, Kr } from "svelte-flagicon";

  let userData, isMenuOpen = true;

  const unsubscribe = user.subscribe((value) => {
    userData = value;
  });

  const getWallet = async () => {
    if(!window.ethereum) return;
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts) {
      user.update((user) => {
        user.wallet = accounts[0];
        return user;
      });
    }
  };

  getWallet();
</script>

<div
  class="flex flex-col sm:flex-row justify-between items-center px-5 py-2 shadow-md"
>
  <div class="flex flex-col w-full sm:w-auto sm:flex-row items-center">
    <Link to="/" class="text-blue-700 text-3xl font-extrabold">NFTBase</Link>
    <button
      class="sm:invisible"
      on:click={() => {
        isMenuOpen = !isMenuOpen;
      }}>눌러</button
    >
    <div
      class="flex flex-row px-4 py-2 sm:ml-4 w-full sm:w-96 rounded-lg border-2 border-gray-300"
    >
      <span class="material-icons mr-2"> search </span>
      <input
        class="border-transparent focus:outline-none w-full"
        placeholder="Search items, collections, and accounts"
      />
    </div>
  </div>
  {#if isMenuOpen}
    <div
      class="flex flex-col sm:flex-row text-2xl font-bold text-black"
      transition:slide
    >
      <select class="mr-4 px-1 border-none" bind:value={$locale}>
        {#each $locales as locale}
          <option value={locale}>{locale}</option>
        {/each}
      </select>
      <Link class="mr-4" to="explore">Explore</Link>
      <Link class="mr-4" to="fnq">F&Q</Link>
      <Link class="mr-4" to="community">Community</Link>
      <Link class="mr-4" to="create">Create</Link>
      {#if userData.wallet}
        <Link to="mypage">My page</Link>
      {:else}
        <Link
          on:click={() => {
            login();
          }}
        >Login</Link
        >
      {/if}
    </div>
  {/if}
</div>
