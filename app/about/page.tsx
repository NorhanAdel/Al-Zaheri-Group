"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Play,
  Briefcase,
  Users,
  Globe,
  Calendar,
  UserCheck,
  Layers,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import Hero from "../_components/Hero";

/* ===== بيانات الهيكل والـ Accordion ===== */
const data = [
  {
    id: 1,
    title: "محمد بن صالح الظاهري",
    content:
      "الشيخ الدكتور / محمد بن صالح الظاهري صائب، رئيس مجلس الإدارة ومن الوجوه الاقتصادية والاجتماعية البارزة في المملكة العربية السعودية والخليج ومن الرواد الذين ساهموا في إنشاء البنية التحتية في المملكة في الثمانينات، وقد كان له دوراً بارزاً في التنمية الاقتصادية.",
  },
  {
    id: 2,
    title: "نظرة عامة",
    content:
      "تعتبر مجموعة شركات الظاهري وفروعها من الشركات الرائدة في المملكة العربية السعودية ومنطقة الخليج. تأسست عام 1403 هـ - 1983 م بواسطة الشيخ الدكتور / محمد بن صالح الظاهري وبدأت بقطاع المقاولات إلى أن أمتد نشاطها إلي (10) فروع وشركات في مختلف النشاطات , وتشمل الإعاشة والخدمات والتشغيل و مقاولون عامون و فرع التوكيلات التجارية",
  },
  {
    id: 3,
    title: "الرؤية والرسالة",
    content:
      'الرؤية: "نسعى لأن نكون الخيار الأول في المملكة العربية السعودية ومنطقة الخليج في تقديم خدمات الإعاشة، والخدمات التشغيلية، والمقاولات العامة، والتوكيلات التجارية، من خلال التميز في الجودة والابتكار والاستدامة." الرسالة: "نلتزم بتقديم أعلى مستويات الجودة والخدمة في جميع القطاعات التي نعمل بها، مع التركيز على تلبية احتياجات عملائنا، وتعزيز النمو المستدام، وتطوير شراكات قوية تقوم على الثقة والكفاءة والاحترافية."',
  },
];

/* ===== Counter Component ===== */
interface CounterProps {
  end: number;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  title: string;
}

function Counter({ end, icon: Icon, title }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 30);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow hover:shadow-xl transition">
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 mb-4">
        <Icon className="w-7 h-7 text-blue-600" />
      </div>
      <h3 className="text-3xl font-extrabold text-gray-900">
        {count.toLocaleString()}+
      </h3>
      <p className="text-gray-600 mt-2 font-medium">{title}</p>
    </div>
  );
}

/* ===== صفحة About ===== */
function About() {
  const [showVideo, setShowVideo] = useState(false);
  const [active, setActive] = useState<number | null>(1);
  const [showStructure, setShowStructure] = useState(false);

  return (
    <>
      <Hero title="عن المجموعة" currentPage="عن المجموعة" />

      {/* ===== Hero Section مع فيديو ===== */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-right text-gray-700"
          >
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl mb-8 font-extrabold text-gray-900 mb-6 relative inline-block"
            >
              مجموعة شركات الظاهرى
              <motion.span
                className="absolute right-0 -bottom-2 h-1 w-0 bg-[#2845D6] rounded-full"
                animate={{ width: ["0%", "100%"] }}
                transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.5 }}
              />
            </motion.h2>

            <p className="mb-4 leading-relaxed">
              تعتبر مجموعة شركات الظاهري وفروعها من الشركات الرائدة في المملكة العربية السعودية ومنطقة الخليج، تأسست عام 1403 هـ - 1983 م بواسطة الشيخ الدكتور / محمد بن صالح الظاهري. وبرغم رحلتها بقطاع المقاولات إلى أن امتد نشاطها إلى (10) فروع وشركات في مختلف الأنشطة وتشمل الإعلان والخدمات والتشغيل ومقاولون عامون وفروع التوكيلات التجارية وفرع العمليات التجارية وفرع التجهيزات العسكرية والأمنية العامة وفروع الأسواق التجارية والمطاعم وفرع التسويق التجاري وفرع القطاع الأمني والحراسة بالإضافة إلى نشاط تشغيل الطيران والخدمات النفطية وعدة أقسام أخرى.
            </p>
            <p className="leading-relaxed">
              كما اختيرت من أكبر مائة شركة ومؤسسة اقتصادية في المملكة والخليج حسب التقرير الاقتصادي لمجلس التعاون الخليجي عام 2000 م، وأعيد اختيارها ضمن أكبر مائة شركة اقتصادية في المملكة في التقرير الاقتصادي الذي أعدته جريدة الاقتصادية المتخصصة لعام 2008 م، وتتميز سياسة الشركة في تنفيذ المشاريع بالمصداقية وحسن إدارة المشاريع والسمعة الطيبة في العمل والمنافسة. كما حرصت على تطور كادرها والمحافظة عليه والتعامل الإنساني مع الرئيس والمرؤوس، بكل روح الفريق الواحد وإدخال أحدث الوسائل التقنية والتدريب لتطوير كوادر وآليات العمل حتى تجاوز عدد العاملين في جميع أفرعها أكثر من 7000 موظف.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-80 md:h-[400px] cursor-pointer"
            onClick={() => setShowVideo(true)}
          >
            <Image
              src="/ceo-about.png"
              alt="مجموعة شركات الظاهري"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center hover:bg-blue-500 transition">
                <Play className="w-8 h-8 text-blue-600 hover:text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== الأرقام ===== */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <p className="text-xl md:text-4xl font-extrabold text-gray-900 mb-5">
            أرقام مجموعة الظاهري
          </p>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block bg-blue-100 text-blue-700 px-6 py-2 rounded-full font-semibold mb-4"
          >
            أكبر مجموعة استثمارية من الشركات في المملكة العربية السعودية والخليج
          </motion.h3>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <Counter end={15000} icon={Briefcase} title="حلول الأعمال" />
          <Counter end={196} icon={Users} title="خبراء الحلول" />
          <Counter end={999} icon={Globe} title="شريك عالمي" />
          <Counter end={41} icon={Calendar} title="سنوات خبرة" />
          <Counter end={5000} icon={UserCheck} title="موظف" />
          <Counter end={80} icon={Layers} title="نشاطات مختلفة" />
        </div>
      </section>

      {/* ===== Video Modal ===== */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-6 right-6 text-white text-4xl font-bold"
          >
            ×
          </button>
          <video
            className="w-1/2 h-1/2 rounded-xl shadow-2xl"
            src="/about-video.mp4"
            controls
            autoPlay
          />
        </div>
      )}

      {/* ===== الهيكل التنظيمي ===== */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-10">الهيكل التنظيمي</h2>
          <motion.div
            onClick={() => setShowStructure(true)}
            className="relative w-full h-[300px] md:h-[500px] cursor-pointer"
          >
            <Image src="/ceo.png" alt="الهيكل التنظيمي" fill className="object-contain" />
          </motion.div>
        </div>
      </section>

      {showStructure && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={() => setShowStructure(false)}
            className="absolute top-6 right-6 text-white text-4xl font-bold"
          >
            ×
          </button>
          <div className="relative w-1/2 h-[100%] bg-white rounded-xl">
            <Image src="/ceo.png" alt="الهيكل التنظيمي" fill className="object-contain" />
          </div>
        </div>
      )}

      {/* ===== Accordion لماذا تختارنا ===== */}
      <section className="w-full bg-[#0B1220] py-24 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 text-right">
            <span className="text-blue-400 text-sm block mb-2">لماذا تختارنا؟</span>
            <h2 className="text-4xl md:text-3xl font-extrabold mb-3">
              نحن من ذوي الخبرة في <span className="text-blue-500">حلول الأعمال</span>
            </h2>
          </div>

          <div className="space-y-6">
            {data.map((item, index) => {
              const isOpen = active === item.id;

              return (
                <div
                  key={item.id}
                  className={`rounded-xl border transition ${
                    isOpen ? "bg-white text-gray-800" : "border-white/20 bg-transparent"
                  }`}
                >
                  <button
                    onClick={() => setActive(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between px-6 py-5 text-right"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-blue-500 font-bold text-lg">
                        {String(index + 1).padStart(2, "0")}.
                      </span>
                      <span className="font-bold text-lg">{item.title}</span>
                    </div>
                    {isOpen ? <ChevronUp className="text-blue-500" /> : <ChevronDown className="text-blue-500" />}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 leading-relaxed text-gray-600">{item.content}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
