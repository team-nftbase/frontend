<script>
  import { Link } from "svelte-routing";
</script>

<div class="flex justify-center">
  <div class="flex flex-row bg-black" id="layout">
    <Link to="explore"><p id="art">Art</p></Link>
    <Link to="explore"><p id="domains">Domains</p></Link>
    <Link to="explore"><p id="virtual_worlds">Virtual Worlds</p></Link>
    <Link to="explore"><p id="collectibles">Collectibles</p></Link>
    <Link to="explore"><p id="game">Game</p></Link>
    <Link to="explore"><p id="defi">DeFi</p></Link>
    <Link to="explore"><p id="others">Others</p></Link>
  </div>
</div>

<style>
  #layout {
    box-shadow: 0px 19px 35px rgba(80, 101, 173, 0.25);
    border-radius: 15px;
    margin-bottom: 47px;
    margin-top: 26px;
  }
  p {
    padding: 2px 6px;
    margin: 8px 30px;
    font-size: 14px;
    color: white;
  }
</style>
