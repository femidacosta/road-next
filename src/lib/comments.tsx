import { kv } from "@vercel/kv";
import short from "short-uuid";

// data structure for our posts
// comments
// comments:blog post> 42df23,d23d23,d2323d,d23d23

// comment
// comment:42df23 -> { username: "femi", comment: "blog comment", uuid: "w3453c"}

export async function saveComment(
  username: string,
  comment: string,
  slug: string
) {
  // save the comment to the blog
  // form validation will go here

  // generate a unique ID for this comment
  const uuid = short.generate();

  // stringify the comment object
  const commentObject = JSON.stringify({
    username,
    comment,
    uuid,
  });

  // add the individual comment to the kv store
  kv.set(`comment:${uuid}`, commentObject);

  // add the uuid to the comments:slug list
  const commentsList = await kv.lpush(`comments:${slug}`, uuid);

  console.log("Comment saved, heres the list: ", commentsList);
  return uuid;
}

export async function getComments(slug: string) {
  // get all the comments for the blog
  const commentIds = await kv.lrange(`comments:${slug}`, 0, -1);
  const commentKeys = commentIds.map((id) => `comment:${id}`);

  if (commentKeys.length < 1) {
    // handle correctly if we have no comments
    return new Promise((resolve, reject) => resolve(null));
  }

  return await kv.mget<Comment[]>(...commentKeys);
}
