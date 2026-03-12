"use client";

import React, { useMemo } from "react";
import { portfolioItems } from "./portfolioData";
import { PortfolioCard } from "./PortfolioCard";

export function Portfolio({ limit }: { showViewAll?: boolean; limit?: number }) {
  const items = useMemo(() => {
    if (typeof limit === "number" && limit > 0) return portfolioItems.slice(0, limit);
    return portfolioItems;
  }, [limit]);

  

  return (
    <section id="portfolio">
      <div>
        <div>
          {items.map((item, idx) => (
            <PortfolioCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
