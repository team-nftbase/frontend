<script>
  import { _ } from "svelte-i18n";

  // let files = {
  //   accepted: [],
  //   rejected: [],
  // };

  // let uploadedImg;

  // function handleFilesSelect(e) {
  //   const { acceptedFiles, fileRejections } = e.detail;
  //   files.accepted = [...acceptedFiles];
  //   files.rejected = [...fileRejections];
  //   if (files.accepted.length) {
  //     let formData = new FormData();
  //     console.log(acceptedFiles[0]);
  //     formData.append("file", acceptedFiles[0]);
  //     const request = fetch(
  //       "http://localhost:3000" + "/api/imageUpload/singleImage",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "image/png",
  //         },
  //         body: { data: acceptedFiles[0] },
  //       }
  //     );
  //     // return () => request.then((response) => console.log(response.data.data));
  //   }
  //   let reader = new FileReader();
  //   reader.readAsDataURL(acceptedFiles[0]);
  //   reader.onload = (e) => {
  //     uploadedImg = e.target.result;
  //   };
  // }
</script>

<div id="container" class="container mx-auto flex flex-col items-center">
  <div class="flex" style="width:976px;">
    <div
      id="back"
      class="rounded-full bg-black flex items-center justify-center"
    >
      <img src="images/arrow-left.png" alt="arrow" />
    </div>
    <p id="title">{$_("create.create_single_collectible")}</p>
  </div>
  <div style="width:976px;">
    <div id="line" />
  </div>

  <div class="flex">
    <div style="margin-right:42px;"> 
      <p class="font-bold" style="font-size:24px;">Upload file</p>
      <div id="uploadBox" class="flex flex-col items-center border">
        <p style="font-size:14px;">PNG, GIF, WEBP, MP4 or MP3 ( MAX 30 mb )</p>
        <input class="hidden" id="upload" type="file" />
        <label for="upload">
          <button class="relative text-white border-0" style="margin-top:15px;"
            ><img src="images/uploadButton.png" alt="uploadbutton" />
            <p id="btn_text">Choose Photo or Video</p></button
          >
        </label>
      </div>

      <div id="inputBox" class="flex flex-col border">
        <p class="font-bold" style="font-size:18px;">{$_("create.name")}</p>
        <input placeholder="e.g T shirt" />
        <p class="font-bold" style="font-size:18px;">
          {$_("create.description")}
        </p>
        <textarea
          name="Text1"
          cols="40"
          rows="5"
          placeholder="e.g 이 제품은 메우 기깔 납니다."
        />
        <p class="font-bold" style="font-size:18px;">Royalties</p>
        <input placeholder="% Of share of the secondary sales" />
        <p class="font-bold" style="font-size:18px; margin-bottom:26px;">
          Choose a collection
        </p>

        <button class="collection flex items-center">
          <img src="images/Emoji.png" alt="emoji" />
          Collection - First 5000 Days
        </button>

        <button class="collection flex items-center">
          <img src="images/small_logo.png" alt="small_logo" />
          NFTBase (NFTBASE$)
        </button>

        <button id="btn_create_collection">Create a new collection</button>
      </div>
    </div>
    <div>
      <p class="font-bold" style="font-size:24px;">Preview</p>

      <div id="previewBox" class='border'/>

      <div id="createBox" class='border flex justify-center items-center'>
        <button class="relative text-white border-0"
        ><img src="images/createButton.png" alt="createbutton" />
        <p id="btn_txt_create">{$_("create.create_item")}</p></button
      >
      </div>
    </div>
  </div>
</div>

<style>
  #container{
    margin-top:106px;
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

  #createBox{
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
