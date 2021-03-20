<script lang="ts">
	import { Router, Route } from "svelte-routing";
	import Header from "common/Header.svelte";
	import Footer from "common/Footer.svelte";

	import { getwallet } from "./common/account";
	import { initI18n } from "./common/i18n";

	import Main from "./pages/Main.svelte";
	import Explore from "./pages/Explore.svelte";
	import FNQ from "./pages/FNQ.svelte";
	import Three from "./pages/Three.svelte";
	import Create from "./pages/Create.svelte";
	import CreateSingle from "./pages/Create.single.svelte";
	import Mypage from "./pages/Mypage.svelte";
	import GetWallet from "./pages/GetWallet.svelte";
	import ItemDetail from "./pages/ItemDetail.svelte";

	// import Web3 from "web3";

	// import { ethStore, web3, selectedAccount, connected, nativeCurrency } from "svelte-web3";
	// import contract from "truffle-contract";
	// import NFTContract from "./contracts/NFTbase.json";

	// const NFTbase = contract(NFTContract);
	// import { getUserLocales } from 'get-user-locale';

	// ethStore.setBrowserProvider();
	// // ethStore.setProvider("http://localhost:8545");

	// let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

	// $: checkAccount =
	// 	$selectedAccount || "0x0000000000000000000000000000000000000000";
	// $: balance = $connected ? $web3.eth.getBalance(checkAccount) : "";
	// NFTbase.setProvider(web3.currentProvider);

	getwallet();
	initI18n();

	export let url = "";
</script>

<Router {url}>
	<div>
		<Header />
		<!-- {#await balance}
			<span>waiting...</span>
		{:then value}
			<p class="text-center text-20"> 지갑 잔고 : {value}</p>
		{/await} -->
		<Route path="/"><Main /></Route>
		<Route path="explore" component={Explore} />
		<Route path="itemdetail/:contract_address/:token_id" let:params>
			<ItemDetail {params} />
		</Route>
		<Route path="fnq" component={FNQ} />
		<Route path="three" component={Three} />
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
	* {
		font-family: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	}

	.recoleta_font {
		font-family: "Recoleta", sans-serif;
	}
</style>
