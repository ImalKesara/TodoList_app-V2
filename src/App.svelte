<script lang="ts">
	import TodoitemCreate from './components/items/TodoitemCreate.svelte';
	import Todoitems from './components/items/Todoitems.svelte';
  	import EditTaskModal from './components/modal/EditTaskModal.svelte';
	import type { Task } from './model.ts';

	
	let editTaskModalData : Task | null  = null;
	let EditTaskModalVisible = false;

	let items:Task[] =[];

	const onTaskEdit = (e)=>{
		console.log(e.detail)
	}

  
</script>



<div class="card">
	<!-- Edit pop menu -->
	<EditTaskModal visible = {EditTaskModalVisible} data = {editTaskModalData} />
	<!-- Todoitems -->
	<Todoitems bind:items= {items} on:edit= {onTaskEdit}/> 
	<!-- inputBox -->
	<TodoitemCreate bind:items = {items} />  
</div>