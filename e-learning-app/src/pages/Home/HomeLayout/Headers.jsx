import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { useEffect, useState } from "react";
import { CiBellOn } from "react-icons/ci";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import { HiMiniXMark } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
export default function Headers() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-top hidden md:block  ">
        <ul className="navbar-top_social">
          <li>
            <NavLink to="./course-list">Blog</NavLink>
          </li>
          <li>
            <NavLink>Oline learning CyberSoft.vn</NavLink>
          </li>
          <li>
            <NavLink className="navbar-top_hotline">Hotline:0934567890</NavLink>
          </li>
          <li>
            <ul className="flex items-center">
              <li>
                <NavLink>
                  <i className="fa-brands fa-facebook-f"></i>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <i className="fa-brands fa-youtube"></i>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <Disclosure as="nav" className="navbar">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center md:px-2 lg:px-0">
              <div className="shrink-0">
                <img
                  alt="Your Company"
                  src="./public/logoSybersoft.png"
                  className="h-6 md:h-10 lg:h-16 w-auto"
                />
              </div>
              <div className="hidden lg:ml-6 lg:block">
                <div className="flex space-x-4">
                  <NavLink href="#" className="rounded-md px-3 py-2 ">
                    Courses
                  </NavLink>
                  <NavLink href="#" className="rounded-md px-3 py-2 ">
                    Blog
                  </NavLink>
                  <NavLink href="#" className="rounded-md px-3 py-2 ">
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="navbar-search flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="grid w-full max-w-lg grid-cols-1 lg:max-w-xs">
                <input
                  name="search"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="col-start-1 row-start-1 block w-full rounded-md bg-gray-700 py-1.5 pl-10 pr-3 text-base text-white outline-none placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-400 sm:text-sm/6"
                />
                <FaMagnifyingGlass
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"
                />
              </div>
            </div>
            <div className="flex lg:hidden bg-gray-800">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <HiMenu
                  aria-hidden="true"
                  className="block size-6 group-data-[open]:hidden"
                />
                <HiMiniXMark
                  aria-hidden="true"
                  className="hidden size-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="hidden lg:ml-4 lg:block">
              <div className="flex items-center">
                <button
                  type="button"
                  className="relative shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <CiBellOn aria-hidden="true" className="size-6" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-4 shrink-0">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="size-8 rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      <NavLink
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                      >
                        Your Profile
                      </NavLink>
                    </MenuItem>
                    <MenuItem>
                      <NavLink
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                      >
                        Settings
                      </NavLink>
                    </MenuItem>
                    <MenuItem>
                      <NavLink
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                      >
                        Sign out
                      </NavLink>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="lg:hidden bg-gray-800">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLink
              as="a"
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Courses
            </NavLink>
            <NavLink
              as="a"
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Blog
            </NavLink>
            <NavLink
              as="a"
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Contact
            </NavLink>
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="shrink-0">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-10 rounded-full"
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">Tom Cook</div>
                <div className="text-sm font-medium text-gray-400">
                  tom@example.com
                </div>
              </div>
              <button
                type="button"
                className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <CiBellOn aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <DisclosureButton
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Your Profile
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Settings
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Sign out
              </DisclosureButton>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </header>
  );
}