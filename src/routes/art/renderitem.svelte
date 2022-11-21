<script>
    let opacity = 1;
    import {altreality, battle, inspection, halloween2022, myloin, drcnaegis, drcnexaen} from "./artdb.js";
    import {fly} from 'svelte/transition';
    import {quintOut} from 'svelte/easing';
    import { showPopupGrid } from './modal/Content.svelte';
    import Modal from './modal/Modal.svelte';
    import ConstContent from './modal/Content.svelte';
	import { modal } from './modal/stores.js'
    // @ts-ignore
    export let src;
    export let title;
    export let id;

    const descs = [altreality, battle, inspection, halloween2022, myloin, drcnaegis, drcnexaen]

    let activeDesc = descs[id]
    export let popoutTrigger = false;
    
    function onMouseOver() {
        opacity = 0.9
        popoutTrigger = false
    }



    function onMouseOff() {
        opacity = 1
        //popoutTrigger = false
    }
</script>

<div class="image">
    <img {src} alt='render: {title}' style='opacity: {opacity}' on:mouseover={onMouseOver} on:mouseout={onMouseOff} on:focus={onMouseOver} on:blur={onMouseOff} on:click={showPopupGrid()} on:keypress={showPopupGrid()}>
<h6><i>{title}</i></h6>
</div>

<Modal show={$modal}>
	<ConstContent />
</Modal>

<style>
    img {
        width: 100%;
        height: 100%;
        text-align: center;
        z-index: 0;
    }

    h6 {
        color: white;
        font-family: 'Exo 2', sans-serif;
        font-size: 18px;
        font-weight: 300;
        text-align: center;
        margin-top: 16px;
    }

    div {
        background: white;
        z-index: 0;
        height: 600px;
        margin-bottom: 3rem
    }
</style>
