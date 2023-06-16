import Link from "next/link";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Image from "next/image";

export default function SoundCard(post: Post) {
  return (
    <div className="pb-8 mb-8 border-t-4 border-black">
      <Link
        href={`/${post.slug}`}
        className="text-center hover:text-grey-200 no-underline"
      >
        <h2 className="mb-1">
          {post.title} - {post.image} - {post.music}{" "}
        </h2>
        <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        {post.image && (
          <Image src={post.image} alt="" width="400" height="400" />
        )}
      </Link>

      {/* <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
    </div>
  );
}
