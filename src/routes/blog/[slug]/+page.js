import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {
  const { posts } = await parent();

  if (posts.find(({ slug }) => slug === params.slug)) {
    return posts.find(({ slug }) => slug === params.slug);
  }

  error(404, "Not found");
}
