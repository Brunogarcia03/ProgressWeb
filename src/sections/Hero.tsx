"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

import ArrowIcon from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import CylinderImage from "@/assets/cylinder.png";
import NoodleImage from "@/assets/noodle.png";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              La versión 2.0 está aquí
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Camino a la productividad
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebre la alegría de los logros con una aplicación diseñada para
              realizar un seguimiento de su progreso, motivar sus esfuerzos y
              celebrar sus éxitos.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Obtener gratis</button>
              <button className="btn btn-text gap-1">
                <span>Más información</span>
                <ArrowIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={CogImage.src}
              alt="Diente imagen"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{ translateY: [-30, 30] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 5,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={CylinderImage.src}
              alt="Cilindro imagen"
              width={220}
              height={220}
              className="hidden md:block md:absolute -top-8 -left-32 "
              style={{ translateY: translateY }}
            />
            <motion.img
              src={NoodleImage.src}
              width={220}
              alt="Fideo imagen"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{ rotate: 30, translateY: translateY }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
