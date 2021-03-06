import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Post from "../components/Posts";

export default function Home() {
  const Posts = [
    {
      img_link: "http://dessins-animes.com/da/horton/images/horton-04.jpg",
      user: "Carvallok77",
      date: "10/25/21",
      content: "Hello!",
    },
    {
      img_link: "http://dessins-animes.com/da/horton/images/horton-04.jpg",
      user: "Carvallok77",
      date: "10/25/21",
      content: "How you doin'?",
    },
  ];
  const Post_Components = [];

  Posts.forEach((post) => {
    Post_Components.push(
      <Post
        user={post.user}
        date={post.date}
        content={post.content}
        img_link={post.img_link}
      />
    );
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {Post_Components}
    </div>
  );
}
