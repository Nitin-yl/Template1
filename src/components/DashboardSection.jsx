import { motion } from "framer-motion";
import { BarChart3, Coins } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function useCounter(target, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setValue(target);
        clearInterval(interval);
      } else setValue(Math.floor(start));
    }, 16);
  }, [target]);
  return value;
}

function LiquidWave({ color }) {
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 400 200"
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0"
    >
      <motion.path
        d="
          M0 80 
          Q 50 60 100 80 
          T 200 80 
          T 300 80 
          T 400 80 
          V200 
          H0 Z"
        fill={color}
        animate={{
          d: [
            "M0 80 Q50 60 100 80 T200 80 T300 80 T400 80 V200 H0 Z",
            "M0 70 Q50 90 100 70 T200 90 T300 70 T400 90 V200 H0 Z",
            "M0 80 Q50 60 100 80 T200 80 T300 80 T400 80 V200 H0 Z",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}

const Particles = ({ count = 10 }) =>
  [...Array(count)].map((_, i) => (
    <motion.div
      key={i}
      animate={{
        x: [0, Math.random() * 40 - 20, 0],
        y: [0, Math.random() * 40 - 20, 0],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute w-1.5 h-1.5 rounded-full bg-white/30 blur-[3px]"
      style={{
        left: `${10 + Math.random() * 80}%`,
        top: `${10 + Math.random() * 80}%`,
      }}
    />
  ));

function GlowCard({ children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ scale: 1.02 }}
      className="
        relative rounded-2xl border border-white/10 
        bg-white/4 backdrop-blur-xl
        p-5 overflow-hidden h-full
      "
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.45 }}
        className="absolute inset-0 bg-linear-to-br 
          from-indigo-500/20 via-sky-400/20 to-emerald-400/20 blur-2xl"
      />

      <motion.div
        initial={{ x: "-120%" }}
        whileHover={{ x: "140%" }}
        transition={{ duration: 1.3 }}
        className="absolute top-0 h-full w-[140px]
          bg-linear-to-r from-transparent via-white/20 to-transparent
          opacity-40 rotate-18"
      />

      <Particles />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default function DashboardSection() {
  const tvl = useCounter(42500000);

  const assets = [
    { symbol: "ETH", value: "$120,530", change: "+3.2%" },
    { symbol: "USDC", value: "$84,210", change: "+0.1%" },
    { symbol: "SOL", value: "$19,980", change: "+5.8%" },
    { symbol: "BTC", value: "$39,120", change: "+2.1%" },
  ];

  return (
    <section
      id="dashboard"
      className="grid md:grid-cols-[1.3fr_1fr] gap-6 items-start pt-5"
    >
      <GlowCard delay={0}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold flex gap-2 items-center">
              <BarChart3 className="text-indigo-400 w-4 h-4" />
              All-in-One Web3 ALM Dashboard
            </h3>
            <p className="text-[11px] text-gray-400">
              Visualize protocols, positions & liquidity at scale.
            </p>
          </div>

          <NavLink to='*' >
            <motion.button
            whileHover={{
              scale: 1.07,
              backgroundColor: "rgba(255,255,255,0.95)",
              boxShadow: "0 0 20px rgba(255,255,255,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-flex text-[11px] rounded-full px-4 py-1.5 bg-white text-black"
          >
            Explore
          </motion.button>
          </NavLink>
        </div>

        <div className="relative mt-3 h-56 rounded-xl overflow-hidden border border-white/10 bg-black/50 p-3">
          <div className="flex justify-between text-[10px] text-gray-400 mb-1">
            <span>TVL (Live)</span>
            <span>Last 30 days</span>
          </div>

          <div className="text-[22px] font-bold text-white mb-2">
            ${tvl.toLocaleString()}
          </div>

          <LiquidWave color="rgba(94,234,212,0.35)" />
          <LiquidWave color="rgba(56,189,248,0.25)" />
          <LiquidWave color="rgba(99,102,241,0.2)" />

          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 inset-x-0 h-0.5 
                       bg-linear-to-r from-transparent via-white/50 to-transparent"
          />
        </div>
      </GlowCard>

      <GlowCard delay={0.2}>
        <h4 className="text-xs font-medium mb-2 flex items-center gap-2">
          <Coins className="w-4 h-4 text-indigo-400" />
          Multi Currency Support
        </h4>

        <p className="text-[11px] text-gray-400 mb-4">
          Track stablecoins, governance tokens & blue-chip assets in real-time.
        </p>

        <div className="space-y-2 text-[11px]">
          {assets.map((a, i) => (
            <motion.div
              key={a.symbol}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(255,255,255,0.15)",
              }}
              className="flex items-center justify-between 
                px-3 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 12, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="h-6 w-6 rounded-full bg-linear-to-tr from-indigo-500 to-sky-400"
                />
                <div>
                  <p className="text-[11px]">{a.symbol}</p>
                  <p className="text-[10px] text-gray-400">{a.value}</p>
                </div>
              </div>

              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-[10px] text-emerald-400"
              >
                {a.change}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </GlowCard>
    </section>
  );
}
