import { motion } from "framer-motion";

export default function BranchIdentitySection({ title, items }) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold border-b-2 border-blue-600 inline-block pb-2">
        {title}
      </h3>

      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl p-5 shadow-md flex items-start gap-3"
          >
            <span className="text-blue-600 text-xl mt-1">★</span>
            <p className="text-gray-700 leading-relaxed">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
