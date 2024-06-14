<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Icon from '@iconify/svelte';

  export let completed: boolean;
  const dispatch = createEventDispatcher();
  const onEdit = () => {
    dispatch('edit');
  };
  const onDelete = () => {
    dispatch('delete');
  };
  const onCompletedChange = (_) => {
    dispatch('completedChange');
  };
  $: onCompletedChange(completed);
</script>

<div>
  <input type="checkbox" bind:checked={completed} />
  <button on:click={onEdit}>
    <Icon
      icon="material-symbols:edit-outline"
      width="1.4em"
      height="1.4em"
      style="white"
    />
  </button>
  <button on:click={onDelete}
    ><Icon
      icon="material-symbols:delete"
      width="1.4em"
      height="1.4em"
      style="color: red"
    />
  </button>
</div>

<style>
  div {
    display: flex;
    gap: 0.7em;
    justify-content: center;
    align-items: center;
  }
  input[type='checkbox'] {
    width: 1.3em;
    height: 1.3em;
  }
</style>
