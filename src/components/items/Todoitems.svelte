<script lang="ts">
  import type { Task } from "../../model";
  import Todoitem from "./Todoitem.svelte";

  export let items:Task[];

  const onDelete = (item :Task) => {
      items = items.filter((i:Task) => i.id != item.id )
      alert('deleted successfully')
  }
  

  
</script>

<div>
  {#each items as item(item.id) }
    <Todoitem  bind:data = {item}  on:delete = {()=>onDelete(item)}/>  
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
