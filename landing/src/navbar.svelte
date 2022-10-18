<script>
    let currentPage;
    export let showNavbarLogo = false;
    import {inner, triangle} from './shape.js';
    import {fly, draw} from 'svelte/transition'

//                     art        lore       projects   default
    let pageColors = ['#511c55', '#5a0070', '#ff9900', '#00aa00']
</script>

{#if showNavbarLogo}
<svg id='navbarlogo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 124">
    <a href='/'>
		<g opacity=1 in:fly="{{duration: 250, y: -20}}" out:fly="{{duration: 250, y: -20}}">
			<path
			in:draw
			style="fill:#fff"
			d={inner}
		/>
		</g>
		<g opacity=1 in:fly="{{duration: 250, y: -20}}" out:fly="{{duration: 250, y: -20}}">
			<path 
			in:draw="{{duration: 0}}"
			style="stroke:#fff; stroke-width: 1.1; fill: transparent"
			d={triangle}>
		</path>
		</g>
    </a>
</svg>
{/if}

<label>
	<input type="checkbox" bind:checked={showNavbarLogo}>
	show/hide navbar logo
</label>

<style>

label {
		position: absolute;
		top: 5em;
		left: 1em;
        z-index: 100;
        width: 25%;
        background: transparent
	}

    #navbarlogo {
        width: 100%;
        height: 100%;
        position: absolute;
        scale: 25%;
        bottom: 40%;
        z-index: 5;
    }

</style>
