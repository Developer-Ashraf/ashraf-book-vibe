import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white font-[Playfair Display]">
              Book Vibe
            </h2>
            <p className="text-slate-400 leading-7">
              Discover bestselling books, timeless classics, and inspiring
              reads that make every page worth turning.
            </p>

            <div className="flex gap-3 pt-2">
              <a className="rounded-full bg-white/10 p-3 transition hover:bg-emerald-500 hover:text-white">
                <FaFacebookF />
              </a>
              <a className="rounded-full bg-white/10 p-3 transition hover:bg-emerald-500 hover:text-white">
                <FaInstagram />
              </a>
              <a className="rounded-full bg-white/10 p-3 transition hover:bg-emerald-500 hover:text-white">
                <FaTwitter />
              </a>
              <a className="rounded-full bg-white/10 p-3 transition hover:bg-emerald-500 hover:text-white">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-emerald-400 transition">Home</Link></li>
              <li><Link href="/listed-books" className="hover:text-emerald-400 transition">Listed Books</Link></li>
              <li><Link href="/pages-to-read" className="hover:text-emerald-400 transition">Pages to Read</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition">About</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-3">
              <li><a className="hover:text-emerald-400 transition">Help Center</a></li>
              <li><a className="hover:text-emerald-400 transition">Privacy Policy</a></li>
              <li><a className="hover:text-emerald-400 transition">Terms & Conditions</a></li>
              <li><a className="hover:text-emerald-400 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Stay Updated
            </h3>

            <p className="mb-4 text-slate-400">
              Subscribe to receive new book recommendations and exclusive
              offers.
            </p>

            <div className="flex rounded-xl overflow-hidden border border-slate-700">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-3 text-white outline-none placeholder:text-slate-500"
              />
              <button className="bg-emerald-500 px-5 font-semibold text-white transition hover:bg-emerald-600">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-slate-800"></div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>© 2026 Book Vibe. All rights reserved.</p>

          <div className="flex gap-6">
            <a className="hover:text-emerald-400 transition">Privacy</a>
            <a className="hover:text-emerald-400 transition">Terms</a>
            <a className="hover:text-emerald-400 transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;