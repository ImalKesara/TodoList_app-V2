<script lang="ts">
    import TodoitemActions from './TodoitemActions.svelte';
</script>
<div>
    <span>Buy some donuts</span>
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