import { motion } from "framer-motion";

const childrenVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

// eslint-disable-next-line react/prop-types
export default function Service({ title, text, image }) {
  return (
    <motion.div
      variants={childrenVariants}
      className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl"
      data-rounded="rounded-xl"
      data-rounded-max="rounded-full"
    >
      <div
        className="p-3 text-white bg-blue-500 rounded-full"
        data-primary="blue-500"
        data-rounded="rounded-full"
      >
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 "
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" />
          <circle cx="6" cy="14" r="3" />
          <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" />
        </svg> */}
        <img src={image} alt="" className="h-6 w-6" />
      </div>
      <h4 className="text-xl font-medium text-gray-700 capitalize">{title}</h4>
      <p className="text-base text-center text-gray-600">{text}</p>
    </motion.div>
  );
}
