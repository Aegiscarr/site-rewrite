<script>
    import {fly} from 'svelte/transition';
    import {quintOut} from 'svelte/easing';
    import {onMount} from 'svelte'
    let imgtoggle = false;

    onMount(() => {
        setTimeout(function() {imgtoggle = true}, 0)
     })
</script>

{#if imgtoggle}
<div class="imggrid">
    <div class="renderitem" in:fly="{{duration: 500, y: 20, easing:quintOut}}">
        <img src="src/lib/img/preview/Fa7omy3UIAgG1AX-preview.jpg" alt="alternate reality">
        <h6><i>Alternate Reality</i></h6>
    </div>

    <div class="renderitem" in:fly="{{duration: 500, delay: 50, y: 20, easing:quintOut}}">
        <img src="src/lib/img/preview/FbLfW6dUUAAXgSu-preview.jpg" alt="final showdown">
        <h6><i>Final Showdown</i></h6>
    </div>

    <div class="renderitem" in:fly="{{duration: 500, delay:100, y: 20, easing:quintOut}}">
        <img src="src/lib/img/preview/FZ0X5mVXEAUXTuj-preview.jpg" alt="inspection">
        <h6><i>Inspection</i></h6>
    </div>

    <div class="renderitem" in:fly="{{duration: 500, delay:150, y: 20, easing:quintOut}}">
        <img src="src/lib/img/preview/aegis-final-a.png" alt="Render of Aegis.">
        <h6><i>Draconia // Aegis</i></h6>
    </div>    
    
    <div class="renderitem" in:fly="{{duration: 500, delay:200, y: 20, easing:quintOut}}">
        <img src="src/lib/img/preview/exaen-final-a.png" alt="Render of Exaen.">
        <h6><i>Draconia // Exaen</i></h6>
    </div>

    <div class="renderitem" in:fly="{{duration: 500, delay:250, y: 20, easing:quintOut}}">
        <img src="src/lib/img/preview/bloody-hell.png" alt="Bloody Hell, mate.">
        <h6><i>Bloody Hell</i></h6>
    </div>
</div>
{/if}


<style>
    img {
        width: 25rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
        text-align: center;
    }

    .imggrid {
        margin-top: 12.5rem;
        display: flex;
        justify-content: center;
        flex-wrap: wrap
    }

    h6 {
        color: white;
        font-family: 'Exo 2', sans-serif;
        font-size: 18px;
        font-weight: 300;
        text-align: center;
        margin-top: 16px
    }

    * {
        align-items: center;
    }
</style>