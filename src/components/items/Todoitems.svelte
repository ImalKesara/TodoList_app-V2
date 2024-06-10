<script lang="ts">
  import {createEventDispatcher} from 'svelte';
  import type { Task } from "../../model";
  import Todoitem from "./Todoitem.svelte";


  const dispatch = createEventDispatcher();
  export let items:Task[];

  const onDelete = (item :Task) => {
      items = items.filter((i:Task) => i.id != item.id )
      dispatch("delete");
  }
  
  
</script>

<div>
  {#each items as item(item.id) }
    <Todoitem
    on:completedChange
    on:titlechange
    bind:data = {item}  
    on:delete = {()=>onDelete(item)}  
    on:edit = {()=> dispatch("edit",item)}
    />  
  {/each}

  <!-- {JSON.stringify(items)} -->

</div>

<style>
  div{
    display: flex;  
    gap: 1em;
    flex-direction: column;
  }
</style>
