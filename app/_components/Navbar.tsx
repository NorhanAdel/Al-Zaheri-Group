"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Globe, Moon, Sun, ChevronDown } from "lucide-react";
import TopBar from "./TopBar";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("ar");
  const [openLang, setOpenLang] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openBranches, setOpenBranches] = useState(false);
  const [openMedia, setOpenMedia] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  const changeLang = (value: string) => {
    setLang(value);
    setOpenLang(false);
  };

  const mediaCenterDropdown = [
    { name: "المقالات", path: "/report" },
    { name: "الأخبار", path: "/news" },
    
  ];

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "عن المجموعة", path: "/about" },
    { name: "عن رئيس المجموعة", path: "/chairman" },
    {
      name: "فروعنا",
      dropdown: [
        { name: "فرع الأسواق المركزية والمطاعم", path: "/branche?branch=markets" },
        { name: "فرع المواد الغذائية والإعاشة", path: "/branche?branch=food" },
        { name: "وجار الخليج لمعدات المطابخ", path: "/branche?branch=kitchens" },
        { name: "فرع المقاولات العامة", path: "/branche?branch=contracting" },
        { name: "فرع القعقاع للخدمات الأمنية", path: "/branche?branch=security" },
        { name: "فرع العمليات التجارية والتوكيلات", path: "/branche?branch=trading" },
        { name: "فرع الإمارات", path: "/branche?branch=uae" },
        { name: "فرع التجهيزات العسكرية والأمنية", path: "/branche?branch=military" },
      ],
    },
    { name: "المركز الإعلامي", dropdown: mediaCenterDropdown },
    { name: "التوظيف", path: "/careers" },
    { name: "اتصل بنا", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <TopBar />

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="bg-white/80 dark:bg-gray-950/70 backdrop-blur-xl border-b border-gray-200/40 dark:border-gray-800/40 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold text-gray-900 dark:text-white"
          >
            مجموعة <span className="text-[#F68048]">الظاهري</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-5 mx-2">
            {navLinks.map((item, i) => (
              <div key={i} className="relative group">
                {item.dropdown ? (
                  <>
                    <button className="flex items-center gap-1 font-medium text-gray-700 dark:text-gray-200">
                      {item.name} <ChevronDown size={16} />
                    </button>
                    <div
                      className="absolute top-full right-0 mt-4 w-[420px]
                      rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800
                      bg-white dark:bg-gray-950
                      opacity-0 invisible scale-95
                      group-hover:opacity-100 group-hover:visible group-hover:scale-100
                      transition-all duration-300"
                    >
                      <div className="grid grid-cols-1 gap-1 p-4">
                        {item.dropdown.map((sub, idx) => (
                          <Link
                            key={idx}
                            href={sub.path}
                            className="px-4 py-3 rounded-xl text-sm
                            hover:bg-gray-100 dark:hover:bg-gray-900
                            text-gray-700 dark:text-gray-200"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className="font-medium text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Language */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setOpenLang(!openLang)}
                className="flex items-center gap-2 px-4 py-2 rounded-full
                border border-gray-300 dark:border-gray-700
                bg-white dark:bg-gray-900
                text-gray-800 dark:text-white"
              >
                <Globe size={18} />
                {lang === "ar" ? "العربية" : "English"}
              </button>

              <AnimatePresence>
                {openLang && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute mt-3 w-44 rounded-2xl overflow-hidden shadow-xl
                    bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800"
                  >
                    <button
                      onClick={() => changeLang("ar")}
                      className="w-full px-4 py-3 text-right hover:bg-gray-100 dark:hover:bg-gray-900"
                    >
                      🇸🇦 العربية
                    </button>
                    <button
                      onClick={() => changeLang("en")}
                      className="w-full px-4 py-3 text-right hover:bg-gray-100 dark:hover:bg-gray-900"
                    >
                      🇺🇸 English
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme */}
            <button
              onClick={toggleDarkMode}
              className="w-11 h-11 flex items-center justify-center rounded-full
              bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white
              hover:scale-110 transition"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Dashboard */}
            <Link
              href="/admin"
              className="hidden md:block px-6 py-2 rounded-full font-semibold
              bg-black text-white dark:bg-white dark:text-black
              hover:scale-105 transition"
            >
              لوحة التحكم
            </Link>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full
              bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white"
            >
              {mobileMenu ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:hidden px-6 pb-6"
            >
              <div className="flex flex-col gap-4 mt-4">
                {navLinks.map((item, i) => (
                  <div key={i}>
                    {!item.dropdown ? (
                      <Link
                        href={item.path}
                        className="block text-gray-700 dark:text-gray-200 font-medium"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() =>
                            item.name === "فروعنا"
                              ? setOpenBranches(!openBranches)
                              : setOpenMedia(!openMedia)
                          }
                          className="flex justify-between w-full text-gray-700 dark:text-gray-200 font-medium"
                        >
                          {item.name}
                          <ChevronDown size={18} />
                        </button>

                        <div className="mt-3 flex flex-col gap-2 pr-4">
                          {(item.name === "فروعنا"
                            ? openBranches
                              ? item.dropdown
                              : []
                            : openMedia
                            ? item.dropdown
                            : []
                          ).map((sub, idx) => (
                            <Link
                              key={idx}
                              href={sub.path}
                              className="text-sm text-gray-600 dark:text-gray-400"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
