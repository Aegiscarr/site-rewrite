<script>
	import { sineInOut, cubicIn, quintIn } from 'svelte/easing';
	import { fade, draw } from 'svelte/transition';
	import { inner, triangle } from './shape.js';
	import Prebuilt from './prebuilt.svelte'

	export let logo_visible = false;
</script>

{#if logo_visible}
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 124">
		<g opacity=1>
			<path
				in:draw="{{duration: 5000, delay: 0, easing: sineInOut}}"
				style="stroke:#fff; stroke-width: .25"
				d={inner}
			/>
		</g>
		<g in:fade="{{duration: 1000, delay:500 + 100, easing: quintIn}}" opacity=1>
			<path
			in:draw="{{duration: 50, easing: quintIn}}"
			style="fill:#fff"
			d={inner}
		/>
		</g>
		<g opacity=1>
			<path 
			in:draw="{{duration: 1300, delay: 0, easing: cubicIn}}"
			style="stroke:#fff; stroke-width: 1.1"
			d={triangle}>
		</path>
		</g>
	</svg>
	
	<Prebuilt smlogo_visible=true/>
{/if}

<style>
	svg {
		width: 100%;
		height: 100%;
        z-index: 3;
        position: absolute;
        bottom: 1em;
		fill:transparent;
	}

	path {
        outline: white;
		opacity: 1;
	}
</style>
