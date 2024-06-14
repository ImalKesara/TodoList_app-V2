<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Task } from './../model.ts';
  import { v4 as uuidv4 } from 'uuid';
  export let items: Task[];

  let title: string = '';
  const dispatch = createEventDispatcher();

  const onKeydown = (e: KeyboardEvent) => {
    if (e.key != 'Enter') {
      return; // noting excute
    }

    if (title == '') {
      return;
    }

    items = [
      ...items,
      {
        id: uuidv4(),
        title,
        completed: false,
      },
    ];

    items = items;

    console.log(items);

    dispatch('create');
    title = '';

    // items.push({
    //     id: uuidv4(),
    //     title,
    //     completed:false
    // })
  };
</script>

<input
  class="rounded-lg w-full border-1 border-gray-300 mt-5 p-2.5 mb-2"
  bind:value={title}
  type="text"
  on:keydown={onKeydown}
  placeholder="Create a new task"
/>

<style>
  input {
    box-sizing: border-box;
  }
</style>
