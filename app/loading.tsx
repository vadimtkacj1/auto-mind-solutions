'use client';

import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020510]/95 backdrop-blur-md">
      <div className="relative">
        {/* Крутящийся круг с градиентом */}
        <div className="h-16 w-16 animate-spin rounded-full bg-gradient-to-tr from-[#0070FF] via-[#00E690] to-[#0070FF] p-[3px]">
          <div className="h-full w-full rounded-full bg-[#020510]"></div>
        </div>
      </div>
    </div>
  );
}