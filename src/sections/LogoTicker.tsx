"use client";
import { motion } from "framer-motion";

import AcmeLogo from "@/assets/logo-acme.png";
import QuamtumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import PulseLogo from "@/assets/logo-pulse.png";
import ApexLogo from "@/assets/logo-apex.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={AcmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={QuamtumLogo}
              alt="QuamtumLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="echoLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={CelestialLogo}
              alt="CelestialLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={PulseLogo}
              alt="PulseLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={ApexLogo}
              alt="ApexLogo Logo"
              className="logo-ticker-image"
            />

            <Image
              src={AcmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={QuamtumLogo}
              alt="QuamtumLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="echoLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={CelestialLogo}
              alt="CelestialLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={PulseLogo}
              alt="PulseLogo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={ApexLogo}
              alt="ApexLogo Logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
