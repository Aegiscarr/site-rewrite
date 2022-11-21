<script>
    import Renderitem from "./renderitem.svelte";
    import {altreality, battle, inspection, halloween2022, myloin, drcnaegis, drcnexaen} from "./artdb.js";
    import {fly} from 'svelte/transition';
    import {quintOut} from 'svelte/easing';
	import Content from './modal/Content.svelte';
    import { showPopupGrid } from './modal/Content.svelte';
    import Modal from './modal/Modal.svelte';
	import { modal } from './modal/stores.js'
    // @ts-ignore
    export let src;
    export let title;
    export let id;

    const descs = [altreality, battle, inspection, halloween2022, myloin, drcnaegis, drcnexaen]

    let activeDesc = descs[id]

</script>

<Content imgId={id} imgSrc={src} imgTitle={title} />
