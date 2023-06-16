// simulate a database /CMS of posts
// 2 functions that return list of posts

import { allPosts } from "contentlayer/generated";

export function getPosts() {
  // call API or DB to get post data
  return allPosts;
}

// get post by ID number
// export function getPostById(postId: number) {
//   return getPosts().find((post) => post.id === postId);
// }

// takes one parameter called slug
// returning by a filter or find
export function getPostBySlug(slug: string) {
  return getPosts().find((post) => post.slug === slug);
}
