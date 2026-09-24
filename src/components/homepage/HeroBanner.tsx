import Image from "next/image";
import React from "react";
import Banner from "@/assets/hero-book.png";

const HeroBanner = () => {
  return (
    <section className="py-10 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">

          {/* Background Blur Effect */}
          <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-emerald-500/20 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-cyan-500/20 blur-3xl"></div>

          <div className="relative grid lg:grid-cols-2 items-center gap-10 px-8 py-12 lg:px-16 lg:py-20">

            {/* Left Content */}
            <div className="space-y-6">
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm">
                📚 Discover Your Next Favorite Book
              </span>

              <h1 className="font-[Playfair Display] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Books to Freshen Up Your Bookshelf
              </h1>

              <p className="max-w-lg text-slate-300 text-lg">
                Explore bestselling novels, timeless classics, and inspiring
                reads curated to make your bookshelf—and your reading
                experience—more exciting.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600 hover:scale-105">
                  View the Collection
                </button>

                <button className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white hover:text-slate-900">
                  Learn More
                </button>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <h3 className="text-2xl font-bold">10K+</h3>
                  <p className="text-sm text-slate-400">Books Available</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">4.9★</h3>
                  <p className="text-sm text-slate-400">Reader Rating</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">50K+</h3>
                  <p className="text-sm text-slate-400">Happy Readers</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
                <Image
                  src={Banner}
                  alt="Book hero banner"
                  priority
                  className="w-full max-w-md drop-shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;