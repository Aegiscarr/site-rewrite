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
<svg id='navbarlogo' class=noscroll xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 65">
		<g opacity={logo_opacity} in:fly="{{duration: 250, y: -20}}" out:fly="{{duration: 250, y: -20}}">
			<path
			in:draw
			style="fill:#fff"
			d={inner}
		/>
        <g opacity=1 in:fly="{{duration: 250, y: -20}}" out:fly="{{duration: 250, y: -20}}">
			<path 
			in:draw="{{duration: 0}}"
			style="stroke:#fff; stroke-width: 1.1; fill: transparent"
			d={triangle}>
		</path>
		</g>
		<a href='/'>
			<rect width="150" height="40" x=-27.5 y=25 opacity=0 on:mouseover={onMouseOverLogo} on:mouseout={onMouseOffLogo} on:focus={onMouseOverLogo} on:blur={onMouseOffLogo}>
		</a>
		</g>
</svg>
    <div class="navbaritem">
        <a href="/art">
            <h6 class=item><i class=item>Art</i></h6>
        </a>
    </div>

    <div class="navbaritem">
        <a href="/socials">
            <h6 class=item><i class=item>Socials</i></h6>
        </a>
    </div>

    <div class="navbaritem">
        <a href="/art">
            <h6 class=item><i class=item></i></h6>
        </a>
    </div>    

    <div class="navbaritem">
        <a href="/lore">
            <h6 class=item><i class=item>Lore</i></h6>
        </a>
    </div>

    <div class="navbaritem">
        <a href="/projects">
            <h6 class=item><i class=item>Projects</i></h6>
        </a>
    </div>
</div>
{/if}

<style>

    #navbarlogo {
        width: 100%;
        height: 10%;
        position: absolute;
        top: -3%;
        z-index: 5;
		background: transparent;
        left: 1.5%;
    }

	rect {
		fill: white;
		z-index: 6;
	}

    .navbar {
        display: flex;
        width: 100%;
        height: 7.5%;
        background-color: #511c55;
        top: 0%;
		z-index: 5; 
        justify-content: center;
        align-items: center;
        column-gap: 20%;
    }

    .item {
        color: white;
        font-family: 'Exo 2', sans-serif;
        font-size: 1.3rem;
        font-weight: 300;
        text-align: center;
        margin-top: 0px;
        top: 30%;
        background: transparent;
        position: absolute;
        z-index: 7;
        align-items:center;
    }

    .navbaritem {
        background: transparent;
        display: flex;
        align-items: center;
    }

    a {
        background: transparent;
    }

</style>
