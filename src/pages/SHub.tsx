import React from "react";
import { Globe, Github, FileText, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const SHub: React.FC = () => {
  const { t } = useLanguage();

  const seminars = [
    {
      title: t("shub.seminar.1.title"),
      desc: t("shub.seminar.1.desc"),
      tags: ["21", "20", "19", "18"],
    },
    {
      title: t("shub.seminar.2.title"),
      desc: t("shub.seminar.2.desc"),
      tags: ["21", "20", "19"],
    },
    {
      title: t("shub.seminar.3.title"),
      desc: t("shub.seminar.3.desc"),
      tags: ["21", "20", "19", "18"],
    },
    {
      title: t("shub.seminar.4.title"),
      desc: t("shub.seminar.4.desc"),
      tags: ["21", "20", "19"],
    },
  ];

  const lectures = [
    {
      title: t("shub.lecture.1.title"),
      desc: t("shub.lecture.1.desc"),
      code: "ML",
    },
    {
      title: t("shub.lecture.2.title"),
      desc: t("shub.lecture.2.desc"),
      code: "WI",
    },
  ];

  return (
    <div className="w-full bg-white flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-64 shrink-0 bg-brand-gray border-r border-gray-200 p-8 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto hidden lg:block">
        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8 pb-4 border-b border-gray-300">
          {t("shub.nav")}
        </h4>
        <ul className="space-y-6">
          <li>
            <a
              href="#seminars"
              className="text-sm font-bold tracking-tight text-brand-black hover:text-brand-red transition-colors uppercase"
            >
              {t("shub.seminars")}
            </a>
          </li>
          <li>
            <a
              href="#lectures"
              className="text-sm font-bold tracking-tight text-brand-black hover:text-brand-red transition-colors uppercase"
            >
              {t("shub.lectures")}
            </a>
          </li>
        </ul>

        <div className="mt-16 pt-8 border-t border-gray-300">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
            {t("shub.status")}
          </h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            {t("shub.restricted")}
          </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center bg-brand-black overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000"
              alt="sHub Collaboration"
              className="w-full h-full object-cover filter grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 px-8 md:px-16 lg:px-24 w-full">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 uppercase">
              {t("shub.title")}
            </h1>
            <p className="text-xl text-gray-300 font-light tracking-wide max-w-3xl leading-relaxed">
              {t("shub.subtitle")}
            </p>
          </div>
        </section>

        <div className="px-8 md:px-16 lg:px-24 py-16 space-y-16 md:space-y-24">
          {/* Seminars */}
          <section id="seminars" className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-black mb-16 flex items-center uppercase border-b border-gray-200 pb-4">
              {t("shub.seminars")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {seminars.map((seminar, i) => (
                <div
                  key={i}
                  className="group border-l-4 border-transparent hover:border-brand-red pl-6 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold tracking-tight text-brand-black mb-4 group-hover:text-brand-red transition-colors">
                    {seminar.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 h-20 overflow-hidden text-justify">
                    {seminar.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {seminar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs font-mono text-gray-500 group-hover:border-brand-red group-hover:text-brand-red transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://krectmt3.sd.tmu.ac.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-brand-black hover:text-brand-red transition-colors"
                  >
                    {t("research.learn_more")}{" "}
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Lectures */}
          <section id="lectures" className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-black mb-16 flex items-center uppercase border-b border-gray-200 pb-4">
              {t("shub.lectures")}
            </h2>
            <div className="space-y-16">
              {lectures.map((lecture, i) => (
                <div
                  key={i}
                  className="bg-brand-gray p-8 md:p-12 relative overflow-hidden group"
                >
                  <div className="absolute -right-10 -top-10 text-[200px] font-bold text-white opacity-50 select-none pointer-events-none group-hover:scale-110 transition-transform duration-700">
                    {lecture.code}
                  </div>
                  <div className="relative z-10 max-w-3xl">
                    <h3 className="text-3xl font-bold tracking-tight text-brand-black mb-6">
                      {lecture.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                      {lecture.desc}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="https://krectmt3.sd.tmu.ac.jp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-brand-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-red transition-colors"
                      >
                        <Globe size={14} className="mr-2" /> Website
                      </a>
                      <a
                        href="https://github.com/takama-lab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-brand-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-red transition-colors"
                      >
                        <Github size={14} className="mr-2" /> Github
                      </a>
                      <a
                        href="https://krectmt3.sd.tmu.ac.jp/en/pdf/TakamaLabIntroduction2008.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-brand-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-red transition-colors"
                      >
                        <FileText size={14} className="mr-2" /> PDF
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SHub;
