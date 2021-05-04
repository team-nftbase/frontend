<script>
  import { _ } from "svelte-i18n";
  import axios from "axios";
  import { base_url } from "common/properties.js";
  import { navigate } from "svelte-routing";
  import { user } from "../common/store/common.store";
  let userData;
  user.subscribe(async (value) => {
    userData = value;
  });

  let preview;
  let imagefile;
  let reader = new FileReader();
  let listInfo = {};

  const imageChanged = (e) => {
    if (e.target.files.length) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        preview = e.target.result;
      };
      imagefile = e.target.files[0];
    } else {
      preview = "Fail to upload, please reupload file";
    }
  };

  const handleChange = (e) => {
    listInfo[e.target.name] = e.target.value;
  };

  const canSubmitted = () => {
    return listInfo.name && listInfo.description && listInfo.royalty;
  };

  async function handleUpload() {
    if (!canSubmitted()) {
      alert("Check your items");
      return;
    }
    const formData = new FormData();
    formData.append("file", imagefile);
    formData.append("name", listInfo.name);
    formData.append("description", listInfo.description);
    formData.append("royalty", listInfo.royalty);
    formData.append("user_id", userData.id);
    const request = await axios.post(
      base_url + "api/imageUpload/singleImage",
      formData
    );
    if (request.data.result) {
      navigate(`mypage`, { replace: true });
    } else {
      alert("Check your items");
    }
  }
</script>

<div id="container" class="container mx-auto flex flex-col items-center">
  <div class="flex" style="width:976px;">
    <button
      id="back"
      on:click={() => {
        navigate(`create`, { replace: true });
      }}
      class="rounded-full bg-black flex items-center justify-center"
    >
      <img src="images/arrow-left.png" alt="arrow" />
    </button>
    <p id="title">{$_("createsingle.collectible")}</p>
  </div>
  <div style="width:976px;">
    <div id="line" />
  </div>

  <div class="flex">
    <div style="margin-right:42px;">
      <p class="font-bold" style="font-size:24px;">{$_("createsingle.uploadfiletitle")}</p>
      <div id="uploadBox" class="flex flex-col items-center border">
        <p style="font-size:14px;">PNG, GIF, WEBP, MP4 or MP3 ( MAX 30 mb )</p>
        <input
          class="hidden"
          id="upload"
          name="upload"
          type="file"
          on:change={(e) => {
            if (e.target.files.length > 0) {
              imageChanged(e);
            }
          }}
        />
        <label for={"upload"} style="cursor:pointer;">
          <button
            class="relative text-white border-0"
            style="margin-top:15px; z-index:-1;"
            ><img src="images/uploadButton.png" alt="uploadbutton" />
            <p id="btn_text">{$_("createsingle.choosephoto")}</p></button
          >
        </label>
      </div>

      <div id="inputBox" class="flex flex-col border">
        <p class="font-bold" style="font-size:18px;">{$_("create.name")}</p>
        <input
          name="name"
          on:change={handleChange}
          placeholder="Enter the name of your NFT item"
        />
        <p class="font-bold" style="font-size:18px;">
          {$_("create.description")}
        </p>
        <textarea
          name="description"
          on:change={handleChange}
          cols="40"
          rows="5"
          placeholder="Enter introduction of this NFT item"
        />
        <p class="font-bold" style="font-size:18px;">{$_("createsingle.royalties")}</p>
        <input
          name="royalty"
          on:change={handleChange}
          placeholder="% Of share of the secondary sales"
        />
        <p class="font-bold" style="font-size:18px; margin-bottom:26px;">
          {$_("createsingle.choosecollection")}
        </p>

        <button class="collection flex items-center" disabled>
          <img src="images/Emoji.png" alt="emoji" />
          {$_("createsingle.collection")}
        </button>

        <button class="collection flex items-center">
          <img src="images/small_logo.png" alt="small_logo" />
          NFTBase (NFTBASE$)
        </button>

        <button id="btn_create_collection" disabled
          >{$_("createsingle.create")}</button
        >
      </div>
    </div>
    <div>
      <p class="font-bold" style="font-size:24px;">{$_("createsingle.preview")}</p>

      <div id="previewBox" class="border flex justify-center items-center">
        {#if preview}
          <img class="mb-4" src={preview} alt="preview_image" />
        {:else}
          <p style="font-size:14px;">{$_("createsingle.uploadfile")}</p>
        {/if}
      </div>

      <div id="createBox" class="border flex justify-center items-center">
        <button class="relative text-white border-0" on:click={handleUpload}
          ><img src="images/createButton.png" alt="createbutton" />
          <p id="btn_txt_create">{$_("create.create_item")}</p></button
        >
      </div>
    </div>
  </div>
</div>

<style>
  #container {
    margin-top: 106px;
  }
  #back {
    width: 48px;
    height: 48px;
    margin-right: 87px;
  }

  #title {
    font-weight: bold;
    font-size: 36px;
  }
  #line {
    border-bottom-width: 1px;
    width: 307.5px;
    margin-top: 24px;
    margin-bottom: 42px;
    margin-left: 135px;
    border-color: rgba(0, 0, 0, 1);
  }
  #uploadBox {
    border-radius: 15px;
    width: 486px;
    height: 167px;
    padding-top: 52px;
    padding-bottom: 44px;
    margin-top: 18px;
    margin-bottom: 46px;
    border-color: rgba(0, 0, 0, 1);
  }
  #btn_text {
    position: absolute;
    font-size: 14px;
    top: 10px;
    left: 38px;
  }
  #inputBox {
    border-radius: 15px;
    width: 486px;
    padding-top: 50px;
    padding-left: 53px;
    margin-bottom: 74px;
    border-color: rgba(0, 0, 0, 1);
  }

  input {
    margin-top: 19px;
    margin-bottom: 19px;
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom-width: 1;
    width: 381.5px;
  }

  textarea {
    margin-top: 19px;
    margin-bottom: 19px;
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom-width: 1;
    width: 381.5px;
  }
  button.collection {
    font-size: 12px;
    border-radius: 15px;
    width: 218px;
    height: 47px;
    margin-bottom: 24px;
    padding-left: 20px;
  }

  #btn_create_collection {
    background-color: black;
    color: white;
    font-size: 12px;
    border-radius: 15px;
    width: 166px;
    height: 47px;
    margin-top: 3px;
    margin-bottom: 61px;
    box-shadow: 0px 19px 35px rgba(80, 101, 173, 0.25);
  }
  #previewBox {
    border-radius: 15px;
    width: 448px;
    height: 387px;
    margin-top: 18px;
    margin-bottom: 29px;
    border-color: rgba(0, 0, 0, 1);
  }

  #createBox {
    border-radius: 15px;
    width: 448px;
    height: 161px;
    margin-top: 18px;
    margin-bottom: 29px;
    border-color: rgba(0, 0, 0, 1);
  }

  #btn_txt_create {
    position: absolute;
    font-size: 18px;
    top: 19px;
    left: 121px;
  }
</style>
