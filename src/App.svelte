<script lang="ts">
	import TodoitemCreate from './components/items/TodoitemCreate.svelte';
	import Todoitems from './components/items/Todoitems.svelte';
  import EditTaskModal from './components/modal/EditTaskModal.svelte';
	import type { Task } from './model.ts';
	

	let items:Task[] =[];
  
</script>



<div class="card">
	<EditTaskModal />
	<Todoitems bind:items= {items} /> 
	<TodoitemCreate bind:items = {items} />
</div>