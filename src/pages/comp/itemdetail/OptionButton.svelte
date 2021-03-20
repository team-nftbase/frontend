<scrpit />

<div class="flex justify-end">
  <div class="flex flex-row bg-black" id="layout">
    <button on:click={() => {}}
      ><img
        src="images/itemdetail/fa-solid_share-square.png"
        alt="share_icon"
      /></button
    >
    <button on:click={() => {}}
      ><img
        src="images/itemdetail/ic_outline-fullscreen.png"
        alt="fullscreen_icon"
      /></button
    >
  </div>
</div>

<style>
  #layout {
    height: 47px;
    border-radius: 10px;
    padding: 5px 13px;
  }
  button {
    margin-left: 10px;
    border: none;
    color: white;
  }

  button:focus {
    outline: 0;
  }
</style>
