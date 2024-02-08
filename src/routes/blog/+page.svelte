<script>
  /** @type {import('./$types').LayoutData} */
  export let data;
</script>

<h1>blog</h1>

<p>all blog posts:</p>

<ul>
  {#each data.posts as post}
    <li>
      <a href="/blog/{post.slug}">{post.title}</a>
    </li>
  {/each}
</ul>
