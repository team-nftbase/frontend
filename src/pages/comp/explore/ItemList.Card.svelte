<script>
  import Link from "svelte-routing/src/Link.svelte";
  let img_demoURL =
    "https://allonline365.com/wp-content/uploads/2019/08/technology-in-digital-transformation-1440x1008-1024x717.jpg";
</script>

<Link to="itemdetail" class="rounded-lg border-2 text-black">
  <img class="rounded-t-lg" src={img_demoURL} alt="main_image" />
  <hr />
  <div class="flex flex-row justify-between p-4">
    <div class="text-left">
      <p class="text-sm text-gray-400">collection name</p>
      <p>Title</p>
    </div>
    <div class="text-right">
      <p class="text-sm text-gray-400">price</p>
      <p>3</p>
    </div>
  </div>
</Link>
