<script>
	import Header from "./common/Header.svelte";
	import Footer from "./common/Footer.svelte";
	import Main from "./pages/Main.svelte";
	import Explore from "./pages/Explore.svelte";
	import ItemDetail from "./pages/ItemDetail.svelte";
</script>

<style global>
	@import "tailwindcss/base";
	@import "tailwindcss/components";
	@import "tailwindcss/utilities";
</style>

<main>
	<Header />
	<ItemDetail />
	<!-- <Explore /> -->
	<!-- <Main /> -->
	<Footer />
</main>
