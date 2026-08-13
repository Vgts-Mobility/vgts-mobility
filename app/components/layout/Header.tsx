"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Globe, Menu, X } from "lucide-react";

import { useLocale, useTranslations } from "next-intl";

import {
  Link,
  usePathname,
  useRouter,
} from "@/i18n/navigation";

export default function Header() {
  const t = useTranslations("header");

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const logoPressTimer = useRef<NodeJS.Timeout | null>(null);
  const longPressTriggered = useRef(false);

  function startLogoPress() {
    longPressTriggered.current = false;

    logoPressTimer.current = setTimeout(() => {
      longPressTriggered.current = true;

      if (navigator.vibrate) {
        navigator.vibrate(150);
      }

      window.location.href = "/admin/login";
    }, 3000);
  }

  function cancelLogoPress() {
    if (logoPressTimer.current) {
      clearTimeout(logoPressTimer.current);
      logoPressTimer.current = null;
    }
  }

  function handleLogoClick(e: React.MouseEvent) {
    if (longPressTriggered.current) {
      e.preventDefault();
      longPressTriggered.current = false;
    }
  }

  function changeLanguage(
    newLocale: "cs" | "uk" | "en"
  ) {
    setMobileOpen(false);

    router.replace(pathname, {
      locale: newLocale,
    });
  }

  function goToCars(
    e: React.MouseEvent<HTMLAnchorElement>
  ) {
    e.preventDefault();

    if (pathname === "/") {
      document
        .getElementById("cars")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    } else {
      router.push("/");

      setTimeout(() => {
        document
          .getElementById("cars")
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }, 100);
    }

    setMobileOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      {/* HEADER */}

      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          transition-all
          duration-500
          ${
            scrolled
              ? "border-b border-white/10 bg-[#05070d]/90 shadow-xl backdrop-blur-2xl"
              : "bg-[#05070d]/35 backdrop-blur-xl"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-[68px]
            max-w-7xl
            items-center
            px-4
            sm:h-[72px]
            sm:px-6
            lg:px-8
          "
        >

          {/* LOGO */}

          <Link
            href="/"
            onClick={handleLogoClick}
            onMouseDown={startLogoPress}
            onMouseUp={cancelLogoPress}
            onMouseLeave={cancelLogoPress}
            onTouchStart={startLogoPress}
            onTouchEnd={cancelLogoPress}
            className="
              flex
              items-center
              gap-2.5
              sm:gap-3
            "
          >
            <Image
              src="/images/logo.jpg"
              alt="VGTS Mobility"
              width={56}
              height={56}
              priority
              className="
                h-11
                w-11
                rounded-full
                object-cover
                shadow-lg
                sm:h-12
                sm:w-12
              "
            />

            <div className="leading-none">

              <h2
                className="
                  text-[22px]
                  font-black
                  tracking-wide
                  text-white
                  sm:text-2xl
                "
              >
                VGTS{" "}
                <span className="text-lime-400">
                  Mobility
                </span>
              </h2>

              <p
                className="
                  mt-1
                  text-[9px]
                  uppercase
                  tracking-[2.5px]
                  text-white/55
                  sm:text-[10px]
                  sm:tracking-[3px]
                "
              >
                {t("tagline")}
              </p>

            </div>
          </Link>

          {/* DESKTOP MENU */}

          <nav
            className="
              ml-auto
              hidden
              items-center
              gap-7
              xl:flex
            "
          >

            <Link
              href="/"
              className="
                relative
                text-[17px]
                font-semibold
                tracking-wide
                text-white
                transition-all
                duration-300
                hover:text-lime-400
                after:absolute
                after:-bottom-1
                after:left-0
                after:h-[2px]
                after:w-0
                after:bg-lime-400
                after:transition-all
                hover:after:w-full
              "
            >
              {t("home")}
            </Link>

            <a
              href="#cars"
              onClick={goToCars}
              className="
                relative
                text-[17px]
                font-semibold
                tracking-wide
                text-white
                transition-all
                duration-300
                hover:text-lime-400
                after:absolute
                after:-bottom-1
                after:left-0
                after:h-[2px]
                after:w-0
                after:bg-lime-400
                after:transition-all
                hover:after:w-full
              "
            >
              {t("cars")}
            </a>

            <a
              href="#services"
              className="
                relative
                text-[17px]
                font-semibold
                tracking-wide
                text-white
                transition-all
                duration-300
                hover:text-lime-400
                after:absolute
                after:-bottom-1
                after:left-0
                after:h-[2px]
                after:w-0
                after:bg-lime-400
                after:transition-all
                hover:after:w-full
              "
            >
              {t("import")}
            </a>

            <a
              href="#about"
              className="
                relative
                text-[17px]
                font-semibold
                tracking-wide
                text-white
                transition-all
                duration-300
                hover:text-lime-400
                after:absolute
                after:-bottom-1
                after:left-0
                after:h-[2px]
                after:w-0
                after:bg-lime-400
                after:transition-all
                hover:after:w-full
              "
            >
              {t("about")}
            </a>

            <a
              href="#contact"
              className="
                relative
                text-[17px]
                font-semibold
                tracking-wide
                text-white
                transition-all
                duration-300
                hover:text-lime-400
                after:absolute
                after:-bottom-1
                after:left-0
                after:h-[2px]
                after:w-0
                after:bg-lime-400
                after:transition-all
                hover:after:w-full
              "
            >
              {t("contact")}
            </a>

          </nav>

          {/* LANGUAGE SWITCHER */}

          <div
            className="
              ml-6
              hidden
              items-center
              gap-1.5
              xl:flex
            "
          >

            <Globe
              size={16}
              className="mr-1 text-white/50"
            />

            <button
              type="button"
              onClick={() =>
                changeLanguage("cs")
              }
              className={`
                rounded-full
                border
                px-2.5
                py-1
                text-xs
                font-bold
                transition
                ${
                  locale === "cs"
                    ? "border-lime-400 bg-lime-400/15 text-lime-400"
                    : "border-white/10 text-white/70 hover:border-lime-400 hover:text-lime-400"
                }
              `}
            >
              CZ
            </button>

            <button
              type="button"
              onClick={() =>
                changeLanguage("uk")
              }
              className={`
                rounded-full
                border
                px-2.5
                py-1
                text-xs
                font-bold
                transition
                ${
                  locale === "uk"
                    ? "border-lime-400 bg-lime-400/15 text-lime-400"
                    : "border-white/10 text-white/70 hover:border-lime-400 hover:text-lime-400"
                }
              `}
            >
              UA
            </button>

            <button
              type="button"
              onClick={() =>
                changeLanguage("en")
              }
              className={`
                rounded-full
                border
                px-2.5
                py-1
                text-xs
                font-bold
                transition
                ${
                  locale === "en"
                    ? "border-lime-400 bg-lime-400/15 text-lime-400"
                    : "border-white/10 text-white/70 hover:border-lime-400 hover:text-lime-400"
                }
              `}
            >
              EN
            </button>

          </div>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className="
              ml-auto
              text-white
              xl:hidden
            "
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>
      </header>

      {/* MOBILE MENU */}

      <div
        className={`
          fixed
          inset-0
          z-40
          bg-[#05070d]/95
          backdrop-blur-2xl
          transition-transform
          duration-500
          xl:hidden
          ${
            mobileOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        <div
          className="
            flex
            flex-col
            px-6
            pt-24
          "
        >

          <Link
            href="/"
            onClick={() =>
              setMobileOpen(false)
            }
            className="
              border-b
              border-white/10
              py-4
              text-2xl
              font-semibold
              text-white
              transition
              hover:text-lime-400
            "
          >
            {t("home")}
          </Link>

          <a
            href="#cars"
            onClick={goToCars}
            className="
              border-b
              border-white/10
              py-4
              text-2xl
              font-semibold
              text-white
              transition
              hover:text-lime-400
            "
          >
            {t("cars")}
          </a>

          <a
            href="#services"
            onClick={() =>
              setMobileOpen(false)
            }
            className="
              border-b
              border-white/10
              py-4
              text-2xl
              font-semibold
              text-white
              transition
              hover:text-lime-400
            "
          >
            {t("import")}
          </a>

          <a
            href="#about"
            onClick={() =>
              setMobileOpen(false)
            }
            className="
              border-b
              border-white/10
              py-4
              text-2xl
              font-semibold
              text-white
              transition
              hover:text-lime-400
            "
          >
            {t("about")}
          </a>

          <a
            href="#contact"
            onClick={() =>
              setMobileOpen(false)
            }
            className="
              border-b
              border-white/10
              py-4
              text-2xl
              font-semibold
              text-white
              transition
              hover:text-lime-400
            "
          >
            {t("contact")}
          </a>

          {/* MOBILE LANGUAGES */}

          <div
            className="
              mt-6
              flex
              items-center
              justify-center
              gap-2
            "
          >

            <Globe
              size={18}
              className="text-white/50"
            />

            <button
              type="button"
              onClick={() =>
                changeLanguage("cs")
              }
              className={`
                rounded-full
                border
                px-3
                py-1.5
                text-xs
                font-bold
                ${
                  locale === "cs"
                    ? "border-lime-400 bg-lime-400/15 text-lime-400"
                    : "border-white/10 text-white/70"
                }
              `}
            >
              CZ
            </button>

            <button
              type="button"
              onClick={() =>
                changeLanguage("uk")
              }
              className={`
                rounded-full
                border
                px-3
                py-1.5
                text-xs
                font-bold
                ${
                  locale === "uk"
                    ? "border-lime-400 bg-lime-400/15 text-lime-400"
                    : "border-white/10 text-white/70"
                }
              `}
            >
              UA
            </button>

            <button
              type="button"
              onClick={() =>
                changeLanguage("en")
              }
              className={`
                rounded-full
                border
                px-3
                py-1.5
                text-xs
                font-bold
                ${
                  locale === "en"
                    ? "border-lime-400 bg-lime-400/15 text-lime-400"
                    : "border-white/10 text-white/70"
                }
              `}
            >
              EN
            </button>

          </div>

        </div>
      </div>
    </>
  );
}