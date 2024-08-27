"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "Como diseñador experimentado siempre en busca de herramientas innovadoras, Framer.com captó mi atención de inmediato.",
    imageSrc: avatar1.src,
    name: "Santiago González",
    username: "@santiagotech",
  },
  {
    text: "La productividad de nuestro equipo se ha disparado desde que comenzamos a usar esta herramienta.",
    imageSrc: avatar2.src,
    name: "Martín Pérez",
    username: "@martinperez",
  },
  {
    text: "Esta aplicación ha transformado por completo cómo gestiono mis proyectos y plazos.",
    imageSrc: avatar3.src,
    name: "Carla Domínguez",
    username: "@carladom",
  },
  {
    text: "Me sorprendió lo rápido que pudimos integrar esta aplicación en nuestro flujo de trabajo.",
    imageSrc: avatar4.src,
    name: "Valeria López",
    username: "@valelopez",
  },
  {
    text: "Planificar y ejecutar eventos nunca ha sido tan fácil. Esta aplicación me ayuda a mantener un seguimiento de todas las partes móviles, asegurando que nada se pase por alto.",
    imageSrc: avatar5.src,
    name: "Lucas Fernández",
    username: "@lucasf",
  },
  {
    text: "La capacidad de personalización e integración de esta aplicación es de primera categoría.",
    imageSrc: avatar6.src,
    name: "Sofía Ramírez",
    username: "@sofiramirez",
  },
  {
    text: "Adoptar esta aplicación para nuestro equipo ha simplificado la gestión de proyectos y mejorado la comunicación en todos los aspectos.",
    imageSrc: avatar7.src,
    name: "Federico Gómez",
    username: "@federicog",
  },
  {
    text: "Con esta aplicación, podemos asignar tareas, hacer un seguimiento del progreso y gestionar documentos, todo en un solo lugar.",
    imageSrc: avatar8.src,
    name: "Agustina Ortiz",
    username: "@agustinao",
  },
  {
    text: "Su interfaz fácil de usar y sus características robustas soportan nuestras diversas necesidades.",
    imageSrc: avatar9.src,
    name: "Pablo Herrera",
    username: "@pabloh",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-sm w-full"
            >
              <div>{testimonial.text}</div>
              <div className="flex items-center gap-2 mt-5 ">
                <Image
                  src={testimonial.imageSrc}
                  width={40}
                  height={40}
                  alt={`Imagen del usuario ${testimonial.name}`}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {testimonial.name}
                  </div>
                  <div className="leading-5 tracking-tight">
                    {testimonial.username}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="text-sm mx-auto w-auto inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Testimonios
            </div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-[22px] leading-[30px] text-center text-[#010D3E] tracking-tight mt-5">
            Desde un diseño intuitivo hasta potentes funciones, nuestra
            aplicación se ha convertido en una herramienta esencial para
            usuarios de todo el mundo.
          </p>
        </div>
        <div className="flex justify-center mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            duration={19}
            className="hidden md:block"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={17}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};
