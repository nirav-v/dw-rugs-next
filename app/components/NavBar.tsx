// import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      NavBar
      <nav>
        <Link href="/">home</Link>
        <Link href="/gallery">gallery</Link>
      </nav>
    </div>
  );
}
