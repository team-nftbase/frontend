<script>
  import { user } from "../common/store/common.store";
  import Clipboard from "svelte-clipboard";
  import { Status, Collections, Categories } from "./comp/explore";
  import { ItemList } from "common/comp/index.js";
  import { Myinfo, Floatingbutton } from "./comp/mypage";

  let userData;
  let assetsList = [];

  const unsubscribe = user.subscribe(async (value) => {
    userData = value;
    if (value.wallet) {
      const res = await fetch(
        `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=500&owner=${value.wallet}`
      );
      const { assets } = await res.json();
      assetsList = assets.filter(
        (item) => item.animation_url || item.collection.image_url
      );
    }
  });
</script>

<div>
  <div id="banner" class="w-full flex flex-col justify-center items-center">
    <p class="banner_text">Banner Image Here</p>

    <div
      class="grid grid-cols-3 banner_bottom w-full flex flex-row items-center justify-items-center"
    >
      <div
        id="clipboard"
        class="flex flex-row items-center bg-black justify-between text-white border-0"
      >
        <p>{userData.wallet}</p>
        <Clipboard
          text={userData.wallet}
          let:copy
          on:copy={() => {
            alert("wallet has copied");
          }}
        >
          <button class="border-none text-2xl" on:click={copy}>
            <img src="images/copy.png" alt="copy_image" />
          </button>
        </Clipboard>
      </div>

      <div id="profile_image">
        {#if userData && userData.image}
          <img src="images/${userData.image}.png" alt="ExperimentalLogo" />
        {:else}
          <img src="images/ExperimentalLogo.png" alt="ExperimentalLogo" />
        {/if}
      </div>

      <div class="sns flex flex-col justify-center items-center">
        <button class="sns_content flex items-center">
          <img src="images/instagram.png" alt="images/instagram.png" />
          <p>Instagram Id</p>
        </button>
        <button class="sns_content flex items-center">
          <img src="images/twitter.png" alt="images/twitter.png" />
          <p>Twitter Username</p>
        </button>
        <button class="sns_content flex items-center">
          <img src="images/facebook.png" alt="images/facebook.png" />
          <p>Facebook URL</p>
        </button>
      </div>
    </div>
  </div>

  <div class="flex flex-col justify-between items-center margin-top-100 ">
    <p class="title">Priyum Kochhar</p>
    <p class="subTitle">@priyum</p>
    <p class="text">
      Priyum Kochhar is a 3D specialist about the artist etc lorem ipsum about
      themselves and quirky description.
    </p>
  </div>
</div>

<style>
  p {
    width: 136px;
    height: 16px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }

  #banner {
    height: 335px;
    background-image: url(/images/Gradient.png);
    background-repeat: no-repeat;
    background-size: cover;
  }

  .banner_text {
    width: 438px;
    height: 62px;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 62px;
    color: #ffffff;
  }

  .banner_bottom {
    position: absolute;
    margin-top: 333px;
  }

  #clipboard {
    width: 400px;
    height: 35px;
    background: #000000;
    border: 1px solid #292929;
    box-sizing: border-box;
    box-shadow: 0px 19px 36px rgba(87, 95, 121, 0.31);
    backdrop-filter: blur(265px);
    border-radius: 15px;
    padding: 18px;
  }

  #profile_image {
    width: 146px;
    height: 146px;
    border-radius: 200px;
  }

  .sns {
    width: 206px;
    height: 148px;
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0px 19px 35px rgba(80, 101, 173, 0.25);
    backdrop-filter: blur(265px);
    border-radius: 15px;
    padding: 16px 16px 5px 16px;
  }

  .sns_content {
    width: 175px;
    height: 32px;
    background: #000000;
    border: 0.5px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 19px 35px rgba(80, 101, 173, 0.25);
    border-radius: 15px;
    margin-bottom: 10px;
    padding-left: 13px;
  }

  .sns_content p {
    color: #ffffff;
  }
  .margin-top-100 {
    margin-top: 100px;
  }

  .title {
    width: 276px;
    height: 47px;
    left: 582px;
    top: 690px;

    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 47px;
    color: #000000;
  }
  .subTitle {
    width: 106px;
    height: 31px;
    left: 667px;
    top: 737px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    background: linear-gradient(272.31deg, #fea1c1 -31.28%, #667dff 92.53%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 21px;
  }
  .text {
    width: 561px;
    height: 46px;
    left: 439px;
    top: 789px;

    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #8f8f8f;
  }
</style>
