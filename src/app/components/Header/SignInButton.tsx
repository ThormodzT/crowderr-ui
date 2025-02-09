import { SignInButton } from "@clerk/nextjs";
import { useTranslations } from "next-intl";

export default function ClerkSignInButton() {
  const t = useTranslations("Common");

  return (
    <SignInButton>
      <button className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9">
        {t("signIn")}
      </button>
    </SignInButton>
  );
}
