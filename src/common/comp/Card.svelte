<script>
  import Link from "svelte-routing/src/Link.svelte";
  import { _ } from "svelte-i18n";
  import { base_url } from "common/properties.js";

  export let itemInfo;
</script>

<Link to={`itemdetail/${itemInfo.id}`}>
  <div id="layout">
    <div class="flex justify-center">
      {#if itemInfo.image_thumbnail && itemInfo.image_thumbnail.slice(-3) !== "mp4"}
        <img
          src={`${base_url}resource/${itemInfo.image_thumbnail}`}
          alt="main_image"
        />
      {:else if itemInfo.image_thumbnail}
        <video src={`${base_url}resource/${itemInfo.image_thumbnail}`}
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
      {#if itemInfo.username}
        <p id="username">@{itemInfo.username}</p>
      {/if}
    </div>

    <div
      class="bid grid grid-cols-3 items-center jusify-items-center"
    >
      <div class="flex flex-col items-center">
        <p class="currnt_bid">Current price</p>
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
    width: 100%;
    box-shadow: 0px 9px 32px rgba(69, 109, 252, 0.1);
  }
  img {
    width: 100%;
  }

  .info {
    margin-left: 22px;
    margin-bottom: 10px;
  }

  #title {
    width: 240px;
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
    width: 240px;
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
  .eye {
    width: 26px;
    height: 27px;
    margin-right: 11px;
  }
</style>
