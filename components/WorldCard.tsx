"use client";

import { useState } from "react";
import Image from "next/image";

type TierType = "Open" | "Curated" | "Invite-only";

export type World = {
  name: string;
  description: string;
  memberCount: number;
  tierType: TierType;
  coverImageUrl?: string;
  aiLabel: string;
};

export type WorldCardProps = {
  world: World;
  isLoading?: boolean;
  initialJoined?: boolean;
};

function Shimmer({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-surface-cool ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 animate-shimmer bg-linear-to-r from-[#E8F8F9] via-[#C0ECEF] to-[#E8F8F9]" />
    </div>
  );
}

export default function WorldCard({
  world,
  isLoading = false,
  initialJoined = false,
}: WorldCardProps) {
  const [joined, setJoined] = useState(initialJoined);

  return (
    <article
      className="w-full max-w-[375px] rounded-card border border-[#E0E8E8] bg-surface p-5 shadow-card transition-all duration-200 ease-out pointer-fine:hover:-translate-y-0.5 pointer-fine:hover:shadow-card-hover"
      aria-busy={isLoading || undefined}
    >
      {isLoading ? (
        <Shimmer className="h-40 rounded-xl" />
      ) : (
        <div className="relative h-40 animate-card-fade-in overflow-hidden rounded-xl bg-surface-cool">
          {world.coverImageUrl && (
            <Image
              src={world.coverImageUrl}
              alt={world.name}
              fill
              className="object-cover"
              sizes="375px"
            />
          )}
        </div>
      )}

      {isLoading ? (
        <Shimmer className="mt-3 h-6 w-44 rounded-pill" />
      ) : (
        <div className="mt-3 w-fit animate-label-entrance rounded-pill bg-[rgba(0,175,185,0.10)] px-2.5 py-1 text-xs font-medium text-teal">
          {world.aiLabel}
        </div>
      )}

      {isLoading ? (
        <Shimmer className="mt-2 h-7 w-3/4 rounded-md" />
      ) : (
        <h3 className="mt-2 animate-card-fade-in text-lg font-bold leading-7 text-brand">
          {world.name}
        </h3>
      )}

      {isLoading ? (
        <div className="mt-1 space-y-2">
          <Shimmer className="h-4 w-full rounded-md" />
          <Shimmer className="h-4 w-3/5 rounded-md" />
        </div>
      ) : (
        <p className="mt-1 animate-card-fade-in text-sm leading-5 text-muted line-clamp-2">
          {world.description}
        </p>
      )}

      {isLoading ? (
        <Shimmer className="mt-3 h-[18px] w-1/2 rounded-md" />
      ) : (
        <div className="mt-3 flex animate-card-fade-in gap-4 text-[13px] leading-[18px] text-muted">
          <span>{world.memberCount.toLocaleString()} members</span>
          <span>{world.tierType}</span>
        </div>
      )}

      {/* h-[43px] not h-10 — matches real button height including the always-1.5px transparent border */}
      {isLoading ? (
        <Shimmer className="mt-4 h-[43px] w-full rounded-pill" />
      ) : (
        <button
          type="button"
          onClick={() => setJoined((j) => !j)}
          aria-pressed={joined}
          className={`mt-4 w-full animate-card-fade-in rounded-pill border-[1.5px] px-6 py-2.5 text-sm font-semibold transition-join-button ${
            joined
              ? "border-teal bg-transparent text-teal"
              : "border-transparent bg-teal text-white pointer-fine:hover:bg-[#00C2CC]"
          }`}
        >
          {joined ? "Joined" : "Join World"}
        </button>
      )}
    </article>
  );
}
