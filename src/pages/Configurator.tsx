import { SetStateAction, useState } from "react";
import Footer from "../components/Footer";
import HeaderBlack from "../components/Header-black";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { Navigation } from "swiper/modules";

interface IColor {
  color: string;
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
  sixth: string;
  seventh: string;
  eighth: string;
}

interface IColors {
  [key: string]: IColor;
}

const Configurator = () => {
  const [selectedColor, setSelectedColor] = useState("white");

  const [, setActiveSlide] = useState(0);

  const handleColorClick = (
    color: SetStateAction<string>,
    slideIndex: number
  ) => {
    setSelectedColor(color);
    setActiveSlide(slideIndex);
  };

  const colors: IColors = {
    white: {
      color: "white",
      first:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KM86lhQ58D0gfNaHKyXv6tQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
      second:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9A7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KM86lhQ58D0gfNaHKyXv6tQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
      third:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9L7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KM86lhQ58D0gfNaHKyXv6tQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
      fourth:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9U7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KM86lhQ58D0gfNaHKyXv6tQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
      fifth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjUuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3UtpQDcFGImPYnfurn2B5yPewyoRCvNzxvpIGXoq1XB0r6FObicTBsN5Hlk2dioCaflQDcFGbjOYnfurXmZ5y%25BORrMzBjMXyi86P2EGeQlv4DP7RnwB8",
      sixth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjAuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3UtpQDcFGImPYnfurn2B5yPewyoRCvNzxvpIGXoq1XB0r6FObicTBsN5Hlk2dioCaflQDcFGbjOYnfurXmZ5y%25BORrMzBjMXyi86P2EGeQlv4DP7RnwB8",
      seventh:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbIwNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KM86lhQ58D0gfNaHKyXv6tQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
      eighth:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbIwNKXv9L7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyO9I7KM86lhQ58D0gfNaHKyXv6tQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
    },
    red: {
      color: "red",
      first:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiMWTQ4mgfNPoKyXv6tQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
      second:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9A7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiMWTQ4mgfNPoKyXv6tQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
      third:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9L7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiMWTQ4mgfNPoKyXv6tQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
      fourth:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9U7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiMWTQ4mgfNPoKyXv6tQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
      fifth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjUuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3UpEq1UzQKUw6bsqYSsTP0iO5Mi%25pHcTCkc6IKf2GLuer6FOb34TBsN5Hlk2dioCaflQDcFGbjOYnfurXmZ5y%25BORrMzBjMXyi86P2EGeQlv4DP7RnwB8",
      sixth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjAuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3UpEq1UzQKUw6bsqYSsTP0iO5Mi%25pHcTCkc6IKf2GLuer6FOb34TBsN5Hlk2dioCaflQDcFGbjOYnfurXmZ5y%25BORrMzBjMXyi86P2EGeQlv4DP7RnwB8",
      seventh:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbIwNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiMWTQ4mgfNPoKyXv6tQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
      eighth:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbIwNKXv9L7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiMWTQ4mgfNPoKyXv6tQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
    },
    yellow: {
      color: "yellow",
      first:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiMWTQ4mgfNPoJ0DyZPQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
      second:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9A7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiMWTQ4mgfNPoJ0DyZPQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
      third:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9L7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiMWTQ4mgfNPoJ0DyZPQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
      fourth:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9U7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiMWTQ4mgfNPoJ0DyZPQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
      fifth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjUuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3UpEq1UzQKUw6bsqYSsTP0iO5Mi%25pHcTCkc6IKf2GLuer6FOb34gwRuT08z4x7e2HrvQDcFGbjOYnfurXmZ5y%25BORrMzBjMXyi86P2EGeQlv4DP7RnwB8",
      sixth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjAuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3UpEq1UzQKUw6bsqYSsTP0iO5Mi%25pHcTCkc6IKf2GLuer6FOb34gwRuT08z4x7e2HrvQDcFGbjOYnfurXmZ5y%25BORrMzBjMXyi86P2EGeQlv4DP7RnwB8",
      seventh:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbIwNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiMWTQ4mgfNPoJ0DyZPQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
      eighth:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbIwNKXv9L7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiMWTQ4mgfNPoJ0DyZPQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
    },
    black: {
      color: "black",
      first:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiMWTQ4YgfNaHKyXv6tQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
      second:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9A7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiMWTQ4YgfNaHKyXv6tQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
      third:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9L7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiMWTQ4YgfNaHKyXv6tQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
      fourth:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbZJNKXv9U7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiMWTQ4YgfNaHKyXv6tQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
      fifth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjUuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3UpEq1UzQKUw6bsqYSsTP0iO5Mi%25pHcTCkc6IKf2GLuBr6FObicTBsN5Hlk2dioCaflQDcFGbjOYnfurXmZ5y%25BORrMzBjMXyi86P2EGeQlv4DP7RnwB8",
      sixth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjAuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3UpEq1UzQKUw6bsqYSsTP0iO5Mi%25pHcTCkc6IKf2GLuBr6FObicTBsN5Hlk2dioCaflQDcFGbjOYnfurXmZ5y%25BORrMzBjMXyi86P2EGeQlv4DP7RnwB8",
      seventh:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbIwNKXv9Z7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiMWTQ4YgfNaHKyXv6tQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
      eighth:
        "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDjYu5P3I7tGW3rNbIwNKXv9L7KcQQ%25yFN5tFAsXrw4r3wo0qnqZr8MCnR4i84tV2YN2OmNyW1QGWgCWKMUuyOBoV60KBiMWTQ4YgfNaHKyXv6tQ9%25ttefIjMREDrs6eWR6kUjGlHbnURRY40wjEwr1F69swihQXC6%25Il3CgP1Ds",
    },
    silver: {
      color: "silver",
      first:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMHIspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw38D%25ko5xjJGDLFC1aZASIuGbm0V0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      second:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMH8spbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw38D%25ko5xjJGDLFC1aZASIuGbm0V0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      third:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMH1spbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw38D%25ko5xjJGDLFC1aZASIuGbm0V0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      fourth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMHDspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw38D%25ko5xjJGDLFC1aZASIuGbm0V0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      fifth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjUuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3UpEq1UzQKUw6bsqYSsTP0iO5Mi%25pHcTCkc6IKf2GLuer6FOb34gwRuT08z4x7e2HLtG1UzQKYpYnfurXmZ5y%25BORrMzBjMXyi86P2EGeQlv4DP7RnwB8",
      sixth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjAuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3UpEq1UzQKUw6bsqYSsTP0iO5Mi%25pHcTCkc6IKf2GLuer6FOb34gwRuT08z4x7e2HLtG1UzQKYpYnfurXmZ5y%25BORrMzBjMXyi86P2EGeQlv4DP7RnwB8",
      seventh:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U5Yz8rMHIspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw38D%25ko5xjJGDLFC1aZASIuGbm0V0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      eighth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U5Yz8rMH1spbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw38D%25ko5xjJGDLFC1aZASIuGbm0V0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
    },
    darkblue: {
      color: "darkblue",
      first:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMHIspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVrbsqYSt4T0iO5Mi17HcTCkcQoKf2GLfVtSPQrIP7jMNYw3zqx7e2HaWp1UzQK9OWbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      second:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMH8spbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVrbsqYSt4T0iO5Mi17HcTCkcQoKf2GLfVtSPQrIP7jMNYw3zqx7e2HaWp1UzQK9OWbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      third:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMH1spbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVrbsqYSt4T0iO5Mi17HcTCkcQoKf2GLfVtSPQrIP7jMNYw3zqx7e2HaWp1UzQK9OWbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      fourth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMHDspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVrbsqYSt4T0iO5Mi17HcTCkcQoKf2GLfVtSPQrIP7jMNYw3zqx7e2HaWp1UzQK9OWbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      fifth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjUuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3UpqQDcFGImPYnfurn2B5yPewyoRCvNzxvpIGXoq1XB0r6FObicTBsN5Hlk2dioCaflQDcFGbjOYnfurXmZ5y%25BORrMzBjMXyi86P2EGeQlv4DP7RnwB8",
      sixth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjAuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3UpqQDcFGImPYnfurn2B5yPewyoRCvNzxvpIGXoq1XB0r6FObicTBsN5Hlk2dioCaflQDcFGbjOYnfurXmZ5y%25BORrMzBjMXyi86P2EGeQlv4DP7RnwB8",
      seventh:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U5Yz8rMHIspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVrbsqYSt4T0iO5Mi17HcTCkcQoKf2GLfVtSPQrIP7jMNYw3zqx7e2HaWp1UzQK9OWbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      eighth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U5Yz8rMH1spbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVrbsqYSt4T0iO5Mi17HcTCkcQoKf2GLfVtSPQrIP7jMNYw3zqx7e2HaWp1UzQK9OWbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
    },
    grey: {
      color: "grey",
      first:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMHIspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw38D%25ko5xjJGDLFC1akXbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      second:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMH8spbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw38D%25ko5xjJGDLFC1akXbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      third:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMH1spbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw38D%25ko5xjJGDLFC1akXbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      fourth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMHDspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw38D%25ko5xjJGDLFC1akXbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      fifth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjUuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3UpEq1UzQKUw6bsqYSsTP0iO5Mi%25pHcTCkc6IKf2GLuer6FOb34gwRuT08z4x7e2HwhQDcFGbjOYnfurXmZ5y%25BORrMzBjMXyi86P2EGeQlv4DP7RnwB8",
      sixth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjAuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3UpEq1UzQKUw6bsqYSsTP0iO5Mi%25pHcTCkc6IKf2GLuer6FOb34gwRuT08z4x7e2HwhQDcFGbjOYnfurXmZ5y%25BORrMzBjMXyi86P2EGeQlv4DP7RnwB8",
      seventh:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U5Yz8rMHIspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw38D%25ko5xjJGDLFC1akXbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      eighth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U5Yz8rMH1spbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw38D%25ko5xjJGDLFC1akXbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
    },
    pink: {
      color: "pink",
      first:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMHIspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw38D%25ko5xjJGDLFC1akWbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      second:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMH8spbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw38D%25ko5xjJGDLFC1akWbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      third:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMH1spbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw38D%25ko5xjJGDLFC1akWbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",

      fourth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMHDspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw38D%25ko5xjJGDLFC1akWbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      fifth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjUuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3UpEq1UzQKUw6bsqYSsTP0iO5Mi%25pHcTCkc6IKf2GLuer6FOb34gwRuT08z4x7e2HwlQDcFGbjOYnfurXmZ5y%25BORrMzBjMXyi86P2EGeQlv4DP7RnwB8",
      sixth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjAuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3UpEq1UzQKUw6bsqYSsTP0iO5Mi%25pHcTCkc6IKf2GLuer6FOb34gwRuT08z4x7e2HwlQDcFGbjOYnfurXmZ5y%25BORrMzBjMXyi86P2EGeQlv4DP7RnwB8",
      seventh:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U5Yz8rMHIspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw38D%25ko5xjJGDLFC1akWbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      eighth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U5Yz8rMH1spbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw38D%25ko5xjJGDLFC1akWbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
    },
    lightblue: {
      color: "lightblue",
      first:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMHIspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw32Mx7e2HaWp1UzQK9OWbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      second:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMH8spbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw32Mx7e2HaWp1UzQK9OWbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",

      third:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMH1spbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw32Mx7e2HaWp1UzQK9OWbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      fourth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMHDspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw32Mx7e2HaWp1UzQK9OWbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      fifth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjUuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3UpEq1UzQKUw6bsqYSsTP0iO5Mi%25pHcTCkc6IKf2GLuer6FObNrTBsN5Hlk2dioCaflQDcFGbjOYnfurXmZ5y%25BORrMzBjMXyi86P2EGeQlv4DP7RnwB8",
      sixth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U0%25z8rMbjAuWgRcgVGPK0rh4mctLsR6EXdGvdTmJKlEnDzCBLMkYCIFF7gKpGl3UpEq1UzQKUw6bsqYSsTP0iO5Mi%25pHcTCkc6IKf2GLuer6FObNrTBsN5Hlk2dioCaflQDcFGbjOYnfurXmZ5y%25BORrMzBjMXyi86P2EGeQlv4DP7RnwB8",
      seventh:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U5Yz8rMHIspbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw32Mx7e2HaWp1UzQK9OWbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
      eighth:
        "https://pictures.porsche.com/rtt/iris?COSY-EU-100-1711coMvsi60AAt5FwcmBEgA4qP8iBUDxPE3Cb9pNXABuN9dMGF4tl3U5Yz8rMH1spbWvanYb%255y%25oq%25vSTmjMXD4qAZeoNBPUSfUx4RmWBisGK7Zlp0KtYYF%25mVSW8uVBrIuGbmukN3er0gexTjzwHlznVaqxKpqNtmO1SZ5CMNYw32Mx7e2HaWp1UzQK9OWbsqYS3Ew0iO5MP4hHcn7woMlG7ElPczJNT1BSCbWfDsTFoik7J",
    },
  };

  return (
    <>
      <HeaderBlack />
      <main className="main">
        <div className="container">
          <div className="main-content">
            <div className="main-top">
              <h2>Configurator Porsche 911</h2>
              <button>Car characteristics</button>
            </div>
            <div className="main-car">
              <div className="main-car-content">
                <div className="main-car-images">
                  <Swiper
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper2"
                  >
                    <div className="main-car-chosen">
                      <SwiperSlide>
                        <img src={colors[selectedColor]?.first} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={colors[selectedColor]?.second} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={colors[selectedColor]?.third} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={colors[selectedColor]?.fourth} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={colors[selectedColor]?.fifth} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={colors[selectedColor]?.sixth} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={colors[selectedColor]?.seventh} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={colors[selectedColor]?.eighth} />
                      </SwiperSlide>
                    </div>
                  </Swiper>
                </div>
                <div className="main-customization">
                  <div className="select-customization">
                    <div className="main-customization-car">
                      <h2>Model</h2>
                      <select name="" id="">
                        <option value="718">718</option>
                        <option value="911">911</option>
                        <option value="Taycan">Taycan</option>
                        <option value="Panamera">Panamera</option>
                        <option value="Macan">Macan</option>
                        <option value="Cayenne">Cayenne</option>
                      </select>
                    </div>
                    <div className="main-customization-car">
                      <h2>SubType</h2>
                      <select name="" id="">
                        <option value="">Eletre</option>
                        <option value="">Eletre</option>
                        <option value="">Eletre</option>
                      </select>
                    </div>
                    <div className="main-customization-car">
                      <h2>Complectation</h2>
                      <select>
                        <option value="">S+</option>
                        <option value="">S+</option>
                        <option value="">S+</option>
                      </select>
                    </div>
                  </div>
                  <div className="color-customization">
                    <div className="car-body-color">
                      <h2>Car's body color</h2>
                      <div className="colors">
                        <div
                          className="white"
                          onClick={() => handleColorClick("white", 0)}
                        >
                          <img src="./assets/svgs/colors/white.svg" alt="" />
                        </div>
                        <div
                          className="silver"
                          onClick={() => handleColorClick("silver", 1)}
                        >
                          <img src="./assets/svgs/colors/silver.svg" alt="" />
                        </div>
                        <div
                          className="grey"
                          onClick={() => handleColorClick("grey", 2)}
                        >
                          <img src="./assets/svgs/colors/grey.svg" alt="" />
                        </div>
                        <div
                          className="black"
                          onClick={() => handleColorClick("black", 3)}
                        >
                          <img src="./assets/svgs/colors/black.svg" alt="" />
                        </div>
                        <div
                          className="pink"
                          onClick={() => handleColorClick("pink", 4)}
                        >
                          <img src="./assets/svgs/colors/pink.svg" alt="" />
                        </div>
                        <div
                          className="darkblue"
                          onClick={() => handleColorClick("darkblue", 5)}
                        >
                          <img src="./assets/svgs/colors/darkblue.svg" alt="" />
                        </div>
                        <div
                          className="lightblue"
                          onClick={() => handleColorClick("lightblue", 6)}
                        >
                          <img
                            src="./assets/svgs/colors/lightblue.svg"
                            alt=""
                          />
                        </div>
                        <div
                          className="yellow"
                          onClick={() => handleColorClick("yellow", 7)}
                        >
                          <img src="./assets/svgs/colors/yellow.svg" alt="" />
                        </div>
                        <div
                          className="red"
                          onClick={() => handleColorClick("red", 8)}
                        >
                          <img src="./assets/svgs/colors/red.svg" alt="" />
                        </div>
                      </div>
                      <div className="des">
                        <p>
                          {selectedColor} <span> +0 $</span>
                        </p>
                      </div>
                    </div>
                    <div className="car-salon-color">
                      <div className="car-salon-color">
                        <h2>Interior color (Ain't Working)</h2>
                        <div className="colors">
                          <div className="first-color">
                            <img src="./assets/svgs/colors/double.svg" alt="" />
                          </div>
                          <div className="second-color">
                            <img
                              src="./assets/svgs/colors/double2.svg"
                              alt=""
                            />
                          </div>
                          <div className="third-color">
                            <img
                              src="./assets/svgs/colors/double3.svg"
                              alt=""
                            />
                          </div>
                          <div className="fourth-color">
                            <img
                              src="./assets/svgs/colors/double4.svg"
                              alt=""
                            />
                          </div>
                          <div className="fifth-color">
                            <img
                              src="./assets/svgs/colors/double5.svg"
                              alt=""
                            />
                          </div>
                          <div className="sixth-color">
                            <img
                              src="./assets/svgs/colors/double6.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="des">
                          <p>
                            Black and white <span>+0 CNY</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wheel-customization">
                    <div className="wheels-types">
                      <h2>Wheels</h2>
                      <div className="wheels">
                        <img src="./assets/svgs/wheels/wheel.svg" alt="" />
                        <img src="./assets/svgs/wheels/wheel2.svg" alt="" />
                        <img src="./assets/svgs/wheels/wheel3.svg" alt="" />
                        <img src="./assets/svgs/wheels/wheel4.svg" alt="" />
                      </div>
                      <div className="des">
                        <p>
                          20" Black Wheels <span>+0 CNY</span>
                        </p>
                      </div>
                    </div>
                    <div className="booster-types">
                      <h2>Caliper color</h2>
                      <div className="boosters">
                        <img src="./assets/svgs/wheels/booster.svg" alt="" />
                        <img src="./assets/svgs/wheels/booster2.svg" alt="" />
                        <img src="./assets/svgs/wheels/booster3.svg" alt="" />
                        <img src="./assets/svgs/wheels/booster4.svg" alt="" />
                        <img src="./assets/svgs/wheels/booster5.svg" alt="" />
                      </div>
                      <div className="des">
                        <p>
                          <span>+0 $</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="optional-options">
                    <h3>Additional options</h3>

                    <div className="option">
                      <input type="checkbox" />
                      <h4>
                        Sports tires with increased wear resistance + 5,000 $
                      </h4>
                    </div>
                    <div className="option">
                      <input type="checkbox" />
                      <h4>External glossy black kit + 0 $</h4>
                    </div>
                    <div className="option">
                      <input type="checkbox" />
                      <h4>
                        Lotus Active Steering Kit (Active Rear Wheel Steering
                        and Roll System) + 0 $
                      </h4>
                    </div>
                    <div className="option">
                      <input type="checkbox" />
                      <h4>Active aerodynamic kit Lotus + 0 $</h4>
                    </div>
                    <div className="option">
                      <input type="checkbox" />
                      <h4>
                        Smart panoramic PDLC canopy (10 light transmission
                        modes) + 0 $
                      </h4>
                    </div>
                    <div className="option">
                      <input type="checkbox" />
                      <h4>
                        Lotus Intelligent Driving (Adaptive Cruise and Full
                        Warning System) + 0 $
                      </h4>
                    </div>
                    <div className="option">
                      <input type="checkbox" />
                      <h4>
                        Lotus Intelligent Driving (Adaptive Cruise and Full
                        Warning System) + 0 $
                      </h4>
                    </div>
                    <div className="option">
                      <input type="checkbox" />
                      <h4>Quadruple saloon + 30,000 $</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-sum">
                <div className="main-sum-title">
                  <h3>Calculation of total amount</h3>
                </div>
                <div className="additional-payment">
                  <div className="payment-row">
                    <h5>Invoice</h5>
                    <h4>826 480 CNY</h4>
                  </div>
                  <div className="payment-row">
                    <h5>Price of a car in Germany with documents</h5>
                    <h4>792 480 CNY</h4>
                  </div>
                  <div className="payment-row">
                    <h5>Delivery to NYC</h5>
                    <h4>19 000 CNY</h4>
                  </div>
                  <div className="payment-row">
                    <h5>Customs</h5>
                    <h4>18 000 $</h4>
                  </div>
                  <div className="payment-row">
                    <h5>Delivery to MI</h5>
                    <h4>1 500 $</h4>
                  </div>
                  <div className="payment-row">
                    <h5>Our Taxes</h5>
                    <h4>1 500 $</h4>
                  </div>
                  <div className="payment-row">
                    <h5>EPS</h5>
                    <h4>1 100 $</h4>
                  </div>
                </div>
                <div className="main-sum-total">
                  <div className="total-sum">
                    <h6>Total</h6>
                    <h2>15 776 331 $</h2>
                    <p>Including $1,500 NEFORWARD commission</p>
                  </div>
                </div>
                <div className="main-sum-currency-changer">
                  <div className="main-sum-currency-changer-btns">
                    <button>RUB</button>
                    <button>CNY</button>
                    <button>USD</button>
                  </div>
                  <p>CNY = 12.58₽ • USD = 89.69₽, 1/9/2024</p>
                </div>
                <div className="main-sum-des">
                  <p>
                    The price in USDs is calculated at the current exchange rate
                    and may vary at the time of order.
                  </p>
                </div>
                <div className="main-sum-green-btn">
                  <button>Submit your application</button>
                </div>
              </div>
            </div>
            <div className="main-exclusive">
              <div className="main-exclusive-title">
                <h2>Porsche 911: An Exclusive Sport Masterpiece</h2>
              </div>
              <div className="main-exclusive-description">
                <p>
                  The car is equipped as standard with roll and active rear
                  wheel control systems, an active aerodynamic kit, a smart
                  panoramic canopy with 10 light transmission modes and adaptive
                  cruise control with a warning function. For an additional fee,
                  the maximum version also includes options: an electric towbar,
                  multimedia exterior mirrors, a KEF Acoustic Benchmark sound
                  system with 23 speakers with a peak power of 2160 W, the
                  Porsche Premium smart driving system with two autopilot modes
                  and smart parking. We offer reasonable prices for the latest
                  products of the Chinese automobile industry, making them
                  available to a wide range of car enthusiasts in U.S.A.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="bg-one">
        <h2>Multimedia Of Porsche 911</h2>
      </div>
      <div className="bg-two">
        <h2>MIM technologies (injection molding of parts)</h2>
        <h3>1323 | 443 | 4.5 | 3.0</h3>
      </div>
      <div className="bg-three">
        <h2>Multimedia Of Porsche 911</h2>
        <h3>1323 | 443 | 4.5 | 3.0</h3>
      </div>

      <div className="bg-four">
        <h2>Multimedia Of Porsche 911</h2>
        <h3>1323 | 443 | 4.5 | 3.0</h3>
      </div>
      <div className="bg-five">
        <h2>Multimedia Of Porsche 911</h2>
        <h3>1323 | 443 | 4.5 | 3.0</h3>
      </div>
      <div className="bg-six">
        <h2>Multimedia Of Porsche 911</h2>
        <h3>1323 | 443 | 4.5 | 3.0</h3>
      </div>
      <div className="bg-seven">
        <h2>Multimedia Of Porsche 911</h2>
        <h3>1323 | 443 | 4.5 | 3.0</h3>
      </div>
      <div className="bg-eight">
        <h2>Multimedia Of Porsche 911</h2>
        <h3>1323 | 443 | 4.5 | 3.0</h3>
      </div>
      <div className="bg-nine">
        <h2>Multimedia Of Porsche 911</h2>
        <h3>1323 | 443 | 4.5 | 3.0</h3>
      </div>
      <div className="bg-ten">
        <h2>Multimedia Of Porsche 911</h2>
        <h3>1323 | 443 | 4.5 | 3.0</h3>
      </div>
      <div className="bg-eleven">
        <h2>Multimedia Of Porsche 911</h2>
        <h3>1323 | 443 | 4.5 | 3.0</h3>
      </div>
      <div className="bg-twelve">
        <h2>Multimedia Of Porsche 911</h2>
        <h3>1323 | 443 | 4.5 | 3.0</h3>
      </div>
      <div className="bg-thirteen">
        <h2>Multimedia Of Porsche 911</h2>
        <h3>1323 | 443 | 4.5 | 3.0</h3>
      </div>
      <div className="bg-fourteen">
        <h2>Multimedia Of Porsche 911</h2>
        <h3>1323 | 443 | 4.5 | 3.0</h3>
      </div>
      <div className="bg-fifteen">
        <h2>Multimedia Of Porsche 911</h2>
        <h3>1323 | 443 | 4.5 | 3.0</h3>
      </div>
      <div className="bg-sixteen">
        <h2>Multimedia Of Porsche 911</h2>
        <h3>1323 | 443 | 4.5 | 3.0</h3>
      </div>
      <div className="bg-seventeen">
        <h2>Multimedia Of Porsche 911</h2>
        <h3>1323 | 443 | 4.5 | 3.0</h3>
      </div>
      <div className="bg-eighteen">
        <h2>Multimedia Of Porsche 911</h2>
        <h3>1323 | 443 | 4.5 | 3.0</h3>
      </div>

      <Footer />
    </>
  );
};

export default Configurator;
