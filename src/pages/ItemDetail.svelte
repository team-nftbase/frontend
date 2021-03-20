<script>
  import { onMount } from "svelte";
  import ethPrice from "eth-price";

  let img_URL,
    assetsInfo,
    ethprice = "0",
    ethpricenum;
  let price = 0.1;
  export let params;

  $: ethpricenum = Number(ethprice[0].slice(4));

  onMount(async () => {
    ethprice = await ethPrice("usd");
  });

  if (params) {
    onMount(async () => {
      const res = await fetch(
        `https://api.opensea.io/api/v1/asset/${params.contract_address}/${params.token_id}/`
      );
      assetsInfo = await res.json();
      if (assetsInfo.animation_url) {
        img_URL = assetsInfo.animation_url;
      } else if (assetsInfo.image_preview_url) {
        img_URL = assetsInfo.image_preview_url;
      } else {
      }
      console.log(assetsInfo);
    });
  } else {
    img_URL =
      "https://cdn.decrypt.co/resize/1400/wp-content/uploads/2021/02/Trump-win.png";
    assetsInfo = {
      name: "MEMOJI #0001",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing 
elit. Sed sed suspendisse feugiat feugiat amet, morbi
libero, a. Amet, sed aliquam facilisi massa mauris nunc. 
Leo egestas turpis nisl tincidunt imperdiet aliquet viverra
odio. Nam vitae nibh eget porta velit, sem.`,
      owner: { user: { username: "limkukhyun" } },
      creator: { user: { username: "limkukhyun" } },
    };
  }
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
      {#if img_URL && img_URL.slice(-3) === "mp4"}
        <video src={img_URL}
          ><track default kind="captions" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      {:else if img_URL}
        <img src={img_URL} alt="item_image" />
      {/if}
    </div>
  </div>
  <div class="w-1/5 border-2 rounded-xl m-2 p-4">
    {#if assetsInfo}
      <p class="text-2xl">{assetsInfo.name}</p>
      <div class="flex flex-row mt-2">
        <p class="font-bold mr-3">{price} ETH</p>
        <p class="text-gray-500">${Math.ceil(price * ethpricenum)} 3 of 3</p>
      </div>
      <p class="border-2 rounded-3xl w-12 text-center my-6">Art</p>
      <p class="mt-4 text-sm">{assetsInfo.description}</p>
      <div class="my-24">
        <p class="text-gray-400">Owner</p>
        <p class="font-bold">
          @{assetsInfo.owner.user && assetsInfo.owner.user.username}
        </p>
        <p class="text-gray-400">Creator</p>
        <p class="font-bold">
          @{assetsInfo.creator.user && assetsInfo.creator.user.username}
        </p>
      </div>
      <div class="flex flex-row w-full mt-12">
        <button
          class="bg-blue-500 text-white focus:outline-none w-full py-2 rounded-3xl mx-1"
          >Buy</button
        >
        <!-- <button
        class="bg-blue-200 text-blue-500 focus:outline-none w-1/2 py-2 rounded-3xl mx-1"
        disabled>Bid</button> -->
      </div>
      <p class="text-gray-400 text-sm text-center mt-2">
        Service fee <span class="text-black font-bold">2.5%</span>, {price *
          2.5}ETH ${Math.ceil(price * 2.5 * ethpricenum)}
      </p>
    {/if}
  </div>
</div>
