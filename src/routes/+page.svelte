<script>
	import Counter from './Counter.svelte';
	import Login from './Login.svelte';
	import annmarie from '$lib/images/annmarie.png';
</script>

<svelte:head>
	<title>Ann Marie</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="welcome">
		<img src={annmarie} alt="hey" />

		hi, I'm Ann Marie.<br />And I'm trapped.
	</h1>

	<h2>
		look for clues.
	</h2>

	<Login />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}


	img {
		display: block;
		margin-left: auto;
 		margin-right: auto;
		width: max(20vw, 400px);
		height: 30%;
		margin-bottom: 2rem;
	}
</style>
