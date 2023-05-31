<script>
	import ProgressStore from '$lib/stores/ProgressStore.ts';

	$ProgressStore;
</script>

<svelte:head>
	<title>Start</title>
	<meta name="description" content="DEBUG: GAME STATUS" />
</svelte:head>

<div class="text-column">
	<h1>GAME STATUS</h1>
	<ul>
	{#each Object.entries($ProgressStore) as [propertyName, propertyValue]}
		<li>
			{propertyName} : [{propertyValue}]
		</li>
	{/each}
	</ul>
</div>

<style>
	.riddle {
		line-height: 150%;
	}
</style>