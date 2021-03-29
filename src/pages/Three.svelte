<script>
  import TopSeller from "./comp/showcase/TopSeller.svelte";
  import ShowCaseList from "./comp/showcase/ShowCaseList.svelte";
  import ShowCaseCanvas from "./comp/showcase/ShowCaseCanvas.svelte";
  import ArtistsList from "./comp/showcase/ArtistsList.svelte";

  let sellers = [
    {
      name : "Pak",
      img : "images/ExperimentalLogo.png",
      totalPrice : 320
    },
    {
      name : "Pak",
      img : "images/ExperimentalLogo.png",
      totalPrice : 320
    },
    {
      name : "Pak",
      img : "images/ExperimentalLogo.png",
      totalPrice : 320
    },
  ]

  let showcaseList = [
    {
      title : "Gradient Abyss",
      img : "images/tempShowRoom.png" 
    },
    {
      title : "3D Safari",
      img : "images/tempShowRoom.png" 
    },
    {
      title : "Flat Art Bonanza",
      img : "images/tempShowRoom.png" 
    },
    {
      title : "Memes Hub",
      img : "images/tempShowRoom.png" 
    },
  ]

  let artistsList = [
    {
      name : "beeple",
      totalPrice: 100.5,
      img : "images/ExperimentalLogo.png",
    },
    {
      name : "beeple",
      totalPrice: 100.5,
      img : "images/ExperimentalLogo.png",
    },
    {
      name : "beeple",
      totalPrice: 100.5,
      img : "images/ExperimentalLogo.png",
    },
    {
      name : "beeple",
      totalPrice: 100.5,
      img : "images/ExperimentalLogo.png",
    },
  ]
</script>

<div class="container mx-auto flex flex-row ">
  <div id="info-container" class="flex flex-col">
    <TopSeller sellers={sellers}/>
    <ShowCaseList showcaseList={showcaseList}/>
  </div>
  <div id="showcase-container">
    <ShowCaseCanvas/>
    <ArtistsList artistsList={artistsList}/>
  </div>
  
</div>

<style>
  #info-container {
    margin-right: 37px;
  }
  
</style>
