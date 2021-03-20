<script>
  export let userType;
  export let userName;
</script>

<div class="flex mb-2">
  <!-- <img src="" alt="" /> -->
  <div />
  <div>
    <p id="usertype">{userType}</p>
    <p id="username">@{userName}</p>
  </div>
</div>

<style>
  #usertype {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #a6a6a6;
  }

  #username {
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    color: #000000;
  }
</style>
