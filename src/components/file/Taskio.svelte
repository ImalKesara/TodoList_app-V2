<script lang="ts">
  import type { Task } from "../../model";

  export let items:Task[] =[];

  let filename:string = "";


    function save(){
        const string = JSON.stringify(items);
        const a = document.createElement("a");
        a.href = `data:application/json;charset=utf-8,${string}`;
        a.download = filename;
        a.click();
    }
</script>


<div>
    <input type="text" placeholder="file name">
    <button on:click={save}>Save file</button>
    <br>
    <input type="file">
</div>

<style>
    div{
        margin-top: 0.5em;

    }
</style>