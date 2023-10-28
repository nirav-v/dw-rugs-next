// import React from "react";
import Link from "next/link";

export default function NavBar() {
  const navTabs = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "gallery",
      path: "/gallery",
    },
    {
      name: "youtube",
      path: "/youtube",
    },
  ];

  return (
    <nav className="flex flex-col sm:flex-row items-center justify-center p-3">
      {navTabs.map((tab) => (
        <Link key={tab.name} href={tab.path}>
          {tab.name}
        </Link>
      ))}
    </nav>
  );
}
