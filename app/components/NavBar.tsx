import React from "react";
import Link from "next/link";

function NavBar() {
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

export default NavBar;
