<script lang="ts">
    export let color :string = "blue";
    const COLORS = {
        "sky" :"bg-sky-500 hover:bg-sky-600",
        "red" : "bg-red-500 hover:bg-red-600",
    }
</script>

<button class="{COLORS[color]} ease-in duration-300 rounded-lg text-white font-bold px-4 py-2" on:click={close}><slot/></button>