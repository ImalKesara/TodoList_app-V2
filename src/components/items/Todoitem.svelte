<script lang="ts">
    import type { Task } from '../../model';
    import TodoitemActions from './TodoitemActions.svelte';
    export let data:Task;

    

</script>
<div>
    <span spellcheck="false" contenteditable="true" bind:textContent={data.title}></span>
    <TodoitemActions on:delete />    
</div>


<style>
    div{
        display: flex;
        padding: 0.5em;
        border: 1px solid black;
        justify-content: space-between;
        align-items: center;
    }
</style>