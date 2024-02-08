<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<h1>{data.title}</h1>
<h3>{data.description}</h3>
<div>{@html data.content}</div>
