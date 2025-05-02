"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";

// Define the shape of menu items
interface MenuItem {
  title: string;
  path?: string;
  submenu?: MenuItem[];
}

// Assuming menuData is imported as an array of MenuItem
import menuData from "./menuData";

const Header: React.FC = () => {
  // Navbar toggle state
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const navbarToggleHandler = () => {
    setNavbarOpen((prev) => !prev);
  };

  // Close navbar function
  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  // Sticky navbar state
  const [sticky, setSticky] = useState<boolean>(false);
  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
    closeNavbar(); // Close navbar on scroll
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // Submenu state
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const pathname = usePathname();

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          sticky
            ? "bg-white/90 dark:bg-gray-900/90 shadow-lg backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" onClick={closeNavbar}>
                <Image
                  src="/images/logo/LOGO-1.png"
                  alt="Logo"
                  width={180}
                  height={40}
                  className="w-40 dark:hidden"
                />
                <Image
                  src="/images/logo/LOGO-2.png"
                  alt="Logo"
                  width={180}
                  height={40}
                  className="hidden w-40 dark:block"
                />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={navbarToggleHandler}
              aria-label="Toggle Mobile Menu"
              className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <span
                className={`block h-0.5 w-6 bg-gray-800 dark:bg-white transition-all duration-300 ${
                  navbarOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-800 dark:bg-white my-1.5 transition-all duration-300 ${
                  navbarOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-800 dark:bg-white transition-all duration-300 ${
                  navbarOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>

            {/* Navigation Menu */}
            <nav
              className={`lg:flex lg:items-center lg:space-x-8 fixed lg:static top-0 left-0 h-full lg:h-auto w-64 lg:w-auto bg-white dark:bg-gray-900 lg:bg-transparent lg:dark:bg-transparent shadow-lg lg:shadow-none ${
                navbarOpen ? "translate-x-0" : "-translate-x-full"
              } lg:translate-x-0 transition-transform duration-300 ease-in-out lg:transition-none`}
            >
              <ul className="flex flex-col lg:flex-row lg:space-x-6 p-6 lg:p-0 h-full lg:h-auto">
                {menuData.map((menuItem: MenuItem, index: number) => (
                  <li key={index} className="relative group">
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        onClick={closeNavbar}
                        className={`block py-3 lg:py-0 text-base font-medium transition-colors ${
                          pathname === menuItem.path
                            ? "text-primary dark:text-white"
                            : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => handleSubmenu(index)}
                          className="flex items-center justify-between w-full py-3 lg:py-0 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white"
                        >
                          {menuItem.title}
                          <svg
                            className="ml-2 w-5 h-5 lg:w-4 lg:h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        <div
                          className={`lg:absolute lg:top-full lg:left-0 lg:w-48 lg:bg-transparent lg:dark:bg-transparent lg:shadow-lg lg:rounded-md lg:p-2 transition-all duration-300 lg:transition-none ${
                            openIndex === index
                              ? "block"
                              : "hidden lg:group-hover:block"
                          } pl-4 lg:pl-0`}
                        >
                          {menuItem.submenu?.map(
                            (submenuItem: MenuItem, subIndex: number) => (
                              <Link
                                key={subIndex}
                                href={submenuItem.path || "#"}
                                onClick={closeNavbar}
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary dark:hover:text-white rounded"
                              >
                                {submenuItem.title}
                              </Link>
                            )
                          )}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Section (Call Us & Theme Toggler) */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="tel:+919413466075"
                className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Image
                  src="/images/call.png"
                  alt="Call Icon"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Call Us
              </Link>
              <ThemeToggler />
            </div>
          </div>
        </div>
      </header>

      {/* Custom CSS for mobile menu animation */}
      <style jsx>{`
        @media (max-width: 1023px) {
          nav {
            transform: translateX(-100%);
          }
          nav.translate-x-0 {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;