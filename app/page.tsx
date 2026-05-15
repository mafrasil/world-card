"use client";

import { useState } from "react";
import WorldCard, { type World } from "@/components/WorldCard";
import PointsAnimation from "@/components/PointsAnimation";

const sampleWorld: World = {
  name: "Sunrise Trail Runners",
  description:
    "A community of trail runners exploring routes from dawn light to early morning. Weekly meetups, GPX route sharing, race prep, and the occasional sunrise photo competition.",
  memberCount: 2847,
  tierType: "Open",
  aiLabel: "Matches your interest in trail running",
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-white p-8">
      <div className="mx-auto flex max-w-[375px] flex-col gap-4">
        <button
          type="button"
          onClick={() => setIsLoading((l) => !l)}
          className="self-start rounded-pill bg-brand px-4 py-2 text-sm font-medium text-white"
        >
          Toggle: {isLoading ? "Loading" : "Loaded"}
        </button>
        <WorldCard world={sampleWorld} isLoading={isLoading} />
        <div className="mt-4">
          <PointsAnimation />
        </div>
      </div>
    </main>
  );
}
