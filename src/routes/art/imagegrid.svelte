<script>
    import {fly} from 'svelte/transition';
    import {quintOut} from 'svelte/easing';
    import {onMount} from 'svelte';
    import Comminfo from './comminfo.svelte';
    import Renderitem from './renderitem.svelte';
    let imgtoggle = false;

    onMount(() => {
        setTimeout(function() {imgtoggle = true}, 0)
     })
</script>

<Comminfo/>

<h1>
    <i>
        Ungrouped Renders
    </i>
</h1>

{#if imgtoggle}
<div class="imggrid">
    <div class="renderitem" in:fly="{{duration: 500, y: 20, easing:quintOut}}">
        <Renderitem src="src/lib/img/preview/Fa7omy3UIAgG1AX-preview.jpg" title="Alternate Reality" id=0 />
    </div>

    <div class="renderitem" in:fly="{{duration: 500, delay: 50, y: 20, easing:quintOut}}">
        <Renderitem src="src/lib/img/preview/FbLfW6dUUAAXgSu-preview.jpg" title="Final Showdown" id=1 />
    </div>

    <div class="renderitem" in:fly="{{duration: 500, delay:100, y: 20, easing:quintOut}}">
        <Renderitem src="src/lib/img/preview/FZ0X5mVXEAUXTuj-preview.jpg" title="Inspection" id=2 />
    </div>    
    
    <div class="renderitem" in:fly="{{duration: 500, delay:250, y: 20, easing:quintOut}}">
        <Renderitem src="src/lib/img/preview/bloody-hell.png" title="Bloody Hell" id=3 />
    </div>

    <div class="renderitem" in:fly="{{duration: 500, delay:300, y: 20, easing:quintOut}}">
        <Renderitem src="src/lib/img/preview/birdmoment.png" title="Mylo's Induction" id=4 />
    </div>
</div>
{/if}


<h1>
    <i>
        Draconia Renders
    </i>
</h1>

{#if imgtoggle}
<div class="imggrid">
    <div class="renderitem" in:fly="{{duration: 500, delay:150, y: 20, easing:quintOut}}">
        <Renderitem src="src/lib/img/preview/aegis-final-a.png" title="Draconia // Aegis" id=5 />
    </div>    
    
    <div class="renderitem" in:fly="{{duration: 500, delay:200, y: 20, easing:quintOut}}">
        <Renderitem src="src/lib/img/preview/exaen-final-a.png" title="Draconia // Exaen" id=6 />
    </div>
</div>
{/if}

<h1>
    <i>
        Commission Work
    </i>
</h1>

{#if imgtoggle}
<div class="imggrid">
    <div class="renderitem" in:fly="{{duration: 500, delay:150, y: 20, easing:quintOut}}">
        <h6>
            <i>
                It's quiet.. Too quiet ;-;
            </i>
        </h6>
    </div>
</div>
{/if}


<style>

    .imggrid {
        margin-top: 2rem;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .renderitem {
        width: 450px;
        margin-right: .5rem;
        margin-left: .5rem;
        margin-bottom: 1rem;
    }

    * {
        align-items: center;
    }

    h1 {
        color: white;
        font-family: 'Exo 2', sans-serif;
        font-weight: 300;
        text-align: center;
        margin-top: 16px;
    }

    h6 {
        color: white;
        font-family: 'Exo 2', sans-serif;
        font-size: 18px;
        font-weight: 300;
        text-align: center;
        margin-top: 0px;
    }
</style>
