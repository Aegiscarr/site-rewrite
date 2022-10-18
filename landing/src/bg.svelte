<script>
	import { onMount, getContext } from 'svelte';

    let reducedMotion = false;
	let canvas;
    let opacity;

	onMount(() => {
		const ctx = canvas.getContext('2d');
		let frame;

		(function loop() {

            if (reducedMotion == true) {
                opacity = 0;
            } else { opacity = 1 }

			frame = requestAnimationFrame(loop);
 
			const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

			for (let p = 0; p < imageData.data.length; p += 4) {
				const i = p / 4;
				const x = i % canvas.width;
				const y = i / canvas.height >>> 0;

				const t = window.performance.now();

				const r = 64 + (128 * x / canvas.width) + (64 * Math.sin(t / 1000));
				const g = 64 + (128 * y / canvas.height) + (64 * Math.cos(t / 1400));
				const b = 128;

				imageData.data[p + 0] = r;
				imageData.data[p + 1] = g;
				imageData.data[p + 2] = b;
				imageData.data[p + 3] = 255;
			}

			ctx.putImageData(imageData, 0, 0);
		}());

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<canvas
	class="noscroll"
	bind:this={canvas}
	width={32}
	height={32}
    style=opacity:{opacity}
></canvas>

<!--<label>
	<input type="checkbox" bind:checked={reducedMotion}>
	enable reduced motion
</label>-->

<style>
	canvas {
		width: 100%;
		height: 100%;
		background-color: transparent;
        position: absolute;
	}

/*label {
		position: absolute;
		top: 3em;
		left: 1em;
        z-index: 100;
        width: 25%;
        background: transparent
	}*/
</style>

