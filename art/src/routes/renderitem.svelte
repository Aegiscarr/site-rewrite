<script>
    let opacity = 1;
    export let src;
    export let title;
    
    function onMouseOver() {
        opacity = 0.9
    }

    function onMouseOff() {
        opacity = 1
    }
</script>
<div class="image">
    <img {src} alt="a render" style='opacity: {opacity}' on:mouseover={onMouseOver} on:mouseout={onMouseOff} on:focus={onMouseOver} on:blur={onMouseOff}>
</div>
<h6><i>{title}</i></h6>

<style>
    img {
        width: 100%;
        text-align: center;
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
    }
</style>
