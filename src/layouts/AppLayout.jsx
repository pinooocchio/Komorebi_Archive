import { FloatingPetals } from '../components/FloatingPetals';

export function AppLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#4b2632_0%,_#241017_34%,_#150a10_72%,_#0f070b_100%)] text-paper">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,191,193,0.12),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,183,139,0.14),transparent_24%),radial-gradient(circle_at_70%_70%,rgba(86,28,49,0.34),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,242,244,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,242,244,0.06)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.16)_55%,rgba(0,0,0,0.26))]" />
      <FloatingPetals />
      <div className="relative z-10">{children}</div>
    </div>
  );
}