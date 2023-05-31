<script>
	import Header from '../components/Header.svelte';
	import './styles.css';
	import ProgressStore from '$lib/stores/ProgressStore';

	$: ({stage} = $ProgressStore);
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	{#if stage == 0}
		<footer>
			<p>inspect <a href="/COCLUELOUR">this.</a> clue.</p>
			<div hidden>
				I've always loved writing down notes in my diary.
				Sometimes, I may even keep my personal details in there,
				in case I ever forget. I'll even keep track of what version
				it is, so I can look at my old passwords and see how strict
				the password rules become over time! If only there was a way
				to store them digitally..
			</div>
		</footer>
	{/if}
	
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
