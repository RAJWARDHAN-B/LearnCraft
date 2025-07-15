import React from "react";

const Loader = () => (
  <div className="flex items-center justify-center min-h-[200px] w-full">
    <svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g transform-origin="50 50">
          <path
            d="M50,10 A40,40 0 0,1 90,50"
            stroke="#7dd3fc"  // Light Blue
            strokeWidth="6"
            fill="none"
          />
          <path
            d="M90,50 A40,40 0 0,1 50,90"
            stroke="#fb923c"  // Orange
            strokeWidth="6"
            fill="none"
          />
          <path
            d="M50,90 A40,40 0 0,1 10,50"
            stroke="#fdba74"  // Light Orange
            strokeWidth="6"
            fill="none"
          />
          <path
            d="M10,50 A40,40 0 0,1 50,10"
            stroke="transparent"
            strokeWidth="6"
            fill="none"
          />
        </g>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  </div>
);

export default Loader;
