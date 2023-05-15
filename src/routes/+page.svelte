<script>
	import Counter from './Counter.svelte';
	import Login from './Login.svelte';
	import annmarie from '$lib/images/annmarie.png';
	import MouseCursor from './MouseCursor.svelte';
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
		Start your journey, with a simple click,<br>
		On the tab that beckons, quick and slick.<br><br>
		Use my key to gain access,<br>
		No need for your credentials to impress.
	</h2>
	<hr>
	<Login />
</section>

<MouseCursor />

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

	h2 {
		text-align: center;
	}

	img {
		display: block;
		margin-left: auto;
 		margin-right: auto;
		width: max(15vw, 300px);
		height: 30%;
		margin-bottom: 2rem;
	}
</style>
