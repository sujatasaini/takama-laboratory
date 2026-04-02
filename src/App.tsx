/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import Research from "./pages/Research";
import People from "./pages/People";
import Publications from "./pages/Publications";
import SHub from "./pages/SHub";
import JoinUs from "./pages/JoinUs";
import Contact from "./pages/Contact";
import Alumni from "./pages/Alumni";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <Router basename="/takama-laboratory">
        <Preloader />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/people" element={<People />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/shub" element={<SHub />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfUse />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}
