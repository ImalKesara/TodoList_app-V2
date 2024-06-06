<script lang="ts">
    import {createEventDispatcher} from 'svelte';


    const dispatch = createEventDispatcher();

    const onDelete = () => {
        dispatch('delete')
    }
</script>


<div>
    <button>Edit</button>
    <button on:click={onDelete}>Delete</button>
</div>