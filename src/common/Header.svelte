<script>
  import { Link } from "svelte-routing";
  import { slide } from "svelte/transition";
  import { user } from "./store/common.store";
  import { login } from "./account";
  import { locale, locales } from "svelte-i18n";
  // import { Us, Kr } from "svelte-flagicon";

  let userData,
    isMenuOpen = true;

  const unsubscribe = user.subscribe((value) => {
    userData = value;
  });
</script>

<div
  class="flex flex-col sm:flex-row justify-between items-center px-5 py-2"
  id="header"
>
  <div class="flex flex-col w-full sm:w-auto sm:flex-row items-center">
    <Link to="/" class="text-blue-700 text-3xl font-extrabold"
      ><img class="w-32" src="images/logo.png" alt="logoimage" /></Link
    >
    <div
      class="flex flex-row px-4 py-2 w-full sm:w-96 rounded-lg border-2 border-gray-300"
    >
      <img id="search_icon" src="images/search.png" alt="search_image" />
      <input
        class="border-transparent focus:outline-none w-full"
        placeholder="Search by creator or collectable"
      />
    </div>
  </div>
  <div
    class="flex flex-col sm:flex-row text-2xl font-bold text-black"
    transition:slide
  >
    <Link to="explore"><p class="link">Explore</p></Link>
    <Link to="fnq"><p class="link">F&Q</p></Link>
    <Link to="community"><p class="link">Community</p></Link>
    <Link to="create"><p class="link">Create</p></Link>
    {#if userData.wallet}
      <Link to="mypage">My page</Link>
    {:else}
      <Link
        on:click={() => {
          login();
        }}><p class="link">login</p></Link
      >
    {/if}
  </div>
</div>

<style>
  #header {
    margin-left: 150px;
    margin-right: 150px;
  }

  #search_icon {
    width: 20.67px;
    height: 21.33px;
  }
  .link {
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    margin-right: 35px;
  }
</style>
