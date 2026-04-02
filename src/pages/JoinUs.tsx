import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const JoinUs: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-white flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-64 shrink-0 bg-brand-gray border-r border-gray-200 p-8 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto hidden lg:block">
        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8 pb-4 border-b border-gray-300">
          {t("join.opportunities")}
        </h4>
        <ul className="space-y-6">
          <li>
            <a
              href="#programs"
              className="text-sm font-bold tracking-tight text-brand-black hover:text-brand-red transition-colors uppercase"
            >
              {t("join.programs")}
            </a>
          </li>
          <li>
            <a
              href="#scholarships"
              className="text-sm font-bold tracking-tight text-gray-500 hover:text-brand-black transition-colors uppercase"
            >
              {t("join.scholarships")}
            </a>
          </li>
          <li>
            <a
              href="#how-to-apply"
              className="text-sm font-bold tracking-tight text-gray-500 hover:text-brand-black transition-colors uppercase"
            >
              {t("join.how_to_apply")}
            </a>
          </li>
          <li>
            <a
              href="#open-positions"
              className="text-sm font-bold tracking-tight text-gray-500 hover:text-brand-black transition-colors uppercase"
            >
              {t("join.open_positions")}
            </a>
          </li>
          <li>
            <a
              href="#internships"
              className="text-sm font-bold tracking-tight text-gray-500 hover:text-brand-black transition-colors uppercase"
            >
              {t("join.internships")}
            </a>
          </li>
        </ul>

        <div className="mt-16 pt-8 border-t border-gray-300">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
            {t("join.resources")}
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                href="https://krectmt3.sd.tmu.ac.jp/laboratory.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-600 hover:text-brand-red transition-colors"
              >
                {t("join.handbook")}
              </a>
            </li>
            <li>
              <a
                href="https://www.tmu.ac.jp/english/university/access.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-600 hover:text-brand-red transition-colors"
              >
                {t("join.campus_map")}
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center bg-brand-black overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
              alt="Join Us"
              className="w-full h-full object-cover filter grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 px-8 md:px-16 lg:px-24 w-full">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 uppercase">
              {t("join.title")}
            </h1>
            <p className="text-xl text-gray-300 font-light tracking-wide max-w-2xl leading-relaxed">
              {t("join.subtitle")}
            </p>
          </div>
        </section>

        <div className="px-8 md:px-16 lg:px-24 py-16 space-y-16 md:space-y-24">
          {/* Programs */}
          <section id="programs" className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-black mb-8 uppercase">
              {t("join.programs")}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mb-16 text-justify">
              {t("join.programs.desc")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-brand-gray p-8 border-l-4 border-brand-black">
                <h3 className="text-2xl font-bold mb-4">{t("join.master")}</h3>
                <p className="text-gray-600">{t("join.master.desc")}</p>
              </div>
              <div className="bg-brand-gray p-8 border-l-4 border-brand-black">
                <h3 className="text-2xl font-bold mb-4">{t("join.doctor")}</h3>
                <p className="text-gray-600">{t("join.doctor.desc")}</p>
              </div>
            </div>
          </section>

          {/* Scholarships */}
          <section id="scholarships" className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-black mb-8 uppercase">
              {t("join.scholarships")}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mb-8 text-justify">
              {t("join.scholarships.desc")}
            </p>
            <a
              href="https://www.tmu.ac.jp/english/academics/graduate/systems.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-brand-black hover:text-brand-red transition-colors"
            >
              {t("join.funding.btn")} <ArrowRight size={16} className="ml-2" />
            </a>
          </section>

          {/* How to Apply */}
          <section id="how-to-apply" className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-black mb-8 uppercase">
              {t("join.how_to_apply")}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mb-16 text-justify">
              {t("join.apply.desc")}
            </p>

            <div className="bg-brand-gray p-8 md:p-12 border-l-4 border-brand-black">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4 block">
                {t("join.step1")}
              </span>
              <p className="text-gray-600 leading-relaxed mb-8 text-justify">
                {t("join.step1.desc")}
              </p>
              <a
                href="mailto:recruitment@takama-lab.edu"
                className="text-xl md:text-2xl font-bold tracking-tight text-brand-black hover:text-brand-red transition-colors"
              >
                recruitment@takama-lab.edu
              </a>
            </div>
          </section>

          {/* Open Positions */}
          <section id="open-positions" className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-black mb-8 uppercase">
              {t("join.open_positions")}
            </h2>
            <div className="space-y-6">
              <div className="border border-gray-200 p-8 hover:border-brand-red transition-colors">
                <h3 className="text-2xl font-bold mb-2">
                  {t("join.pos1.title")}
                </h3>
                <p className="text-gray-600 mb-4">{t("join.pos1.desc")}</p>
                <a
                  href="mailto:ytakama@tmu.ac.jp"
                  className="text-sm font-bold uppercase tracking-widest text-brand-red"
                >
                  {t("join.apply_now")}
                </a>
              </div>
              <div className="border border-gray-200 p-8 hover:border-brand-red transition-colors">
                <h3 className="text-2xl font-bold mb-2">
                  {t("join.pos2.title")}
                </h3>
                <p className="text-gray-600 mb-4">{t("join.pos2.desc")}</p>
                <a
                  href="mailto:ytakama@tmu.ac.jp"
                  className="text-sm font-bold uppercase tracking-widest text-brand-red"
                >
                  {t("join.apply_now")}
                </a>
              </div>
            </div>
          </section>

          {/* Internships */}
          <section id="internships" className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-black mb-8 uppercase">
              {t("join.internships")}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mb-8 text-justify">
              {t("join.internships.desc")}
            </p>
            <a
              href="mailto:ytakama@tmu.ac.jp"
              className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-brand-black hover:text-brand-red transition-colors"
            >
              {t("join.internships.btn")}{" "}
              <ArrowRight size={16} className="ml-2" />
            </a>
          </section>

          {/* Scholarships */}
          <section id="scholarships" className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-black mb-8 uppercase">
              Scholarships
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mb-8 text-justify">
              Tokyo Metropolitan University offers various scholarship programs for international students. These include MEXT (Japanese Government) scholarships, TMU tuition reduction/exemption programs, and other financial support options for graduate research students.
            </p>
            <a
              href="https://www.ic.tmu.ac.jp/english/study_abroad/scholarship.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-brand-black hover:text-brand-red transition-colors"
            >
              View Scholarship Information{" "}
              <ArrowRight size={16} className="ml-2" />
            </a>
          </section>

          {/* Laboratory Activities */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center fade-in-up">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-black mb-8 uppercase">
                {t("join.activities")}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                {t("join.activities.desc")}
              </p>
              <button className="bg-brand-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-red transition-colors">
                {t("research.learn_more")}
              </button>
            </div>
            <div className="order-1 lg:order-2 h-[500px] bg-gray-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=1200"
                alt="Laboratory Activities"
                className="w-full h-full object-cover filter grayscale hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </section>

          {/* Research Environment */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center fade-in-up">
            <div className="h-[500px] bg-gray-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                alt="Research Environment"
                className="w-full h-full object-cover filter grayscale hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-black mb-8 uppercase">
                {t("join.environment")}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                {t("join.environment.desc")}
              </p>
              <button className="bg-brand-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-red transition-colors">
                {t("research.learn_more")}
              </button>
            </div>
          </section>

          {/* Commitment */}
          <section className="border-t border-gray-200 pt-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-brand-black mb-8 uppercase">
              {t("join.commitment")}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl text-justify">
              {t("join.commitment.desc")}
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default JoinUs;
