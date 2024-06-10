<script lang="ts">
    import {createEventDispatcher} from 'svelte';

    export let completed:boolean;
    const dispatch = createEventDispatcher();
    const onEdit = ()=> {dispatch('edit')}
    const onDelete = () => {dispatch('delete')}
    const onCompletedChange = (_)=> {dispatch("completedChange")}
    $:onCompletedChange(completed);

</script>


<div>
    <input type="checkbox" bind:checked={completed} o/>
    <button on:click={onEdit}>Edit</button>
    <button on:click={onDelete}>Delete</button>
</div>

<style>
    input[type = "checkbox"]{
        width: 1.1em;
        height: 1.1em;
    }
</style>