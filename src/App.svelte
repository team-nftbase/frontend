<script>
	import { Router, Route } from "svelte-routing";
	import Header from "./common/Header.svelte";
	import Footer from "./common/Footer.svelte";

	import Main from "./pages/Main.svelte";
	import Explore from "./pages/Explore.svelte";
	import FNQ from "./pages/FNQ.svelte";
	import Create from "./pages/Create.svelte";
	import CreateSingle from "./pages/Create.single.svelte";
	import Mypage from "./pages/Mypage.svelte";
	
	import ItemDetail from "./pages/ItemDetail.svelte";
	import {
		init,
		addMessages,
		getLocaleFromNavigator,
		isLoading,
	} from "svelte-i18n";

	import en from "./locale/en.json";
	import kr from "./locale/kr.json";

	addMessages("en", en);
	addMessages("kr", kr);

	init({
		fallbackLocale: "en",
		initialLocale: getLocaleFromNavigator(),
	});

	export let url = "";
</script>

{#if $isLoading}
	Now Loading
{:else}
	<Router {url}>
		<div>
			<Header />
			<Route path="/"><Main /></Route>
			<Route path="explore" component={Explore} />
			<Route path="itemdetail" component={ItemDetail} />
			<Route path="fnq" component={FNQ} />
			<Route path="create" component={Create} />
			<Route path="create_single" component={CreateSingle} />
			<Route path="mypage" component={Mypage} />
			<Footer />
		</div>
	</Router>
{/if}

<style global>
	@import "tailwindcss/base";
	@import "tailwindcss/components";
	@import "tailwindcss/utilities";
</style>
