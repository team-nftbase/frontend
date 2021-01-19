<script>
  import { Link } from "svelte-routing";
  import { user } from "./store/common.store";

  let userData;

  const unsubscribe = user.subscribe((value) => {
    userData = value;
  });

  const login = async () => {
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      user.update((user) => {
        user.wallet = accounts[0];
        return user;
      });
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  const getWallet = async () => {
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

<div class="flex flex-row justify-between items-center px-5 py-2 shadow-md">
  <div class="flex flex-row items-center">
    <Link to="/" class="text-blue-700 text-3xl font-extrabold">NFTBase</Link>
    <div
      class="flex flex-row px-4 py-2 ml-4 w-96 rounded-lg border-2 border-gray-300"
    >
      <span class="material-icons mr-2"> search </span>
      <input
        class="border-transparent focus:outline-none w-full"
        placeholder="Search items, collections, and accounts"
      />
    </div>
  </div>
  <div class="text-2xl font-bold text-black">
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
</div>
