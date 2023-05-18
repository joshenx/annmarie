<script>
	import { status } from '$lib/stores/ProgressStore.ts';
	import BeforeLogin from '../../components/stages/BeforeLogin.svelte';

	const stages = [
		{stageNum: 0, component: BeforeLogin},
		{stageNum: 1, component: BeforeLogin}
	];

	let selected = stages[$status.stage];
</script>

<svelte:head>
	<title>Start</title>
	<meta name="description" content="please, there's not much time left." />
</svelte:head>

{#key $status.stage}
	<svelte:component this={selected.component}/>
{/key}
