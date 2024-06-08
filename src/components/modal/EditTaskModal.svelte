<script lang="ts">
	import type { Task } from '../../model';
    import Modal from './../util/modal/Modal.svelte';

  let visible :boolean = false;
  export let data:Task;
  
  function close():void{
    visible =false;
  }
  
</script>


{#if visible}

    <Modal bind:visible = {visible}>
        <div>
            <span>Edit task </span>
            <input type="text" bind:value={data.title}>
            <button on:click={close}>close</button>
        </div>
</Modal>

{/if}
<style>
    div{
        display: flex;
        justify-content: space-between;
    }
</style>

