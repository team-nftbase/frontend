<script>
  import Dropzone from "svelte-file-dropzone";

  let files = {
    accepted: [],
    rejected: [],
  };

  let uploadedImg;

  function handleFilesSelect(e) {
    const { acceptedFiles, fileRejections } = e.detail;
    // console.log(acceptedFiles);
    files.accepted = [...acceptedFiles];
    files.rejected = [...fileRejections];
    let reader = new FileReader();
    reader.readAsDataURL(acceptedFiles[0]);
    reader.onload = (e) => {
      uploadedImg = e.target.result;
    };
  }
</script>

<div class="container mx-auto py-12 px-72">
  <p class="text-3xl text-center">Create single collectible</p>
  <p class="text-xl">Upload file</p>
  <Dropzone multiple={false} on:drop={handleFilesSelect}>
    {#if uploadedImg}
      <img class="mb-4" src={uploadedImg} alt="main_image" />
    {:else}
      <p class="my-24">png, gif, webp, mp4 or mp5</p>
    {/if}
    <button class="w-64 mx-auto">Choose File</button>
  </Dropzone>

  <p class="text-xl mt-8">Name *</p>
  <input class="w-full p-2 rounded-md" placeholder="e.g T shirt" />
  <p class="text-xl mt-8">Description</p>
  <textarea
    class="w-full p-2 rounded-md"
    name="Text1"
    cols="40"
    rows="5"
    placeholder="e.g 이 제품은 메우 기깔 납니다."
  />
  <button class="w-full p-2 rounded-xl bg-blue-600 text-white"
    >Create Item</button
  >
</div>
