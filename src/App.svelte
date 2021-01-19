<script>
	import { Router, Route } from "svelte-routing";
	import Header from "./common/Header.svelte";
	import Footer from "./common/Footer.svelte";

	import Main from "./pages/Main.svelte";
	import Explore from "./pages/Explore.svelte";
	import Mypage from "./pages/Mypage.svelte";
	import FNQ from "./pages/FNQ.svelte";

	import ItemDetail from "./pages/ItemDetail.svelte";

	export let url = "";
</script>

<style global>
	@import "tailwindcss/base";
	@import "tailwindcss/components";
	@import "tailwindcss/utilities";
</style>

<Router url="{url}">
  <div>
		<Header />
    <Route path="itemdetail" component="{ItemDetail}" />
    <Route path="explore" component="{Explore}" />
    <Route path="mypage" component="{Mypage}" />
    <Route path="fnq" component="{FNQ}" />
		<Route path="/"><Main /></Route>
		<Footer />
  </div>
</Router>