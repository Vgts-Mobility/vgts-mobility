"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Locale = "cs" | "uk" | "en";
type Consent = { necessary: true; analytics: boolean; savedAt: number; version: 1 };

const copy = {
  cs: {
    title: "Vaše soukromí",
    body: "Používáme nezbytné cookies pro správné fungování webu. S vaším souhlasem můžeme používat také analytické cookies, které nám pomáhají web zlepšovat.",
    accept: "Přijmout vše",
    reject: "Odmítnout volitelné",
    settings: "Nastavení",
    save: "Uložit nastavení",
    necessary: "Nezbytné cookies",
    necessaryInfo: "Jsou nutné pro základní funkce webu a nelze je vypnout.",
    analytics: "Analytické cookies",
    analyticsInfo: "Pomáhají nám porozumět návštěvnosti a zlepšovat web.",
    privacy: "Zásady ochrany osobních údajů",
    manage: "Nastavení cookies",
  },
  uk: {
    title: "Ваша конфіденційність",
    body: "Ми використовуємо необхідні cookies для правильної роботи сайту. За вашою згодою також можемо використовувати аналітичні cookies, які допомагають нам покращувати сайт.",
    accept: "Прийняти всі",
    reject: "Відхилити необов'язкові",
    settings: "Налаштування",
    save: "Зберегти налаштування",
    necessary: "Необхідні cookies",
    necessaryInfo: "Потрібні для основної роботи сайту та не можуть бути вимкнені.",
    analytics: "Аналітичні cookies",
    analyticsInfo: "Допомагають зрозуміти відвідуваність і покращувати сайт.",
    privacy: "Політика конфіденційності",
    manage: "Налаштування cookies",
  },
  en: {
    title: "Your privacy",
    body: "We use essential cookies to make the website work. With your consent, we may also use analytics cookies to understand visits and improve the website.",
    accept: "Accept all",
    reject: "Reject optional",
    settings: "Settings",
    save: "Save preferences",
    necessary: "Essential cookies",
    necessaryInfo: "Required for the basic operation of the website and cannot be disabled.",
    analytics: "Analytics cookies",
    analyticsInfo: "Help us understand website traffic and improve the website.",
    privacy: "Privacy policy",
    manage: "Cookie settings",
  },
} satisfies Record<Locale, Record<string, string>>;

const STORAGE_KEY = "vgts-cookie-consent";

export default function CookieConsent({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [consent, setConsent] = useState<Consent | null>(null);
  const [ready, setReady] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Consent;
        const stillValid = parsed.version === 1 && Date.now() - parsed.savedAt < 180 * 24 * 60 * 60 * 1000;
        if (stillValid && parsed.necessary === true && typeof parsed.analytics === "boolean") {
          setConsent(parsed);
          setAnalytics(parsed.analytics);
        } else {
          window.localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    setReady(true);
  }, []);

  function savePreferences(allowAnalytics: boolean) {
    const next: Consent = { necessary: true, analytics: allowAnalytics, savedAt: Date.now(), version: 1 };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // The banner remains usable even if browser storage is unavailable.
    }
    setConsent(next);
    setAnalytics(allowAnalytics);
    setSettingsOpen(false);
  }

  if (!ready) return null;

  return (
    <>
      {consent ? (
        <button
          type="button"
          onClick={() => setSettingsOpen(true)}
          className="fixed bottom-4 left-4 z-[1100] rounded-full border border-white/15 bg-[#10141d]/95 px-3 py-2 text-xs text-gray-300 shadow-lg backdrop-blur hover:border-blue-400/50 hover:text-white"
        >
          {t.manage}
        </button>
      ) : null}

      {(!consent || settingsOpen) && (
        <div className="fixed inset-x-3 bottom-3 z-[1101] mx-auto max-h-[85vh] max-w-xl overflow-y-auto rounded-2xl border border-white/15 bg-[#10141d]/[.98] p-5 text-white shadow-[0_20px_70px_rgba(0,0,0,.65)] backdrop-blur-xl sm:inset-x-auto sm:bottom-5 sm:right-5 sm:left-auto sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-lg font-bold">{settingsOpen ? t.settings : t.title}</h2>
            {settingsOpen && consent && (
              <button type="button" onClick={() => setSettingsOpen(false)} aria-label="Close cookie settings" className="rounded-lg px-2 text-xl leading-none text-gray-400 hover:text-white">×</button>
            )}
          </div>
          {!settingsOpen && <p className="mt-2 text-sm leading-relaxed text-gray-300">{t.body}</p>}

          {settingsOpen && (
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/[.03] p-3">
                <div className="font-semibold">{t.necessary}</div>
                <p className="mt-1 text-xs text-gray-400">{t.necessaryInfo}</p>
                <span className="mt-2 inline-flex rounded-full bg-lime-400/10 px-2 py-1 text-xs font-semibold text-lime-300">Always active</span>
              </div>
              <label className="flex cursor-pointer items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/[.03] p-3">
                <span>
                  <span className="block font-semibold">{t.analytics}</span>
                  <span className="mt-1 block text-xs text-gray-400">{t.analyticsInfo}</span>
                </span>
                <input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} className="mt-1 h-5 w-5 accent-blue-500" />
              </label>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {settingsOpen ? (
              <>
                <button type="button" onClick={() => savePreferences(analytics)} className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-500">{t.save}</button>
                <button type="button" onClick={() => savePreferences(false)} className="rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-gray-200 hover:bg-white/5">{t.reject}</button>
              </>
            ) : (
              <>
                <button type="button" onClick={() => savePreferences(true)} className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-500">{t.accept}</button>
                <button type="button" onClick={() => savePreferences(false)} className="flex-1 rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-gray-200 transition hover:bg-white/5">{t.reject}</button>
                <button type="button" onClick={() => setSettingsOpen(true)} className="w-full rounded-xl border border-blue-400/30 px-4 py-2.5 text-sm font-semibold text-blue-300 transition hover:bg-blue-400/10">{t.settings}</button>
              </>
            )}
          </div>
          <Link href={`/${locale}/documents`} className="mt-3 inline-block text-xs text-gray-400 underline underline-offset-4 hover:text-white">{t.privacy}</Link>
        </div>
      )}
    </>
  );
}
