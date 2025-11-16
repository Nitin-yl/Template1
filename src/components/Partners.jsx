import { motion } from "framer-motion";
import { Bitcoin, Cpu, Layers, Shield, Network, Hexagon } from "lucide-react";

const partners = [
  {
    name: "Coinbase",
    icon: <Bitcoin className="w-4 h-4" />,
  },
  {
    name: "Solana",
    icon: <Network className="w-4 h-4" />,
  },
  {
    name: "BNB Chain",
    icon: <Layers className="w-4 h-4" />,
  },
  {
    name: "Polygon",
    icon: <Hexagon className="w-4 h-4" />,
  },
  {
    name: "Ethereum",
    icon: <Shield className="w-4 h-4" />,
  },
];

export default function Partners() {
  return (
    <section className="pb-12 relative">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
          Trusted by Leading Web3 Teams
        </p>
      </motion.div>

      <div className="absolute inset-0 -top-20 opacity-30 pointer-events-none flex justify-center">
        <div className="h-64 w-[650px] bg-linear-to-b from-indigo-500/20 via-sky-400/10 to-transparent blur-3xl" />
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {partners.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.07,
              rotateX: 4,
              rotateY: -4,
              boxShadow: "0 0 32px rgba(99,102,241,0.45)",
            }}
            className={`
              relative px-6 py-2 rounded-2xl flex items-center gap-2 
              text-[12px] text-gray-200 cursor-pointer select-none
              bg-white/5 border border-white/10 backdrop-blur-xl
              transition-all duration-300
            `}
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 2.8 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-indigo-400"
            >
              {item.icon}
            </motion.div>

            {item.name}

            <motion.span
              className="absolute inset-0 rounded-2xl border-2 border-transparent"
              whileHover={{
                borderColor: "rgba(99,102,241,0.35)",
                boxShadow:
                  "0 0 25px rgba(99,102,241,0.3), inset 0 0 12px rgba(99,102,241,0.2)",
              }}
              transition={{ duration: 0.4 }}
            ></motion.span>

            <div
              className="
              absolute inset-0 rounded-2xl overflow-hidden pointer-events-none
            "
            >
              <motion.div
                initial={{ x: "-150%" }}
                whileHover={{ x: "150%" }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                className="
                  absolute top-0 h-full w-20 
                  bg-linear-to-r from-transparent via-white/15 to-transparent
                  skew-x-12
                "
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
