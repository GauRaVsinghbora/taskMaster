'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { GoArrowUpRight } from "react-icons/go";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    {name:'Home',href:'/'},
    { name: 'View Tasks', href: '/view-tasks' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300
      ${
        scrolled
          ? 'bg-white/5 backdrop-blur-[2px] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className="text-[24px] font-bold tracking-tight text-black"
        >
            TaskMaster
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative pb-1 transition
                ${
                  pathname === link.href
                    ? 'text-black'
                    : 'text-gray-500 hover:text-black'
                }`}
            >
              {link.name}

              {/* active underline */}
              <span
                className={`absolute left-0 bottom-0 h-[2px] rounded bg-black transition-all duration-300
                ${
                  pathname === link.href
                    ? 'w-full'
                    : 'w-0'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/create-task"
          className="hidden md:block bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
        >
          Create task <GoArrowUpRight className="inline-block ml-1" />
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${
          open
            ? 'max-h-96 bg-white/90 backdrop-blur-[2px] py-5'
            : 'max-h-0'
        }`}
      >
        <div className="px-6 flex flex-col gap-5">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-medium
              ${
                pathname === link.href
                  ? 'text-black'
                  : 'text-gray-500'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/create-task"
            onClick={() => setOpen(false)}
            className="bg-black text-white py-3 rounded-full text-center font-semibold"
          >
            Create task <GoArrowUpRight className="inline-block ml-1" />
          </Link>

        </div>
      </div>
    </nav>
  );
}