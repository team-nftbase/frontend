<script>
  import { Link } from "svelte-routing";
  import { user } from "./store/common.store";
  import { login } from "./account";

  let userData = true;

  const unsubscribe = user.subscribe((value) => {
    userData = value;
  });
</script>

<div class="grid grid-cols-1 md:grid-cols-2 bg-blue-700 p-4">
  <div>
    <p class="text-3xl font-extrabold">NFTBase</p>
  </div>
  <div class="grid grid-cols-2 sm:grid-cols-4">
    {#if userData.wallet}
      <Link to="mypage"><p>My page</p></Link>
    {:else}
      <Link
        on:click={() => {
          login();
        }}
      ><p>Login</p></Link
      >
    {/if}
    <div>
      <Link to="explore"><p>Marketplace</p></Link>
      <Link to="explore"><p>Art</p></Link>
      <Link to="explore"><p>Domains</p></Link>
      <Link to="explore"><p>Virtual Worlds</p></Link>
      <Link to="explore"><p>Collectibles</p></Link>
      <Link to="explore"><p>Game</p></Link>
      <Link to="explore"><p>Defi</p></Link>
      <Link to="explore"><p>Others</p></Link>
    </div>
    <div>
      <Link to="explore"><p>Explore</p></Link>
      <Link to="fnq"><p>F&Q</p></Link>
      <Link to="create"><p>Create</p></Link>
    </div>
    <div>
      <p>Company</p>
      <p>About</p>
      <p>Suggestions</p>
    </div>
  </div>
</div>

<style>
  Link,
  p {
    color: white;
  }
</style>
