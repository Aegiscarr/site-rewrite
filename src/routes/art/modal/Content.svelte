<script>
  import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';
	
  import Popup from './Popup.svelte';
  import PopupLong from './PopupLong.svelte';
  import PopupGrid from './PopupGrid.svelte';
	import Dialog from './Dialog.svelte';
	import CloseButton from './CloseButton.svelte';

  const { open } = getContext('simple-modal');
	
	let opening = false;
	let opened = false;
	let closing = false;
	let closed = false;

    export let imgId;
    export let imgSrc;
    export let imgTitle;

 export const showPopup = () => {
		open(Popup, { message: "It's a popup!" });
	};
 export	const showPopupLong = () => {
		open(PopupLong, { message: "It's a popup with long text!" });
	};
 export const showPopupCustom = () => {
		open(
			Popup,
			{
				message: "It's a customized popup!"
			},
		  {
				closeButton: CloseButton,
				styleBg: {
					background: 'rgba(200, 255, 0, 0.66)'
				},
				styleWindowWrap: {
					margin: '4rem'
				},
				styleWindow: {
					border: '2px solid #00beff',
					boxShadow: 'inset 0 0 0 2px white, 0 0 0 2px white',
					background: '#ff7000'
				},
				styleContent: {
					color: '#9500ff',
					fontFamily: 'Comic Sans',
					fontStyle: 'italic'
				},
				styleCloseButton: {
					borderRadius: 0,
					boxShadow: '0 0 0 2px white',
					background: 'pink'
				},
				transitionWindow: fly,
				transitionWindowProps: {
					y: 100,
					duration: 1000
				},
			},
			{
				onOpen: () => {
					opening = true;
				},
				onOpened: () => {
					opening = false;
					opened = true;
				},
				onClose: () => {
					opened = false;
					closing = true;
				},
				onClosed: () => {
					closing = false;
					closed = true;
					setTimeout(() => { closed = false; }, 1000);
				}
			}
		);
	};
	
	let name;
	let status = 0;
	
	const onCancel = (text) => {
		name = '';
		status = -1;
	}
	
	const onOkay = (text) => {
		name = text;
		status = 1;
	}

  const showDialog = () => {
		open(
			Dialog,
			{
				message: "What is your name?",
				hasForm: true,
				onCancel,
				onOkay
			},
			{
				closeButton: false,
    		closeOnEsc: false,
    		closeOnOuterClick: false,
			}
	  );
	};
</script>

<script context="module">
export function showPopupGrid(imgId, imgSrc, imgTitle) {
        open(PopupGrid, {message: "Default Message"});
    };
</script>

