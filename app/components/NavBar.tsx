// import React from "react";
import Link from 'next/link';

function NavTab({
  href,
  text,
  className,
}: {
  href: string;
  text: string;
  className: string;
}) {
  return (
    <Link href={href} className={className}>
      {text}
    </Link>
  );
}

export default function NavBar() {
  const navTabs = [
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'gallery',
      path: '/gallery',
    },
    {
      name: 'youtube',
      path: '/youtube',
    },
  ];

  return (
    <>
      <div>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {/* map over nav tabs and render here */}
                    {navTabs.map(tab => (
                      <NavTab
                        key={tab.name}
                        href={tab.path}
                        text={tab.name}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  type="button"
                  className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                </button>
              </div>
            </div>
          </div>

          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navTabs.map(tab => (
                <NavTab
                  key={tab.name}
                  href={tab.path}
                  text={tab.name}
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                />
              ))}
            </div>
          </div>
        </nav>

        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">DW Rugs</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}
            {/* <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
            </div> */}
            {/* <!-- /End replace --> */}
          </div>
        </main>
      </div>
    </>
  );
}
