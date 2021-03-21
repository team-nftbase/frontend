<script>
  import { onMount } from "svelte";
  import { OptionButton, UserInfo, PriceInfo } from "./comp/itemdetail";
  import { HorizenLine } from "common/comp/index.js";
  import axios from "axios";
  import ethPrice from "eth-price";
  import { base_url } from "common/properties.js";

  let assetsInfo = {},
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
      const response = await axios.post(
        base_url + "api/itemdetail/selectList",
        {
          id: params.item_id,
        }
      );
      assetsInfo = response.data[0];

      console.log(assetsInfo);
    });
  } else {
    assetsInfo = {
      name: "MEMOJI #0001",
      image_thumbnail:
        "https://cdn.decrypt.co/resize/1400/wp-content/uploads/2021/02/Trump-win.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing 
elit. Sed sed suspendisse feugiat feugiat amet, morbi
libero, a. Amet, sed aliquam facilisi massa mauris nunc. 
Leo egestas turpis nisl tincidunt imperdiet aliquet viverra
odio. Nam vitae nibh eget porta velit, sem.`,
      owner_name: "limkukhyun",
      creator_name: "limkukhyun",
    };
  }
</script>

<div class="container mx-auto">
  <OptionButton />
  <div class="flex justify-center">
    <div id="image_frame">
      {#if assetsInfo.image_thumbnail}
        <img
          id="main_image"
          src={base_url+"resource/"+assetsInfo.image_thumbnail}
          alt="item_image"
        />
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
          <UserInfo userType="Creator" userName={assetsInfo.creator_name} />
          <UserInfo userType="Owner" userName={assetsInfo.owner_name} />
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
