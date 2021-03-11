<script>
  import axios from "axios";
  import Dropzone from "svelte-file-dropzone";
  import { _ } from "svelte-i18n";

  let files = {
    accepted: [],
    rejected: [],
  };

  let uploadedImg;

  function handleFilesSelect(e) {
    const { acceptedFiles, fileRejections } = e.detail;
    files.accepted = [...acceptedFiles];
    files.rejected = [...fileRejections];
    if (files.accepted.length) {
      let formData = new FormData();
      formData.append('file', acceptedFiles);
      console.log(formData)
      const request = axios.post(
        "http://localhost:3000" + "/api/fileupload/singleImage",
        formData
      );
      // return () => request.then((response) => console.log(response.data.data));
    }
    let reader = new FileReader();
    reader.readAsDataURL(acceptedFiles[0]);
    reader.onload = (e) => {
      uploadedImg = e.target.result;
    };
  }
</script>

<div class="container mx-auto py-12 px-72">
  <p class="text-3xl text-center">{$_("create.create_single_collectible")}</p>
  <p class="text-xl">Upload file</p>
  <Dropzone multiple={false} on:drop={handleFilesSelect}>
    {#if uploadedImg}
      <img class="mb-4" src={uploadedImg} alt="main_image" />
    {:else}
      <p class="my-24">png, gif, webp, mp4 or mp5</p>
    {/if}
    <button class="w-64 mx-auto"
      >{$_("create.create_single_collectible")}</button
    >
  </Dropzone>

  <p class="text-xl mt-8">{$_("create.name")} *</p>
  <input class="w-full p-2 rounded-md" placeholder="e.g T shirt" />
  <p class="text-xl mt-8">{$_("create.description")}</p>
  <textarea
    class="w-full p-2 rounded-md"
    name="Text1"
    cols="40"
    rows="5"
    placeholder="e.g 이 제품은 메우 기깔 납니다."
  />
  <button class="w-full p-2 rounded-xl bg-blue-600 text-white"
    >{$_("create.create_item")}</button
  >
</div>
