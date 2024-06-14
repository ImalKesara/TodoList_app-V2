<script lang="ts">
	import Todoitem from './components/items/Todoitem.svelte';
  	import { onMount } from 'svelte';
	import TodoitemCreate from './components/items/TodoitemCreate.svelte';
	import Todoitems from './components/items/Todoitems.svelte';
  	import EditTaskModal from './components/modal/EditTaskModal.svelte';
	import type { Task } from './model.ts';
  	import Taskio from './components/file/Taskio.svelte';
  	import { modals } from './modals';
	import './app.css';

	const ITEM_STORAGE_KEY = "Todoitems";

	// I comment this because of refactoring code and also that modals.edittask.data & modals.edittask.visible meaning it declared in modals.ts file
	// let editTaskModalData : Task | null  = null;
	// let EditTaskModalVisible = false;

	let items:Task[] =[];

	const onTaskEdit = (e)=>{
		modals.editask.data = structuredClone(e.detail);
		modals.editask.visible = true;
	}

	const  onTaskSavebtn = (data)=>{
		console.log(data.detail)
		items = items.map((v:Task)=> v.id == data.detail.id ? data.detail : v  );
		saveToLocalStorage();
	}  

	const onClose=()=>{
		modals.editask.visible = false;
	}

	//save local storage
	const saveToLocalStorage = ()=>{
		window.localStorage.setItem(ITEM_STORAGE_KEY,JSON.stringify(items))
	}

	onMount(()=>{
		const todoItems = window.localStorage.getItem(ITEM_STORAGE_KEY);
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

<body>
	<div class="card" >
		<!-- Edit pop menu -->
		<EditTaskModal visible = {modals.editask.visible} data = {modals.editask.data} on:save={onTaskSavebtn} on:close={onClose} />
		<!-- Todoitems -->
		<Todoitems bind:items= {items} on:edit= {onTaskEdit} on:delete = {saveToLocalStorage} on:titlechange = {saveToLocalStorage} on:completedChange = {saveToLocalStorage}/> 
		<!-- inputBox -->
		<TodoitemCreate bind:items = {items} on:create ={saveToLocalStorage}/>  

		<Taskio bind:items= {items} />
	</div>
</body>

<style>	
	body{
		@apply bg-gray-50 p-5;
	}
</style>