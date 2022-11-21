<script>
	import { quintOut } from 'svelte/easing';
	import { fade, draw, fly } from 'svelte/transition';
	export let smlogo_visible = false;
    let gh_opacity = 1;	
	let twitter_opacity = 1;
	let twitch_opacity = 1;
	let steam_opacity = 1;	

    function onMouseHoverGH() {
        gh_opacity = 0.5;
    }

    function onMouseOffGH() {
        gh_opacity = 1;
    }

	function onMouseHoverTwitter() {
        twitter_opacity = 0.5;
    }

    function onMouseOffTwitter() {
        twitter_opacity = 1;
    }

	function onMouseHoverTwitch() {
        twitch_opacity = 0.5;
    }

    function onMouseOffTwitch() {
        twitch_opacity = 1;
    }

	function onMouseHoverSteam() {
        steam_opacity = 0.5;
    }

    function onMouseOffSteam() {
        steam_opacity = 1;
    }

	

</script>

{#if smlogo_visible}
	<svg id="noscroll" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 124">
		<a href="https://github.com/aegiscarr">
        <g in:fade="{{duration: 500, delay: 1000 + 100}}"opacity={gh_opacity} on:mouseover={onMouseHoverGH} on:mouseout={onMouseOffGH} on:focus={onMouseHoverGH} on:blur={onMouseOffGH}>
			<g in:fly="{{delay: 1150 + 100, duration: 500, y: 5, easing: quintOut}}">
            <path
				in:draw
				style="stroke:#fff; stroke-width: 0; fill: #fff"
				d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
			/>
			<rect width="16" height="16" opacity="0" />
        </g>
		</g>
	</a>

	<a href="https://twitter.com/aegiscarr">
		<g in:fade="{{duration: 500, delay: 1050 + 100}}"opacity={twitter_opacity} on:mouseover={onMouseHoverTwitter} on:mouseout={onMouseOffTwitter} on:focus={onMouseHoverTwitter} on:blur={onMouseOffTwitter}>
			<g in:fly="{{delay: 1200 + 100, duration: 500, y: 5, easing: quintOut}}">
			<path
				in:draw
				style="stroke:#fff; stroke-width: 0; fill: #fff"
				d="M 41.256 4.1032 C 41.268 4.2768 41.268 4.4504 41.268 4.6256 C 41.268 9.964 37.204 16.1208 29.7728 16.1208 V 16.1176 C 27.5776 16.1208 25.428 15.492 23.58 14.3064 C 23.8992 14.3448 24.22 14.364 24.5416 14.3648 C 26.3608 14.3664 28.128 13.756 29.5592 12.632 C 27.8304 12.5992 26.3144 11.472 25.7848 9.8264 C 26.3904 9.9432 27.0144 9.9192 27.6088 9.7568 C 25.724 9.376 24.368 7.72 24.368 5.7968 V 5.7456 C 24.9296 6.0584 25.5584 6.232 26.2016 6.2512 C 24.4264 5.0648 23.8792 2.7032 24.9512 0.8568 C 27.0024 3.3808 30.0288 4.9152 33.2776 5.0776 C 32.952 3.6744 33.3968 2.204 34.4464 1.2176 C 36.0736 -0.312 38.6328 -0.2336 40.1624 1.3928 C 41.0672 1.2144 41.9344 0.8824 42.728 0.412 C 42.4264 1.3472 41.7952 2.1416 40.952 2.6464 C 41.7528 2.552 42.5352 2.3376 43.272 2.0104 C 42.7296 2.8232 42.0464 3.5312 41.256 4.1032 Z"
			/>
			<rect x=26 width="16" height="16" opacity="0" />
		</g>
		</g>
	</a>
		
	<a href="https://twitch.tv/aegiscarr">
	<g in:fade="{{duration: 500, delay: 1100 + 100}}"opacity={twitch_opacity} on:mouseover={onMouseHoverTwitch} on:mouseout={onMouseOffTwitch} on:focus={onMouseHoverTwitch} on:blur={onMouseOffTwitch}>
			<g in:fly="{{delay: 1250 + 100, duration: 500, y: 5, easing: quintOut}}">
			<path
				in:draw
				style="stroke:#fff; stroke-width: 0; fill: #fff"
				d="M 53.125 0 L 50 3.125 V 14.375 H 53.75 V 17.5 L 56.875 14.375 H 59.375 L 65 8.75 V 0 H 53.125 Z M 63.75 8.125 L 61.25 10.625 H 58.75 L 56.5625 12.8125 V 10.625 H 53.75 V 1.25 H 63.75 V 8.125 M 60.625 3.4375 H 61.875 V 7.1875 H 60.625 M 57.1875 3.4375 H 58.4375 V 7.1875 H 57.1875 Z"
			/>
			<rect x=50 width="16" height="16" opacity="0" />
		</g>
		</g>
		</a>
	
		<a href="https://steamcommunity.com/id/aegiscarr">
		<g in:fade="{{duration: 500, delay: 1150 + 100}}"opacity={steam_opacity} on:mouseover={onMouseHoverSteam} on:mouseout={onMouseOffSteam} on:focus={onMouseHoverSteam} on:blur={onMouseOffSteam}>
			<g in:fly="{{delay: 1300 + 100, duration: 500, y: 5, easing: quintOut}}">
			<path
				in:draw
				style="stroke:#fff; stroke-width: 0; fill: #fff"
				d="M 79.4863 0 A 8.007 8.007 90 0 0 71.5 7.3582 L 75.7953 9.131 A 2.2553 2.2553 90 0 1 77.0717 8.7375 Q 77.1357 8.7375 77.198 8.741 L 79.1085 5.9768 V 5.938 A 3.022 3.022 90 1 1 82.1305 8.9555 H 82.0617 L 79.3368 10.8955 C 79.3385 10.9315 79.3398 10.9675 79.3398 11.0028 A 2.2687 2.2687 90 0 1 74.8473 11.4493 L 71.775 10.18 A 8.0118 8.0118 90 1 0 79.4863 0 Z M 76.522 12.1387 L 75.5378 11.7325 A 1.7 1.7 90 1 0 76.469 9.4093 L 77.4862 9.829 A 1.2512 1.2512 90 1 1 76.522 12.1385 Z M 84.1442 5.938 A 2.0137 2.0137 90 1 0 82.1307 7.948 A 2.0148 2.0148 90 0 0 84.1442 5.938 Z M 80.621 5.9347 A 1.5128 1.5128 90 1 1 82.1335 7.4445 A 1.5113 1.5113 90 0 1 80.6212 5.9345 Z"
			/>
			<rect x=72 width="16" height="16" opacity="0" />
		</g>
		</g>
	</a>
		</svg>

{/if}

<style>
	svg {
		width: 100%;
		height: 50%;
        position: absolute;
        top: 60%;
        z-index: 3;
	}

	path {
		fill: white;
		opacity: 1;
	}
</style>
