<script lang="ts">
	import Todoitem from './components/items/Todoitem.svelte';
  	import { onMount } from 'svelte';
	import TodoitemCreate from './components/items/TodoitemCreate.svelte';
	import Todoitems from './components/items/Todoitems.svelte';
  	import EditTaskModal from './components/modal/EditTaskModal.svelte';
	import type { Task } from './model.ts';
  	import Taskio from './components/file/Taskio.svelte';

	
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
		saveToLocalStorage();
	}  

	const onClose=()=>{
		EditTaskModalVisible = false;
	}

	//save local storage
	const saveToLocalStorage = ()=>{
		window.localStorage.setItem("Todoitems",JSON.stringify(items))
	}

	onMount(()=>{
		const todoItems = window.localStorage.getItem("Todoitems");
		if(todoItems == null){
			return;
		}

		try{
			const data:Task = JSON.parse(todoItems)
			items = data;
		}catch(err){
			console.error(err)
		}

		

	})


</script>



<div class="card">
	<!-- Edit pop menu -->
	<EditTaskModal visible = {EditTaskModalVisible} data = {editTaskModalData} on:save={onTaskSavebtn} on:close={onClose} />
	<!-- Todoitems -->
	<Todoitems bind:items= {items} on:edit= {onTaskEdit} on:delete = {saveToLocalStorage} on:titlechange = {saveToLocalStorage}/> 
	<!-- inputBox -->
	<TodoitemCreate bind:items = {items} on:create ={saveToLocalStorage}/>  

	<Taskio bind:items= {items} />
</div>