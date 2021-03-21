<script>
  import { Link } from "svelte-routing";
  import { ItemList } from "common/comp/index.js";
  import { Banner } from "./comp/mypage";

  let tempAsset = {
    token_id:
      "46025880712763272316592122038128663120854570524676624434522209160153639419905",
    name: "CryptoPunk #2145",
    price: 1.50,
    image_thumbnail_url: "https://lh3.googleusercontent.com/VqbZvsvsFHvggE6J4glL29he19_jBeitwxs-SiL90vS6pKQvQ69yhVubTX25aipanM62Z5691Q9lMc_JImW-izNnxXs2AHgAYQVko4w=s128",
    asset_contract: {
      address: "0x495f947276749ce646f68ac8c248420045cb7b5e",
    },
    owner : {
      user : {
        username : "@priyum"
      }
    }
  };
  let assetsList = Array(8).fill({ ...tempAsset });
</script>

<div>
  <Banner is_use_sns={true}/>
  <div class="profile flex flex-col justify-between items-center margin-top-100 ">
    <p class="title">Priyum Kochhar</p>
    <p class="subTitle">@priyum</p>
    <p class="text">
      Priyum Kochhar is a 3D specialist about the artist etc lorem ipsum about
      themselves and quirky description.
    </p>
    <div class="w-full flex flex-row-reverse">
      <div 
        class="edit_profile_button flex justify-center items-center">
        <Link to="editprofile"><p>Edit Profile</p></Link>
      </div>
    </div>
    <ItemList {assetsList} />
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
  .profile {
    margin-left: 150px;
    margin-right: 150px;
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

  .edit_profile_button {
    width: 243px;
    height: 45px;
    background-image: url(/images/Gradient.png);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    margin-bottom : 57px;
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
</style>
