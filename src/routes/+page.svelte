<script>
	import Login from '../components/Login.svelte';
	import annmarie from '$lib/images/annmarie.png';
	import MouseCursor from '../components/MouseCursor.svelte';
	import ProgressStore from '$lib/stores/ProgressStore.ts';

	$: ({isLoggedIn, displayErrorMessage, errorMessage} = $ProgressStore);
</script>

<svelte:head>
	<title>Ann Marie</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="welcome">
		<img src={annmarie} alt="hey" />

		i'm Ann Marie.<br />And I'm trapped.
	</h1>

	<h2>
		Start your journey, with a simple click,<br>
		On the tab that beckons, quick and slick.<br><br>
		Use my key to gain access,<br>
		No need for your credentials to impress.
	</h2>
	<hr>

	{#if !isLoggedIn}
		{#if displayErrorMessage}
			<div class="error">{errorMessage}</div>
		{/if}
		<Login />
	{:else}
		<h1>
			you've found it!
		</h1>
		<h2>
			hurry, there's not much time left.
		</h2>
	{/if}
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
		pointer-events: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		user-select: none;
	}

</style>
