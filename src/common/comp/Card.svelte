<script>
  import Link from "svelte-routing/src/Link.svelte";
  import { _ } from "svelte-i18n";

  export let itemInfo;
</script>

<Link to={`itemdetail/${itemInfo.asset_contract.address}/${itemInfo.token_id}`}>
  <div id="layout">
    <div class="flex justify-center">
      {#if itemInfo.image_thumbnail_url && itemInfo.image_thumbnail_url.slice(-3) !== "mp4"}
        <img src={itemInfo.image_thumbnail_url} alt="main_image" />
      {:else if itemInfo.image_thumbnail_url}
        <video src={itemInfo.image_thumbnail_url}
          ><track default kind="captions" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      {:else if itemInfo.animation_url}
        <video src={itemInfo.animation_url}
          ><track default kind="captions" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      {/if}
    </div>
    <hr />
    <div class="info">
      {#if itemInfo.name}
        <p id="title">{itemInfo.name}</p>
      {/if}
      {#if itemInfo.owner && itemInfo.owner.user && itemInfo.owner.user.username}
        <p id="username">{itemInfo.owner.user.username}</p>
      {/if}
    </div>

    <div
      class="bid grid grid-cols-3 flex flex-row items-center jusify-items-center"
    >
      <div class="flex flex-col items-center">
        <p class="currnt_bid">Current Bid</p>
        <p class="eth">{itemInfo.price} ETH</p>
      </div>
      <div class="flex flex-col justify-center items-center">
        <div class="heart flex flex-col justify-center items-center">
          <img
            class="heart_img"
            src="images/heart.png"
            alt="images/heart.png"
          />
        </div>
      </div>
      <div class="flex flex-row items-center justify-center">
        <img class="eye" src="images/eye.png" alt="images/eye.png" />
        <p>View</p>
      </div>
    </div>
  </div>
</Link>

<style>
  #layout {
    box-shadow: 0px 9px 32px rgba(69, 109, 252, 0.1);
  }
  img {
    width: 264px;
    height: 265px;
  }

  .info {
    margin-left: 22px;
    margin-bottom: 10px;
  }

  #title {
    width: 176px;
    height: 25px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    color: #000000;
    margin-top: 22px;
  }

  #username {
    width: 55px;
    height: 17px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #000000;
  }

  .bid {
    height: 76px;
    background: #000000;
    box-shadow: 0px 9px 32px rgba(69, 109, 252, 0.1);
    border-radius: 15px;
  }

  .bid p {
    color: #ffffff;
  }

  .currnt_bid {
    font-size: 12px;
  }

  .eth {
    font-size: 16px;
  }

  .heart {
    width: 46px;
    height: 46px;
    background-image: url(/images/Gradient.png);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 200px;
  }
  .heart_img {
    width: 22.65px;
    height: 20.51px;
  }

  .vl {
    border-left: 1px solid #ffffff;
    /* height: 500px; */
    left: 50%;
    margin-left: -3px;
    top: 0;
  }
  .eye {
    width: 26px;
    height: 27px;
    margin-right: 11px;
  }
</style>
