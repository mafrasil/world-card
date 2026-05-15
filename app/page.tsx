export default function TokenCheck() {
  const named = [
    { name: "brand", hex: "#1A1A2E", className: "bg-brand text-white" },
    { name: "teal", hex: "#00AFB9", className: "bg-teal text-white" },
    { name: "surface", hex: "#F8FAFA", className: "bg-surface text-brand border border-[#E0E8E8]" },
    { name: "surface-cool", hex: "#E8F8F9", className: "bg-surface-cool text-brand" },
    { name: "muted", hex: "#777788", className: "bg-muted text-white" },
    { name: "success", hex: "#2D9B6F", className: "bg-success text-white" },
  ];

  const inlined = [
    { hex: "#E0E8E8", note: "card border" },
    { hex: "#C0ECEF", note: "shimmer mid" },
    { hex: "#00C2CC", note: "Join hover" },
    { hex: "#F3F3F2", note: "Helpful default" },
  ];

  return (
    <main className="min-h-screen bg-white p-8 font-sans text-brand">
      <div className="mx-auto max-w-3xl space-y-10">
        <header className="space-y-1">
          <h1 className="text-2xl font-bold">Token check</h1>
          <p className="text-sm text-muted">
            Temporary page to verify Inter + design tokens. Will be replaced by
            the real demo.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Named tokens
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {named.map((t) => (
              <div
                key={t.name}
                className={`${t.className} flex h-24 flex-col justify-end rounded-card p-3 text-sm`}
              >
                <div className="font-semibold">{t.name}</div>
                <div className="opacity-80">{t.hex}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Inlined (arbitrary values)
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {inlined.map((t) => (
              <div
                key={t.hex}
                className="flex h-24 flex-col justify-end rounded-card border border-[#E0E8E8] p-3 text-sm"
                style={{ backgroundColor: t.hex }}
              >
                <div className="font-semibold">{t.hex}</div>
                <div className="text-xs text-muted">{t.note}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Radius
          </h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex h-20 w-32 items-center justify-center rounded-card bg-surface-cool text-sm">
              rounded-card
            </div>
            <div className="flex h-10 items-center justify-center rounded-pill bg-teal px-6 text-sm font-semibold text-white">
              rounded-pill
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Typography (Inter)
          </h2>
          <div className="space-y-1">
            <p className="text-lg font-bold">The quick brown fox jumps over the lazy dog</p>
            <p className="text-base">The quick brown fox jumps over the lazy dog</p>
            <p className="text-sm text-muted">The quick brown fox jumps over the lazy dog</p>
            <p className="text-xs text-muted">
              Inter loaded? Look at the lowercase <span className="text-brand font-semibold">a</span>
              {" "}— it has a double-story shape with a distinctive tail.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
