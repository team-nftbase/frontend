<script>
  import { user } from "../../../common/store/common.store";
  import Clipboard from "svelte-clipboard";
  import { _ } from "svelte-i18n";

  let userData;
  const unsubscribe = user.subscribe(async (value) => {
    userData = value;
  });
  export let is_use_sns = true;
</script>

<div id="banner" class="w-full flex flex-col justify-center items-center">
  <p class="banner_text text-center">{$_("common.banner_here")}</p>

  <div
    class="grid grid-cols-3 banner_bottom w-full items-center justify-items-center"
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
        <img src="resource/${userData.image}.png" alt="ExperimentalLogo" />
      {:else}
        <img src="images/mypage/addimage.png" alt="addimage" />
      {/if}
    </div>

    {#if is_use_sns == true}
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
    {/if}
  </div>
</div>

<style>
  p {
    font-size: 12px;
  }

  #banner {
    height: 335px;
    background-image: url(/images/Gradient.png);
    background-repeat: no-repeat;
    background-size: cover;
  }

  .banner_text {
    width: 620px;
    height: 62px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
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
    background-color: white;
    border-radius: 200px;
    overflow:hidden;
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

  .sns_content img {
    margin-right: 19px;
    width: 15px;
    height: 15px;
  }

  .sns_content p {
    color: #ffffff;
    font-style: normal;
    font-size: 12px;
    line-height: 16px;
  }
</style>
