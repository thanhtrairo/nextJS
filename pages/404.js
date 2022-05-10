import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Notfound() {
  const router = useRouter();
  useEffect(() => {
    const timeID = setTimeout(() => {
      router.push("/");
    }, 2000);
    return () => clearTimeout(timeID);
  }, []);
  return <div>Notfound</div>;
}
