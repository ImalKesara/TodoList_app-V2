<script lang="ts">
  export let color: string = 'blue';

  //Record<key,value>
  const COLORS: Record<string, string> = {
    sky: 'bg-sky-500 hover:bg-sky-600',
    red: 'bg-red-500 hover:bg-red-600',
  };
  function getColor(color: string) {
    return COLORS[color] ?? COLORS['blue'];
  }
</script>

<button
  class="{getColor(
    color
  )} ease-in duration-300 rounded-lg text-white font-bold px-4 py-2"
  on:click><slot /></button
>
