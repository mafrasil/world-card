import WorldCard, { type World } from "@/components/WorldCard";

const sampleWorld: World = {
  name: "Sunrise Trail Runners",
  description:
    "A community of trail runners exploring routes from dawn light to early morning. Weekly meetups, GPX route sharing, race prep, and the occasional sunrise photo competition.",
  memberCount: 2847,
  tierType: "Open",
  aiLabel: "Matches your interest in trail running",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-[375px]">
        <WorldCard world={sampleWorld} />
      </div>
    </main>
  );
}
