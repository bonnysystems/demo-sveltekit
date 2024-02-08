const mockDatabase = [
  {
    slug: "circassians",
    title: "Circassians",
    description: "This is a post about Circassians!",
    content: "<div><p>this is some content about circassians</p></div>",
  },
  {
    slug: "ketchup",
    title: "Ketchup",
    description: "This is a post about ketchup!",
    content: "<div><p>this is some content about ketchup</p></div>",
  },
  {
    slug: "family",
    title: "Family",
    description: "This is a post about family!",
    content: "<div><p>this is some content about family</p></div>",
  },
];

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
  await setTimeout(() => {}, 500);
  return { posts: mockDatabase };
}
