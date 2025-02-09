"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const Hero = () => {
  const t = useTranslations("Hero");

  const [currentMessage, setCurrentMessage] = useState(t("message1"));
  const [messages, setMessages] = useState([
    t("message1"),
    t("message2"),
    t("message3"),
    t("message4"),
    t("message5"),
    t("message6"),
    t("message7"),
  ]);

  useEffect(() => {
    setMessages([
      t("message1"),
      t("message2"),
      t("message3"),
      t("message4"),
      t("message5"),
      t("message6"),
      t("message7"),
    ]);
    setCurrentMessage(t("message1"));
  }, [t]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setCurrentMessage(messages[index]);
      index = (index + 1) % messages.length;
    }, 1000);

    return () => clearInterval(interval);
  }, [messages]);

  return (
    <section
      id="home"
      className="relative z-10 flex items-center justify-center h-screen w-screen overflow-hidden bg-black"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://www.youtube.com/embed/FtXCOteJnGg?autoplay=1&mute=1&loop=1&playlist=FtXCOteJnGg&controls=0&modestbranding=1&rel=0&disablekb=1&fs=0&iv_load_policy=3&start=70"
          title="YouTube Video Background"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      <div className="container relative z-10 text-center text-white">
        <div className="mx-auto max-w-[800px]">
          <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {t("title")}
          </h1>
          <p className="mb-12 text-base leading-relaxed sm:text-lg md:text-xl">
            {t("subtitle")}
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <div className="bg-black px-6 py-4 text-lg font-semibold transition-opacity duration-500">
              {currentMessage}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
