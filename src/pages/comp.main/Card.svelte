<script>
  export let itemInfo;
</script>

<button class="rounded-lg">
  <img class="rounded-t-lg" src={itemInfo.img} alt="main_image" />
  <hr />
  <div class="flex flex-row justify-between p-4">
    <div class="left-0">
      <p class="text-sm text-gray-400">{itemInfo.collection}</p>
      <p>{itemInfo.title}</p>
    </div>
    <div>
      <p class="text-sm text-gray-400">price</p>
      <p>{itemInfo.price}</p>
    </div>
  </div>
</button>
