<script>
  import Button from "./Status.button.svelte";
</script>

<div class="border-2 rounded-lg p-2 mr-2">
  <p class="text-xl font-bold">Status</p>
  <hr/>
  <div class="grid grid-cols-2 gap-2 pt-2">
    <Button name="on_sale" color="bg-blue-500 text-white" />
    <Button name="on_auction" color="bg-purple-500 text-white" />
    <Button name="new" color="bg-green-500 text-white" />
    <Button name="has_placed_bids" color="bg-pink-500 text-white" />
  </div>
</div>
