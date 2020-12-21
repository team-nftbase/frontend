<script>
	import { onMount } from "svelte";
	let data;
	let videoEl;

	onMount(async () => {
		const stream = await navigator.mediaDevices.getUserMedia({ video: true });

		videoEl.srcObject = stream;
		videoEl.play();
	});
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1 id="test">존나 좋군 asdadsa!</h1>
	<video bind:this={videoEl} width="600" height="480">
		<track kind="captions" />
	</video>
</main>
