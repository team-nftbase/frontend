<script>
	import Header from "./common/Header.svelte";
	import Main from "./pages/Main.svelte";
	import Footer from "./common/Footer.svelte";
	// import { onMount } from "svelte";
	// let data;
	// let videoEl;

	// onMount(async () => {
	// 	const stream = await navigator.mediaDevices.getUserMedia({ video: true });

	// 	videoEl.srcObject = stream;
	// 	videoEl.play();
	// });
</script>

<style global>
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
	@import 'tailwindcss/utilities';
	
</style>

<main>
	<Header />
	<Main />
	<Footer />
</main>
