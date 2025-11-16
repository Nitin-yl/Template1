import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, Phone, Sparkles } from "lucide-react";

function GlowCard({ children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
      className="
        relative rounded-2xl border border-white/10 
        bg-white/3 backdrop-blur-xl
        p-5 overflow-hidden cursor-pointer h-full
      "
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.4 }}
        className="absolute inset-0 bg-linear-to-br 
        from-indigo-500/15 via-sky-400/15 to-emerald-400/15 blur-xl pointer-events-none"
      />

      <motion.div
        initial={{ x: "-130%" }}
        whileHover={{ x: "150%" }}
        transition={{ duration: 1.3 }}
        className="absolute top-0 h-full w-[140px]
        bg-linear-to-r from-transparent via-white/20 to-transparent 
        rotate-18 opacity-30 pointer-events-none"
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

const faqs = [
  {
    q: "What is Webtrix?",
    a: "Webtrix is a Web3 asset & liquidity management platform that unifies analytics, automation, and execution.",
  },
  {
    q: "How do I connect my wallet?",
    a: "You can connect using any major wallet provider. We support browser wallets, mobile wallets, and hardware signers.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We use end-to-end encryption, role-based access controls, and on-chain audit trails for sensitive actions.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="mt-14 grid md:grid-cols-2 gap-6 items-stretch">
      <GlowCard delay={0}>
        <h3 className="text-sm font-semibold mb-4">
          Have Questions? We've Got Answers.
        </h3>

        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div key={item.q}>
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between 
                text-left pb-2 pt-1 border-b border-white/10 
                hover:text-white transition text-xs"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-[11px] text-gray-400 pt-2 pb-3"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </GlowCard>

      <GlowCard delay={0.2}>
        <div className="flex flex-col h-full justify-between">
          <div>
            <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-sky-400" />
              Talk to our team.
            </h3>

            <p className="text-[11px] text-gray-400 leading-relaxed">
              Need a custom integration or enterprise deployment? Our solutions
              engineers can help you design the perfect setup.
            </p>

            <ul className="mt-4 space-y-2 text-[11px] text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Dedicated enterprise support
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Custom integrations available
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                Response under 24 hours
              </li>
            </ul>
          </div>

          <div className="space-y-2 text-[11px] mt-6">
            <motion.button
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 18px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-full px-4 py-2 bg-white text-black font-medium flex items-center justify-center gap-2"
            >
              Book a Call
              <Phone className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.04,
                backgroundColor: "rgba(255,255,255,0.12)",
              }}
              whileTap={{ scale: 0.96 }}
              className="w-full rounded-full px-4 py-2 border border-white/15 bg-white/5 text-gray-100 flex items-center justify-center gap-2"
            >
              Join Discord
              <Sparkles className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </GlowCard>
    </section>
  );
}
