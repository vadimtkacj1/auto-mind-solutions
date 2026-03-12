"use client";

import React from "react";
import "./(landing)/landing/components/PageLoader.css";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020510]/95 backdrop-blur-md">
      <div className="rocket-loader">
        <div className="rocket">
          <div className="rocket-extras"></div>
          <div className="jet">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
