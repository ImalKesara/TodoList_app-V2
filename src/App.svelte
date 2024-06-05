<script lang="ts">
	import TodoitemCreate from './components/TodoitemCreate.svelte';
	import Todoitems from './components/Todoitems.svelte';
	import type { Task } from './model.ts';
	

	let items:Task[] =[
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

  ];
  
</script>



<div class="card">
	<Todoitems bind:items= {items} /> 
	<TodoitemCreate bind:items = {items} />
</div>