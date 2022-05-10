import React from "react";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return {
    props: { coder: data },
  };
};

export default function Detail({ coder }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      fullpost
      <p>Post: {id}</p>;<h1>name: {coder.name}</h1>
      <h1>name: {coder.email}</h1>
    </>
  );
}
