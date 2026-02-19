"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { User, Award, Globe, BookOpen, Heart,Star } from "lucide-react";
import Hero from "../_components/Hero";

export default function PageHero() {
  const memberships = [
    { icon: Globe, text: "رئيس مجلس الأعمال السعودي الماليزي" },
    { icon: Globe, text: "نائب رئيس مجلس الأعمال السعودي الأوكراني" },
    { icon: Globe, text: "عضو اللجنة التنفيذية لمجلس رجال الأعمال السعودي الفرنسي" },
    { icon: Globe, text: "عضو تنفيذي بمجلس رجال الأعمال السعودي الأمريكي" },
    { icon: Globe, text: "عضو مجلس رجال الأعمال السعودي المصري" },
    { icon: Globe, text: "عضو مجلس رجال الأعمال السعودي الألماني" },
    { icon: Globe, text: "عضو مجلس رجال الأعمال السعودي الروسي" },
    { icon: Globe, text: "عضو مجلس الأعمال السعودي التركي" },
    { icon: Globe, text: "عضو مجلس الأعمال السعودي السوري" },
    { icon: Globe, text: "عضو مجلس الأعمال السعودي الأردني" },
    { icon: Globe, text: "عضو مجلس الأعمال والمنتدى الخليجي" },
    { icon: Globe, text: "عضو المؤتمر الاقتصادي في دافوس ولبنان والأردن" },
    { icon: Globe, text: "عضو الاتحاد الدولي لرجال الأعمال" },
    { icon: Heart, text: "عضو منظمة الأمن المتقدم الدولية وعضو منتدب في مجالس إدارة الشركات الخليجية والسعودية" },
  ];

  return (
    <>
       
  <Hero title= " الدكتور رئيس المجموعة" currentPage=  "الدكتور رئيس المجموعة" />
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              عن الدكتور رئيس المجموعة
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-10 ml-auto rounded-full" />

            <p className="text-gray-700 leading-loose text-lg">
            الشيخ الدكتور / محمد بن صالح الظاهري صاحب و رئيس مجلس الإدارة من الوجوه الاقتصادية و الاجتماعية البارزة في المملكة العربية السعودية و الخليج ومن الرواد الذين ساهموا في إنشاء البنية التحتية في المملكة في الثمانينات و قد كان له دورا بارزا في التنمية الاقتصادية التي شهدتها المملكة .ولد في الثامن من شهر شعبان عام 1373 هجرية الموافق 23/4/1954 ميلادية و ينتمي إلى إحدى القبائل العربية العريقة في نجد بالجزيرة العربية و المعروفة بقبيلة حرب حيث كان والده أحد شيوخها كما ينتمي إلى قبيلة شمر من ناحية الوالدة . أسس هذا الكيان الاقتصادي في الثمانينات بقدرة عالية و ممارسة اقتصادية فطنة ترافقها سمعة جيدة محافظا على المصداقية و التفاؤل في العمل و اتسم بالإدارة و القيادة الحازمة و المرنة حسب المتطلبات. و شارك في العديد من المؤتمرات و المنتديات الاقتصادية داخل و خارج البلاد بتفوق و مثل وفود تجارية و اقتصادية و مجالس رجال الأعمال و منها:
            </p>
          
          </motion.div>
        </div>
      </section>

    
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {/* صورة الدكتور */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full h-[500px] overflow-hidden shadow-xl"
            >
              <Image
                src="/ceo-about.png"
                alt="رئيس مجلس الإدارة"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* العضويات */}
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6">
                المناصب والعضويات
              </h3>
              <div className="w-20 h-1 bg-blue-600 mb-8 rounded-full" />
              <ul className="space-y-3 text-gray-700">
                {memberships.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <item.icon className="text-blue-500 w-5 h-5 flex-shrink-0" />
                    {item.text}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      
     <section className="w-full bg-white py-24">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-right"
    >
      <h3 className="text-3xl font-extrabold text-gray-900 mb-6">
        الإنجازات الاجتماعية والثقافية
      </h3>
      <div className="w-20 h-1 bg-blue-600 mb-8 ml-auto rounded-full" />

      <ul className="space-y-6 text-gray-700 leading-relaxed">
        <motion.li
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-3"
        >
          <Heart className="text-red-500 w-6 h-6 flex-shrink-0 mt-1" />
          كما أن للدكتور بصمات نشطة وملموسة في المجال الاجتماعي والإنساني منها مشاركته الفعالة في لجنة أصدقاء المرضى في السعودية، وكذلك مساعدة الأيتام، وجمعية الأطفال المعوقين، وجمعية أصدقاء أسر السجناء، وجمعيات تحفيظ القرآن الكريم والمغتربين بالخارج (أواصر)، وأصدقاء مرضى الفشل الكلوي (كلانا)، ولجنة أصدقاء مرضى الإعاقة السمعية والبصرية، ولجنة المحافظة على البيئة ممثلة في الحياة الفطرية وإنمائها وغيرها من الجمعيات الإنسانية.
        </motion.li>

        <motion.li
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex items-start gap-3"
        >
          <BookOpen className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
          كما أن لديه إسهامات ثقافية واسعة منها تقديم المشورات في التطوير الإداري للمنشآت وإعادة الهيكلة، إضافة لتزويد بعض طلبة الدراسات العليا الراغبين في الحصول على الدكتوراه في أبحاثهم، خاصة الجانب الإداري والاقتصادي، من خلال الخبرة العلمية والعملية.
        </motion.li>

        <motion.li
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-start gap-3"
        >
          <Award className="text-yellow-500 w-6 h-6 flex-shrink-0 mt-1" />
          الشيخ الدكتور / محمد بن صالح الظاهري حاصل على درجة الماجستير في الاقتصاد والعلوم السياسية عام 1981، ثم حصل على درجة الدكتوراه في الاقتصاد والعلوم السياسية من جامعة ميريلاند الأمريكية عام 2008، وله الكثير من المقالات الدورية في النواحي الاقتصادية والاجتماعية والتطوير الإداري وتحسين أداء الاقتصاد والعولمة ومبادئ التجارة الحرة وتطور الشركات العائلية، كما أصدر العديد من الكتب المتخصصة التي تعنى بنواحي الاقتصاد والثقافة.
        </motion.li>

        <motion.li
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-start gap-3"
        >
          <Star className="text-blue-500 w-6 h-6 flex-shrink-0 mt-1" />
          والحكمة المفضلة له هي: 
                          </motion.li>
                          <motion.li
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
  className="flex flex-col gap-2 text-gray-800"
>
 
</motion.li>

      </ul>
    </motion.div>
  </div>
          </section>
          <section className="w-full bg-gray-50 py-16">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <motion.blockquote
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-xl md:text-2xl font-semibold italic text-gray-800 leading-relaxed"
    >
      "اعلم دائما بأنه ليس هناك ما هو أفضل من تجديد الأمل بالنجاح و أن في العلاقة الإنسانية ما بين الرئيس و المرؤوس ما يحيي التفاؤل في النفس و يعطيها القوة للمضي في طريقها و تكون الغلبة دائما للشخص المتفائل و مجدد الأمل و ذو العزيمة و الصبر"
    </motion.blockquote>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="mt-4 font-semibold text-gray-900"
    >
      د/ محمد بن صالح الظاهري
    </motion.p>
  </div>
</section>


    </>
  );
}
