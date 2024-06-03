<script lang="ts">
  import type { Task } from "../model";
  import Todoitem from "./Todoitem.svelte";

  const onDelete = () => {
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
  {#each items as item }
    <Todoitem data = {item}  on:delete = {onDelete}/>  
  {/each}
</div>

<style>
  div{
    display: flex;  
    gap: 1em;
    flex-direction: column;
  }
</style>
