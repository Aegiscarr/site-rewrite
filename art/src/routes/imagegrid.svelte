<script>
    import {fly} from 'svelte/transition';
    import {quintOut} from 'svelte/easing';
    import {onMount} from 'svelte';
    import Renderitem from './renderitem.svelte';
    let imgtoggle = false;

    onMount(() => {
        setTimeout(function() {imgtoggle = true}, 0)
     })

    
</script>

{#if imgtoggle}
<div class="imggrid">
    <div class="renderitem" in:fly="{{duration: 500, y: 20, easing:quintOut}}">
        <Renderitem src="src/lib/img/preview/Fa7omy3UIAgG1AX-preview.jpg" title="Alternate Reality"/>
    </div>

    <div class="renderitem" in:fly="{{duration: 500, delay: 50, y: 20, easing:quintOut}}">
        <Renderitem src="src/lib/img/preview/FbLfW6dUUAAXgSu-preview.jpg" title="Final Showdown"/>
    </div>

    <div class="renderitem" in:fly="{{duration: 500, delay:100, y: 20, easing:quintOut}}">
        <Renderitem src="src/lib/img/preview/FZ0X5mVXEAUXTuj-preview.jpg" title="Inspection"/>
    </div>

    <div class="renderitem" in:fly="{{duration: 500, delay:150, y: 20, easing:quintOut}}">
        <Renderitem src="src/lib/img/preview/aegis-final-a.png" title="Draconia // Aegis"/>
    </div>    
    
    <div class="renderitem" in:fly="{{duration: 500, delay:200, y: 20, easing:quintOut}}">
        <Renderitem src="src/lib/img/preview/exaen-final-a.png" title="Draconia // Exaen"/>
    </div>

    <div class="renderitem" in:fly="{{duration: 500, delay:250, y: 20, easing:quintOut}}">
        <Renderitem src="src/lib/img/preview/bloody-hell.png" title="Bloody Hell"/>
    </div>
</div>
{/if}


<style>

    .imggrid {
        margin-top: 7rem;
        display: flex;
        justify-content: center;
        flex-wrap: wrap
    }

    .renderitem {
        width: 25%;
        margin-right: 1rem;
        margin-bottom: 1rem;
    }

    * {
        align-items: center;
    }
</style>
