<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { Task } from '../../model';
    import TodoitemActions from './TodoitemActions.svelte';
    
    const dispatch = createEventDispatcher();
    export let data:Task;
    function onTitleBlur(){dispatch("titlechange")}
    
</script>


<div>
    <span spellcheck="false" contenteditable="true" bind:textContent={data.title} on:blur={onTitleBlur}></span>
    <TodoitemActions on:delete on:edit/>    
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