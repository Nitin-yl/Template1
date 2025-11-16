import { motion } from "framer-motion";
import { LineChart, ShieldCheck, FileCheck, Network } from "lucide-react";

const featuresTop = [
  {
    title: "Real-Time Analytics",
    desc: "Monitor on-chain transactions with millisecond-latency charts and alerts.",
    icon: <LineChart className="w-5 h-5 text-indigo-400" />,
  },
  {
    title: "Advanced Security",
    desc: "Multi-sig policies, role-based access, and anomaly detection baked in.",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
  },
];

const featuresBottom = [
  {
    title: "Governance & Compliance",
    desc: "Keep your treasury and DAO in sync with regulatory-ready exports.",
    icon: <FileCheck className="w-5 h-5 text-purple-400" />,
  },
  {
    title: "Multi-Chain Support",
    desc: "Switch between chains and assets in a single immersive dashboard.",
    icon: <Network className="w-5 h-5 text-sky-400" />,
  },
];

function FeatureCard({ title, desc, icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ scale: 1.03, rotateX: 4, rotateY: -4 }}
      className="
            group relative rounded-2xl border border-white/10 
            bg-white/5 backdrop-blur-xl
            p-5 overflow-hidden cursor-pointer 
            transition-all duration-300
          "
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.35 }}
        className="absolute inset-0 bg-linear-to-br from-indigo-500/20 via-sky-400/10 to-emerald-400/20 blur-2xl"
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ x: "-110%" }}
          whileHover={{ x: "110%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="
                absolute top-0 h-full w-24 
                bg-linear-to-r from-transparent via-white/15 to-transparent 
                skew-x-12
              "
        />
      </div>

      <div className="relative flex items-start gap-3">
        <motion.div
          animate={{
            y: [0, -4, 0],
            rotate: [0, 4, -4, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="p-2 rounded-xl bg-white/10 border border-white/10"
        >
          {icon}
        </motion.div>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          <p className="text-[12px] text-gray-400 leading-relaxed">{desc}</p>
        </div>
      </div>

      <div className="mt-5 h-20 rounded-xl border border-white/5 bg-black/30 flex items-end gap-1 px-2 pb-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              height: [
                `${20 + (i % 4) * 12}%`,
                `${40 + (i % 4) * 10}%`,
                `${20 + (i % 4) * 12}%`,
              ],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex-1 rounded-full bg-linear-to-t from-white/10 to-white/30"
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-2"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
          Innovative Features of Webtrix
        </p>
        <h2 className="text-xl md:text-2xl font-semibold">
          Everything you need for Web3 ALM
        </h2>
        <p className="max-w-xl mx-auto text-xs text-gray-400">
          From liquidity routing to treasury monitoring, Webtrix combines the
          tools your team actually uses into one clean dashboard.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {featuresTop.map((f, i) => (
          <FeatureCard key={f.title} {...f} index={i} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {featuresBottom.map((f, i) => (
          <FeatureCard key={f.title} {...f} index={i + 2} />
        ))}
      </div>
    </section>
  );
}
