<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { Task } from '../../model';
    import TodoitemActions from './TodoitemActions.svelte';
    
    const dispatch = createEventDispatcher();
    export let data:Task;
    function onTitleBlur(){dispatch("titlechange")}
    
</script>


<div class="bg-violet-300 rounded-full border-none p-4 shadow-lg text-transform: capitalize font-medium">
    <span spellcheck="false" contenteditable="true" bind:textContent={data.title} on:blur={onTitleBlur}></span>
    <TodoitemActions on:delete on:edit  bind:completed = {data.completed}  on:completedChange />    
</div>


<style>
    div{
        display: flex;
        /* padding: 0.5em; */
        justify-content: space-between;
        align-items: center;
    }
</style>