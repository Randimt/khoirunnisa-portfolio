import { Activity } from "lucide-react";

export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center overflow-hidden bg-[#07111F] text-[#E2E8F0]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_34%),linear-gradient(to_right,rgba(96,165,250,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.06)_1px,transparent_1px)] bg-[size:auto,42px_42px,42px_42px]" />
      <div className="relative rounded-2xl border border-white/10 bg-[#0F172A]/70 p-8 text-center shadow-[0_0_60px_rgba(56,189,248,0.16)] backdrop-blur-xl">
        <div className="mx-auto grid h-16 w-16 animate-pulse place-items-center rounded-2xl border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8] shadow-[0_0_35px_rgba(56,189,248,0.22)]">
          <Activity className="h-7 w-7" />
        </div>
        <p className="mt-5 font-futuristic text-xs uppercase tracking-[0.28em] text-[#38BDF8]">
          Initializing biomedical interface
        </p>
        <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-2/3 animate-pulse rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#38BDF8] to-[#60A5FA] shadow-[0_0_18px_rgba(56,189,248,0.6)]" />
        </div>
      </div>
    </main>
  );
}
