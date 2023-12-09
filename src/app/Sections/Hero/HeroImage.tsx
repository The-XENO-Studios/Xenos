"use client";

import Image from "next/image";
import { useEffect } from "react";
import { PowerGlitch } from "powerglitch";

const HeroImage = () => {
  useEffect(() => {
    PowerGlitch.glitch(".Glitch", { playMode: "hover" });
  });
  return (
    <Image
      src="/XENO.png"
      alt="Logo"
      width={768}
      height={768}
      className="Glitch"
    />
  );
};

export default HeroImage;
