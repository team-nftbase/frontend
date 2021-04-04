<script>
  import { locale, locales } from "svelte-i18n";
  const langMap = { en: "ENG", kr: "KOR", cn: "CN" };
</script>

<div class="container flex justify-end items-center xl:px-64 py-2 mx-auto">
  <p>Language</p>
  <select class="ml-4 px-1" bind:value={$locale}>
    {#each $locales as locale}
      <option value={locale}>{langMap[locale]}</option>
    {/each}
  </select>
</div>
