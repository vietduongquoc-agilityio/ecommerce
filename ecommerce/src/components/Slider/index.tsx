"use client";

import { SetStateAction, useState } from "react";
import { colors, fonts } from "@/themes";
import Button from "../Button";
import Image from "next/image";
import product1 from "@/assets/Images/Product1.png";
import product2 from "@/assets/Images/Product2.png";
import product3 from "@/assets/Images/Product3.png";
import product4 from "@/assets/Images/Product4.png";
import arowSlider from "@/assets/Images/Arow-slider.png";

const images = [product1, product2, product3, product4];

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: SetStateAction<number>) => {
    setSlideIndex(index);
  };

  return (
    <section
      style={{
        width: "100%",
        height: "auto",
        background: colors.primary.light,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "50px 100px",
        position: "relative",
      }}
    >
      <aside style={{ maxWidth: "500px" }}>
        <h2
          style={{
            fontSize: fonts.size.xxl,
            fontWeight: fonts.weight.bold,
            color: colors.secondary.black,
            marginBottom: "10px",
          }}
        >
          50+ Beautiful rooms inspiration
        </h2>
        <p
          style={{
            fontSize: fonts.size.xs,
            fontWeight: fonts.weight.medium,
            color: colors.secondary.granite,
            marginBottom: "25px",
          }}
        >
          Our designer already made a lot of beautiful prototype rooms that
          inspire you.
        </p>
        <Button variant="primaryXs" size="md">
          Explore More
        </Button>
      </aside>

      {/* Image Slider */}
      <aside style={{ position: "relative", width: "400px" }}>
        <Image
          src={images[slideIndex]}
          alt={`slide-${slideIndex}`}
          width={400}
          style={{
            width: "100%",
            height: "auto",
            transition: "opacity 0.5s ease-in-out",
          }}
        />

        <Image
          src={arowSlider}
          alt={"arowSlider"}
          onClick={nextSlide}
          style={{
            position: "absolute",
            top: "50%",
            right: "-35px",
            transform: "translateY(-50%)",
            border: "none",
            cursor: "pointer",
          }}
        />

        {/* Dots Indicators */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "5px",
          }}
        >
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background:
                  index === slideIndex ? colors.primary.yellow : "white",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </aside>
    </section>
  );
};

export default Slider;
