<script lang="ts">
  import type { Task } from '../../model';
  import Buttons from '../util/buttons/Buttons.svelte';

  export let items: Task[] = [];
  let filename: string = '';
  let importFiles: FileList;
  let visible: boolean = false;

  //download file that saved on localStorage
  const save = () => {
    const string = JSON.stringify(items);
    const a = document.createElement('a');
    a.href = `data:application/json;charset=utf-8,${string}`;
    a.download = filename;
    a.click();
  };

  //read upload file from computer
  const onFilesChanged = (files: FileList) => {
    if (files == null) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const result = e.target.result;
        if (typeof result != 'string') return;

        const data: Task[] = JSON.parse(result);
        items = data;
      } catch (err) {
        console.log(err);
      }
    };
    reader.readAsText(files[0]);
  };

  $: onFilesChanged(importFiles);

  function importExportToggle() {
    visible = !visible;
  }
</script>

<Buttons color="sky" on:click={importExportToggle}>Import & Export</Buttons>

{#if visible}
  <div class="">
    <input
      class="rounded-lg border-1 border-gray-300 mt-10 p-2"
      type="text "
      placeholder="file name"
    />
    <Buttons color="sky" on:click={save}>Save file</Buttons>
    <input class="p-2.5" type="file" bind:files={importFiles} />
  </div>
{/if}

<style>
  input[type='file'] {
    display: inline-block;
  }
</style>
