import React from "react";

const Loader = () => (
  <div className="flex items-center justify-center min-h-[200px] w-full">
    <span className="loader-spin"></span>
    <style>{`
      .loader-spin {
        display: inline-block;
        width: 56px;
        height: 56px;
        border: 6px solid #2563eb; /* blue-600 */
        border-top: 6px solid #facc15; /* yellow-400 */
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default Loader; 