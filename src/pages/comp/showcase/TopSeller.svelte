<script>
  import { _ } from "svelte-i18n";
  export let sellers = [];
</script>

<div
  class="border border-gray-400 rounded-xl"
  style="width:250px; padding-bottom:20px; margin-bottom:20px"
>
  <div
    class="rounded-xl background-gradient flex items-center"
    style="height:40px; margin:6px"
  >
    <p class="text-white" style="font-size:18px; margin-left:17px;">
      {$_("topseller.title")}
    </p>
  </div>
  {#each sellers as seller}
    <div
      class="border-radius flex flex-rows justify-between items-center"
      style="margin: 13px 16px 0 16px; padding: 0 7px 0"
    >
      <div class="profile_image">
        <img src={seller.img} alt="ExperimentalLogo" />
      </div>
      <p class="top-sellers-p" style="font-size:18px">{seller.name}</p>
      <p class="top-sellers-p" style="font-size:18px">{seller.totalPrice}ETH</p>
    </div>
  {/each}
</div>

<style>
  .border-radius {
    border: 0.5px solid #000000;
    box-sizing: border-box;
    border-radius: 15px;
  }
  .background-gradient {
    background-image: url(/images/Gradient.png);
    background-repeat: no-repeat;
    background-size: cover;
  }

  .profile_image {
    width: 23px;
    border-radius: 200px;
  }

  .top-sellers-p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
  }
</style>
