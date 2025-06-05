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
    if (navbarOpen) {
      closeNavbar(); // Close navbar on scroll
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, [navbarOpen]);

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
            ? "bg-white/90 dark:bg-gray-900/90 shadow-lg backdrop-blur-sm py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Left Section (Logo) */}
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

            {/* Mobile Right Section (Call Us & Theme Toggler) & Toggle Button */}
            <div className="flex items-center space-x-3 lg:hidden">
              
              <ThemeToggler />
              <button
                onClick={navbarToggleHandler}
                aria-label="Toggle Mobile Menu"
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute block h-0.5 w-6 bg-gray-800 dark:bg-white transition-all duration-300 ${
                      navbarOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-1"
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-6 bg-gray-800 dark:bg-white transition-all duration-300 top-1/2 -translate-y-1/2 ${
                      navbarOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-6 bg-gray-800 dark:bg-white transition-all duration-300 ${
                      navbarOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-1"
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* Navigation Menu */}
            <div
              className={`lg:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
                navbarOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              onClick={closeNavbar}
            />

            <nav
              className={`lg:flex lg:items-center lg:space-x-8 fixed lg:static top-0 left-0 h-screen lg:h-auto w-4/5 max-w-sm lg:w-auto bg-white dark:bg-gray-900 lg:bg-transparent lg:dark:bg-transparent shadow-lg lg:shadow-none z-50 transition-transform duration-300 ease-in-out ${
                navbarOpen ? "translate-x-0" : "-translate-x-full"
              } lg:translate-x-0`}
            >
              <div className="flex justify-between items-center p-4 border-b lg:hidden">
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
                <button
                  onClick={closeNavbar}
                  className="p-2 rounded-md focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <ul className="flex flex-col lg:flex-row lg:space-x-6 p-6 lg:p-0 h-[calc(100%-180px)] lg:h-full overflow-y-auto">
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
                            className={`ml-2 w-5 h-5 lg:w-4 lg:h-4 transition-transform duration-200 ${
                              openIndex === index ? "rotate-180" : ""
                            }`}
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
                          className={`lg:absolute lg:top-full lg:left-0 lg:w-48 lg:bg-white lg:dark:bg-gray-900 lg:shadow-lg lg:rounded-md lg:p-2 transition-all duration-300 ${
                            openIndex === index
                              ? "max-h-screen opacity-100"
                              : "max-h-0 opacity-0 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:max-h-screen overflow-hidden"
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

              {/* Mobile Footer Section */}
              {/* <div className="lg:hidden p-6 border-t absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-900">
                <div className="flex items-center justify-between mb-4">
                  <Link
                    href="tel:+919413466075"
                    className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    onClick={closeNavbar}
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
              </div> */}
            </nav>

            {/* Desktop Right Section (Call Us & Theme Toggler) */}
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
    </>
  );
};

export default Header;