/**
 * Fixed ambient background: layered radial blue lighting and a faint grid.
 * Purely decorative and hidden from assistive technology.
 */
export default function BackgroundDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-canvas" />
      <div className="absolute -top-44 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-brand-primary/20 blur-[110px]" />
      <div className="absolute right-[-10rem] top-[38%] h-[32rem] w-[32rem] rounded-full bg-brand-cyan/10 blur-[110px]" />
      <div className="absolute -left-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-brand-electric/15 blur-[100px]" />
      <div
        className="grid-bg absolute inset-0 opacity-[0.35]"
        style={{
          maskImage: 'radial-gradient(ellipse at top, black, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at top, black, transparent 70%)',
        }}
      />
    </div>
  );
}
