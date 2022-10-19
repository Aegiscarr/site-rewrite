<script>
    let currentPage;
    export let showNavbarLogo = true;
    import {inner, triangle} from './shape.js';
    import {fly, draw} from 'svelte/transition'
	let logo_opacity = 1

	function onMouseOverLogo() {
		logo_opacity = 0.5;
	}

	function onMouseOffLogo() {
		logo_opacity = 1;
	}

//                     art        lore       projects   default
    let pageColors = ['#511c55', '#5a0070', '#ff9900', '#00aa00']
</script>


{#if showNavbarLogo}
<div class="navbar noscroll">
<svg id='navbarlogo' class=noscroll xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 124">
		<g opacity={logo_opacity} in:fly="{{duration: 250, y: -20}}" out:fly="{{duration: 250, y: -20}}">
			<path
			in:draw
			style="fill:#fff"
			d={inner}
		/>
		<a href='/'>
			<rect width="150" height="40" x=-27.5 y=25 opacity=0 on:mouseover={onMouseOverLogo} on:mouseout={onMouseOffLogo} on:focus={onMouseOverLogo} on:blur={onMouseOffLogo}>
		</a>
		</g>
		<g opacity={logo_opacity} in:fly="{{duration: 250, y: -20}}" out:fly="{{duration: 250, y: -20}}">
			<path 
			in:draw="{{duration: 0}}"
			style="stroke:#fff; stroke-width: 1.1; fill: transparent"
			d={triangle}>
		</path>
		</g>
</svg>
</div>
{/if}

<style>

    #navbarlogo {
        width: 100%;
        height: 100%;
        position: absolute;
        scale: 25%;
        bottom: 41%;
        z-index: 5;
		background: transparent;
        display: flex
    }

	rect {
		fill:white;
		z-index: 6;
	}

    .navbar {
        width: 100%;
        height: 12%;
        background-color: #00a000;
        top: 0%
    }

</style>
