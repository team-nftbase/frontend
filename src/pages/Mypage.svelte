<script>
  import { onMount } from "svelte";
  import { Link } from "svelte-routing";
  import { ItemList } from "common/comp/index.js";
  import { Banner } from "./comp/mypage";
  import { _ } from "svelte-i18n";
  import axios from "axios";
  import { base_url } from "common/properties.js";
  import { HorizenLine } from "common/comp/index.js";
  import { user } from "../common/store/common.store";

  let userData;
  user.subscribe(async (value) => {
    userData = value;
  });
  let assetsList = [];

  let status = "normal";

  onMount(async () => {
    if (userData.id) {
      const response = await axios.post(
        base_url + "api/mypage/selectListByUser",
        {
          user_id: userData.id,
        }
      );
      assetsList = response.data;
    }
  });

  const handleSell = () => {
    status = "sell";
  };

  const handleTransfer = () => {
    status = "transfer";
  };

  const handleCancel = () => {
    status = "normal";
  };
</script>

<div>
  <Banner is_use_sns={true} />
  <div
    class="profile flex flex-col justify-between items-center margin-top-100 "
  >
    <p class="title">
      {userData.name ? userData.name : $_("mypage.edit_your_profile")}
    </p>
    <p class="subTitle">
      @{userData.username ? userData.username : $_("mypage.nickname")}
    </p>
    <p class="text">
      {userData.bio ? userData.username : $_("mypage.introduce_yourself")}
    </p>
    <div class="w-full flex flex-row-reverse">
      <div class="edit_profile_button flex justify-center items-center">
        <Link to="editprofile"><p>{$_("mypage.edit_profile")}</p></Link>
      </div>
    </div>
    <ItemList {assetsList} />
    {#if assetsList.length !== 0}
      <div class="container flex justify-end" id="button_set">
        <button
          class={status === "transfer"
            ? "hidden w-0 h-0"
            : "flex justify-center items-center btn_size background-gradient"}
          on:click={handleSell}
        >
          <i class="fas fa-tag text-2xl mr-2" />
          <p>{$_("mypage.sell")}</p>
        </button>
        <button
          class={status === "sell"
            ? "hidden w-0 h-0"
            : "flex justify-center items-center btn_size background-gradient"}
          on:click={handleTransfer}
        >
          <i class="far fa-paper-plane text-2xl mr-2" />
          <p>{$_("mypage.transfer")}</p>
        </button>
        <button
          class={status === "normal"
            ? "hidden w-0 h-0"
            : "flex justify-center items-center btn_size background-gradient"}
          on:click={handleCancel}
        >
          <i class="far fa-times-circle text-2xl mr-2" />
          <p>{$_("mypage.cancel")}</p>
        </button>
        <!-- <button><img src="images/mypage/btn_sell.png" alt="btn_sell"/></button> -->
      </div>
    {/if}
    <HorizenLine width={471.5} />
    <div style="margin-top:29px;" />
  </div>
</div>

<style>
  p {
    height: 16px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }

  .background-gradient:hover {
    background-image: url(/images/Gradient.png);
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
  }
  .profile {
    margin-left: 150px;
    margin-right: 150px;
  }

  .margin-top-100 {
    margin-top: 100px;
  }

  .title {
    /* text-align: center; */
    height: 47px;

    top: 690px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 47px;
    color: #000000;
  }
  .subTitle {
    /* text-align: center; */
    height: 31px;

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

  .edit_profile_button {
    width: 243px;
    height: 45px;
    background-image: url(/images/Gradient.png);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    margin-bottom: 57px;
  }

  .edit_profile_button p {
    width: 106px;
    height: 19px;
    left: 1122px;
    top: 877px;

    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    color: #ffffff;
  }

  #button_set {
    margin-top: 66px;
    margin-bottom: 34px;
  }

  .btn_size {
    width: 156px;
    height: 58px;
    padding: 0px;
    margin-right: 9px;
    border: 0.5px solid #000000;
    box-sizing: border-box;
    filter: drop-shadow(0px 19px 35px rgba(80, 101, 173, 0.25));
    border-radius: 10px;
  }
</style>
