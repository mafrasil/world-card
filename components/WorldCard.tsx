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

export default function WorldCard({ world }: WorldCardProps) {
  return (
    <article className="w-full max-w-[375px] rounded-card border border-[#E0E8E8] bg-surface p-5 shadow-card">
      {/* Cover — 160px tall, 12px radius, surface-cool placeholder */}
      <div className="relative h-40 overflow-hidden rounded-xl bg-surface-cool">
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

      {/* AI label — pill, fit-content. Spec omits margin-top; mt-3 matches the meta row's section-break spacing. */}
      <div className="mt-3 w-fit rounded-pill bg-[rgba(0,175,185,0.10)] px-2.5 py-1 text-xs font-medium text-teal">
        {world.aiLabel}
      </div>

      {/* World name — 18/700/brand, mt 8 */}
      <h3 className="mt-2 text-lg font-bold leading-7 text-brand">
        {world.name}
      </h3>

      {/* Description — 14/muted, line-clamp-2, mt 4 */}
      <p className="mt-1 text-sm leading-5 text-muted line-clamp-2">
        {world.description}
      </p>

      {/* Meta — 13/muted, flex gap-16, mt 12 */}
      <div className="mt-3 flex gap-4 text-[13px] leading-[18px] text-muted">
        <span>{world.memberCount.toLocaleString()} members</span>
        <span>{world.tierType}</span>
      </div>

      {/* Join button — teal/white/pill/600, full width, mt 16 */}
      <button
        type="button"
        className="mt-4 w-full rounded-pill bg-teal px-6 py-2.5 text-sm font-semibold text-white"
      >
        Join World
      </button>
    </article>
  );
}
