<script>
    let isOpen = false
    export let traitType = ""
    import {traitType}, as type3 from '../stores.js'
    function clickHandler(){
        isOpen = !isOpen
    }

</script>

<div>
    <img src=chosenTrait on:click={clickHandler}>
    {#if isOpen}

    {/if}
</div>