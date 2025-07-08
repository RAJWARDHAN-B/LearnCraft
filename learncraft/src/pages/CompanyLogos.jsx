import React from "react";
import microsoft from "../assets/microsoft.svg";
import google from "../assets/google.svg";
import hubspot from "../assets/hubspot.svg";

const CompanyLogos = () => {
  return (
    <div className="bg-white py-10 overflow-hidden">
      <h3 className="text-center text-gray-800 font-semibold mb-6">
        Trusted by companies of all sizes
      </h3>

      {/* Scrolling container */}
      <div className="relative w-full overflow-x-hidden flex items-center justify-center py-10 px-0">
        <div className="flex w-max animate-scroll-horizontal space-x-16">
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
                src={hubspot}
                alt="Hubspot"
                className="h-16 sm:h-24 md:h-32 grayscale opacity-70"
                />
            </div>
            ))}
        </div>
        </div>



    </div>
  );
};

export default CompanyLogos;
