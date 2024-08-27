"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import ProductImage from "@/assets/product-image.png";
import PyramidImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";
import { useRef } from "react";

export const ProductShowcase = () => {
  const productRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={productRef}
      className="bg-gradient-to-b from-[#fff] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="text-sm mx-auto w-auto inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Aumenta tu productividad
            </div>
          </div>

          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Una forma más eficaz de seguir el progreso
          </h2>
          <p className="text-[22px] leading-[30px] text-center text-[#010D3E] tracking-tight mt-5">
            Convierta sus ideas sin esfuerzo en un sitio web SaaS totalmente
            funcional, receptivo y sin código en solo minutos con el conjunto de
            componentes gratuitos para Framer.
          </p>
        </div>
        <div className="relative">
          <Image
            src={ProductImage}
            alt="Imagen del producto"
            className="mt-10"
          />
          <motion.img
            src={PyramidImage.src}
            alt="Piramide imagen"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{ translateY: translateY }}
          />
          <motion.img
            src={TubeImage.src}
            alt="Piramide imagen"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{ translateY: translateY }}
          />
        </div>
      </div>
    </section>
  );
};
