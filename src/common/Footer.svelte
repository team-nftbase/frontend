<script>
  import { Link } from "svelte-routing";
  import { user } from "./store/common.store";
  import { login } from "./account";

  let userData = true;

  const unsubscribe = user.subscribe((value) => {
    userData = value;
  });
</script>

<div class="bg-fixed " id="footerMain">
  <div class="container mx-auto grid grid-cols-2 p-4">
    <div>
      <img
        src="images/logo_letter_white.png"
        width="268px"
        height="152px"
        alt="footerLogo"
        id="footerLogo"
      />
    </div>
    <div class="grid grid-cols-4">
      <div>
        <Link to="explore"><p>Marketplace</p></Link>
        <Link to="explore"><p>Art</p></Link>
        <Link to="explore"><p>Domains</p></Link>
        <Link to="explore"><p>Virtual Worlds</p></Link>
        <Link to="explore"><p>Collectibles</p></Link>
        <Link to="explore"><p>Game</p></Link>
        <Link to="explore"><p>Defi</p></Link>
        <Link to="explore"><p>Others</p></Link>
      </div>
      <div>
        <Link to="explore"><p>Explore</p></Link>
        <Link to="fnq"><p>FAQ</p></Link>
        <Link to="create"><p>Create</p></Link>
      </div>
      <div>
        <p>Company</p>
        <p>About</p>
        <p>Suggestions</p>
      </div>
    </div>
    <div />
    <div class="flex justify-end">
      <p id="socialLink">SOCIAL MEDIA LINKS</p>
    </div>
  </div>
</div>

<style>
  p {
    color: white;
    margin-bottom: 28px;
  }

  #footerMain {
    background-image: url(/images/Gradient.png);
    padding-top: 62px;
    background-repeat: no-repeat;
    background-size: cover;
  }

  #footerLogo {
    margin-top: 2.37px;
  }
  #socialLink {
    color: white;
    font-size: 36px;
  }
</style>
