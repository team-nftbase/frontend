<script>
	import { Link } from "svelte-routing";

</script>
<div class="flex flex-row justify-between items-center px-5 py-2 shadow-md">
  <div class="flex flex-row items-center">
    <Link to="/" class="text-blue-700 text-3xl font-extrabold">NFTBase</Link>
    <div class="flex flex-row px-4 py-2 ml-4 w-96 rounded-lg border-2 border-gray-300">
      <span class="material-icons mr-2"> search </span>
      <input
        class="border-transparent focus:outline-none w-full"
        placeholder="Search items, collections, and accounts" />
    </div>
  </div>
  <div class="text-2xl font-bold text-black">
    <Link class="mr-4" to="explore">Explore</Link>
    <Link class="mr-4" to="fnq">F&Q</Link>
    <Link class="mr-4" to="community">Community</Link>
    <Link to="create">Create</Link>
  </div>
</div>
