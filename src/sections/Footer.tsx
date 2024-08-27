"use client";
import { motion } from "framer-motion";

import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import X_logo from "@/assets/social-x.svg";
import Linkedin_logo from "@/assets/social-linkedin.svg";
import Instagram_logo from "@/assets/social-insta.svg";
import Pin_logo from "@/assets/social-pin.svg";
import Youtube_logo from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="flex items-center justify-center gap-5">
          <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
            <Image
              src={Logo}
              alt="Sass logo"
              height={40}
              width={40}
              className="relative"
            />
          </div>
          <motion.h2
            animate={{ backgroundPositionX: "-100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-bold text-lg"
          >
            Progressus
          </motion.h2>
        </div>

        <nav className="flex flex-col justify-center md:flex-row gap-6 mt-6">
          <a href="">Sobre</a>
          <a href="">Características</a>
          <a href="">Clientes</a>
          <a href="">Actualizaciones</a>
          <a href="">Ayuda</a>
          <a href="">Carreras</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <X_logo className="" />
          <Linkedin_logo className="" />
          <Instagram_logo className="" />
          <Pin_logo className="" />
          <Youtube_logo className="" />
        </div>
        <p className="mt-6">
          &copy; 2024 Progressus, Inc. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
