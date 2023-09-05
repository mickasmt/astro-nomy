import { getCollection } from "astro:content";

export async function getCategories() {
  const posts = await getCollection("blog");

  const categories = [
    ...new Set([].concat.apply(posts.map((post) => post.data.category))),
  ];

  return categories;
}

export async function getPosts() {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return posts;
}

export async function getPostsByCategory(category: string) {
  const posts = (await getCollection("blog"))
    .filter((post) => post.data.category === category)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return posts;
}
