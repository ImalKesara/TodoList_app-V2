<script lang="ts">
	import TodoitemCreate from './components/TodoitemCreate.svelte';
	import Todoitems from './components/Todoitems.svelte';
	import type { Task } from './model.ts';
	

	let items:Task[] =[];
  
</script>



<div class="card">
	<Todoitems bind:items= {items} /> 
	<TodoitemCreate bind:items = {items} />
</div>