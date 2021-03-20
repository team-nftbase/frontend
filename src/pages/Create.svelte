<script>
  import { Link } from "svelte-routing";
  import { _ } from "svelte-i18n";
</script>

<div class="container mx-auto flex flex-col items-center" id="container">
  <div>
    <p class="font-bold" id="title">{$_("create.create_collectible")}</p>
    <div id="line" />
    <p id="caption">
      Create a ‘Single’ collectible if you wish to sell a single limited edition
      of a collectible or choose ‘Multiple’ if you wish to sell a collectible
      multiple times.
    </p>
  </div>
  <div id="createBox" class="flex">
    <Link to="create_single" style="margin-right:90px;">
      <div id="single" class="flex flex-col items-center">
        <p class="text-black">{$_("create.single")}</p>
        <img id="single_image" src="images/Vector_single.png" alt="single" />
        <img src="images/logo.png" alt="logo" width="83px;" height="48px;" />
      </div>
    </Link>
    <Link to="create_single">
      <div id="multiple" class="flex flex-col items-center">
        <p class="text-black">{$_("create.multiple")}</p>
        <img
          id="multiple_image"
          src="images/Vector_multiple.png"
          alt="multiple"
        />
        <img src="images/logo.png" alt="logo" width="83px;" height="48px;" />
      </div>
    </Link>
  </div>
</div>

<style>
  #container {
    margin-top: 109px;
    margin-bottom: 181px;
  }
  #title {
    font-size: 36px;
    margin-left: 171px;
  }
  #line {
    border-bottom-width: 1px;
    width: 307.5px;
    margin-top: 24px;
    margin-bottom: 46.5px;
    margin-left: 171px;
    border-color: rgba(0, 0, 0, 1);
  }
  #caption {
    color: rgba(143, 143, 143, 1);
    width: 705px;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 132.5px;
    margin-left: 171px;
  }
  #createBox {
    width: 1017px;
    height: 582px;
    border-width: 1px;
    border-radius: 15px;
    padding: 79px 230px 116px 261px;
  }
  #single {
    width: 218px;
    height: 387px;
    border-width: 0.5px;
    border-radius: 15px;
    padding-top: 57px;
    padding-bottom: 18px;
  }

  #multiple {
    width: 218px;
    height: 387px;
    border-width: 0.5px;
    border-radius: 15px;
    padding-top: 57px;
    padding-bottom: 18px;
  }
  #single_image {
    margin-top: 53.58px;
    margin-bottom: 90.58px;
  }
  #multiple_image {
    margin-top: 51.75px;
    margin-bottom: 89.69px;
  }
  p {
    font-size: 36px;
    font-weight: bold;
  }
</style>
