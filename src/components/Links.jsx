import { motion } from "framer-motion";
import Link from "./Link";

export default function Links() {
  return (
    <motion.section className="md:mt-12 md:absolute md:right-4 md:top-32 z-10 text-white top-3 max-sm:py-2"
      initial={{ opacity: 0, y: '-100%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex md:flex-col gap-y-2  max-sm:justify-center">
        <Link type="WhatsApp" icon="./svgs/whatsapp.svg" />
        <Link type="Instagram" icon="./svgs/instagram.svg" />
        <Link type="TikTok" icon="./svgs/tiktok.svg" />
        <Link type="FaceBook" icon="./svgs/facebook.svg" />
      </div>
    </motion.section>
  );
}
