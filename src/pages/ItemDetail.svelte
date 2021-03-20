<script>
  import { onMount } from "svelte";
  import { OptionButton, UserInfo, PriceInfo } from "./comp/itemdetail";
  import { HorizenLine } from "common/comp/index.js";
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

<div class="container mx-auto">
  <OptionButton />
  <div class="flex justify-center">
    <div id="image_frame">
      {#if img_URL && img_URL.slice(-3) === "mp4"}
        <video src={img_URL}
          ><track default kind="captions" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      {:else if img_URL}
        <img id="main_image" src={img_URL} alt="item_image" />
      {/if}
    </div>
    <div id="item_info">
      {#if assetsInfo}
        <p id="title">{assetsInfo.name}</p>
        <PriceInfo price={assetsInfo.price} {ethpricenum} />
        <p class="border-2 rounded-3xl w-12 text-center my-6">Art</p>
        <p id="desc_title">Description -</p>
        <p id="description">{assetsInfo.description}</p>
        <button id="buy_button"><p>Buy</p></button>
        <HorizenLine width={176.5} />
        <!-- <button
        class="bg-blue-200 text-blue-500 focus:outline-none w-1/2 py-2 rounded-3xl mx-1"
        disabled>Bid</button> -->
        <div class="mt-8">
          <UserInfo
            userType="Creator"
            userName={assetsInfo.creator.user.username}
          />
          <UserInfo
            userType="Owner"
            userName={assetsInfo.owner.user.username}
          />
        </div>
        <p class="text-gray-400 text-sm text-center mt-2">
          Service fee <span class="text-black font-bold">2.5%</span>, {price *
            2.5}ETH ${Math.ceil(price * 2.5 * ethpricenum)}
        </p>
      {/if}
    </div>
  </div>
</div>

<style>
  #title {
    font-size: 36px;
    line-height: 46.87px;
    font-weight: 500;
  }
  #main_image {
    width: 640px;
    padding-right: 80.5px;
    padding-left: 80.5px;
    padding-bottom: 110px;
    border-bottom: 1px solid;
  }

  #item_info {
    padding-left: 80.5px;
    padding-bottom: 70px;
    margin-bottom: 70px;
    border-left: 1px solid;
  }

  #desc_title {
    font-size: 18px;
    font-weight: 500;
    color: #000000;
  }
  #description {
    width: 315px;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 44px;
    color: #555555;
  }

  #buy_button {
    width: 318px;
    height: 72px;
    background: #000000;
    box-shadow: 0px 19px 35px rgba(80, 101, 173, 0.25);
    border-radius: 15px;
    margin-bottom: 47px;
  }
  #buy_button > p {
    font-size: 24px;
    color: white;
    font-weight: 400;
  }
</style>
