"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  User,
  Smartphone,
  Briefcase,
  Upload,
  CheckCircle,
} from "lucide-react";
import Hero from "../_components/Hero";

/* ===== Animations ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Careers() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    job: "",
    cv: null,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setForm({ ...form, cv: e.target.files[0] });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "الاسم مطلوب";
    if (!form.phone) newErrors.phone = "رقم الجوال مطلوب";
    if (!form.job) newErrors.job = "اختر الوظيفة";
    if (!form.cv) newErrors.cv = "يرجى رفع السيرة الذاتية";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSuccess(true);
  };

  return (
    <>
      {/* ===== Hero ===== */}
    <Hero title= "انضم إلى فريق العمل" currentPage= "انضم إلى فريق العمل" />
      {/* ===== Contact Cards ===== */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            { icon: Phone, title: "اتصل بنا", text: "+966112320242" },
            { icon: Mail, title: "راسلنا", text: "+966112320242" },
            {
              icon: MapPin,
              title: "قم بزيارتنا",
              text: "طريق النهضة، مجموعة شركات الظاهري – الرياض",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.04 }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
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

      {/* ===== Job Application Form ===== */}
      <section className="bg-white py-28">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center text-4xl font-extrabold mb-12"
          >
            التقديم على هذه الوظيفة
          </motion.h2>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-3xl shadow-2xl p-10 space-y-8"
          >
            {/* Name */}
            <div>
              <div className="relative">
                <User className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="اسمك بالكامل"
                  className="w-full pr-12 py-4 rounded-xl border focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {errors.name && <p className="text-red-500 mt-2">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <div className="relative">
                <Smartphone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="رقم الجوال"
                  className="w-full pr-12 py-4 rounded-xl border focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 mt-2">{errors.phone}</p>
              )}
            </div>

            {/* Job */}
            <div className="relative">
              <Briefcase className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <select
                name="job"
                value={form.job}
                onChange={handleChange}
                className="w-full pr-12 py-4 rounded-xl border focus:ring-2 focus:ring-blue-500"
              >
                <option value="">حدد الوظيفة</option>
                <option>إدارة مشاريع</option>
                <option>تسويق</option>
                <option>موارد بشرية</option>
                <option>محاسبة</option>
              </select>
            </div>
            {errors.job && <p className="text-red-500">{errors.job}</p>}

            {/* Upload CV */}
            <div>
              <label className="block mb-3 font-semibold">
                السيرة الذاتية
              </label>
              <label className="flex items-center justify-center gap-3 cursor-pointer border-2 border-dashed rounded-xl py-10 hover:border-blue-500 transition">
                <Upload className="text-blue-600" />
                <span>
                  {form.cv ? form.cv.name : "اضغط لرفع السيرة الذاتية"}
                </span>
                <input type="file" hidden onChange={handleFile} />
              </label>
              {errors.cv && <p className="text-red-500 mt-2">{errors.cv}</p>}
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-5 rounded-xl font-bold text-lg shadow-lg"
            >
              إرسال الطلب
            </motion.button>
          </form>

          {/* Success Message */}
          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="mt-10 flex items-center gap-3 bg-green-100 text-green-700 p-6 rounded-xl justify-center"
              >
                <CheckCircle />
                <span className="font-bold">
                  تم إرسال طلبك بنجاح ✔
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
