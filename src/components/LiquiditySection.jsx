import { motion } from "framer-motion";
import { Waves, Droplet, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";

const Particles = ({ count = 10 }) =>
  [...Array(count)].map((_, i) => (
    <motion.div
      key={i}
      animate={{
        y: [0, 12, 0],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 3 + i * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute w-1.5 h-1.5 rounded-full bg-white/30 blur-[2px]"
      style={{
        top: `${20 + i * 5}%`,
        left: `${10 + i * 7}%`,
      }}
    />
  ));

function GlowCard({ children, delay }) {
  return (
    <motion.div
      className="
        relative rounded-2xl border border-white/10 
        bg-white/3 backdrop-blur-xl
        p-5 overflow-hidden cursor-pointer h-full flex flex-col
      "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.45 }}
        className="absolute inset-0 bg-linear-to-br 
                   from-indigo-500/20 via-sky-400/20 to-emerald-400/20 
                   blur-xl"
      />

      <motion.div
        initial={{ x: "-130%" }}
        whileHover={{ x: "150%" }}
        transition={{ duration: 1.3 }}
        className="
          absolute top-0 h-full w-[140px]
          bg-linear-to-r from-transparent via-white/25 to-transparent
          rotate-18 opacity-40
        "
      />

      <Particles count={10} />

      {/* Actual content */}
      <div className="relative z-10 flex flex-col h-full">{children}</div>
    </motion.div>
  );
}

export default function LiquiditySection() {
  const rows = [
    ["ETH / USDC", "$42.1M", "18.3%", "$3.4M"],
    ["BTC / ETH", "$31.7M", "12.7%", "$1.2M"],
    ["SOL / USDT", "$9.8M", "23.1%", "$864K"],
    ["OP / ETH", "$4.3M", "29.0%", "$432K"],
  ];

  return (
    <section
      id="liquidity"
      className="mt-14 grid md:grid-cols-[1.1fr_1fr] gap-6 items-stretch"
    >
      <GlowCard delay={0}>
        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
          <Waves className="w-4 h-4 text-indigo-400" />
          Pools Overview
        </h3>

        <div className="overflow-x-auto text-[10px] relative flex-1">
          <table className="w-full border-separate border-spacing-y-2">
            <thead className="text-gray-500 text-[9px]">
              <tr>
                <th className="text-left font-normal">Pool</th>
                <th className="text-right font-normal">TVL</th>
                <th className="text-right font-normal">APR</th>
                <th className="text-right font-normal">Volume 24h</th>
              </tr>
            </thead>

            <tbody>
              {rows.map(([pool, tvl, apr, vol], i) => (
                <motion.tr
                  key={pool}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    scale: 1.02,
                  }}
                  className="transition-all cursor-pointer"
                >
                  <td className="py-1.5 text-left text-gray-200">{pool}</td>
                  <td className="py-1.5 text-right text-gray-300">{tvl}</td>
                  <td className="py-1.5 text-right text-emerald-400">{apr}</td>
                  <td className="py-1.5 text-right text-gray-300">{vol}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlowCard>

      <GlowCard delay={0.2}>
        <div className="flex flex-col h-full justify-between">
          <div>
            <h3 className="text-base font-semibold flex items-center gap-2">
              <Droplet className="w-5 h-5 text-sky-400" />
              Supply liquidity to leading pools.
            </h3>

            <p className="text-[11px] text-gray-400 leading-relaxed mt-2">
              Route capital to top-performing strategies with a single click.
              Automate rebalancing, minimize IL, and claim rewards across chains
              from one unified interface.
            </p>

            <ul className="mt-4 space-y-2 text-[11px] text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Lower impermanent loss (IL)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Auto-optimized capital routing
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                Claim multi-chain rewards
              </li>
            </ul>
          </div>

          <NavLink to="*">
            <motion.button
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 20px rgba(255,255,255,0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              className="
                mt-6 rounded-full text-xs px-6 py-2 
                bg-white text-black font-medium flex items-center gap-2
              "
            >
              Provide Liquidity
              <Sparkles className="w-4 h-4" />
            </motion.button>
          </NavLink>
        </div>
      </GlowCard>
    </section>
  );
}
