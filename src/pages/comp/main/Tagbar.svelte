<script>
  import { Link } from "svelte-routing";
  import { _ } from "svelte-i18n";
</script>

<div class="flex justify-center">
  <div class="flex flex-row bg-black" id="layout">
    <Link to="explore"><p id="art">{$_("tagbar.art")}</p></Link>
    <Link to="explore"><p id="domains">{$_("tagbar.domains")}</p></Link>
    <Link to="explore"><p id="virtual_worlds">{$_("tagbar.virtual_worlds")}</p></Link>
    <Link to="explore"><p id="collectibles">{$_("tagbar.collectibles")}</p></Link>
    <Link to="explore"><p id="game">{$_("tagbar.game")}</p></Link>
    <Link to="explore"><p id="defi">{$_("tagbar.defi")}</p></Link>
    <Link to="explore"><p id="others">{$_("tagbar.others")}</p></Link>
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

  p:hover {
    text-decoration: underline;
  }
</style>
