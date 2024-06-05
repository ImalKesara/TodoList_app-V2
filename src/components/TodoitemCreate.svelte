<script lang="ts">
	import type { Task } from './../model.ts';
    import { v4 as uuidv4 } from 'uuid';
    export let items:Task[];

    let title : string = "";

    const onKeydown = (e:KeyboardEvent)=>{
        if(e.key != "Enter"){
            return; // noting excute
        }

        items = [...items, {
            id : uuidv4(),
            title,
            completed :false,
        }]

        items = items;

        console.log(items)

        title = "";        
    }
</script>

<input bind:value= {title} type="text" on:keydown={onKeydown} placeholder="Create a new task">

<style>
    input{
        width: 100%;
        padding: 1em;
        box-sizing: border-box;
    }
</style>