import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-white">
      {/* Hero Section - contact-4 (cherry blossoms wide) */}
      <section className="relative h-[50vh] flex items-center bg-brand-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/takama-laboratory/images/contact/contact-4.png"
            alt="Contact"
            className="w-full h-full object-cover filter grayscale"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 uppercase">
            {t("contact.title")}
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 border-b border-gray-200 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-black mb-8 uppercase">
                {t("contact.subtitle")}
              </h2>
              <div className="w-24 h-1 bg-brand-black"></div>
            </div>
            <div>
              <p className="text-xl text-gray-600 leading-relaxed mb-12 text-justify">
                {t("contact.info")}
              </p>
              <div className="bg-brand-gray p-8 border-l-4 border-brand-black">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-black mb-4 block">
                  Note on Operations
                </span>
                <p className="text-gray-600 leading-relaxed text-justify">
                  Takama Laboratory currently operates under a hybrid model.
                  Staff and researchers may be teleworking. Please confirm
                  appointments at least 48 hours in advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Column Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-2 fade-in-up">
        {/* Access (Left) */}
        <div className="bg-brand-black text-white p-12 md:p-16 lg:p-24 flex flex-col justify-center">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 block">
            Location 01
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 uppercase">
            {t("contact.access")}
          </h2>

          <div className="space-y-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 block">
                By Train
              </span>
              <p className="text-lg text-gray-300 leading-relaxed text-justify">
                {t("contact.access.desc")}
              </p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 block">
                By Road
              </span>
              <p className="text-lg text-gray-300 leading-relaxed text-justify">
                Enter via the Main Gate. Visitor parking is available with prior
                registration at the security desk.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <a
              href="https://www.tmu.ac.jp/english/university/access.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-black transition-colors"
            >
              {t("contact.map")}
            </a>
          </div>
        </div>

        {/* Map - contact-5 (Google Maps) */}
        <div className="relative h-[600px] lg:h-auto bg-gray-200 overflow-hidden flex items-center justify-center">
          <img
            src="/takama-laboratory/images/contact/contact-5.png"
            alt="TMU Hino Campus Map"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 right-8 text-right bg-brand-black/80 p-4 rounded-md backdrop-blur-sm">
            <h3 className="text-2xl md:text-4xl font-bold tracking-tighter text-white uppercase drop-shadow-lg">
              {t("contact.hino")}
            </h3>
            <p className="text-xs md:text-sm font-bold tracking-widest text-white/80 uppercase">
              {t("contact.tmu")}
            </p>
          </div>
        </div>

        {/* Building - contact-1 (building with red cables) */}
        <div className="relative h-[600px] lg:h-auto bg-brand-gray overflow-hidden order-4 lg:order-3">
          <img
            src="/takama-laboratory/images/contact/contact-1.png"
            alt="TMU Hino Campus"
            className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* Postal Address (Right) */}
        <div className="bg-brand-black text-white p-12 md:p-16 lg:p-24 flex flex-col justify-center order-3 lg:order-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 block">
            Mailing 02
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 uppercase">
            {t("contact.address")}
          </h2>

          <address className="not-italic text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-16">
            TAKAMA LABORATORY
            <br />
            Tokyo Metropolitan University
            <br />
            Hino Campus
            <br />
            6-6 Asahigaoka, Hino-shi
            <br />
            Tokyo 191-0065, Japan
          </address>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 block">
              {t("contact.email")}
            </span>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-white border-b-2 border-white pb-2">
              info-sd{"{at}"}ml.tmu.ac.jp
            </span>
          </div>
        </div>
      </section>

      {/* Circular Highlights */}
      <section className="py-16 md:py-24 bg-brand-gray fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center group">
              <div className="w-64 h-64 rounded-full overflow-hidden mb-8 border border-gray-300 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/takama-laboratory/images/contact/contact-1.png"
                  alt="Facility"
                  className="w-full h-full object-cover filter grayscale"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                {t("contact.facility")}
              </span>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-80 h-80 rounded-full overflow-hidden mb-8 border border-gray-300 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/takama-laboratory/images/contact/contact-2.png"
                  alt="Campus"
                  className="w-full h-full object-cover filter grayscale"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Campus
              </span>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-64 h-64 rounded-full overflow-hidden mb-8 border border-gray-300 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/takama-laboratory/images/contact/contact-3.png"
                  alt="Environment"
                  className="w-full h-full object-cover filter grayscale"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                {t("contact.env")}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
