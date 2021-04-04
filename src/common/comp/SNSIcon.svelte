<script>
  export let name = "";
  export let bg_color = "black";
  export let color = "white";
  export let href = "white";
</script>

<a {href} target="_blank">
  <i
    style={`background-color:${bg_color}; color:${color};`}
    class={`text-lg ${name} p-2 rounded-full mr-2`}
  />
</a>
