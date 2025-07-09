import React from "react";
import microsoft from "../assets/microsoft.svg";
import google from "../assets/google.svg";
import fedex from "../assets/fedex.png";
import hubspot from "../assets/hubspot.svg";

const CompanyLogos = () => {
  return (
    <div className="bg-white py-10 overflow-hidden">
      <h3 className="text-center text-gray-800 font-semibold mb-6 text-2xl">
        Trusted by companies of all sizes
      </h3>

      <div className="w-full flex justify-center">
        <div className="w-1/2 relative overflow-hidden">
          <div
            className="flex space-x-16 w-max"
            style={{
              animation: "scrollLeft 20s linear infinite",
            }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex space-x-16 items-center">
                <img
                  src={microsoft}
                  alt="Microsoft"
                  className="h-16 sm:h-24 md:h-32 grayscale opacity-70"
                />
                <img
                  src={google}
                  alt="Google"
                  className="h-16 sm:h-24 md:h-32 grayscale opacity-70"
                />
                <img
                  src={fedex}
                  alt="Fedex"
                  className="h-16 sm:h-24 md:h-32 grayscale opacity-70"
                />
                <img
                  src={hubspot}
                  alt="Hubspot"
                  className="h-16 sm:h-24 md:h-32 grayscale opacity-70"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframes inside style tag */}
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default CompanyLogos;
