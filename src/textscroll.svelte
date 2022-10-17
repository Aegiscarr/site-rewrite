<script>
    import { fly, fade } from 'svelte/transition';
    import { quintIn } from 'svelte/easing';
    import { onMount } from 'svelte';
    import Logo from './Logo.svelte';
    let introtext_visible = false;
    let canvas = 1;

    let stuff = ['']
    // streamer', 'programmer', 'artist', 'writer', 'composer

    onMount(async() => {
        setTimeout(function() {introtext_visible = true})
        setTimeout(function() {introtext_visible = false}, 700)
     })
</script>
{#if introtext_visible}
    <canvas
    class="noscroll"
    bind:this={canvas}
    width={32}
    height={32}
    out:fade="{{delay: 250, duration: 500}}"
    ></canvas>
    {#each stuff as word, i}
        <p in:fly="{{duration: 500, delay: 100 + i * 500, y: 20}}" out:fly="{{duration: 500, delay: 100 + i * 500, y: -20}}" easing={quintIn}>{word}</p> 
    {/each}
{/if}

{#if !introtext_visible}
<Logo logo_visible=true/>
{/if}


<!--<label>
	<input type="checkbox" bind:checked={introtext_visible}>
	landing anim
</label>-->

<style>
    p {
        color: #999;
        text-align: center;
        position: absolute;
        left: 43.75%;
        top: 60%;
        width: 12.5%;
        z-index: 3;
    }
    
	/*label {
		position: absolute;
		top: 1em;
		left: 1em;
        z-index: 100;
        width: 25%;
        background: transparent
	}*/

    canvas {
        z-index: 2;
        background-color: black;
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>
