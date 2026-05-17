"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Brain,
  Briefcase,
  CalendarDays,
  Code2,
  Cpu,
  GraduationCap,
  HeartPulse,
  Mail,
  Microscope,
  Moon,
  Settings2,
  ShieldCheck,
  Sparkles,
  Sun,
  CheckCircle2,
  Stethoscope,
} from "lucide-react";

import { SiteFooter } from "@/components/portfolio/site-footer";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const expertise = [
  "Biomedical Instrumentation",
  "IoT Systems",
  "Machine Learning",
  "Signal Processing",
  "Microcontroller Development",
  "Microprocessor Interfacing",
  "Intelligent Biomedical System",
  "Technical Documentation",
];

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 className="h-5 w-5" />,
    description: "Programming foundations for biomedical systems, data workflows, and embedded development.",
    level: 82,
    skills: ["Python", "C", "Arduino IDE"],
  },
  {
    title: "Biomedical Systems",
    icon: <HeartPulse className="h-5 w-5" />,
    description: "Biomedical engineering knowledge for intelligent healthcare systems and clinical technology workflows.",
    level: 88,
    skills: ["Biomedical Instrumentation", "Machine Learning", "Intelligent Biomedical System"],
  },
  {
    title: "Instrumentation",
    icon: <Cpu className="h-5 w-5" />,
    description: "Hardware-oriented development across microcontrollers, sensors, actuators, and lab instrumentation.",
    level: 86,
    skills: ["Microcontroller Development", "Sensors & Actuators", "Microprocessor Interfacing"],
  },
  {
    title: "IoT & Signal Processing",
    icon: <Settings2 className="h-5 w-5" />,
    description: "Connected biomedical systems with signal acquisition, processing, analysis, and documentation workflows.",
    level: 84,
    skills: ["IoT Systems", "Signal Processing", "Google Sheets", "Microsoft Office"],
  },
];

const focusAreas = [
  {
    icon: <HeartPulse className="h-5 w-5" />,
    title: "Intelligent Healthcare Systems",
    text: "Exploring data-driven biomedical systems for smarter healthcare workflows.",
  },
  {
    icon: <Stethoscope className="h-5 w-5" />,
    title: "Biomedical Instrumentation",
    text: "Working across sensors, microcontrollers, signal acquisition, and device-oriented systems.",
  },
  {
    icon: <Microscope className="h-5 w-5" />,
    title: "Technology-Driven Innovation",
    text: "Combining IoT, machine learning, and analytical thinking to support biomedical solutions.",
  },
];

const experiences = [
  {
    period: "Laboratory Assistant",
    role: "Assistant Laboratory – Microprocessor Interfacing",
    place: "Telkom University",
    description:
      "Supported hands-on learning in microprocessor and microcontroller-based systems while handling administrative laboratory responsibilities.",
    points: [
      "Taught microprocessor, microcontroller, sensors, and actuators",
      "Guided serial communication and IoT practical sessions",
      "Managed administrative laboratory responsibilities",
    ],
  },
  {
    period: "Laboratory Assistant",
    role: "Assistant Laboratory – Intelligent Biomedical System",
    place: "Telkom University",
    description:
      "Assisted students in intelligent biomedical system topics and led administrative coordination for the laboratory division.",
    points: [
      "Taught Python programming, OOP, ECG, and EEG signal processing",
      "Guided image processing and postural balance analysis topics",
      "Served as Head of Administration Division",
    ],
  },
  {
    period: "Internship",
    role: "Research & Development Internship",
    place: "C-TECH LABS EDWAR TECHNOLOGY",
    description:
      "Contributed to research and development workflows involving Brain ECVT analysis, calibration, and clinical operational activities.",
    points: [
      "Worked on 2D to 3D brain image reconstruction for Brain ECVT analysis",
      "Supported Brain ECVT calibration processes",
      "Provided clinical operational support",
    ],
  },
  {
    period: "Internship",
    role: "Electromedical Engineering Internship",
    place: "Ummi Group",
    description:
      "Assisted electromedical engineering activities in a clinical environment, supporting medical device installation, calibration, maintenance, documentation, and operational safety.",
    points: [
      "Assisted with installation, calibration, and basic maintenance of medical devices in the clinical environment",
      "Supported senior technicians in troubleshooting equipment and ensuring proper device performance",
      "Documented service activities, maintenance results, and device usage records according to standard procedures",
      "Collaborated with medical staff to ensure equipment safety, reliability, and compliance with hospital regulations",
    ],
  },
];

type Project = {
  title: string;
  description: string;
  tag: string;
  imageLabel: string;
  images?: string[];
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Medical Equipment Maintenance Tracking System",
    description:
      "Developed a web-based medical equipment maintenance tracking system using Google Apps Script and Google Sheets integration. The system enables barcode-based equipment identification, maintenance history input, and digital record management to improve efficiency and traceability of healthcare assets.",
    tag: "Featured Project",
    imageLabel: "Healthcare Asset Tracking",
    tech: ["Google Apps Script", "Google Sheets", "Barcode System", "Web Tracking"],
    link: "https://script.google.com/macros/s/AKfycbz-aqWCsn2YSYBOKpq4gENWQcmrl9KG8qgOqs8-eCG6gP5RS7JEiszkr-FFAon6Ijsq3g/exec?sn=TD-001-RT",
  },
  {
    title: "IoT Heart Rate Monitoring",
    description:
      "IoT-based heart rate monitoring system for exercise load control, enabling physiological monitoring through connected sensing and data-driven tracking.",
    tag: "IoT Healthcare",
    imageLabel: "Heart Rate Project Image",
    images: ["/images/projects/heart-rate-1.jpg", "/images/projects/heart-rate-2.jpg"],
    tech: ["IoT", "Heart Rate Sensor", "Exercise Load", "Monitoring System"],
  },
  {
    title: "Extra Finger Prosthetic",
    description:
      "Arduino Uno-based extra finger prototype designed for syndactyly patients, exploring assistive biomedical device development and microcontroller-based control.",
    tag: "Assistive Device",
    imageLabel: "Prosthetic Project Image",
    images: ["/images/projects/extra-finger-1.jpg"],
    tech: ["Arduino Uno", "Prosthetic Prototype", "Assistive Tech", "Microcontroller"],
  },
  {
    title: "Biomedical Audio Signal Analysis",
    description:
      "STFT-based fetal doppler audio signal analysis project for cat fetus prediction, applying time-frequency analysis to biomedical audio data.",
    tag: "Signal Analysis",
    imageLabel: "Audio Analysis Image",
    images: ["/images/projects/audio-doppler-1.jpg"],
    tech: ["STFT", "Fetal Doppler", "Audio Signal", "Prediction Analysis"],
  },
  {
    title: "2D→3D ECVT Reconstruction",
    description:
      "3D volume reconstruction from 2D Electrical Capacitance Volume Tomography projections for early detection of changes in brain capacitance distribution.",
    tag: "Brain ECVT",
    imageLabel: "2D to 3D ECVT Reconstruction",
    images: ["/images/projects/ecvt-1.jpg", "/images/projects/ecvt-2.jpg", "/images/projects/ecvt-3.jpg"],
    tech: ["Electrical Capacitance Volume Tomography", "2D-to-3D Reconstruction", "Image Processing", "Brain Analysis"],
  },
  {
    title: "EMG Signal Acquisition System",
    description:
      "Arduino-based EMG signal acquisition system designed for supination-pronation movement recognition through biomedical signal capture and analysis.",
    tag: "Biomedical Signal",
    imageLabel: "EMG Project Image",
    tech: ["Arduino", "EMG Signal", "Movement Recognition", "Signal Acquisition"],
  },
];

const stats = [
  { label: "University", value: "Telkom" },
  { label: "Focus", value: "IoT + ML" },
  { label: "Strength", value: "Systems" },
];

const navLinks = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observers = navLinks.map((link) => {
      const section = document.getElementById(link.id);
      if (!section) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(link.id);
          }
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 },
      );

      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <main
      onMouseMove={(event) => setMouse({ x: event.clientX, y: event.clientY })}
      style={
        {
          "--mouse-x": `${mouse.x}px`,
          "--mouse-y": `${mouse.y}px`,
        } as React.CSSProperties
      }
      className="relative min-h-screen overflow-hidden bg-[#07111F] text-[#E2E8F0] selection:bg-[#1D4ED8] selection:text-white"
    >
      <Background />
      <div className="pointer-events-none fixed inset-0 z-10 bg-[radial-gradient(520px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(56,189,248,0.16),rgba(29,78,216,0.08)_32%,transparent_62%)]" />

      <section className="relative z-20 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <HeroAtmosphere />
        <nav className="sticky top-5 z-50 mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#07111F]/42 px-4 py-3 shadow-[0_0_42px_rgba(56,189,248,0.14)] backdrop-blur-2xl transition duration-500">
          <a href="#home" className="flex items-center gap-3 font-semibold tracking-tight" aria-label="Scroll to top">
            <span className="grid h-9 w-9 place-items-center rounded-2xl border border-[#38BDF8]/35 bg-[#38BDF8]/12 text-sm font-black text-[#38BDF8] shadow-[0_0_28px_rgba(56,189,248,0.24)]">
              K
            </span>
            <span className="font-futuristic text-sm uppercase tracking-[0.18em] text-[#E2E8F0]">Khoirunnisa</span>
          </a>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-1 rounded-2xl border border-white/10 bg-[#0F172A]/42 p-1 text-sm text-[#E2E8F0]/62 backdrop-blur-xl md:flex">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative rounded-xl px-3 py-2 transition duration-300 hover:text-[#38BDF8] ${
                      isActive ? "text-[#38BDF8]" : "text-[#E2E8F0]/62"
                    }`}
                    aria-label={`Scroll to ${link.label} section`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-nav-indicator"
                        className="absolute inset-0 rounded-xl border border-[#38BDF8]/25 bg-[#38BDF8]/10 shadow-[0_0_20px_rgba(56,189,248,0.18)]"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                );
              })}
            </div>
            <ThemeToggle />
          </div>
        </nav>

        <div
          id="home"
          className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
              <Badge className="rounded-full border-white/10 bg-[#1D4ED8]/55 dark:bg-[#60A5FA]/22 px-4 py-1.5 text-[#60A5FA] hover:bg-[#1D4ED8]/70">
                <Sparkles className="mr-1.5 h-3.5 w-3.5" /> Biomedical Engineering Graduate
              </Badge>
            </motion.div>

            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="space-y-5">
              <h1 className="max-w-5xl font-futuristic text-5xl font-semibold tracking-[-0.055em] text-[#E2E8F0] drop-shadow-[0_0_28px_rgba(56,189,248,0.32)] sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="bg-gradient-to-r from-[#E2E8F0] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent">
                  Khoirunnisa
                </span>
              </h1>
              <div className="space-y-3">
                <p className="font-futuristic text-xl font-medium text-[#60A5FA] drop-shadow-[0_0_18px_rgba(96,165,250,0.35)] md:text-2xl">
                  Biomedical Engineering Graduate
                </p>
                <p className="max-w-2xl text-base leading-8 text-[#E2E8F0]/68 sm:text-lg md:text-xl">
                  Focused on Intelligent Healthcare Systems, Biomedical
                  Instrumentation, IoT Technology, and Signal Processing.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#38BDF8] px-6 text-sm font-semibold text-white shadow-lg shadow-[#38BDF8]/25 transition hover:-translate-y-0.5 hover:bg-[#60A5FA]"
              >
                View Portfolio <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-[#0F172A]/65 dark:bg-[#0F172A]/10 px-6 text-sm font-semibold text-[#60A5FA] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]/50 dark:bg-[#60A5FA]/22"
              >
                Download CV
              </a>
            </motion.div>

            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
              <HeroTelemetry />
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="grid max-w-2xl grid-cols-3 gap-3"
            >
              {stats.map((stat) => (
                <Stat key={stat.label} {...stat} />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-[#38BDF8]/15 blur-3xl" />
            <Card className="relative overflow-hidden rounded-2xl border-[#1D4ED8]/80 dark:border-white/10 bg-[#0F172A]/60 dark:bg-[#0F172A]/8 text-[#E2E8F0] dark:text-[#E2E8F0] shadow-2xl shadow-[#38BDF8]/10 backdrop-blur-2xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent" />
              <CardHeader className="space-y-4">
                <CardDescription className="text-[#E2E8F0] dark:text-[#E2E8F0]/55">Holographic Profile Scan</CardDescription>
                <div className="overflow-hidden holographic-surface rounded-2xl border border-white/10 bg-gradient-to-br from-[#1D4ED8]/35 via-[#0F172A]/80 to-[#07111F] p-4 shadow-inner shadow-[#38BDF8]/10">
                  <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A]/70 text-center backdrop-blur-xl">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(96,165,250,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.08)_1px,transparent_1px)] bg-[size:26px_26px]" />
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                      className="absolute h-56 w-56 rounded-full border border-[#38BDF8]/20 shadow-[0_0_55px_rgba(56,189,248,0.15)]"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.08, 1], opacity: [0.42, 0.72, 0.42] }}
                      transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute h-32 w-32 rounded-full border border-[#60A5FA]/30"
                    />
                    <div className="relative w-full max-w-[18rem] px-6 pb-14 pt-8">
                      <div className="relative mx-auto aspect-[423/591] w-full overflow-hidden rounded-[1.75rem] border border-[#38BDF8]/35 bg-[#07111F] shadow-[0_0_55px_rgba(56,189,248,0.24)]">
                        <Image
                          src="/images/khoirunnisa-profile.jpg"
                          alt="Khoirunnisa profile portrait"
                          fill
                          priority
                          sizes="(max-width: 768px) 70vw, 320px"
                          className="object-cover object-center opacity-90 saturate-[0.95] contrast-[1.04] transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/55 via-transparent to-[#38BDF8]/10" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(56,189,248,0.08)_50%,transparent_100%)] bg-[size:100%_18px] opacity-40" />
                      </div>
                      <p className="mt-5 text-sm font-medium uppercase tracking-[0.24em] text-[#38BDF8]">Holographic Bio Scan</p>
                      <p className="mt-1 text-xs text-[#E2E8F0]/45">Profile image integrated</p>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <MiniECG />
                    </div>
                  </div>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <CardTitle className="font-futuristic text-3xl font-semibold tracking-tight">
                    AI Biomedical Interface
                  </CardTitle>
                  <Badge className="rounded-full border-white/10 bg-[#1D4ED8]/50 dark:bg-[#60A5FA]/22 text-[#60A5FA] hover:bg-[#1D4ED8]/60 dark:bg-[#60A5FA]/28">
                    Telkom University
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ECGWaveform />
                <div className="grid gap-3">
                  {focusAreas.map((area) => (
                    <InfoRow key={area.title} {...area} />
                  ))}
                </div>
                <div className="h-px bg-[#1D4ED8]/80" />
                <div className="flex flex-wrap gap-2">
                  {expertise.slice(0, 6).map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="rounded-full border-[#38BDF8]/15 bg-[#0F172A]/70 dark:bg-[#0F172A]/10 text-[#E2E8F0] dark:text-[#E2E8F0]/70 hover:bg-[#1D4ED8]/60 dark:bg-[#60A5FA]/28"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative z-20 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F172A]/36 p-4 shadow-[0_0_70px_rgba(56,189,248,0.10)] backdrop-blur-xl md:p-6"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(96,165,250,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.08)_1px,transparent_1px)] bg-[size:34px_34px] opacity-35" />
          <motion.div
            animate={{ opacity: [0.18, 0.42, 0.18], x: [0, 26, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute right-[-5rem] top-[-5rem] h-56 w-56 rounded-full bg-[#38BDF8]/18 blur-3xl"
          />
          <div className="relative grid gap-5 lg:grid-cols-[1fr_1.05fr]">
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-[#38BDF8]/18 bg-[#07111F]/64 p-6 shadow-[0_0_50px_rgba(56,189,248,0.10)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#38BDF8]/50 hover:shadow-[0_0_70px_rgba(56,189,248,0.18)] md:p-10">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/80 to-transparent" />
                <div className="absolute right-6 top-6 h-20 w-20 rounded-full border border-[#38BDF8]/15 shadow-[0_0_40px_rgba(56,189,248,0.12)]" />
                <SectionBadge>About / Biomedical Profile</SectionBadge>
                <h2 className="mt-5 font-futuristic text-4xl font-semibold tracking-[-0.04em] text-[#E2E8F0] drop-shadow-[0_0_24px_rgba(56,189,248,0.18)] md:text-5xl">
                  Intelligent healthcare engineering with biomedical systems precision.
                </h2>
                <p className="mt-6 text-base leading-8 text-[#E2E8F0]/68 md:text-lg">
                  Khoirunnisa is a Biomedical Engineering graduate from Telkom
                  University with experience in biomedical instrumentation, IoT
                  systems, machine learning, signal processing, and
                  microcontroller-based development.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <ValuePill icon={<Microscope className="h-4 w-4" />} label="Instrumentation" />
                  <ValuePill icon={<Activity className="h-4 w-4" />} label="Signal Systems" />
                  <ValuePill icon={<Brain className="h-4 w-4" />} label="AI Healthcare" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.12 }} className="grid gap-5">
              <div className="group relative overflow-hidden rounded-2xl border border-[#38BDF8]/18 bg-[#07111F]/64 p-6 shadow-[0_0_50px_rgba(56,189,248,0.10)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#38BDF8]/50 hover:shadow-[0_0_70px_rgba(56,189,248,0.18)] md:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_34%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-[#38BDF8]/70">Core System</p>
                    <h3 className="mt-2 font-futuristic text-2xl font-semibold text-[#E2E8F0]">
                      Analytical, collaborative, and documentation-driven
                    </h3>
                  </div>
                  <IconBubble>
                    <Stethoscope className="h-5 w-5" />
                  </IconBubble>
                </div>
                <p className="relative mt-5 leading-7 text-[#E2E8F0]/65">
                  She has experience as a laboratory assistant in Microprocessor
                  Interfacing and Intelligent Biomedical System, with strong
                  analytical thinking, teamwork, troubleshooting, and documentation
                  skills.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-[#38BDF8]/18 bg-[#07111F]/64 p-6 shadow-[0_0_50px_rgba(56,189,248,0.10)] backdrop-blur-xl md:p-8">
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#38BDF8]/70 to-transparent" />
                <p className="text-sm uppercase tracking-[0.28em] text-[#38BDF8]/70">Operating Values</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <ValuePill icon={<ShieldCheck className="h-4 w-4" />} label="Troubleshooting" />
                  <ValuePill icon={<Activity className="h-4 w-4" />} label="Teamwork" />
                  <ValuePill icon={<Brain className="h-4 w-4" />} label="Documentation" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>


      <section id="experience" className="relative z-20 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
        >
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <SectionBadge>Experience</SectionBadge>
              <h2 className="mt-5 font-futuristic text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Medical system timeline
              </h2>
            </motion.div>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="max-w-xl text-sm leading-7 text-[#E2E8F0] dark:text-[#E2E8F0]/55 md:text-base"
            >
              Professional experience across biomedical laboratories, intelligent healthcare systems, research development, and clinical operational support.
            </motion.p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F172A]/34 p-4 shadow-[0_0_70px_rgba(56,189,248,0.10)] backdrop-blur-xl md:p-6">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(96,165,250,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.06)_1px,transparent_1px)] bg-[size:38px_38px] opacity-40" />
            <div className="absolute left-7 top-10 hidden h-[calc(100%-5rem)] w-px bg-[#1D4ED8]/30 md:block" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="absolute left-7 top-10 hidden h-[calc(100%-5rem)] w-px origin-top bg-gradient-to-b from-[#38BDF8] via-[#1D4ED8] to-transparent shadow-[0_0_24px_rgba(56,189,248,0.55)] md:block"
            />
            <div className="relative grid gap-6">
              {experiences.map((item, index) => (
                <motion.div
                  key={item.role}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative md:pl-16"
                >
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.12 }}
                    className="absolute left-0 top-7 hidden h-14 w-14 place-items-center rounded-2xl border border-[#38BDF8]/35 bg-[#07111F]/85 text-[#38BDF8] shadow-[0_0_34px_rgba(56,189,248,0.28)] backdrop-blur-xl md:grid"
                  >
                    <div className="absolute h-14 w-14 animate-ping rounded-2xl border border-[#38BDF8]/20" />
                    <CalendarDays className="relative h-5 w-5" />
                  </motion.div>

                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#07111F]/62 p-6 shadow-[0_0_45px_rgba(56,189,248,0.10)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#38BDF8]/55 hover:bg-[#0F172A]/80 hover:shadow-[0_0_70px_rgba(56,189,248,0.20)] md:p-8">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_36%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/70 to-transparent" />
                    <div className="relative flex flex-col justify-between gap-4 md:flex-row md:items-start">
                      <div>
                        <Badge className="rounded-full border-[#38BDF8]/20 bg-[#1D4ED8]/25 text-[#38BDF8] hover:bg-[#1D4ED8]/35">
                          {item.period}
                        </Badge>
                        <h3 className="mt-4 font-futuristic text-2xl font-semibold tracking-tight text-[#E2E8F0]">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-[#60A5FA]">{item.place}</p>
                      </div>
                      <IconBubble>
                        <Briefcase className="h-5 w-5" />
                      </IconBubble>
                    </div>
                    <p className="relative mt-5 leading-7 text-[#E2E8F0]/65">{item.description}</p>
                    <div className="relative mt-5 grid gap-2 sm:grid-cols-3">
                      {item.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0F172A]/65 px-4 py-3 text-sm text-[#E2E8F0]/70 transition hover:border-[#38BDF8]/30 hover:bg-[#0F172A]/90"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#38BDF8]" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="skills" className="relative z-20 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={stagger}>
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <SectionBadge>Skills</SectionBadge>
              <h2 className="mt-5 font-futuristic text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Core expertise</h2>
            </motion.div>
            <motion.p variants={fadeUp} transition={{ duration: 0.5, delay: 0.06 }} className="max-w-xl text-sm leading-7 text-[#E2E8F0] dark:text-[#E2E8F0]/55 md:text-base">
              Futuristic system panels with progress indicators, circular meters, and glowing technology badges across biomedical engineering competencies.
            </motion.p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <SkillCategoryCard category={category} index={index} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="projects" className="relative z-20 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <SectionBadge>Featured Projects</SectionBadge>
            <h2 className="mt-5 font-futuristic text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Featured projects</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#E2E8F0] dark:text-[#E2E8F0]/55 md:text-base">
            A focused showcase of healthcare technology, biomedical instrumentation, and digital systems projects with practical impact.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-20 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F172A]/40 p-4 shadow-[0_0_80px_rgba(56,189,248,0.12)] backdrop-blur-2xl md:p-6"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(96,165,250,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.06)_1px,transparent_1px)] bg-[size:36px_36px] opacity-40" />
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.36, 0.18] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute right-[-5rem] top-[-5rem] h-64 w-64 rounded-full bg-[#38BDF8]/18 blur-3xl"
          />
          <div className="relative grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="rounded-2xl border border-[#38BDF8]/18 bg-[#07111F]/66 p-6 shadow-[0_0_55px_rgba(56,189,248,0.10)] backdrop-blur-xl md:p-10">
              <SectionBadge>Contact / Signal Link</SectionBadge>
              <h2 className="mt-5 max-w-3xl font-futuristic text-4xl font-semibold tracking-[-0.04em] text-[#E2E8F0] drop-shadow-[0_0_24px_rgba(56,189,248,0.18)] md:text-5xl">
                Let’s connect around healthcare technology and biomedical innovation.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-[#E2E8F0]/58">
                Connect through email or professional network links for healthcare technology, biomedical instrumentation, and collaboration opportunities.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <ContactButton icon={<Mail className="h-4 w-4" />} label="Email Me" href="https://mail.google.com/mail/?view=cm&fs=1&to=khoiirunnisaa2@gmail.com" />
                <ContactButton icon={<Briefcase className="h-4 w-4" />} label="LinkedIn" href="https://www.linkedin.com/in/khoirun-nisa-0ab234221/" />
                <ContactButton icon={<GraduationCap className="h-4 w-4" />} label="Download CV" href="/documents/CV_KHOIRUNNISA.docx" download />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-[#38BDF8]/18 bg-[#07111F]/66 p-6 shadow-[0_0_55px_rgba(56,189,248,0.10)] backdrop-blur-xl md:p-8">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/70 to-transparent" />
              <p className="font-futuristic text-xs uppercase tracking-[0.28em] text-[#38BDF8]/70">Communication Console</p>
              <div className="mt-6 space-y-4">
                {[
                  ["Status", "Open to opportunities"],
                  ["Focus", "Biomedical systems"],
                  ["Mode", "Research & development"],
                ].map(([label, value]) => (
                  <motion.div
                    key={label}
                    whileHover={{ x: 6, scale: 1.01 }}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0F172A]/65 px-4 py-3 transition hover:border-[#38BDF8]/35 hover:bg-[#0F172A]/90"
                  >
                    <span className="text-xs uppercase tracking-[0.22em] text-[#60A5FA]/65">{label}</span>
                    <span className="text-sm text-[#E2E8F0]/70">{value}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6">
                <MiniECG />
              </div>
            </div>
          </div>
        </motion.div>

        <SiteFooter />
      </section>
    </main>
  );
}

function ContactButton({ icon, label, href, download = false }: { icon: React.ReactNode; label: string; href: string; download?: boolean }) {
  const isExternal = href.startsWith("http");

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      download={download ? true : undefined}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-[#38BDF8]/25 bg-[#1D4ED8]/24 px-5 text-sm font-semibold text-[#E2E8F0] shadow-[0_0_28px_rgba(56,189,248,0.14)] transition hover:border-[#38BDF8]/60 hover:bg-[#1D4ED8]/36 hover:shadow-[0_0_42px_rgba(56,189,248,0.24)]"
    >
      <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/14 to-transparent transition duration-700 group-hover:translate-x-[120%]" />
      <span className="relative mr-2 grid h-7 w-7 place-items-center rounded-full bg-[#38BDF8]/12 text-[#38BDF8] shadow-[0_0_18px_rgba(56,189,248,0.16)]">
        {icon}
      </span>
      <span className="relative">{label}</span>
    </motion.a>
  );
}


function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotateX: -6 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      whileHover={{ y: -8, scale: 1.015 }}
      viewport={{ once: true }}
      transition={{ duration: 0.48, delay: index * 0.08 }}
      className=""
    >
      <Card className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#07111F]/68 text-[#E2E8F0] shadow-[0_0_45px_rgba(56,189,248,0.10)] backdrop-blur-xl transition duration-500 hover:border-[#38BDF8]/60 hover:bg-[#0F172A]/86 hover:shadow-[0_0_80px_rgba(56,189,248,0.24)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(56,189,248,0.12),transparent_30%)] opacity-0 transition duration-500 group-hover:opacity-100" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/70 to-transparent opacity-70" />
        <ProjectVisual label={project.imageLabel} images={project.images} index={index} />

        <CardHeader className="relative">
          <div className="mb-3 flex items-center justify-between gap-4">
            <Badge className="rounded-full border-[#38BDF8]/20 bg-[#1D4ED8]/24 text-[#38BDF8] shadow-[0_0_18px_rgba(56,189,248,0.10)] hover:bg-[#1D4ED8]/34">
              {project.tag}
            </Badge>

          </div>
          <CardTitle className="font-futuristic text-2xl font-semibold tracking-tight text-[#E2E8F0] md:text-3xl">
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="relative space-y-6">
          <p className="leading-7 text-[#E2E8F0]/65">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 + techIndex * 0.04 }}
                whileHover={{ y: -2, scale: 1.04 }}
              >
                <Badge
                  variant="secondary"
                  className="rounded-full border-[#38BDF8]/15 bg-[#0F172A]/80 px-3 py-1 text-[#E2E8F0]/72 shadow-[0_0_16px_rgba(56,189,248,0.06)] transition hover:border-[#38BDF8]/45 hover:bg-[#1D4ED8]/30 hover:text-[#E2E8F0]"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#1D4ED8] px-5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(56,189,248,0.24)] transition hover:-translate-y-0.5 hover:bg-[#38BDF8]"
            >
              Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ProjectVisual({ label, images, index }: { label: string; images?: string[]; index: number }) {
  const bars = [42, 64, 38, 78, 54, 88, 48, 70];
  const galleryImages = images?.slice(0, 3) ?? [];

  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#1D4ED8]/24 via-[#0F172A]/82 to-[#07111F] p-4">
      <div className="absolute right-6 top-5 h-28 w-28 rounded-full bg-[#38BDF8]/18 blur-2xl transition duration-500 group-hover:scale-125" />
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#07111F]/72 p-3 shadow-inner shadow-[#38BDF8]/10 backdrop-blur-xl sm:p-4">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(96,165,250,0.075)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.075)_1px,transparent_1px)] bg-[size:24px_24px]" />

        {galleryImages.length > 0 ? (
          <ProjectImageGallery images={galleryImages} label={label} />
        ) : (
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-futuristic text-[10px] uppercase tracking-[0.24em] text-[#38BDF8]/75">{label}</p>
                <p className="mt-1 text-xs text-[#E2E8F0]/42">Biomedical dashboard placeholder</p>
              </div>
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-[#38BDF8]/25 bg-[#38BDF8]/10 text-[#38BDF8] shadow-[0_0_22px_rgba(56,189,248,0.16)]">
                <Activity className="h-5 w-5" />
              </div>
            </div>

            {index % 3 === 0 && <WaveformGraphic />}
            {index % 3 === 1 && <BiomedicalChart bars={bars} />}
            {index % 3 === 2 && <SensorVisualization />}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectImageGallery({ images, label }: { images: string[]; label: string }) {
  const layoutClass =
    images.length === 1
      ? "grid-cols-1"
      : images.length === 2
        ? "grid-cols-2"
        : "grid-cols-2 grid-rows-2";

  return (
    <div className={`relative grid h-full gap-2 ${layoutClass}`}>
      {images.map((src, imageIndex) => (
        <div
          key={`${src}-${imageIndex}`}
          className={`group/image relative overflow-hidden rounded-xl border border-white/10 bg-[#0F172A]/70 ${images.length === 3 && imageIndex === 0 ? "row-span-2" : ""}`}
        >
          <Image
            src={src}
            alt={`${label} project image ${imageIndex + 1}`}
            fill
            sizes="(max-width: 768px) 90vw, 520px"
            className="object-cover transition duration-700 group-hover/image:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/72 via-transparent to-[#1D4ED8]/10" />
          <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-[#07111F]/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#E2E8F0]/65 backdrop-blur-xl">
            {String(imageIndex + 1).padStart(2, "0")}
          </div>
        </div>
      ))}
      <div className="pointer-events-none absolute inset-x-3 top-3 flex items-center justify-between gap-3">
        <span className="rounded-full border border-[#38BDF8]/20 bg-[#07111F]/68 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#38BDF8]/80 backdrop-blur-xl">
          {label}
        </span>
        <span className="rounded-full border border-white/10 bg-[#07111F]/62 px-3 py-1 text-[10px] text-[#E2E8F0]/55 backdrop-blur-xl">
          {images.length} photo{images.length > 1 ? "s" : ""}
        </span>
      </div>
    </div>
  );
}

function WaveformGraphic() {
  return (
    <svg viewBox="0 0 420 90" className="h-24 w-full" aria-hidden="true">
      <path d="M0 50 H42 L52 28 L66 70 L82 16 L102 50 H150 L162 50 L172 36 L184 64 L202 24 L222 50 H280 L292 50 L304 32 L318 68 L336 18 L358 50 H420" fill="none" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ecg-path drop-shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
      <path d="M0 50 H420" stroke="rgba(96,165,250,0.16)" strokeDasharray="5 10" />
    </svg>
  );
}

function BiomedicalChart({ bars }: { bars: number[] }) {
  return (
    <div className="flex h-24 items-end gap-2">
      {bars.map((height, index) => (
        <motion.div
          key={index}
          initial={{ height: 12 }}
          whileInView={{ height }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: index * 0.05 }}
          className="flex-1 rounded-t-lg bg-gradient-to-t from-[#1D4ED8]/70 to-[#38BDF8] shadow-[0_0_16px_rgba(56,189,248,0.24)]"
        />
      ))}
    </div>
  );
}

function SensorVisualization() {
  return (
    <div className="grid h-24 grid-cols-3 gap-3">
      {["BPM", "EMG", "ECG"].map((label, index) => (
        <motion.div
          key={label}
          animate={{ opacity: [0.55, 1, 0.55], y: [0, -4, 0] }}
          transition={{ duration: 2.8 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
          className="grid place-items-center rounded-2xl border border-[#38BDF8]/18 bg-[#0F172A]/70 text-center"
        >
          <span className="font-futuristic text-xs text-[#38BDF8]">{label}</span>
          <span className="text-[10px] text-[#E2E8F0]/38">sensor</span>
        </motion.div>
      ))}
    </div>
  );
}


function HeroAtmosphere() {
  const heroParticles = Array.from({ length: 18 }, (_, index) => ({
    left: `${(index * 29) % 100}%`,
    top: `${18 + ((index * 41) % 62)}%`,
    delay: index * 0.16,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(96,165,250,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.08)_1px,transparent_1px)] bg-[size:42px_42px] opacity-45 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      <motion.div
        animate={{ y: [0, -18, 0], opacity: [0.18, 0.34, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-8 top-32 h-40 w-40 rounded-full bg-[#38BDF8]/18 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 24, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-8 top-40 h-56 w-56 rounded-full bg-[#1D4ED8]/20 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.22, 0.48, 0.22] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[58%] top-[22%] h-28 w-28 rounded-full bg-[#38BDF8]/28 blur-2xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ opacity: { duration: 0.8, delay: 0.35 }, y: { duration: 5.2, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute right-[12%] top-[30%] hidden rounded-2xl border border-white/10 bg-[#0F172A]/58 px-4 py-3 shadow-[0_0_34px_rgba(56,189,248,0.14)] backdrop-blur-xl lg:block"
      >
        <p className="font-futuristic text-[10px] uppercase tracking-[0.24em] text-[#38BDF8]/75">Neural Health UI</p>
        <p className="mt-1 text-xs text-[#E2E8F0]/55">Signal stream active</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{ opacity: { duration: 0.8, delay: 0.55 }, y: { duration: 6.4, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute left-[6%] bottom-[22%] hidden rounded-2xl border border-white/10 bg-[#0F172A]/55 px-4 py-3 shadow-[0_0_30px_rgba(29,78,216,0.20)] backdrop-blur-xl md:block"
      >
        <p className="font-futuristic text-[10px] uppercase tracking-[0.24em] text-[#60A5FA]/75">Bio Sensors</p>
        <p className="mt-1 text-xs text-[#E2E8F0]/55">Instrumentation ready</p>
      </motion.div>
      {heroParticles.map((particle, index) => (
        <motion.span
          key={index}
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.85, 0.1] }}
          transition={{ duration: 3.6 + (index % 5), delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
          className="absolute h-1 w-1 rounded-full bg-[#38BDF8] shadow-[0_0_14px_rgba(56,189,248,0.9)]"
          style={{ left: particle.left, top: particle.top }}
        />
      ))}
    </div>
  );
}

function HeroTelemetry() {
  return (
    <div className="holographic-surface max-w-2xl rounded-2xl border border-white/10 bg-[#0F172A]/62 p-4 shadow-[0_0_45px_rgba(56,189,248,0.10)] backdrop-blur-xl">
      <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.26em] text-[#38BDF8]/75">
        <span>Biomedical Instrumentation Interface</span>
        <span>AI Health Stack</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["ECG", "98%", "Signal quality"],
          ["IoT", "Live", "Sensor stream"],
          ["ML", "Ready", "Inference layer"],
        ].map(([label, value, note]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-[#07111F]/60 p-3">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#60A5FA]/70">{label}</p>
            <p className="mt-1 font-futuristic text-xl font-semibold text-[#E2E8F0] drop-shadow-[0_0_14px_rgba(56,189,248,0.24)]">{value}</p>
            <p className="mt-1 text-xs text-[#E2E8F0]/42">{note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniECG() {
  return (
    <svg viewBox="0 0 240 42" className="h-10 w-full" aria-hidden="true">
      <path d="M0 22 H32 L40 10 L50 32 L62 6 L76 22 H112 L120 22 L128 14 L138 29 L150 8 L164 22 H240" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ecg-path drop-shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
      <path d="M0 22 H240" stroke="rgba(96,165,250,0.18)" strokeDasharray="5 8" />
    </svg>
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-[#0F172A]/65 text-[#60A5FA] shadow-lg shadow-[#38BDF8]/10 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]/60 dark:bg-[#0F172A]/10 dark:text-[#1D4ED8] dark:hover:bg-[#0F172A]/15"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Sun className="h-4 w-4 scale-100 transition dark:scale-0" />
      <Moon className="absolute h-4 w-4 scale-0 transition dark:scale-100" />
    </button>
  );
}

function Background() {
  const particles = Array.from({ length: 34 }, (_, index) => ({
    left: `${(index * 37) % 100}%`,
    top: `${(index * 53) % 100}%`,
    delay: index * 0.11,
    duration: 4 + (index % 6),
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-0 bg-[#07111F]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(29,78,216,0.32),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.18),transparent_34%),linear-gradient(180deg,#07111F_0%,#0A1426_52%,#07111F_100%)]" />
      <motion.div
        animate={{ x: [0, 34, 0], y: [0, -24, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[-14rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#1D4ED8]/25 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -26, 0], y: [0, 22, 0], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#38BDF8]/18 blur-3xl"
      />
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        className="absolute left-[-8rem] top-1/3 h-[24rem] w-[24rem] rounded-full border border-[#38BDF8]/10 shadow-[0_0_80px_rgba(56,189,248,0.16)]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(96,165,250,0.075)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.075)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(56,189,248,0.05)_50%,transparent_100%)] bg-[size:240px_100%] opacity-40" />
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          animate={{ y: [0, -22, 0], opacity: [0.12, 0.8, 0.12], scale: [0.75, 1.2, 0.75] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
          className="absolute h-1 w-1 rounded-full bg-[#38BDF8] shadow-[0_0_16px_rgba(56,189,248,0.9)]"
          style={{ left: particle.left, top: particle.top }}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#07111F] to-transparent" />
    </div>
  );
}

function ECGWaveform() {
  return (
    <div className="holographic-surface overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A]/70 p-4 shadow-[0_0_45px_rgba(56,189,248,0.12)]">
      <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-[#38BDF8]/70">
        <span>ECG Live Signal</span>
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.9)]" /> Stable</span>
      </div>
      <svg viewBox="0 0 520 92" className="h-24 w-full text-[#38BDF8]" aria-hidden="true">
        <defs>
          <linearGradient id="ecgGradient" x1="0" x2="1">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
        </defs>
        <path d="M0 52 H52 L64 52 L72 30 L84 72 L98 16 L116 52 H176 L188 52 L198 38 L210 62 L224 24 L244 52 H318 L332 52 L342 34 L356 68 L372 20 L390 52 H520" fill="none" stroke="url(#ecgGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ecg-path drop-shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
        <path d="M0 52 H520" stroke="rgba(96,165,250,0.16)" strokeDasharray="6 10" />
      </svg>
    </div>
  );
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <Badge className="rounded-full border-white/10 bg-[#1D4ED8]/55 dark:bg-[#60A5FA]/22 text-[#60A5FA] hover:bg-[#1D4ED8]/70">
      {children}
    </Badge>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="holographic-surface rounded-2xl border border-white/10 dark:border-white/10 bg-[#0F172A]/58 dark:bg-[#0F172A]/8 p-4 shadow-lg shadow-[#38BDF8]/10 backdrop-blur-xl">
      <p className="text-[10px] uppercase tracking-[0.32em] text-[#60A5FA]/60">{label}</p>
      <p className="mt-2 text-lg font-semibold text-[#E2E8F0] dark:text-[#E2E8F0] sm:text-xl">{value}</p>
    </div>
  );
}

function InfoRow({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex gap-4 holographic-surface rounded-2xl border border-white/10 dark:border-white/10 bg-[#0F172A]/55 dark:bg-[#0F172A]/7 p-4 transition hover:bg-[#0F172A]/80 dark:bg-[#0F172A]/14">
      <IconBubble>{icon}</IconBubble>
      <div>
        <p className="font-medium text-[#E2E8F0] dark:text-[#E2E8F0]">{title}</p>
        <p className="mt-1 text-sm leading-6 text-[#E2E8F0] dark:text-[#E2E8F0]/55">{text}</p>
      </div>
    </div>
  );
}

function IconBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[#38BDF8]/15 bg-[#1D4ED8]/55 dark:bg-[#60A5FA]/22 text-[#60A5FA]">
      {children}
    </div>
  );
}

function ValuePill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 holographic-surface rounded-2xl border border-white/10 dark:border-white/10 bg-[#0F172A]/65 dark:bg-[#0F172A]/10 px-4 py-3 text-sm font-medium text-[#E2E8F0] dark:text-[#E2E8F0]/75">
      <span className="text-[#60A5FA]">{icon}</span>
      {label}
    </div>
  );
}

function SkillCategoryCard({
  category,
  index,
}: {
  category: {
    title: string;
    icon: React.ReactNode;
    description: string;
    level: number;
    skills: string[];
  };
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#07111F]/66 p-6 shadow-[0_0_45px_rgba(56,189,248,0.10)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#38BDF8]/55 hover:bg-[#0F172A]/86 hover:shadow-[0_0_75px_rgba(56,189,248,0.22)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_36%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/70 to-transparent" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <span className="text-xs font-medium text-[#60A5FA]/70">SYS-{number}</span>
          <h3 className="mt-4 font-futuristic text-2xl font-semibold tracking-tight text-[#E2E8F0]">
            {category.title}
          </h3>
        </div>
        <CircularSkillMeter value={category.level} icon={category.icon} />
      </div>

      <p className="relative mt-4 min-h-20 text-sm leading-6 text-[#E2E8F0]/58">
        {category.description}
      </p>

      <div className="relative mt-6 space-y-3">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-[#38BDF8]/70">
          <span>System proficiency</span>
          <span>{category.level}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-[#0F172A]/90 ring-1 ring-white/10">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${category.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.12, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#38BDF8] to-[#60A5FA] shadow-[0_0_22px_rgba(56,189,248,0.55)]"
          />
        </div>
      </div>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 + skillIndex * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Badge
              variant="secondary"
              className="rounded-full border-[#38BDF8]/18 bg-[#0F172A]/80 px-3 py-1 text-[#E2E8F0]/72 shadow-[0_0_16px_rgba(56,189,248,0.08)] transition hover:border-[#38BDF8]/45 hover:bg-[#1D4ED8]/30 hover:text-[#E2E8F0]"
            >
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CircularSkillMeter({ value, icon }: { value: number; icon: React.ReactNode }) {
  const circumference = 2 * Math.PI * 27;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative grid h-20 w-20 place-items-center">
      <svg viewBox="0 0 72 72" className="absolute h-20 w-20 -rotate-90" aria-hidden="true">
        <circle cx="36" cy="36" r="27" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
        <motion.circle
          cx="36"
          cy="36"
          r="27"
          fill="none"
          stroke="url(#skillMeterGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.15, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="skillMeterGradient" x1="0" x2="1">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="55%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
        </defs>
      </svg>
      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[#38BDF8]/25 bg-[#38BDF8]/10 text-[#38BDF8] shadow-[0_0_24px_rgba(56,189,248,0.16)]">
        {icon}
      </div>
    </div>
  );
}


