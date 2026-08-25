"use client";

import React from "react";
import Image from "next/image";

interface ParpellLogoProps {
  className?: string;
  size?: number;
  rounded?: string;
}

export function ParpellLogo({ className = "", size = 32, rounded = "rounded-xl" }: ParpellLogoProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden shadow-md select-none ${rounded} bg-gradient-to-br from-[#2E1522] via-[#1B0A15] to-[#0D040A] border border-white/15 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo-parpell-transparent.png"
        alt="Logo Parpell"
        width={size * 2}
        height={size * 2}
        className="w-full h-full object-contain p-[10%] filter contrast-[1.05]"
        priority
      />
    </div>
  );
}
