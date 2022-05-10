import React from "react";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { coders: data },
  };
};

export default function About({ coders }) {
  return (
    <>
      <Head>
        <title>abc | about</title>
        <meta name="keywords" content="about" />
      </Head>
      <h1>about</h1>
      <ul>
        {coders.map((user) => (
          <li key={user.id}>
            <Link href={`/about/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
