import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { FiLayers, FiCode } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

const ProjectUILogo = () => {
  return (
    <div className="flex items-center cursor-pointer select-none">
      <motion.div
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 8, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative w-11 h-11 flex items-center justify-center rounded-2xl shadow-md 
        bg-linear-to-br from-[#8AD0DA] via-[#479ED3] to-[#3BD7C0]"
      >
        <FiLayers
          size={20}
          className="absolute text-white opacity-90 -translate-y-0.5"
        />
        <FiCode size={15} className="absolute text-white/90 translate-y-1" />
        <HiOutlineSparkles
          size={10}
          className="absolute text-white/80 top-1.5 right-[7px]"
        />
      </motion.div>

      <div className="flex flex-col leading-tight ml-2">
        <span
          className="font-extrabold text-2xl tracking-tight text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #8AD0DA, #479ED3, #3BD7C0, #70EA7B)",
          }}
        >
          ProjectUI
        </span>
        <span
          className="text-sm font-medium bg-linear-to-r 
          from-[#8AD0DA] via-[#479ED3] to-[#3BD7C0] 
          bg-clip-text text-transparent"
        >
          Pre-Built Power. Personalized Progress.
        </span>
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="mt-20 pt-16 pb-10 relative overflow-hidden">
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t 
        from-[#8AD0DA]/10 via-[#479ED3]/5 to-transparent blur-2xl pointer-events-none"
      />

      <motion.div
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-0 left-0 right-0 h-px 
        bg-linear-to-r from-transparent via-white/30 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-4 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <ProjectUILogo />

          <p className="text-[11px] text-gray-400 max-w-sm leading-relaxed">
            ProjectUI empowers developers to build stunning websites with
            pre-built components, smart AI tools, and blazing-fast workflows
            designed for modern development.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <FooterColumn
            title="Product"
            items={["Components", "Templates", "AI Tools", "Theme"]}
          />

          <FooterColumn
            title="Resources"
            items={["Docs", "Blog", "Roadmap", "Changelog"]}
          />

          <FooterColumn
            title="Company"
            items={["About", "Careers", "Contact", "Community"]}
          />

          <div>
            <h4 className="text-xs font-semibold text-gray-300 mb-3">Social</h4>
            <div className="flex gap-3">
              <FooterIcon icon={<Twitter />} />
              <FooterIcon icon={<Github />} />
              <FooterIcon icon={<Linkedin />} />
              <FooterIcon icon={<Mail />} />
            </div>
          </div>
        </div>
        <div
          className="pt-5 border-t border-white/5 flex flex-col sm:flex-row 
          items-center justify-between text-[10px] text-gray-500 gap-3"
        >
          <p>© {new Date().getFullYear()} ProjectUI. All rights reserved.</p>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.1, x: 4 }}
            className="flex items-center gap-1 text-gray-400 hover:text-white transition cursor-pointer"
          >
            Back to top <ArrowUpRight className="w-3 h-3" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="text-xs font-semibold text-gray-300 mb-3">{title}</h4>
      <ul className="space-y-2 text-[11px]">
        {items.map((item) => (
          <motion.li
            key={item}
            whileHover={{ x: 4, color: "#fff" }}
            className="cursor-pointer text-gray-400 hover:text-gray-200 transition"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function FooterIcon({ icon }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.15,
        rotate: 6,
        boxShadow: "0 0 12px rgba(255,255,255,0.25)",
      }}
      className="h-7 w-7 flex items-center justify-center rounded-xl 
      bg-white/5 border border-white/10 text-gray-300 hover:text-white 
      hover:bg-white/10 transition"
    >
      {icon}
    </motion.div>
  );
}
