import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  ShieldCheck,
  ClipboardCheck,
  Scale,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Header from "@/app/components/layout/Header";

type Props = {
  params: Promise<{
    locale: "cs" | "uk" | "en";
  }>;
};

const documents = [
  {
    key: "terms",
    file: "/documents/obchodni-podminky.pdf",
    icon: Scale,
  },
  {
    key: "privacy",
    file: "/documents/ochrana-osobnich-udaju.pdf",
    icon: ShieldCheck,
  },
  {
    key: "complaints",
    file: "/documents/reklamacni-rad.pdf",
    icon: ClipboardCheck,
  },
] as const;

export default async function DocumentsPage({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("documents");

  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <Header />

      {/* HERO */}
      <section className="border-b border-white/10 bg-[#05070d] pt-[78px]">
        <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">

          <Link
            href="/"
            className="mb-7 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-lime-400"
          >
            <ArrowLeft size={16} />
            {t("back")}
          </Link>

          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
              <FileText size={14} />
              VGTS MOBILITY
            </div>

            <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-white via-blue-200 to-lime-400 bg-clip-text text-transparent">
                {t("title")}
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
              {t("description")}
            </p>
          </div>

        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="bg-[#05070d] py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {documents.map((document) => {
              const Icon = document.icon;

              return (
                <article
                  key={document.key}
                  className="
                    group
                    flex
                    min-h-[270px]
                    flex-col
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.035]
                    p-5
                    shadow-xl
                    backdrop-blur
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-400/30
                    hover:bg-white/[0.055]
                  "
                >
                  {/* ICON */}
                  <div className="flex items-start justify-between">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-blue-400/20
                        bg-blue-400/10
                        text-blue-400
                        transition
                        group-hover:border-lime-400/30
                        group-hover:bg-lime-400/10
                        group-hover:text-lime-400
                      "
                    >
                      <Icon size={25} strokeWidth={1.8} />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                      PDF
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="mt-6">
                    <h2 className="text-lg font-bold text-white sm:text-xl">
                      {t(`items.${document.key}.title`)}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {t(`items.${document.key}.description`)}
                    </p>
                  </div>

                  {/* BUTTON */}
                  <div className="mt-auto pt-6">
                    <a
                      href={document.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        px-4
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:border-blue-400/30
                        hover:bg-blue-400/10
                        hover:text-blue-300
                      "
                    >
                      <FileText size={16} />
                      {t("open")}
                      <ExternalLink
                        size={15}
                        className="ml-auto opacity-60"
                      />
                    </a>
                  </div>
                </article>
              );
            })}

          </div>

          {/* INFO */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
            <div className="flex gap-4">
              <div className="mt-0.5 shrink-0 text-lime-400">
                <ShieldCheck size={22} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-white sm:text-base">
                  {t("info.title")}
                </h3>

                <p className="mt-1.5 text-sm leading-6 text-gray-400">
                  {t("info.text")}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="border-t border-white/10 bg-[#04060b] py-10 sm:py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

          <h2 className="text-2xl font-black sm:text-3xl">
            <span className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              {t("cta.title")}
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            {t("cta.text")}
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <a
              href="tel:+420739974155"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-lime-400
                px-5
                py-3
                text-sm
                font-bold
                text-black
                transition
                hover:bg-lime-300
              "
            >
              +420 739 974 155
            </a>

            <a
              href="https://wa.me/420739974155"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-green-400/30
                bg-green-400/10
                px-5
                py-3
                text-sm
                font-bold
                text-green-300
                transition
                hover:bg-green-400/15
              "
            >
              WhatsApp
            </a>

          </div>

        </div>
      </section>
    </main>
  );
}