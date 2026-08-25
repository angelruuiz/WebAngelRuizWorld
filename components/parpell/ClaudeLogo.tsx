import React from "react";

export function ClaudeLogo({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative flex items-center justify-center shrink-0 rounded-lg bg-[#CC785C]/15 border border-[#CC785C]/30 p-1 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-[#D97757]"
      >
        <path
          d="M12 2L14.2 8.4L20.6 6.2L16.4 12L20.6 17.8L14.2 15.6L12 22L9.8 15.6L3.4 17.8L7.6 12L3.4 6.2L9.8 8.4L12 2Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
