import { getAllPosts } from "../../lib/api";

export default function Home() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "artist",
    "album",
    "created",
    "content",
    "link",
  ]);

  const display = allPosts[0];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{display.title}</h1>
      <h2>{display.artist}</h2>
      <h3>
        {display.album} - {display.date}
      </h3>

      <iframe
        width="560"
        height="315"
        src={display.link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <p>{display.content}</p>

      <hr />

      <h2>Other Tracks</h2>

      {allPosts.map((post) => {
        return <h1 key={post.slug}>{post.title}</h1>;
      })}
    </main>
  );
}

// import { getAllPosts } from "../../lib/api";
// import Head from "next/head";
// import Post from "../../interfaces/track";

// type Props = {
//   allPosts: Post[];
// };

// export default function Index({ allPosts }: Props) {
//   const heroPost = allPosts[0];
//   const morePosts = allPosts.slice(1);

//   return (
//     <>
//       <Head>
//         <title>Singer</title>
//       </Head>

//       {heroPost.title}

//       {morePosts.map((post) => {
//         <h3>{post.title}</h3>;
//       })}
//     </>
//   );
// }

// export const getStaticProps = async () => {
//

//   return {
//     props: { allPosts },
//   };
// };
