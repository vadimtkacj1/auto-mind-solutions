"use client";

import React from "react";
import Image from "next/image";
import type { PortfolioItem } from "./portfolioData";

export function PortfolioCard({
  item,
  index,
}: {
  item: PortfolioItem;
  index: number;
  mode?: "carousel" | "grid";
  variant?: "full" | "metrics";
}) {
  return (
    <div data-portfolio-card={index}>
      <Image
        src={item.image}
        alt=""
        width={1200}
        height={900}
        loading={index === 0 ? "eager" : "lazy"}
        priority={index === 0}
      />
    </div>
  );
}
