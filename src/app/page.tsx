"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const content = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      rooms: "Rooms & Services",
      location: "Location",
      contact: "Contact",
    },
    heroTitle: "Comfortable & Affordable Stay in Kotebe Kara",
    heroTitleAlt: "መረጋጋ እና ተመጣጣኝ መቆያ በኮተቤ ካራ",
    heroSub:
      "Joy Pension offers a clean, secure, and welcoming environment for local and international guests.",
    heroSubAlt:
      "ጆይ ፔንሲዮን ለአካባቢ እና ለውጭ እንግዶች ንጹህ፣ ደህንነት ያለው እና እንግዳ ተቀባይነት ያለው አካባቢ ይሰጣል።",
    ctaCall: "Call Now",
    ctaDirections: "Get Directions",
    introTitle: "Joy Pension | Kotebe Kara",
    intro:
      "Safe, comfortable, and affordable rooms with warm hospitality in Addis Ababa.",
    aboutTitle: "About Joy Pension",
    aboutBody:
      "We focus on cleanliness, safety, and convenience so you can relax and feel at home. Our team is available 24/7 to assist you with anything you need during your stay.",
    aboutBodyAlt:
      "ጽድቅ፣ ደህንነት እና ቀላል አገልግሎት ላይ እንተኩራለን ስለዚህ በቤትዎ እንዳሉ ይሰማዎታል። ቡድናችን በሙሉ 24/7 ይገኛል።",
    roomsTitle: "Rooms & Services",
    roomsIntro:
      "Comfortable rooms designed for rest, with essential services for a smooth stay.",
    roomTypes: [
      {
        title: "Standard Room",
        desc: "Cozy room ideal for solo travelers or short stays.",
      },
      {
        title: "Double Room",
        desc: "Spacious option for couples or colleagues.",
      },
      {
        title: "Twin Room",
        desc: "Two beds with simple, comfortable amenities.",
      },
      {
        title: "Family Room",
        desc: "Extra space for families or small groups.",
      },
    ],
    services: [
      "Clean rooms",
      "24/7 reception",
      "Wi-Fi",
      "Secure environment",
    ],
    locationTitle: "Location",
    locationIntro:
      "Find us easily in Kotebe Kara, Addis Ababa. We are close to local transport and neighborhood services.",
    addressEn: "2VR5+HVC, Kotebe Kara, Addis Ababa, Ethiopia",
    addressAm: "2VR5+HVC፣ ኮተቤ ካራ፣ አዲስ አበባ፣ ኢትዮጵያ",
    contactTitle: "Contact",
    contactIntro:
      "Call us directly for bookings and inquiries. We respond quickly.",
    form: {
      name: "Name",
      phone: "Phone",
      message: "Message",
      submit: "Send Message",
    },
    trustBadges: ["Safe & Secure", "Clean & Comfortable", "Affordable Rates"],
  },
  am: {
    nav: {
      home: "መነሻ",
      about: "ስለ እኛ",
      rooms: "ክፍሎችና አገልግሎቶች",
      location: "አካባቢ",
      contact: "እውቂያ",
    },
    heroTitle: "መረጋጋ እና ተመጣጣኝ መቆያ በኮተቤ ካራ",
    heroTitleAlt: "Comfortable & Affordable Stay in Kotebe Kara",
    heroSub:
      "ጆይ ፔንሲዮን ለአካባቢ እና ለውጭ እንግዶች ንጹህ፣ ደህንነት ያለው እና እንግዳ ተቀባይነት ያለው አካባቢ ይሰጣል።",
    heroSubAlt:
      "Joy Pension offers a clean, secure, and welcoming environment for local and international guests.",
    ctaCall: "አሁን ይደውሉ",
    ctaDirections: "አቅጣጫ ያግኙ",
    introTitle: "ጆይ ፔንሲዮን | ኮተቤ ካራ",
    intro: "ደህንነት፣ ምቹ እና ተመጣጣኝ ክፍሎች ከሞቅ እንግዳ ተቀባይነት ጋር።",
    aboutTitle: "ስለ ጆይ ፔንሲዮን",
    aboutBody:
      "ንጽህና፣ ደህንነት እና ቀላል አገልግሎት ላይ እንተኩራለን እንዲሁም በቤትዎ እንዳሉ ይሰማዎታል።",
    aboutBodyAlt:
      "We focus on cleanliness, safety, and convenience so you can relax and feel at home.",
    roomsTitle: "ክፍሎችና አገልግሎቶች",
    roomsIntro: "ለእረፍት የተዘጋጁ ምቹ ክፍሎች እና ቀላል አገልግሎቶች።",
    roomTypes: [
      {
        title: "መደበኛ ክፍል",
        desc: "ለብቻ ተጓዦች ወይም አጭር ቆይታ ምቹ ክፍል።",
      },
      {
        title: "ድብል ክፍል",
        desc: "ለጥንዶች ወይም ለተሳታፊዎች በሰፊ የተዘጋጀ።",
      },
      {
        title: "ትዊን ክፍል",
        desc: "ሁለት አልጋዎች ከምቹ መሳሪያዎች ጋር።",
      },
      {
        title: "የቤተሰብ ክፍል",
        desc: "ለቤተሰቦች ወይም ቡድኖች ተጨማሪ ቦታ።",
      },
    ],
    services: ["ንጹህ ክፍሎች", "24/7 መቀበያ", "Wi-Fi", "ደህንነት ያለው አካባቢ"],
    locationTitle: "አካባቢ",
    locationIntro:
      "በኮተቤ ካራ በቀላሉ ያገኙን። የትራንስፖርት አገልግሎቶች ቀርበዋል።",
    addressEn: "2VR5+HVC, Kotebe Kara, Addis Ababa, Ethiopia",
    addressAm: "2VR5+HVC፣ ኮተቤ ካራ፣ አዲስ አበባ፣ ኢትዮጵያ",
    contactTitle: "እውቂያ",
    contactIntro: "ለቦታ ማስያዣ እና ጥያቄዎች በቀጥታ ይደውሉ።",
    form: {
      name: "ስም",
      phone: "ስልክ",
      message: "መልዕክት",
      submit: "መልዕክት ላክ",
    },
    trustBadges: ["ደህንነት ያለው", "ንጹህና ምቹ", "ተመጣጣኝ ዋጋ"],
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<"en" | "am">("en");
  const t = useMemo(() => content[lang], [lang]);
  const isAm = lang === "am";

  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Joy Pension | Kotebe Kara",
    alternateName: "ጆይ ፔንሲዮን | ኮተቤ ካራ",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2VR5+HVC, Kotebe Kara",
      addressLocality: "Addis Ababa",
      addressCountry: "ET",
    },
    telephone: "+251912947504",
    areaServed: "Addis Ababa",
  };

  return (
    <div className="min-h-screen bg-[color:var(--background)] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="sticky top-0 z-50 bg-[color:var(--background)]/90 backdrop-blur border-b border-black/5">
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
            <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
              <a className="hover:text-[color:var(--accent-dark)]" href="#home">
                {t.nav.home}
              </a>
              <a className="hover:text-[color:var(--accent-dark)]" href="#about">
                {t.nav.about}
              </a>
              <a className="hover:text-[color:var(--accent-dark)]" href="#rooms">
                {t.nav.rooms}
              </a>
              <a
                className="hover:text-[color:var(--accent-dark)]"
                href="#location"
              >
                {t.nav.location}
              </a>
              <a className="hover:text-[color:var(--accent-dark)]" href="#contact">
                {t.nav.contact}
              </a>
            </nav>
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

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8 lg:py-24">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
                {t.introTitle}
              </p>
              <div className="space-y-2">
                <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  {t.heroTitle}
                </h1>
                <p className="text-lg text-[color:var(--muted)]">
                  {t.heroTitleAlt}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-lg text-slate-700">{t.heroSub}</p>
                <p className="text-base text-[color:var(--muted)] font-am">
                  {t.heroSubAlt}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:0912947504"
                  className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[color:var(--accent-dark)]"
                >
                  {t.ctaCall}
                </a>
                <a
                  href="https://www.google.com/maps?q=2VR5%2BHVC%20Kotebe%20Kara,%20Addis%20Ababa"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[color:var(--accent)] px-6 py-3 text-base font-semibold text-[color:var(--accent-dark)] transition hover:bg-[color:var(--accent)] hover:text-white"
                >
                  {t.ctaDirections}
                </a>
              </div>
              <p className="text-base text-slate-700">{t.intro}</p>
              <div className="flex flex-wrap gap-3">
                {t.trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-black/5 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[color:var(--accent)]/15 blur-2xl" />
              <div className="rounded-3xl border border-black/5 bg-white p-3 shadow-lg">
                <Image
                  src="/hero-joy.svg"
                  alt="Joy Pension exterior and welcoming lobby illustration"
                  width={720}
                  height={520}
                  priority
                  className="h-auto w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                  {t.aboutTitle}
                </h2>
                <p className="text-base text-slate-700">{t.aboutBody}</p>
                <p className="text-base text-[color:var(--muted)] font-am">
                  {t.aboutBodyAlt}
                </p>
              </div>
              <div className="grid gap-6 rounded-2xl border border-black/5 bg-[color:var(--background)] p-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {isAm ? "የእኛ እንግዳ ተቀባይነት" : "Our Hospitality"}
                  </h3>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">
                    {isAm
                      ? "ግብዣ እና ክብር ያለው አገልግሎት እንዲሰጥ በትኩረት እንሰራለን።"
                      : "We deliver warm, respectful service with attention to detail."}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {isAm ? "ንጽህና" : "Cleanliness"}
                  </h3>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">
                    {isAm
                      ? "ክፍሎችን በየቀኑ እና በእያንዳንዱ ቆይታ በኋላ እናንጻለን።"
                      : "Rooms are cleaned daily and prepared for each guest."}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {isAm ? "ደህንነት" : "Safety"}
                  </h3>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">
                    {isAm
                      ? "በደህንነት የተጠበቀ አካባቢ እና እርዳታ ተዘጋጅቷል።"
                      : "A secure environment with staff support around the clock."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="rooms" className="bg-[color:var(--background)]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                {t.roomsTitle}
              </h2>
              <p className="text-base text-[color:var(--muted)]">
                {t.roomsIntro}
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {t.roomTypes.map((room) => (
                <div
                  key={room.title}
                  className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {room.title}
                  </h3>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">
                    {room.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-4"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--accent)]/15">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12L10 16L18 8"
                        stroke="#8d5632"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-slate-700">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="location" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                  {t.locationTitle}
                </h2>
                <p className="text-base text-[color:var(--muted)]">
                  {t.locationIntro}
                </p>
                <div className="rounded-2xl border border-black/5 bg-[color:var(--background)] p-5">
                  <p className="text-sm font-semibold text-slate-800">{t.addressEn}</p>
                  <p className="mt-2 text-sm text-[color:var(--muted)] font-am">
                    {t.addressAm}
                  </p>
                  <p className="mt-3 text-sm text-slate-600">
                    {isAm
                      ? "አካባቢው ለመጓጓዣ እና ለአካባቢ አገልግሎቶች ቀላል መዳረሻ አለው።"
                      : "Easy access to local transport and neighborhood services."}
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl border border-black/5 shadow-sm">
                <iframe
                  title="Joy Pension location map"
                  src="https://www.google.com/maps?q=2VR5%2BHVC%20Kotebe%20Kara,%20Addis%20Ababa&output=embed"
                  className="h-80 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[color:var(--background)]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                  {t.contactTitle}
                </h2>
                <p className="text-base text-[color:var(--muted)]">
                  {t.contactIntro}
                </p>
                <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                  <p className="text-sm text-[color:var(--muted)]">📞 0912 947 504</p>
                  <a
                    href="tel:0912947504"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--accent)] px-5 py-3 text-base font-semibold text-white"
                  >
                    {t.ctaCall}
                  </a>
                  <a
                    href="https://wa.me/251912947504"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-[color:var(--accent)] px-5 py-3 text-base font-semibold text-[color:var(--accent-dark)]"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
              <form className="space-y-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm"
                    placeholder={t.form.name}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    {t.form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm"
                    placeholder="0912 947 504"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    {t.form.message}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm"
                    placeholder={t.form.message}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[color:var(--accent)] px-6 py-3 text-base font-semibold text-white"
                >
                  {t.form.submit}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Joy Pension | Kotebe Kara</p>
          <p className="font-am">እንኳን በደህና መጡ</p>
        </div>
      </footer>
    </div>
  );
}
