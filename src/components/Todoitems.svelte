<script>
  import Todoitem from "./Todoitem.svelte";

  const onDelete = () => {
      alert('deleted successfully')
  }

</script>

<div>
  <Todoitem  on:delete = {onDelete}/>
  
</div>

<style>
  div{
    display: flex;  
    gap: 1em;
    flex-direction: column;
  }
</style>
