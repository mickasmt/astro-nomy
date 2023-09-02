import { getCollection } from 'astro:content';

export async function getPosts() {
  const posts = (await getCollection('blog')).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );

  return posts;
}