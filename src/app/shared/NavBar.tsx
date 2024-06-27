"use client";

import logo from "@/assets/img/navbar-logo.svg";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

export default function NavBar() {
  const pathName = usePathname();
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (pathName) {
      setLocation(pathName);
    }
  }, [pathName]);

  return (
    <header>
      <nav className="px-4 lg:px-6 py-2.5 mt-2">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
          <div className="flex items-center lg:order-2">
            <ConnectButton label="Connect" />
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <Link href="#" className="flex items-center">
              <Image
                src={logo}
                height={50}
                className="mr-3"
                alt="vampire-attack"
              />
            </Link>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ps-8">
              <li>
                <Link
                  href="/merge"
                  className={`block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white uppercase`}
                  aria-current="page"
                >
                  Merge
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
