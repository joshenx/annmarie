<script>
	import ProgressStore from '$lib/stores/ProgressStore.ts';
	import BeforeLogin from '../../components/stages/BeforeLogin.svelte';

	const stages = [
		{stageNum: 0, component: BeforeLogin},
		{stageNum: 1, component: BeforeLogin}
	];

	$: ({stage} = $ProgressStore);
</script>

<svelte:head>
	<title>Start</title>
	<meta name="description" content="please, there's not much time left." />
</svelte:head>

{#key stage}
	<svelte:component this={stages[stage].component}/>
{/key}
