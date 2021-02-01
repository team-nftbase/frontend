<script>
	import { Router, Route } from "svelte-routing";
	import Header from "./common/Header.svelte";
	import Footer from "./common/Footer.svelte";

	import { getwallet } from "./common/account";
	import { initI18n } from "./common/i18n";

	import Main from "./pages/Main.svelte";
	import Explore from "./pages/Explore.svelte";
	import FNQ from "./pages/FNQ.svelte";
	import Create from "./pages/Create.svelte";
	import CreateSingle from "./pages/Create.single.svelte";
	import Mypage from "./pages/Mypage.svelte";
	import GetWallet from "./pages/GetWallet.svelte";
	import ItemDetail from "./pages/ItemDetail.svelte";

	import { ethStore, web3, selectedAccount, connected, nativeCurrency } from "svelte-web3";
	// import { getUserLocales } from 'get-user-locale';

	ethStore.setBrowserProvider();
	ethStore.setProvider("http://localhost:8545");

	$: checkAccount =
		$selectedAccount || "0x0000000000000000000000000000000000000000";
	$: balance = $connected ? $web3.eth.getBalance(checkAccount) : "";

	getwallet();
	initI18n();

	export let url = "";
</script>

<Router {url}>
	<div>
		<Header />
		{#await balance}
			<span>waiting...</span>
		{:then value}
			<span>{value}</span>
		{/await}
		{$nativeCurrency.symbol}
		<Route path="/"><Main /></Route>
		<Route path="explore" component={Explore} />
		<Route path="itemdetail" component={ItemDetail} />
		<Route path="fnq" component={FNQ} />
		<Route path="create" component={Create} />
		<Route path="create_single" component={CreateSingle} />
		<Route path="mypage" component={Mypage} />
		<Route path="getwallet" component={GetWallet} />
		<Footer />
	</div>
</Router>

<style global>
	@import "tailwindcss/base";
	@import "tailwindcss/components";
	@import "tailwindcss/utilities";
</style>
