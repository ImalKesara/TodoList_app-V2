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

  $:items = items.sort((a,b)=> a.completed -b.completed); // asending order  -1,2,3.... decending order - b.completed - a.completed 3,2,1...
  

  const getList = (items :Task)=>{
    return [
      items.filter((i:Task) => !i.completed),
      items.filter((i:Task) => i.completed),
    ]
  }

  let lists;
  $:lists = getList(items);
  
</script>

<div class="flex gap-5">
  {#each lists as list}
  <!-- this lists loop twice which means list 1 - completed and list 2 - uncompleted  -->
    <div class="flex gap-2">
      {#each list as item(item.id) }
        <Todoitem
        on:completedChange
        on:titlechange
        bind:data = {item}  
        on:delete = {()=>onDelete(item)}  
        on:edit = {()=> dispatch("edit",item)}
        />  
      {/each}
    </div>
  {/each}
</div>

<style>
  div{
    display: flex;  
    flex-direction: column;
  }
</style>
