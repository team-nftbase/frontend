<div class="container mx-auto py-12 px-72">
  <p class="text-3xl text-center">Create collectible</p>
  <div class="flex w-full mt-24">
    <button
      class="btn_create w-1/2 mx-4 h-64 text-3xl rounded-md"
      on:click={() => {
        location.href = "create_single";
      }}>Single</button
    >
    <button disabled class="btn_create w-1/2 mx-4 h-64 text-3xl rounded-md"
      >Multiple</button
    >
  </div>
</div>