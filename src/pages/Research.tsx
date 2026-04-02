import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Research: React.FC = () => {
  const { t } = useLanguage();

  const researchAreas = [
    {
      title: t("research.area.1.title"),
      authors: "TAKAMA, Y., MATSUMURA, K., & SATO, R.",
      desc: t("research.area.1.desc"),
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: t("research.area.2.title"),
      authors: "CHEN, L., TAKAMA, Y., & YAMAMOTO, H.",
      desc: t("research.area.2.desc"),
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: t("research.area.3.title"),
      authors: "NAKAMURA, S. & TAKAMA, Y.",
      desc: t("research.area.3.desc"),
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-brand-gray overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
            alt="Network"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-brand-black mb-6">
            {t("research.title")}
          </h1>
          <p className="text-xl text-gray-600 font-light tracking-wide max-w-2xl mx-auto">
            {t("research.subtitle")}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Title & Intro */}
            <div className="lg:col-span-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-black leading-tight mb-8 uppercase whitespace-pre-line">
                {t("research.public.title")}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-justify">
                {t("research.public.desc")}
              </p>
              <a
                href="https://github.com/takama-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-red transition-colors"
              >
                {t("research.public.btn")}
              </a>
            </div>

            {/* Right Column: Research Areas List */}
            <div className="lg:col-span-8 space-y-20">
              {researchAreas.map((area, index) => (
                <div key={index} className="group">
                  <div className="relative h-64 md:h-80 mb-10 overflow-hidden bg-gray-100">
                    <img
                      src={area.img}
                      alt={area.title}
                      className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-black mb-3 uppercase">
                    {area.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
                    Authors: {area.authors}
                  </p>
                  <p className="text-gray-600 leading-relaxed max-w-2xl mb-8">
                    {area.desc}
                  </p>
                  <Link
                    to="/publications"
                    className="inline-block bg-brand-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-red transition-colors"
                  >
                    {t("research.learn_more")}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar Areas List (Visual Only for layout matching) */}
      <section className="py-16 md:py-24 bg-brand-gray border-t border-gray-200 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8 border-b border-gray-300 pb-4">
                {t("research.areas.title")}
              </h4>
              <ul className="space-y-6">
                {[
                  { name: t("research.areas.list.1"), link: "https://en.wikipedia.org/wiki/Network_science" },
                  { name: t("research.areas.list.2"), link: "https://en.wikipedia.org/wiki/Data_mining" },
                  { name: t("research.areas.list.3"), link: "https://en.wikipedia.org/wiki/Machine_learning" },
                  { name: t("research.areas.list.4"), link: "https://en.wikipedia.org/wiki/Artificial_intelligence" },
                  { name: t("research.areas.list.5"), link: "https://en.wikipedia.org/wiki/Data_science" },
                  { name: t("research.areas.list.6"), link: "https://en.wikipedia.org/wiki/Information_retrieval" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl md:text-3xl font-bold tracking-tighter text-brand-black hover:text-brand-red transition-colors cursor-pointer uppercase"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-white p-8 border border-gray-200">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                  {t("research.areas.join")}
                </h4>
                <p className="text-sm text-gray-600 mb-6 text-justify">
                  {t("research.areas.join.desc")}
                </p>
                <Link
                  to="/join-us"
                  className="text-xs font-bold uppercase tracking-widest text-brand-black border-b border-brand-black pb-1 hover:text-brand-red hover:border-brand-red transition-colors"
                >
                  {t("research.areas.join.btn")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
