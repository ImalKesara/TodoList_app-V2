<script lang="ts">
    import {createEventDispatcher} from 'svelte';


    const dispatch = createEventDispatcher();

    const onEdit = ()=>{
        dispatch('edit');
    }

    const onDelete = () => {
        dispatch('delete')
    }


</script>


<div>
    <button on:click={onEdit}>Edit</button>
    <button on:click={onDelete}>Delete</button>
</div>