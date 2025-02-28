"use client";

import React, { useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { RxDownload } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import { BiLoaderAlt } from "react-icons/bi";
import { socialMedia } from "@/data";
import Image from "next/image";

const Hero = () => {
  const resumeUrl =
    "https://drive.google.com/uc?export=download&id=11xqMHcEKIAoxVLnblkmOzawTJTQl-LOF";
  const [downloaded, setDownloaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleResumeDownload = () => {
    setIsDownloading(true);

    setTimeout(() => {
      setIsDownloading(false);
      setDownloaded(true);

      setTimeout(() => setDownloaded(false), 6000);
    }, 3500);
  };
  return (
    <div className=" pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute top-0 left-0 h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.08] bg-grid-black/[0.2] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            className="text-center md:text-5xl text-[40px] lg:text-7xl"
            words="Transforming Concepts into Seamless Experiences"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I&apos;m Bhuwan, a Web Developer.
          </p>
          <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-0">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-35 p-2 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <a href={info.link} target="_blank" className="flex gap-2">
                  <p className="text-purple">{info.name}</p>
                  <Image src={info.img} alt="icons" width={20} height={20} />
                </a>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="#projects">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href={resumeUrl} download onClick={handleResumeDownload}>
              <MagicButton
                title={
                  downloaded
                    ? "Downloaded"
                    : isDownloading
                    ? "Downloading..."
                    : "My Resume"
                }
                icon={
                  downloaded ? (
                    <FaCheck size={20} />
                  ) : isDownloading ? (
                    <BiLoaderAlt size={20} className="animate-spin" />
                  ) : (
                    <RxDownload size={20} />
                  )
                }
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
