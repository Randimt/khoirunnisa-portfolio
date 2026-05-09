"use client";

import { motion } from "framer-motion";
import { Activity, Cpu, HeartPulse } from "lucide-react";

const footerStats = [
  { label: "System", value: "Biomedical Portfolio", icon: <HeartPulse className="h-4 w-4" /> },
  { label: "Focus", value: "Intelligent Healthcare", icon: <Cpu className="h-4 w-4" /> },
  { label: "Signal", value: "Future Medical Tech", icon: <Activity className="h-4 w-4" /> },
];

export function SiteFooter() {
  return (
    <footer className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#07111F]/72 p-6 shadow-[0_0_55px_rgba(56,189,248,0.10)] backdrop-blur-xl"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(96,165,250,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.055)_1px,transparent_1px)] bg-[size:32px_32px] opacity-45" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/65 to-transparent" />
        <motion.div
          animate={{ opacity: [0.18, 0.38, 0.18], scale: [1, 1.08, 1] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/2 top-[-5rem] h-40 w-40 -translate-x-1/2 rounded-full bg-[#38BDF8]/16 blur-3xl"
        />

        <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-2xl border border-[#38BDF8]/25 bg-[#38BDF8]/10 text-sm font-black text-[#38BDF8] shadow-[0_0_28px_rgba(56,189,248,0.18)]">
              K
            </div>
            <p className="font-futuristic text-sm font-semibold uppercase tracking-[0.2em] text-[#E2E8F0]">
              Khoirunnisa / Biomedical Interface Portfolio
            </p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#E2E8F0]/48">
              Modern biomedical engineering portfolio for intelligent healthcare systems, instrumentation, signal processing, and future medical technology.
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-3 md:min-w-[34rem]">
            {footerStats.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -3, scale: 1.02 }}
                className="rounded-2xl border border-white/10 bg-[#0F172A]/62 p-3 text-left transition hover:border-[#38BDF8]/35 hover:bg-[#0F172A]/88"
              >
                <div className="mb-2 text-[#38BDF8]">{item.icon}</div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#60A5FA]/65">{item.label}</p>
                <p className="mt-1 text-xs text-[#E2E8F0]/72">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative mt-6 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs text-[#E2E8F0]/38 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Khoirunnisa. Built with Next.js, TailwindCSS, shadcn/ui, and Framer Motion.</span>
          <span>Optimized for responsive biomedical interface presentation.</span>
        </div>
      </motion.div>
    </footer>
  );
}
