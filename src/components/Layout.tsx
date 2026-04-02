import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Languages, Menu, X } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useLanguage } from "../context/LanguageContext";
import Logo from "./Logo";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  useScrollAnimation();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: t("nav.research"), path: "/research" },
    { name: t("nav.people"), path: "/people" },
    { name: t("nav.publications"), path: "/publications" },
    { name: t("nav.shub"), path: "/shub" },
    { name: t("nav.join"), path: "/join-us" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-black">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 border-b border-gray-100 transition-all duration-300 ${isMenuOpen ? "bg-white" : "bg-white/90 backdrop-blur-md"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 z-50">
              <Logo className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium uppercase tracking-wider hover:text-brand-red transition-colors ${
                    location.pathname === link.path
                      ? "text-brand-red"
                      : "text-gray-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-brand-black text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                {t("nav.contact")}
              </Link>
              <button
                onClick={toggleLanguage}
                className="text-gray-600 hover:text-brand-black transition-colors flex items-center space-x-1"
                title={`Switch to ${language === "en" ? "Japanese" : "English"}`}
              >
                <Languages size={20} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4 z-50">
              <button
                onClick={toggleLanguage}
                className="text-gray-600 hover:text-brand-black transition-colors flex items-center space-x-1"
                title={`Switch to ${language === "en" ? "Japanese" : "English"}`}
              >
                <Languages size={20} />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-brand-black focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-white h-screen w-full z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden pt-24`}
        >
          <div className="flex flex-col items-center space-y-8 p-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-medium uppercase tracking-widest hover:text-brand-red transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-medium uppercase tracking-widest hover:text-brand-red transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-brand-black text-white py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <Logo className="h-12 w-auto" light />
              </Link>
              <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                {t("footer.desc")}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
                {t("footer.nav")}
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/research"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {t("nav.research")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/people"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {t("nav.people")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/publications"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {t("nav.publications")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
                {t("footer.contact")}
              </h4>
              <address className="not-italic text-sm text-gray-300 space-y-2">
                <p>Tokyo Metropolitan University</p>
                <p>6-6 Asahigaoka, Hino,</p>
                <p>Tokyo 191-0065, Japan</p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Takama Laboratory.{" "}
              {t("footer.rights")}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                to="/terms"
                className="text-gray-500 hover:text-white transition-colors text-sm"
              >
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
