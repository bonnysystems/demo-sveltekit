<script>
  /** @type {import('./$types').LayoutData} */
  export let data;
</script>

<header>
  <nav>
    <ul>
      {#each data.pages as section}
        <li>
          <a href="/{section.slug}">{section.title}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<main>
  <slot />
</main>

<footer>copyright sveltekit</footer>

<style>
  header ul {
    display: flex;
    gap: 16px;
    margin: 0px;
    padding: 0px;
  }
  header li {
    list-style-type: none;
  }
</style>
