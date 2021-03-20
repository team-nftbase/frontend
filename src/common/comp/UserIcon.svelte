<script>

  export let imgURL;
  export let width;
</script>
<div>
  {#if imgURL}
    <img src={imgURL} alt="user_icon">
  {:else}
    <div id="user_dumy"></div>
  {/if}
</div>

<style>
  #user_dumy{
    background-color: lightgray;
  }
</style>