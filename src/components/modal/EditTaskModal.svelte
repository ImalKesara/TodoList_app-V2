<script lang="ts">
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
        <div>
            <span>Edit task </span>
            <input type="text" bind:value={data.title}>
            <div class="btns">
                <button on:click={save}>save</button>
                <button on:click={close}>close</button>
            </div>
        </div>
</Modal>

{/if}
<style>
    div{
        display: flex;
        justify-content: space-between;
    }
    .btns{
        display: flex;
        gap: 0.3em;
    }
</style>

