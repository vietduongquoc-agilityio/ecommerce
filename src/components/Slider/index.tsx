"use client";

import { SetStateAction, useState } from "react";
import { colors, fonts } from "@/themes";
import Image from "next/image";

// Images
import product1 from "@/assets/Images/Slider.jpg";
import product3 from "@/assets/Images/Slider1.jpg";
import product2 from "@/assets/Images/Slider2.jpg";
import product4 from "@/assets/Images/Slider3.webp";
import arowSlider from "@/assets/Images/Arow-slider.png";
import CTA from "@/assets/Images/CTA.png";
import { Button } from "..";

// Components


const images = [product1, product2, product3, product4];
const roomNames = [
  "01 - Living Room",
  "02 - Bed Room",
  "03 - Dining Room",
  "04 - Office Room",
];

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
            width:"368px"
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
      <aside
        style={{ position: "relative", width: "650px", overflow: "hidden" }}
      >
        <div
          style={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${slideIndex * 100}%)`,
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                minWidth: "70%",
                position: "relative",
                display: "flex",
              }}
            >
              <Image
                src={img}
                alt={`slide-${index}`}
                style={{
                  width: "400px",
                  height: "582px",
                  transition: "opacity 0.5s ease-in-out",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "30px",
                  left: "24px",
                  background: "#FFFFFFB8",
                  padding: "30px 17px 32px 32px",
                }}
              >
                <p
                  style={{
                    fontSize: fonts.size.xs,
                    fontWeight: fonts.weight.medium,
                    color: colors.secondary.granite,
                  }}
                >
                  {roomNames[index]}
                </p>
                <p
                  style={{
                    fontSize: "28px",
                    fontWeight: fonts.weight.semiBold,
                    color: colors.secondary.black,
                  }}
                >
                  Inner Peace
                </p>
                <Image
                  src={CTA}
                  alt={"CTA"}
                  style={{ right: "-48px", position: "absolute", bottom: "0" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Next Slide Button */}
        <Image
          src={arowSlider}
          alt={"arowSlider"}
          onClick={nextSlide}
          style={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translateY(-50%)",
            border: "none",
            cursor: "pointer",
            width: "60px",
            height: "60px",
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
