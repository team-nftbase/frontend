<script>
    import { user } from "../../../common/store/common.store";
    import Clipboard from "svelte-clipboard";

    let userData;
    const unsubscribe = user.subscribe(async (value) => {
        userData = value;
    });
</script>

<div id="banner" class="w-full flex flex-col justify-center items-center">
    <p class="banner_text">Banner Image Here</p>

    <div class="grid grid-cols-3 banner_bottom w-full items-center justify-items-center">
        <div id="clipboard" class="flex flex-row items-center bg-black justify-between text-white border-0">
            <p>{userData.wallet}</p>
            <Clipboard
                text={userData.wallet}
                let:copy
                on:copy={() => {
                    alert("wallet has copied");
                }}>
                <button class="border-none text-2xl" on:click={copy}>
                    <img src="images/copy.png" alt="copy_image" />
                </button>
            </Clipboard>
        </div>

        <div id="profile_image">
            {#if userData && userData.image}
                <img src="images/${userData.image}.png" alt="ExperimentalLogo"/>
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

<style>
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
</style>