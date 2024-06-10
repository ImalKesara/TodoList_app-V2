<script lang="ts">
    import type { Task } from "../../model";

    export let items:Task[] =[];
    let filename:string = "";
    let importFiles : FileList;


    //download file that saved on localStorage 
    const save = () => {
        const string = JSON.stringify(items);
        const a = document.createElement("a");
        a.href = `data:application/json;charset=utf-8,${string}`;
        a.download = filename;
        a.click();
    }
    
    //read upload file from computer 
    const onFilesChanged = (files: FileList) =>{
        if(files == null){
            return;
        }
        const reader = new FileReader();
        reader.onload = (e)=>{
            try{
                const result = e.target.result;
                if(typeof result != "string")
                    return;
            
                const data:Task[] = JSON.parse(result)
                items = data;
		    }catch(err){
                console.log(err);
            }
        }
        reader.readAsText(files[0])
    }

    $:onFilesChanged(importFiles);
    
</script>


<div>
    <input type="text" placeholder="file name">
    <button on:click={save}>Save file</button>
    <input type="file" bind:files={importFiles}>
</div>

<style>
    div{
        margin-top: 0.5em;

    }

    input[type = "file"]{
        display: block;
    }
</style>