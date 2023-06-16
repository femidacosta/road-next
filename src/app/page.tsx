import { getPosts } from "@/lib/posts";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

//
export default async function Home() {
  const posts = await getPosts();
  return (
    <section className="card_container">
      <h2 className="h2">Rhythmic of Acoustic Dimension</h2>

      {/* @ts-ignore-error Server Component */}
      {/* <PageViews /> */}

      {posts.map((post, idx) => {
        return (
          <div className="wrapper">
            <div className="a">
              <Link href={`/${post.slug}`}>
                {post.title}
                <Image src={post.image} alt="" width="300" height="300" />
                <time dateTime={post.date}>
                  {format(parseISO(post.date), "LL d, yyyy")}
                </time>
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
