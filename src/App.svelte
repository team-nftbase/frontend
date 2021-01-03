<script>
	import Button from '@smui/button';
	// import { onMount } from "svelte";
	// let data;
	// let videoEl;

	// onMount(async () => {
	// 	const stream = await navigator.mediaDevices.getUserMedia({ video: true });

	// 	videoEl.srcObject = stream;
	// 	videoEl.play();
	// });
</script>

<style>
</style>

<main>
	<div class="flex flex-row justify-between">
		<p>NFTBase</p>
		<p>검색</p>
		<Button on:click={() => alert('Clicked!')}>Just a Button</Button>
		<div>
			<a href="/">Explore</a>
			<a href="/">F&Q</a>
			<a href="/">Community</a>
			<a href="/">Create</a>
		</div>
	</div>
</main>
