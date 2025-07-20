import React from "react";
import microsoft from "../assets/microsoft.svg";
import google from "../assets/google.svg";
import fedex from "../assets/fedex.png";
import hubspot from "../assets/hubspot.svg";

const CompanyLogos = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-gray-800 font-bold mb-12 text-3xl md:text-4xl">
          Trusted by companies of all sizes
        </h3>

        <div className="w-full relative overflow-hidden">
          <div
            className="flex space-x-20 w-max"
            style={{
              animation: "scrollLeft 25s linear infinite",
            }}
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex space-x-20 items-center">
                <div className="flex flex-col items-center group">
                  <img
                    src={microsoft}
                    alt="Microsoft"
                    className="h-16 sm:h-20 md:h-24 transition-all duration-300 group-hover:scale-110"
                    style={{ filter: 'none' }}
                  />
                </div>
                <div className="flex flex-col items-center group">
                  <img
                    src={google}
                    alt="Google"
                    className="h-18 sm:h-22 md:h-26 transition-all duration-300 group-hover:scale-110"
                    style={{ filter: 'none' }}
                  />
                  
                </div>
                <div className="flex flex-col items-center group">
                  <img
                    src={fedex}
                    alt="Fedex"
                    className="h-6 sm:h-12 md:h-14 transition-all duration-300 group-hover:scale-110"
                    style={{ filter: 'none' }}
                  />
                  
                </div>
                <div className="flex flex-col items-center group">
                  <img
                    src={hubspot}
                    alt="Hubspot"
                    className="h-18 sm:h-22 md:h-26 transition-all duration-300 group-hover:scale-110"
                    style={{ filter: 'none' }}
                  />
                
                </div>
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
