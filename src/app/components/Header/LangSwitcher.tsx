"use client";

import { useLocale } from "next-intl";
import { setUserLocale } from "@/services/locale";

export default function LangSwitcher() {
  const locale = useLocale();

  const newLocale = locale === "en" ? "es" : "en";

  const switchLanguage = () => {
    setUserLocale(newLocale);
  };

  return (
    <button onClick={switchLanguage}>{locale === "en" ? "ES" : "EN"}</button>
  );
}
