import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import construccion from '../assets/assets-servicios/brutalist-inspiration-architecture-background.jpg';
import ampliacion from '../assets/assets-servicios/low-angle-building-construction.jpg';
import remodelacion from '../assets/assets-servicios/vertical-grayscale-shot-staircase-outside-building-used-reconstruction.jpg';
import disenios from '../assets/assets-servicios/monochromatic-urban-minimal-landscape.jpg';
import mantenimiento from '../assets/assets-servicios/steel-wrenches-tools.jpg';

const imgs = [
    { src: construccion, alt: 'casas', label: 'Construccion' },
    { src: ampliacion, alt: 'casas', label: 'Ampliacion' },
    { src: remodelacion, alt: 'casas', label: 'Remodelacion' },
    { src: disenios, alt: 'casas', label: 'Diseño' },
    { src: mantenimiento, alt: 'casas', label: 'Mantenimiento' },
];

const ONE_SECOND = 300;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-black py-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <GradientEdges />
    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((img, idx) => {
        return (
          <div key={idx} className="aspect-video w-screen shrink-0 rounded-xl bg-black object-cover flex flex-col items-center">
            <motion.div
              style={{
                backgroundImage: `url(${img.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "500px",
              }}
              animate={{
                scale: imgIndex === idx ? 0.95 : 0.85,
              }}
              transition={SPRING_OPTIONS}
              className="w-full h-full rounded-xl"
            />
            <span className="text-white font-bold text-[20px] mt-2">{img.label}</span>
          </div>
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};
