<script>
  import { Link } from "svelte-routing";
  import { slide } from "svelte/transition";
  import { user } from "./store/common.store";
  import { login } from "./account";

  let userData,
    isMenuOpen = true;

  const unsubscribe = user.subscribe((value) => {
    userData = value;
  });
</script>

<div
  class="flex flex-col justify-between items-center px-5 py-2"
  id="header_container"
>
  <div class="flex flex-col w-full sm:w-auto sm:flex-row items-center">
    <Link to="/" class="text-blue-700 text-3xl font-extrabold"
      ><img
        id="logo"
        class="w-32"
        src="images/logo.png"
        alt="metamask_image"
      /></Link
    >
    <div
      id="search_container"
      class="flex flex-row items-center px-4 py-2 w-full sm:w-96 rounded-lg border-2 border-gray-300"
    >
      <img id="search_icon" src="images/search.png" alt="metamask_image" />
      <input
        id="search_input"
        class="border-transparent focus:outline-none w-full"
        placeholder="Search by creator or collectable"
      />
    </div>
    <div
      class="flex flex-col sm:flex-row text-2xl font-bold text-black"
      transition:slide
    >
      <Link to="explore"><p>Explore</p></Link>
      <Link to="fnq"><p>F&Q</p></Link>
      <Link to="three"><p>Showcase</p></Link>
      <Link to="create"><p>Create</p></Link>
      {#if userData.wallet}
        <Link to="mypage"><p>My page</p></Link>
      {:else}
        <Link
          on:click={() => {
            login();
          }}><p class="link">login</p></Link
        >
      {/if}
    </div>
  </div>
</div>

<style>
  #header_container {
    margin-left: 150px;
    margin-right: 150px;
  }

  #logo {
    margin-right: 39px;
  }

  #search_container {
    width: 466px;
    height: 57px;
    left: 382px;
    top: 69px;
    background: #FFFFFF;
    border : 0;
    border-radius: 15px;
    box-shadow: 0px 19px 35px rgba(115, 154, 176, 0.12);
    margin-right: 37px;
    padding-left : 44px;
    padding-right : 0px;
  }

  #search_icon {
    width: 31px;
    height: 32px;
    margin-right: 32px;
  }

  #search_input {
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    margin-right: 37px;
  }

  p {
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    margin-right: 20px;
  }
</style>
