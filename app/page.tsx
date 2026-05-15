"use client";

import { useEffect, useState } from "react";
import WorldCard, { type World } from "@/components/WorldCard";
import PointsAnimation from "@/components/PointsAnimation";

const worlds: Record<"skeleton" | "default" | "joined", World> = {
  skeleton: {
    name: "Sunrise Trail Runners",
    description:
      "A community of trail runners exploring routes from dawn light to early morning. Weekly meetups, GPX route sharing, race prep, and the occasional sunrise photo competition.",
    memberCount: 2847,
    tierType: "Open",
    aiLabel: "Matches your interest in trail running",
  },
  default: {
    name: "Ferment + Flora",
    description:
      "Home fermentation and edible garden community. Share starters, swap seeds, and learn from people growing their own kitchens.",
    memberCount: 412,
    tierType: "Curated",
    aiLabel: "Based on your kitchen experiments",
  },
  joined: {
    name: "The Long Read",
    description:
      "Slow book club for big, demanding novels. One book per quarter. Members commit to finishing what they start.",
    memberCount: 87,
    tierType: "Invite-only",
    aiLabel: "Recommended by 3 of your connections",
  },
};

function SkeletonDelayedCard({ world }: { world: World }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return <WorldCard world={world} isLoading={isLoading} />;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="mx-auto flex max-w-[375px] flex-col gap-6 px-4">
        <SkeletonDelayedCard world={worlds.skeleton} />
        <WorldCard world={worlds.default} />
        <WorldCard world={worlds.joined} initialJoined />
        <div className="self-start">
          <PointsAnimation />
        </div>
      </div>
    </main>
  );
}
