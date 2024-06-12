<script lang="ts">
	import Buttons from './../util/buttons/Buttons.svelte';
  import { createEventDispatcher } from 'svelte';
	import type { Task } from '../../model';
  import Modal from './../util/modal/Modal.svelte';
    
  const dispatch = createEventDispatcher();
  export let visible :boolean = false;
  export let data:Task | null;
  
  const close = ():void =>{ dispatch("close")}

  const save = ():void =>{dispatch("save", data)}

</script>


{#if visible}

    <Modal bind:visible = {visible}>
        <h1 class="text-lg font-bold m-1">Edit task </h1>
        <div>
            <input class="rounded-lg p-2 border-2 w-full" type="text" bind:value={data.title}>
            <div>
                <Buttons color = "sky" on:click={save} >Save</Buttons>
                <Buttons color = "red" on:click={close}>Close</Buttons>     
            </div>
        </div>
    </Modal>

{/if}
<style>
    div{
        display: flex;
        justify-content: space-between;
        gap: 0.7em;
    }
    button{
        /* @apply border-sky-100 border-2 p-2  bg-sky-500  text-white */
    }
</style>

