import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FiLayers, FiCode } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          fixed top-4 left-1/2 -translate-x-1/2 z-50
          w-[92%] md:w-[80%] lg:w-[70%]
          rounded-2xl border border-white/10
          bg-white/10 backdrop-blur-xl
          shadow-[0_8px_30px_rgba(0,0,0,0.2)]
          px-5 md:px-8 h-14 flex items-center justify-between
        "
      >
        <div className="flex items-center gap-2 cursor-pointer select-none">
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="
              relative w-9 h-9 flex items-center justify-center
              rounded-xl shadow-md
              bg-linear-to-br from-[#8AD0DA] via-[#479ED3] to-[#3BD7C0]
            "
          >
            <FiLayers
              size={15}
              className="absolute text-white opacity-90 -translate-y-0.5"
            />
            <FiCode
              size={12}
              className="absolute text-white/90 translate-y-1"
            />
            <HiOutlineSparkles
              size={8}
              className="absolute text-white/80 top-1 right-[5px]"
            />
          </motion.div>

          <span
            className="
              font-extrabold text-[18px] tracking-tight
              bg-clip-text text-transparent
            "
            style={{
              backgroundImage:
                "linear-gradient(135deg, #8AD0DA, #479ED3, #3BD7C0, #70EA7B)",
            }}
          >
            ProjectUI
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs text-gray-200">
          {["features", "dashboard", "liquidity", "faq"].map((item, index) => (
            <a
              key={index}
              href='*'
              className="capitalize hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </div>

        <NavLink to="*" >
          <button className="hidden md:block text-xs px-5 py-1.5 rounded-full bg-white/20 border border-white/20 backdrop-blur-xl hover:bg-white/30 transition">
          Get Started
        </button>
        </NavLink>

        <motion.div
          className="md:hidden"
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="h-6 w-6 text-gray-100" />
          ) : (
            <Menu className="h-6 w-6 text-gray-100" />
          )}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="
              fixed top-20 left-1/2 -translate-x-1/2 w-[92%]
              rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10
              shadow-lg z-40 p-6 flex flex-col gap-4 text-gray-100 md:hidden
            "
          >
            {["features", "dashboard", "liquidity", "faq"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className="text-sm capitalize"
                >
                  {item}
                </a>
              )
            )}

            <button className="text-sm px-5 py-2 rounded-full bg-white/20 border border-white/20">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
