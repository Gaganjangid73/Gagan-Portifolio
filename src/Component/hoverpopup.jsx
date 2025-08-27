import React, { useState } from "react";

export default function HoverPopup() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Element you hover on */}
      <button
        onMouseEnter={() => setShowPopup(true)}
        onMouseLeave={() => setShowPopup(false)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Hover Me
      </button>

      {/* Popup */}
      {showPopup && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 bg-gray-800 text-white text-sm p-2 rounded-lg shadow-lg">
          👋 Hello! I’m a popup on hover.
        </div>
      )}
    </div>
  );
}
