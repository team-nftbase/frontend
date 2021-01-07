<script>
  let img_demoURL =
    "https://allonline365.com/wp-content/uploads/2019/08/technology-in-digital-transformation-1440x1008-1024x717.jpg";

  let title = "Chainlink Wealth Card";
  let price = 0.1;
  let desc =
    "Small (S) parcel in Somnium Space has a size of 200m² and 10m height & depth build limit which is located at X = 2230.54, Y = 12.37, Z = -597.91";
</script>

<div class="container flex mx-auto">
  <div class="justify-center w-4/5 border-2 rounded-xl m-2 p-4">
    <div class="flex justify-end">
      <button class="flex items-center focus:outline-none border-0">
        <span class="material-icons"> favorite </span>
      </button>
      <button class="flex items-center focus:outline-none border-0">
        <span class="material-icons"> history </span>
      </button>
      <button class="flex items-center focus:outline-none border-0">
        <span class="material-icons"> fullscreen </span>
      </button>
    </div>
    <div class="flex justify-center my-12">
      <img src={img_demoURL} alt="item_image" />
    </div>
  </div>
  <div class="w-1/5 border-2 rounded-xl m-2 p-4">
    <p class="text-2xl">{title}</p>
    <div class="flex flex-row mt-2">
      <p class="font-bold mr-3">{price} ETH</p>
      <p class="text-gray-500">$64.61 3 of 3</p>
    </div>
    <p class="border-2 rounded-3xl w-12 text-center my-6">Art</p>
    <p class="mt-4">{desc}</p>
    <div class="my-24">
      <p class="text-gray-400">Owner</p>
      <p class="font-bold">limkukhyun</p>
      <p class="text-gray-400">Creator</p>
      <p class="font-bold">limkukhyun</p>
    </div>
    <div class="flex flex-row w-full mt-12">
      <button
        class="bg-blue-500 text-white focus:outline-none w-1/2 py-2 rounded-3xl mx-1">Buy</button>
      <button
        class="bg-blue-200 text-blue-500 focus:outline-none w-1/2 py-2 rounded-3xl mx-1"
        disabled>Bid</button>
    </div>
    <p class="text-gray-400 text-sm text-center mt-2">Service fee <span class="text-black font-bold">2.5%</span>, {price*2.5} $66.23</p>
  </div>
</div>
