"use client";

import { AboutStats } from "./AboutStats";
import { AboutStory } from "./AboutStory";
import { AboutApproach } from "./AboutApproach";
import { AboutValues } from "./AboutValues";
import { AboutQuote } from "./AboutQuote";
import { AboutTeam } from "./AboutTeam";

export function AboutAiterra() {
  return (
    <div className="bg-white overflow-visible" dir="ltr">
      <AboutStats />
      <AboutStory />
      <AboutApproach />
      <AboutValues />
      <AboutQuote />
      <AboutTeam />
    </div>
  );
}
