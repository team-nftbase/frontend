<script>
  import { status } from "../../store/explore.store";

  export let name = "";
  export let color = "";

  let status_value;

  $: className = status_value[name] ? color : "";

  const unsubscribe = status.subscribe((value) => {
    status_value = value;
  });

  const handlerStatus = (name) => {
    status.update((status) => {
      status[name] = !status[name];
      return status;
    });
  };
</script>

<button
  class={`${className} rounded-lg p-2 text-left`}
  on:click={(_) => handlerStatus(name)}>{name}</button>
