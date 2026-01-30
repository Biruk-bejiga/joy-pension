"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  "/assets/img-1.png",
  "/assets/img-2.png",
  "/assets/img-3.png",
  "/assets/img-4.png",
  "/assets/img-5.png",
  "/assets/img-6.png",
  "/assets/img-7.png",
  "/assets/img-8.png",
  "/assets/img-9.png",
  "/assets/img-10.png",
];

export default function GalleryPage() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const isAm = lang === "am";

  return (
    <div className="min-h-screen bg-[color:var(--background)] text-slate-900">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-[color:var(--background)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-base font-semibold text-slate-900">
              Joy Pension | Kotebe Kara
            </p>
            <p className="text-sm text-[color:var(--muted)] font-am">
              ጆይ ፔንሲዮን | ኮተቤ ካራ
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="hidden rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm sm:inline-flex"
            >
              {isAm ? "ወደ መነሻ" : "Back to Home"}
            </a>
            <div className="flex items-center rounded-full border border-black/10 bg-white p-1 text-sm shadow-sm">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1 transition ${
                  !isAm
                    ? "bg-[color:var(--accent)] text-white"
                    : "text-slate-700"
                }`}
                aria-pressed={!isAm}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("am")}
                className={`rounded-full px-3 py-1 font-am transition ${
                  isAm
                    ? "bg-[color:var(--accent)] text-white"
                    : "text-slate-700"
                }`}
                aria-pressed={isAm}
              >
                አማ
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
              {isAm ? "ጆይ ፔንሲዮን" : "Joy Pension"}
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
              {isAm ? "ፎቶ ጋለሪ" : "Photo Gallery"}
            </h1>
            <p className="mt-3 text-base text-[color:var(--muted)]">
              {isAm
                ? "የክፍሎችን እና የአካባቢውን ማህበራዊ እይታ ይመልከቱ።"
                : "Explore our rooms and surroundings."}
            </p>
          </div>
          <div className="rounded-full bg-white px-4 py-2 text-xs font-medium text-[color:var(--muted)] shadow-sm">
            {isAm ? "10 ፎቶዎች" : "10 photos"}
          </div>
        </div>

        <div className="mt-8 columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((src, index) => (
            <div
              key={src}
              className="break-inside-avoid overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
            >
              <Image
                src={src}
                alt={`Joy Pension gallery photo ${index + 1}`}
                width={1200}
                height={900}
                className="h-auto w-full object-cover transition duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--accent-dark)] transition hover:bg-[color:var(--accent)] hover:text-white"
          >
            {isAm ? "ወደ መነሻ ተመለስ" : "Back to home"}
          </a>
        </div>
      </main>
    </div>
  );
}
