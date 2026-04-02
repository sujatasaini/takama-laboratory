import React from "react";
import { Mail, Globe, Linkedin, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const People: React.FC = () => {
  const { t } = useLanguage();

  const staff = [
    {
      name: "H. Shibata",
      role: "Assistant Professor",
      img: "/takama-laboratory/images/people/shibata.png",
    },
  ];

  const doctorCourse = [
    { name: "Shota Shimizu", role: "D3", img: "/takama-laboratory/images/people/profile-1.png" },
    { name: "Richard Lea", role: "D3", img: "/takama-laboratory/images/people/profile-2.png" },
    { name: "Koichi Tashiro", role: "D3", img: "/takama-laboratory/images/people/profile-6.png" },
    { name: "Runyu Ni", role: "D3", img: "/takama-laboratory/images/people/profile-4.png" },
    { name: "Sachiko Nakagawa", role: "D3", img: "/takama-laboratory/images/people/profile-5.png" },
    { name: "Sujata Saini", role: "D3", img: "/takama-laboratory/images/people/profile-3.png" },
    { name: "Sumarni Adi", role: "D3", img: "/takama-laboratory/images/people/profile-7.png" },
    { name: "Kohei Ishiguro", role: "D3", img: "/takama-laboratory/images/people/profile-8.png" },
    { name: "Anggit Ferdita Nugraha", role: "D3", img: "/takama-laboratory/images/people/profile-9.png" },
    { name: "Yukio Yamamoto", role: "D3", img: "/takama-laboratory/images/people/profile-10.png" },
    { name: "Motoki Taniguchi", role: "D3", img: "/takama-laboratory/images/people/profile-11.png" },
    { name: "Aomi Koyama", role: "D3", img: "/takama-laboratory/images/people/profile-12.png" },
    { name: "Yingyu Chen", role: "D3", img: "/takama-laboratory/images/people/profile-13.png" },
  ];

  const masterCourse = [
    { name: "Shunji Suzuki", role: "M2", img: "/takama-laboratory/images/people/profile-14.png" },
    { name: "Hitoshi Taniguchi", role: "M2", img: "/takama-laboratory/images/people/profile-15.png" },
    { name: "Takaki Itai", role: "M2", img: "/takama-laboratory/images/people/profile-16.png" },
    { name: "Ryo Ishino", role: "M2", img: "/takama-laboratory/images/people/profile-17.png" },
    { name: "Tsubasa Naganuma", role: "M2", img: "/takama-laboratory/images/people/profile-18.png" },
    { name: "Zeng Lingwei", role: "M2", img: "/takama-laboratory/images/people/profile-19.png" },
    { name: "Ade Imannurohma", role: "M1", img: "/takama-laboratory/images/people/profile-1.png" },
    { name: "Haruta Tamaki", role: "M1", img: "/takama-laboratory/images/people/profile-2.png" },
    { name: "Koki Dobashi", role: "M1", img: "/takama-laboratory/images/people/profile-3.png" },
    { name: "Hiroki Yamazaki", role: "M1", img: "/takama-laboratory/images/people/profile-4.png" },
    { name: "Mingxuan Zhang", role: "M1", img: "/takama-laboratory/images/people/profile-5.png" },
  ];

  const undergraduate = [
    { name: "Takumi Miyazawa", role: "B4", img: "/takama-laboratory/images/people/profile-6.png" },
    { name: "Akito Shoji", role: "B4", img: "/takama-laboratory/images/people/profile-7.png" },
    { name: "Taku Tanichi", role: "B4", img: "/takama-laboratory/images/people/profile-8.png" },
    { name: "Masato Imamura", role: "B4", img: "/takama-laboratory/images/people/profile-9.png" },
  ];

  const researchStudents = [
    { name: "Li Wei", role: "Researcher", img: "/takama-laboratory/images/people/profile-10.png" },
  ];

  const ProfileCard: React.FC<{
    person: { name: string; role: string; img: string };
  }> = ({ person }) => (
    <div className="flex flex-col items-center group">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-4 border-transparent group-hover:border-brand-red transition-colors duration-300">
        <img
          src={person.img}
          alt={person.name}
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <h4 className="text-lg font-bold tracking-tight text-brand-black">
        {person.name}
      </h4>
      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1 mb-3">
        {person.role}
      </p>
      <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href="https://krectmt3.sd.tmu.ac.jp/people.html"
          className="text-gray-400 hover:text-brand-black transition-colors"
        >
          <Globe size={16} />
        </a>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center bg-brand-black overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
            alt="Lab Members Discussion"
            className="w-full h-full object-cover filter grayscale"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 uppercase">
            {t("people.title")}
          </h1>
          <p className="text-xl text-gray-300 font-light tracking-wide max-w-2xl leading-relaxed">
            {t("people.subtitle")}
          </p>
        </div>
      </section>

      {/* Director Section */}
      <section className="py-16 md:py-24 border-b border-gray-200 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border border-gray-200 shadow-lg">
                <img
                  src="/takama-laboratory/images/people/takama.png"
                  alt="Prof. Yasufumi Takama"
                  className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-brand-black text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                T
              </div>
            </div>
            <div className="flex-1 text-center md:text-left pt-8">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4 block">
                {t("people.director")}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-brand-black mb-6">
                Prof. Yasufumi Takama
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-10 text-justify">
                {t("people.director.desc")}
              </p>

              <div className="flex flex-col sm:flex-row items-center md:items-start gap-8 border-t border-gray-200 pt-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">
                    Email
                  </span>
                  <span className="text-brand-black font-medium">
                    ytakama [at] tmu.ac.jp
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">
                    Social
                  </span>
                  <div className="flex space-x-4">
                    <a
                      href="https://krectmt3.sd.tmu.ac.jp/takama/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-brand-black transition-colors"
                    >
                      <Globe size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Members Sections */}
      <section className="py-16 md:py-24 bg-brand-gray fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {/* Staff */}
          <div>
            <h3 className="text-3xl font-bold tracking-tighter text-brand-black mb-12 border-b border-gray-300 pb-4">
              {t("people.staff")}
            </h3>
            <div className="flex flex-wrap gap-12">
              {staff.map((person, i) => (
                <ProfileCard key={i} person={person} />
              ))}
            </div>
          </div>

          {/* Doctor Course */}
          <div>
            <h3 className="text-3xl font-bold tracking-tighter text-brand-black mb-12 border-b border-gray-300 pb-4">
              {t("people.d3")}
            </h3>
            <div className="flex flex-wrap gap-12">
              {doctorCourse.map((person, i) => (
                <ProfileCard key={i} person={person} />
              ))}
            </div>
          </div>

          {/* Master Course */}
          <div>
            <h3 className="text-3xl font-bold tracking-tighter text-brand-black mb-12 border-b border-gray-300 pb-4">
              {t("people.m2")} & {t("people.m1")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {masterCourse.map((person, i) => (
                <ProfileCard key={i} person={person} />
              ))}
            </div>
          </div>

          {/* Undergraduate */}
          <div>
            <h3 className="text-3xl font-bold tracking-tighter text-brand-black mb-12 border-b border-gray-300 pb-4">
              {t("people.b4")}
            </h3>
            <div className="flex flex-wrap gap-12">
              {undergraduate.map((person, i) => (
                <ProfileCard key={i} person={person} />
              ))}
            </div>
          </div>

          {/* Research Students */}
          <div>
            <h3 className="text-3xl font-bold tracking-tighter text-brand-black mb-12 border-b border-gray-300 pb-4">
              {t("people.researcher")}
            </h3>
            <div className="flex flex-wrap gap-12">
              {researchStudents.map((person, i) => (
                <ProfileCard key={i} person={person} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Archive */}
      <section className="py-16 md:py-24 bg-white text-center fade-in-up">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-black mb-6 uppercase">
            {t("people.alumni.title")}
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            {t("people.alumni.desc")}
          </p>
          <Link
            to="/alumni"
            className="inline-block bg-brand-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-brand-red transition-colors"
          >
            {t("research.learn_more")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default People;
