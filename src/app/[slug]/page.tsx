import Image from "next/image";
import { getPostBySlug, getPosts } from "@/lib/posts";
import { compareDesc, format, parseISO } from "date-fns";
import { notFound } from "next/navigation";
import Link from "next/link";
// import "./home.css";

export default async function SoundPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="_container_container">
      <Link href="/" className="link">
        &#10550; Back to Road
      </Link>
      <div className="text_container">
        <time dateTime={post.date}>
          {format(parseISO(post.date), "LL d, yyyy")}
        </time>
        <h1 className="card_title">{post.title}</h1>
        {post.image && (
          <Image src={post.image} alt="" width="400" height="400" />
        )}
        <audio src={post.music}></audio>
      </div>

      <div
        className="post_card"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
}
