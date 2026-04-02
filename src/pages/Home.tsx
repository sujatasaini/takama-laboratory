import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Award,
  Target,
  Users,
  Globe,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Logo from "../components/Logo";

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!heroRef.current) return;

    const width = heroRef.current.clientWidth;
    const height = heroRef.current.clientHeight;

    const svg = d3
      .select(heroRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("position", "absolute")
      .style("top", 0)
      .style("left", 0)
      .style("z-index", 0);

    // Create a subtle particle/wave effect
    const numParticles = 100;
    const particles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
    }));

    const colorScale = d3
      .scaleLinear<string>()
      .domain([0, height / 2, height])
      .range(["#ff003c", "#3366ff", "#ff6600"]); // Pink/Red to Blue/Purple to Orange

    const circles = svg
      .selectAll("circle")
      .data(particles)
      .enter()
      .append("circle")
      .attr("r", (d) => d.radius)
      .attr("fill", (d) => colorScale(d.y))
      .attr("opacity", 0.6);

    const lines = svg
      .selectAll("line")
      .data(d3.pairs(particles))
      .enter()
      .append("line")
      .attr("stroke", (d) => colorScale(d[0].y))
      .attr("stroke-width", 0.5)
      .attr("opacity", 0.2);

    const timer = d3.timer(() => {
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      circles.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      lines
        .attr("x1", (d) => d[0].x)
        .attr("y1", (d) => d[0].y)
        .attr("x2", (d) => d[1].x)
        .attr("y2", (d) => d[1].y)
        .attr("opacity", (d) => {
          const dist = Math.hypot(d[0].x - d[1].x, d[0].y - d[1].y);
          return dist < 100 ? 0.2 - dist / 500 : 0;
        });
    });

    return () => {
      timer.stop();
      svg.remove();
    };
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black"
      >
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <Logo className="w-full max-w-lg mb-6" light />
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto mt-8 text-justify">
            {t("home.hero.subtitle")}
          </p>
          <div className="mt-12">
            <span className="text-xs text-gray-500 tracking-widest uppercase">
              {t("home.hero.scroll")}
            </span>
            <div className="w-px h-16 bg-gray-600 mx-auto mt-4 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-black leading-tight mb-8">
                {t("home.intro.title")}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 text-justify">
                {t("home.intro.desc")}
              </p>
              <Link
                to="/research"
                className="inline-flex items-center justify-center bg-brand-black text-white px-8 py-4 rounded-md text-sm font-bold uppercase tracking-widest hover:bg-brand-red transition-colors"
              >
                {t("home.intro.btn")} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-[600px] bg-gray-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                alt="Laboratory Environment"
                className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Study at TMU Section */}
      <section className="bg-brand-black text-white py-16 md:py-24 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200"
                alt="Tokyo Metropolitan University"
                className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-60"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
                {t("home.study.title")}
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-10 text-justify">
                {t("home.study.desc")}
              </p>
              <Link
                to="/join-us"
                className="inline-block bg-white text-brand-black px-8 py-4 rounded-md text-sm font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-colors"
              >
                {t("home.study.btn")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Grid */}
      <section className="py-16 md:py-24 bg-brand-gray fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end border-b border-gray-300 pb-8 mb-16">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-black">
              {t("home.latest.title")}
            </h2>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 hidden sm:block">
              {t("home.latest.subtitle")}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: BookOpen,
                title: t("home.news.1.title"),
                desc: t("home.news.1.desc"),
                link: "/publications",
              },
              {
                icon: Award,
                title: t("home.news.2.title"),
                desc: t("home.news.2.desc"),
                link: "/publications",
              },
              {
                icon: Target,
                title: t("home.news.3.title"),
                desc: t("home.news.3.desc"),
                link: "/research",
              },
              {
                icon: Globe,
                title: t("home.news.4.title"),
                desc: t("home.news.4.desc"),
                link: "/shub",
              },
            ].map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="group cursor-pointer block"
              >
                <div className="mb-6 text-gray-400 group-hover:text-brand-red transition-colors">
                  <item.icon size={48} strokeWidth={1} />
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-4 uppercase">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 text-justify">
                  {item.desc}
                </p>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-red group-hover:text-brand-black transition-colors">
                  {t("home.read_more")}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
