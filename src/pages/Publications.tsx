import React from "react";
import { Download, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Publications: React.FC = () => {
  const { t } = useLanguage();

  const categories = [
    t("pub.awards"),
    t("pub.japanese"),
    t("pub.journals"),
    t("pub.conferences"),
    t("pub.books"),
    t("pub.tech"),
  ];

  const awards = [
    {
      date: "2023.11",
      title: "Best Paper Award",
      venue: "IEEE International Conference on Systems, Man, and Cybernetics",
      authors: "K. Takama, Y. Tanaka, S. Sato",
    },
    {
      date: "2022.05",
      title: "Outstanding Research Presentation",
      venue: "The Japanese Society for Artificial Intelligence (JSAI)",
      authors: "M. Suzuki, K. Takama",
    },
  ];

  const journals = [
    {
      title:
        '"Advanced Attention Models for Context-Aware User Interface Optimization in High-Density Information Environments."',
      venue: "JOURNAL OF HCI RESEARCH",
      vol: "VOL. 45, NO. 3",
      pp: "PP. 210-225, 2023",
    },
    {
      title:
        '"Neural Networks for Behavioral Pattern Recognition in Collaborative Laboratory Environments."',
      venue: "INTERNATIONAL JOURNAL OF INTELLIGENCE",
      vol: "VOL. 12, NO. 1",
      pp: "PP. 15-32, 2022",
    },
  ];

  const conferences = [
    {
      title:
        "Multi-Agent Systems for Adaptive Resource Allocation in Research Networks",
      venue:
        "Proceedings of the 20th International Conference on Autonomous Agents",
      location: "Rome, Italy | June 2023",
    },
    {
      title:
        "Visualizing Implicit Knowledge Exchange in Interdisciplinary Teams",
      venue: "IEEE VIS 2022 Short Papers",
      location: "Oklahoma City, USA | October 2022",
    },
    {
      title:
        "Synthesizing Human Intuition with Algorithmic Precision in Design Labs",
      venue: "CHI '22 Extended Abstracts",
      location: "New Orleans, USA | May 2022",
    },
  ];

  const japanesePublications = [
    {
      title: "情報推薦システムにおけるユーザのコンテキストモデリング",
      venue: "人工知能学会論文誌",
      vol: "Vol. 38, No. 2",
      pp: "pp. 1-10, 2023",
    },
  ];

  const books = [
    {
      title: "Web Intelligence and Big Data",
      publisher: "Springer",
      year: "2021",
      authors: "Y. Takama, et al.",
    },
  ];

  const technicalReports = [
    {
      title: "A Survey on Visual Analytics for High-Dimensional Data",
      institution: "Tokyo Metropolitan University",
      year: "2023",
      number: "TMU-TR-2023-01",
    },
  ];

  return (
    <div className="w-full bg-white flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-64 shrink-0 bg-brand-gray border-r border-gray-200 p-8 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto hidden lg:block">
        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8 pb-4 border-b border-gray-300">
          {t("pub.category")}
        </h4>
        <ul className="space-y-6">
          {categories.map((cat) => (
            <li key={cat}>
              <a
                href={`#${cat.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-bold tracking-tight text-brand-black hover:text-brand-red transition-colors uppercase"
              >
                {cat}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center bg-brand-black overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img
              src="/takama-laboratory/images/people/publications.png"
              alt="Publications"
              className="w-full h-full object-cover filter grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 px-8 md:px-16 lg:px-24 w-full">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 uppercase">
              {t("pub.title")}
            </h1>
            <p className="text-xl text-gray-300 font-light tracking-wide max-w-3xl leading-relaxed">
              {t("pub.subtitle")}
            </p>
          </div>
        </section>

        <div className="px-8 md:px-16 lg:px-24 py-16 space-y-16 md:space-y-24">
          {/* Featured Recognition */}
          <section className="flex flex-col lg:flex-row items-center gap-16 fade-in-up">
            <div className="w-64 h-64 rounded-full border-2 border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
              <img
                src="/takama-laboratory/images/people/publications.png"
                alt="Award Ceremony"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4 block">
                {t("pub.featured")}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-brand-black mb-6 leading-tight">
                {t("pub.featured.title")}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl text-justify">
                {t("pub.featured.desc")}
              </p>
              <div className="w-16 h-px bg-gray-300 mt-8"></div>
            </div>
          </section>

          {/* Awards List */}
          <section
            id={t("pub.awards").toLowerCase().replace(/\s+/g, "-")}
            className="fade-in-up"
          >
            <h3 className="text-2xl font-bold tracking-tighter text-brand-black mb-12 flex items-center uppercase">
              <span className="w-8 h-px bg-brand-black mr-4"></span>{" "}
              {t("pub.awards")}
            </h3>
            <div className="space-y-12">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row gap-4 md:gap-12 group"
                >
                  <div className="w-24 text-xs font-bold uppercase tracking-widest text-gray-400 pt-1">
                    {award.date}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold tracking-tight text-brand-black mb-2 group-hover:text-brand-red transition-colors">
                      {award.title}
                    </h4>
                    <p className="text-sm text-gray-600 italic mb-2">
                      {award.venue}
                    </p>
                    <p className="text-sm text-gray-500">{award.authors}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Japanese Publications */}
          <section
            id={t("pub.japanese").toLowerCase().replace(/\s+/g, "-")}
            className="fade-in-up"
          >
            <h3 className="text-2xl font-bold tracking-tighter text-brand-black mb-12 flex items-center uppercase">
              <span className="w-8 h-px bg-brand-black mr-4"></span>{" "}
              {t("pub.japanese")}
            </h3>
            <div className="space-y-8">
              {japanesePublications.map((pub, i) => (
                <div
                  key={i}
                  className="bg-brand-gray p-8 md:p-12 border-l-4 border-brand-black hover:border-brand-red transition-colors"
                >
                  <h4 className="text-xl font-medium tracking-tight text-brand-black mb-6 leading-relaxed">
                    {pub.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                    <span>{pub.venue}</span>
                    <span className="w-px h-4 bg-gray-300"></span>
                    <span>{pub.vol}</span>
                    <span className="w-px h-4 bg-gray-300"></span>
                    <span>{pub.pp}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Journal Papers */}
          <section
            id={t("pub.journals").toLowerCase().replace(/\s+/g, "-")}
            className="fade-in-up"
          >
            <h3 className="text-2xl font-bold tracking-tighter text-brand-black mb-12 flex items-center uppercase">
              <span className="w-8 h-px bg-brand-black mr-4"></span>{" "}
              {t("pub.journals")}
            </h3>
            <div className="space-y-8">
              {journals.map((journal, i) => (
                <div
                  key={i}
                  className="bg-brand-gray p-8 md:p-12 border-l-4 border-brand-black hover:border-brand-red transition-colors"
                >
                  <h4 className="text-xl font-medium tracking-tight text-brand-black mb-6 leading-relaxed">
                    {journal.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                    <span>{journal.venue}</span>
                    <span className="w-px h-4 bg-gray-300"></span>
                    <span>{journal.vol}</span>
                    <span className="w-px h-4 bg-gray-300"></span>
                    <span>{journal.pp}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* International Conferences */}
          <section
            id={t("pub.conferences").toLowerCase().replace(/\s+/g, "-")}
            className="fade-in-up"
          >
            <h3 className="text-2xl font-bold tracking-tighter text-brand-black mb-12 flex items-center uppercase">
              <span className="w-8 h-px bg-brand-black mr-4"></span>{" "}
              {t("pub.conferences")}
            </h3>
            <div className="space-y-12">
              {conferences.map((conf, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-200 pb-8 group"
                >
                  <div className="flex-1">
                    <h4 className="text-xl font-bold tracking-tight text-brand-black mb-2 group-hover:text-brand-red transition-colors">
                      {conf.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">{conf.venue}</p>
                    <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                      {conf.location}
                    </p>
                  </div>
                  <a
                    href="https://krectmt3.sd.tmu.ac.jp/research.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-brand-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-red transition-colors shrink-0"
                  >
                    <Download size={14} className="mr-2" /> PDF
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Books */}
          <section
            id={t("pub.books").toLowerCase().replace(/\s+/g, "-")}
            className="fade-in-up"
          >
            <h3 className="text-2xl font-bold tracking-tighter text-brand-black mb-12 flex items-center uppercase">
              <span className="w-8 h-px bg-brand-black mr-4"></span>{" "}
              {t("pub.books")}
            </h3>
            <div className="space-y-12">
              {books.map((book, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row gap-4 md:gap-12 group"
                >
                  <div className="w-24 text-xs font-bold uppercase tracking-widest text-gray-400 pt-1">
                    {book.year}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold tracking-tight text-brand-black mb-2 group-hover:text-brand-red transition-colors">
                      {book.title}
                    </h4>
                    <p className="text-sm text-gray-600 italic mb-2">
                      {book.publisher}
                    </p>
                    <p className="text-sm text-gray-500">{book.authors}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Reports */}
          <section
            id={t("pub.tech").toLowerCase().replace(/\s+/g, "-")}
            className="fade-in-up"
          >
            <h3 className="text-2xl font-bold tracking-tighter text-brand-black mb-12 flex items-center uppercase">
              <span className="w-8 h-px bg-brand-black mr-4"></span>{" "}
              {t("pub.tech")}
            </h3>
            <div className="space-y-12">
              {technicalReports.map((report, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-200 pb-8 group"
                >
                  <div className="flex-1">
                    <h4 className="text-xl font-bold tracking-tight text-brand-black mb-2 group-hover:text-brand-red transition-colors">
                      {report.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {report.institution}
                    </p>
                    <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                      {report.number} | {report.year}
                    </p>
                  </div>
                  <a
                    href="https://krectmt3.sd.tmu.ac.jp/research.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-brand-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-red transition-colors shrink-0"
                  >
                    <Download size={14} className="mr-2" /> PDF
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Publications;
