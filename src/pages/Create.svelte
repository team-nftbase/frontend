<script>
  import { Link } from "svelte-routing";
  import { HorizenLine } from "common/comp/index.js";
  import { _ } from "svelte-i18n";
</script>

<div id="background_vector">
  <div class="container mx-auto flex flex-col items-center" id="container">
    <div id="layout">
      <p class="font-bold" id="title">{$_("create.create_collectible")}</p>
      <HorizenLine width={307.5} />
      <p id="caption">
        Create a ‘Single’ collectible if you wish to sell a single limited
        edition of a collectible or choose ‘Multiple’ if you wish to sell a
        collectible multiple times.
      </p>
    </div>
    <div id="createBox" class="flex">
      <Link to="create_single" style="margin-right:90px;">
        <div id="single" class="flex flex-col items-center">
          <p class="text-black">{$_("create.single")}</p>
          <img id="single_image" src="images/Vector_single.png" alt="single" />
          <img src="images/logo.png" alt="logo" width="60px" />
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
          <img src="images/logo.png" alt="logo" width="60px" />
        </div>
      </Link>
    </div>
  </div>
</div>

<style>
  #background_vector {
    
    background-image: url(/images/create/vector_line.png);
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  #container {
    margin-top: 109px;
    padding-bottom: 181px;
  }
  #title {
    font-size: 36px;
    margin-bottom: 24px;
  }
  #layout {
    margin-left: 120px;
  }
  #caption {
    color: rgba(143, 143, 143, 1);
    width: 705px;
    font-weight: 500;
    font-size: 18px;
    margin-top: 46.5px;
    margin-bottom: 132.5px;
  }
  #createBox {
    width: 1017px;
    height: 582px;
    border-width: 1px;
    border-radius: 15px;
    padding: 79px 230px 116px 261px;
    background-color: white;
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
