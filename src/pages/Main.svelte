<script>
  import CardList from "./comp/main/CardList.svelte";
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
    You can buy, sell, own digital assets - Art, ENS Domains, Game items, Collectibles
  </p>
</div>

<div class="container mx-auto my-12">
  <CardList title="Digital Art" list={digital_art} />
  <CardList title="Virtual Worlds" list={coll} />
  <CardList title="COLLECTIBLES" list={vw} />
</div>
