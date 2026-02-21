"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  User,
  AtSign,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import Hero from "../_components/Hero";

/* ===== Animations ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  // ✅ تحديد نوع e
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* ===== Hero ===== */}
      <Hero title="تواصل معنا" currentPage="تواصل معنا" />

      {/* ===== Contact Cards ===== */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            { icon: Phone, title: "اتصل بنا", text: "+966112320242" },
            { icon: Mail, title: "راسلنا", text: "info@alzahri.com" },
            {
              icon: MapPin,
              title: "قم بزيارتنا",
              text: "طريق النهضة – الربوة – الرياض",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{
                y: -10,
                scale: 1.04,
                boxShadow: "0 30px 50px rgba(0,0,0,0.15)",
              }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-4"
              >
                <item.icon className="text-blue-600 w-7 h-7" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Map ===== */}
      <section className="w-full h-[450px] relative">
        <iframe
          className="w-full h-full grayscale hover:grayscale-0 transition"
          src="https://www.google.com/maps?q=Riyadh&output=embed"
          loading="lazy"
        />
      </section>

      {/* ===== Contact Form ===== */}
      <section className="bg-white py-28">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-extrabold mb-4">
              هل تحتاج إلى مساعدة؟ دعنا نتواصل معك
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl shadow-2xl p-10 space-y-7"
          >
            {/* Name */}
            <div className="relative">
              <User className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="اسمك"
                required
                className="w-full pr-12 py-4 rounded-xl border focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <AtSign className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="البريد الإلكتروني"
                required
                className="w-full pr-12 py-4 rounded-xl border focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Subject */}
            <div className="relative">
              <MessageSquare className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="الموضوع"
                className="w-full pr-12 py-4 rounded-xl border focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="اكتب رسالتك"
              required
              className="w-full p-4 rounded-xl border focus:ring-2 focus:ring-blue-500"
            />

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-5 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700"
            >
              إرسال
            </motion.button>
          </motion.form>

          {/* Success Message */}
          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="mt-8 flex items-center justify-center gap-3 bg-green-100 text-green-700 p-6 rounded-xl"
              >
                <CheckCircle />
                <span className="font-bold">
                  تم إرسال رسالتك بنجاح ✔
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
