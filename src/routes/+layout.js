export async function load() {
  return {
    pages: [
      { slug: "", title: "Home" },
      { slug: "about", title: "About" },
      { slug: "blog", title: "Blog" },
      { slug: "contact", title: "Contact" },
    ],
  };
}
