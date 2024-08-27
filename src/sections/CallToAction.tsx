"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import ArrowRight from "@/assets/arrow-right.svg";
import StarImage from "@/assets/star.png";
import SpringImage from "@/assets/spring.png";
import { useRef } from "react";

export const CallToAction = () => {
  const callToActionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: callToActionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={callToActionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto relative">
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Regístrate gratis hoy
          </h2>
          <p className="text-[22px] leading-[30px] text-center text-[#010D3E] tracking-tight mt-5">
            Celebre la alegría de los logros con una aplicación diseñada para
            realizar un seguimiento de su progreso y motivar sus esfuerzos.
          </p>
          <motion.img
            src={StarImage.src}
            alt="Estrella imagen"
            width={360}
            height={360}
            className="absolute -left-[360px] -top-[137px]"
            style={{ translateY }}
          />
          <motion.img
            src={SpringImage.src}
            alt="Resorte imagen"
            width={360}
            height={360}
            className="absolute -right-[341px] -top-[19px]"
            style={{ translateY }}
          />
        </div>

        <div className="flex items-center gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Obtener gratis</button>
          <button className="btn btn-text gap-1">
            <span>Más información</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
