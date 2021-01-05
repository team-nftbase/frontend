<script>
  import Card from "./comp.main/Card.svelte";
  let img_demoURL =
    "https://allonline365.com/wp-content/uploads/2019/08/technology-in-digital-transformation-1440x1008-1024x717.jpg";

  let vw = [
    {
      img: img_demoURL,
      collection: "Town Star",
      title: "Smiling Smurf",
      price: 23.24,
    },
    {
      img: img_demoURL,
      collection: "Town Star",
      title: "Smiling Smurf",
      price: 23.24,
    },
  ];
  let coll = [
    {
      img: img_demoURL,
      collection: "Town Star",
      title: "Smiling Smurf",
      price: 23.24,
    },
    {
      img: img_demoURL,
      collection: "Town Star",
      title: "Smiling Smurf",
      price: 23.24,
    },
  ];
  let digital_art = [
    {
      img: img_demoURL,
      collection: "Town Star",
      title: "Smiling Smurf",
      price: 23.24,
    },
    {
      img: img_demoURL,
      collection: "Town Star",
      title: "Smiling Smurf",
      price: 23.24,
    },
    {
      img: img_demoURL,
      collection: "Town Star",
      title: "Smiling Smurf",
      price: 23.24,
    },
    {
      img: img_demoURL,
      collection: "Town Star",
      title: "Smiling Smurf",
      price: 23.24,
    },
    {
      img: img_demoURL,
      collection: "Town Star",
      title: "Smiling Smurf",
      price: 23.24,
    },
  ];
</script>

<div class="bg-blue-700 p-24">
  <p class="text-5xl text-white font-bold mb-12">
    The marketplace where<br />Valuable digital assets are
  </p>
  <p class="text-xl text-white">
    Buy,sell, own digital assets - Art, ENS Domains, Game items, Collectibles
  </p>
</div>

<div class="container mx-auto my-12">
  <p class="font-bold mt-12 mb-4">Digital Art</p>
  <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-4">
    {#each digital_art as itemInfo}
      <Card {itemInfo} />
    {/each}
  </div>
  <p class="font-bold mt-12 mb-4">Virtual Worlds</p>
  <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-4">
    {#each coll as itemInfo}
      <Card {itemInfo} />
    {/each}
  </div>
  <p class="font-bold mt-12 mb-4">COLLECTIBLES</p>
  <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-4">
    {#each vw as itemInfo}
      <Card {itemInfo} />
    {/each}
  </div>
</div>
