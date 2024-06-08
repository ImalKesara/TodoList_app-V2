<script lang="ts">
	import TodoitemCreate from './components/items/TodoitemCreate.svelte';
	import Todoitems from './components/items/Todoitems.svelte';
  	import EditTaskModal from './components/modal/EditTaskModal.svelte';
	import type { Task } from './model.ts';

	
	let editTaskModalData : Task | null  = null;
	let EditTaskModalVisible = false;



	let items:Task[] =[];

	const onTaskEdit = (e)=>{

		editTaskModalData = structuredClone(e.detail);
		console.log(e);
		console.log(e.detail);
		EditTaskModalVisible = true;	

	}

	const  onTaskSavebtn = (data)=>{
		console.log(data.detail)
		items = items.map((v:Task)=> v.id == data.detail.id ? data.detail : v  );
	}

  
</script>



<div class="card">
	<!-- Edit pop menu -->
	<EditTaskModal visible = {EditTaskModalVisible} data = {editTaskModalData} on:save={onTaskSavebtn} />
	<!-- Todoitems -->
	<Todoitems bind:items= {items} on:edit= {onTaskEdit}/> 
	<!-- inputBox -->
	<TodoitemCreate bind:items = {items} />  
</div>