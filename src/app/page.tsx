import { getPosts } from "@/lib/posts";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

//
export default async function Home() {
  const posts = await getPosts();
  return (
    <div>
      <section className="section_hero">
        Rhythmic of Acoustic Dimension
        <section className="section_card_container">
          {/* @ts-ignore-error Server Component */}
          {/* <PageViews /> */}

          {posts.map((post, idx) => {
            return (
              <div className="wrapper" key={post.slug}>
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
      </section>
    </div>
  );
}
