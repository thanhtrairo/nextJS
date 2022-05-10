import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <Link href="/">home</Link>
      <br />
      <Link href="/about">about</Link>
    </div>
  );
}
