import { motion } from "framer-motion";
import { ShieldCheck, Zap, LineChart } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section className="pt-24 pb-24 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        style={{
          background:
            "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(99,102,241,0.25), transparent 70%)",
        }}
        onMouseMove={(e) => {
          const x = e.clientX + "px";
          const y = e.clientY + "px";
          e.currentTarget.style.setProperty("--x", x);
          e.currentTarget.style.setProperty("--y", y);
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 -top-40 flex justify-center">
        <div className="h-72 w-[600px] rounded-full bg-linear-to-b from-indigo-500/40 via-sky-500/10 to-transparent blur-3xl" />
      </div>

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 6, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-6 top-24 md:left-10 md:top-32"
      >
        <LineChart className="h-8 w-8 md:h-10 md:w-10 text-indigo-400/70" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-6 top-44 md:right-10 md:top-60"
      >
        <ShieldCheck className="h-8 w-8 md:h-10 md:w-10 text-emerald-400/70" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 -translate-x-1/2 bottom-16 md:bottom-20"
      >
        <Zap className="h-8 w-8 md:h-10 md:w-10 text-sky-400/70" />
      </motion.div>

      <div className="relative text-center space-y-6">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-[10px] uppercase tracking-[0.3em] text-gray-400"
        >
          Secure Web3 Infrastructure
        </motion.p>

        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.2]"
        >
          Revolutionize Your Transactions
          <br />
          <span className="text-gray-200">
            With Secure Blockchain Solutions
          </span>
        </motion.h1>

        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-2xl mx-auto text-xs md:text-sm text-gray-400"
        >
          Webtrix helps you manage, analyze, and automate on-chain activity with
          enterprise-grade security, blazing-fast analytics, and multi-currency
          support.
        </motion.p>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <NavLink to="*">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(99,102,241,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full text-xs px-6 py-2 bg-white text-black font-medium shadow-lg shadow-indigo-500/20 transition"
            >
              Start Free Trial
            </motion.button>
          </NavLink>

          <NavLink to="*">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.15)",
                boxShadow: "0 0 35px rgba(255,255,255,0.08)",
              }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full text-xs px-5 py-2 border border-white/15 bg-white/5 text-white transition backdrop-blur-md"
            >
              Schedule a Demo
            </motion.button>
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
}
