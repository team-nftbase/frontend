<script>
  import { user } from "../common/store/common.store";
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
  <Myinfo {userData} />

  <div class="flex w-full p-4">
    <div class="w-1/5">
      <Status />
      <Collections />
    </div>
    <div class="flex flex-col w-4/5">
      <div class="flex justify-between">
        <Categories />
        <button class="flex items-center px-4 focus:outline-none rounded-2xl">
          <span class="material-icons"> tune </span>
          <p>Filter & Sort</p>
        </button>
      </div>
      <ItemList {assetsList} />
    </div>
  </div>
  <Floatingbutton />
</div>
