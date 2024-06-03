<script lang="ts">
    import type { Task } from '../model';
    import TodoitemActions from './TodoitemActions.svelte';

    export let data:Task;

</script>
<div>
    <span>{data.id} {data.title}</span>
    <TodoitemActions on:delete />
</div>


<style>
    div{
        display: flex;
        padding: 20px;
        border: 1px solid black;
        justify-content: space-between;
    }
</style>