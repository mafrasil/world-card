"use client";

import { useEffect, useRef, useState } from "react";

export type PointsAnimationProps = {
  points?: number;
};

type Instance = { id: string };

const ANIMATION_DURATION_MS = 520;

export default function PointsAnimation({ points = 8 }: PointsAnimationProps) {
  const [active, setActive] = useState(false);
  const [instances, setInstances] = useState<Instance[]>([]);
  const timeoutsRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(
    new Map(),
  );

  useEffect(() => {
    const timeouts = timeoutsRef.current;
    return () => {
      timeouts.forEach((t) => clearTimeout(t));
      timeouts.clear();
    };
  }, []);

  const handleClick = () => {
    setActive((a) => !a);

    const id = crypto.randomUUID();
    setInstances((prev) => [...prev, { id }]);

    const timeout = setTimeout(() => {
      setInstances((prev) => prev.filter((i) => i.id !== id));
      timeoutsRef.current.delete(id);
    }, ANIMATION_DURATION_MS);

    timeoutsRef.current.set(id, timeout);
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={handleClick}
        aria-pressed={active}
        className={`flex items-center gap-2 rounded-pill px-4 py-2 text-sm font-medium transition-helpful-button ${
          active ? "bg-surface-cool text-teal" : "bg-[#F3F3F2] text-brand"
        }`}
      >
        <ThumbsUpIcon />
        Helpful
      </button>

      {instances.map((instance) => (
        <span
          key={instance.id}
          aria-hidden
          className="pointer-events-none absolute bottom-full left-1/2 animate-points-pop text-sm font-bold text-success"
        >
          +{points} pts
        </span>
      ))}
    </div>
  );
}

function ThumbsUpIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H7" />
    </svg>
  );
}
