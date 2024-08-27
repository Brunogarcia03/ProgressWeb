"use client";

import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Gratis",
    monthlyPrice: 0,
    buttonText: "Comienza gratis",
    popular: false,
    inverse: false,
    features: [
      "Hasta 5 miembros del proyecto",
      "Tareas y proyectos ilimitados",
      "2GB de almacenamiento",
      "Integraciones",
      "Soporte básico",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Regístrate ahora",
    popular: true,
    inverse: true,
    features: [
      "Hasta 50 miembros del proyecto",
      "Tareas y proyectos ilimitados",
      "50GB de almacenamiento",
      "Integraciones",
      "Soporte prioritario",
      "Soporte avanzado",
      "Soporte de exportación",
    ],
  },
  {
    title: "Empresarial",
    monthlyPrice: 19,
    buttonText: "Regístrate ahora",
    popular: false,
    inverse: false,
    features: [
      "Hasta 5 miembros del proyecto",
      "Tareas y proyectos ilimitados",
      "200GB de almacenamiento",
      "Integraciones",
      "Administrador de cuenta dedicado",
      "Campos personalizados",
      "Analíticas avanzadas",
      "Capacidades de exportación",
      "Acceso a la API",
      "Características avanzadas de seguridad",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Precios
          </h2>
          <p className="text-[22px] leading-[30px] text-center text-[#010D3E] tracking-tight mt-5">
            Gratis para siempre. Actualice para realizar tareas ilimitadas,
            mejor seguridad y funciones exclusivas.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end">
          {pricingTiers.map(
            (
              { title, monthlyPrice, buttonText, popular, inverse, features },
              index
            ) => (
              <div
                key={index}
                className={twMerge(
                  `p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-sm w-full`,
                  inverse === true && "border-black bg-black text-white/60"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        animate={{ backgroundPositionX: "-100%" }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      >
                        Más popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span
                    className={twMerge(
                      "tracking-tight font-bold text-black/50",
                      inverse && "text-white/60"
                    )}
                  >
                    /month
                  </span>
                </div>
                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px]",
                    inverse && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature, index) => (
                    <li className="text-sm flex items-center gap-4" key={index}>
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
