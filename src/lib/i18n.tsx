"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { Translations } from "./translations/types";
import en from "./translations/en";
import de from "./translations/de";

export type Locale = "en" | "de";

const translations: Record<Locale, Translations> = { en, de };

interface I18nContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue>({
  locale: "en",
  t: en,
  setLocale: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Read persisted language on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("sappy-lang") as Locale | null;
      if (saved && (saved === "en" || saved === "de")) {
        setLocaleState(saved);
      }
    } catch {
      // localStorage unavailable — keep default
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem("sappy-lang", l);
    } catch {
      // ignore
    }
  }, []);

  return (
    <I18nContext.Provider
      value={{ locale, t: translations[locale], setLocale }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
