<script>
	import { spring } from 'svelte/motion';

	let coords1 = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.05,
			damping: 0.25
		}
	);

	let coords2 = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.1,
			damping: 0.25
		}
	);

	let size = spring(10);
</script>

<svelte:window
	on:mousemove={(e) => {
		coords1.set({ x: e.clientX+window.scrollX, y: e.clientY+window.scrollY})
		coords2.set({ x: e.clientX+window.scrollX, y: e.clientY+window.scrollY })
	}}
	on:mousedown={(e) => {
		size.set(20);
	}}
	on:mouseup={(e) => {
		size.set(10);
	}}
    on:scroll={(e) => {
        console.log(e);
    }}
/>

<svg
	class ="w-full h-full"
>
	<circle cx={$coords1.x} cy={$coords1.y} r={$size*3} stroke="lightgray" stroke-width="1" fill-opacity="0"/>
	<circle cx={$coords2.x} cy={$coords2.y} r={$size} stroke="lightgray" stroke-width="1" fill-opacity="0"/>
</svg>

<style>
	.w-full {
		width: 100%;
	}
	
	.h-full {
		height: 100%;
	}
	
	svg {
		position: absolute;
		top: 0;
		left: 0;
		pointer-events: none;
	}
</style>
