<script lang="ts">
  import type { Task } from "../model";
  import Todoitem from "./Todoitem.svelte";

  const onDelete = (item :Task) => {
      items = items.filter((i:Task) => i.id != item.id )
      alert('deleted successfully')
  }
  

  let items:Task [] =[
    {
      id : "1",
      title : "Buy some donuts",
      completed : false, 
    },
    {
      id : "2",
      title : "Buy some chocolut",
      completed : false, 
    }

  ]

  

</script>

<div>
  {#each items as item(item.id) }
    <Todoitem data = {item}  on:delete = {()=>onDelete(item)}/>  
  {/each}
</div>

<style>
  div{
    display: flex;  
    gap: 1em;
    flex-direction: column;
  }
</style>
