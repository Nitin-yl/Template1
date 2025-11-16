import { motion } from "framer-motion";
import { FiAlertTriangle } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div
          className="w-[500px] h-[500px] rounded-full bg-linear-to-b 
        from-[#8AD0DA]/30 via-[#479ED3]/15 to-transparent blur-3xl opacity-40"
        />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-4"
      >
        <div
          className="h-20 w-20 rounded-2xl flex items-center justify-center
        bg-linear-to-br from-[#8AD0DA] via-[#479ED3] to-[#3BD7C0] text-white shadow-xl"
        >
          <FiAlertTriangle size={40} />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-extrabold bg-clip-text text-transparent 
        bg-linear-to-r from-[#8AD0DA] via-[#479ED3] to-[#3BD7C0]"
      >
        404 — Page Not Found
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-3 text-sm text-gray-400 max-w-sm"
      >
        Oops! The page you're looking for does not exist or has been moved.
      </motion.p>

      <motion.a
        href="/"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 18px rgba(255,255,255,0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        className="
          mt-6 rounded-full text-xs px-6 py-2 
          bg-white text-black font-medium
        "
      >
        Back to Home
      </motion.a>
    </div>
  );
}
