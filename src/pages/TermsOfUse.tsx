import React from "react";
import { useLanguage } from "../context/LanguageContext";

const TermsOfUse: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-white min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-black mb-12 uppercase">
          Terms of Use
        </h1>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the Takama Laboratory website (the "Site"),
              you agree to comply with and be bound by these Terms of Use. If
              you do not agree to these terms, please do not use this Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">
              2. Use of the Site
            </h2>
            <p>
              The Site is intended for academic, research, and informational
              purposes related to the activities of the Takama Laboratory at
              Tokyo Metropolitan University. You agree to use the Site only for
              lawful purposes and in a manner that does not infringe upon the
              rights of, or restrict or inhibit the use and enjoyment of the
              Site by, any third party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">
              3. Intellectual Property Rights
            </h2>
            <p>
              All content on the Site, including but not limited to text,
              graphics, logos, images, audio clips, digital downloads, data
              compilations, and software, is the property of the Takama
              Laboratory, Tokyo Metropolitan University, or its content
              suppliers and is protected by international copyright laws.
            </p>
            <p className="mt-4">
              You may not reproduce, distribute, modify, display, perform, or
              otherwise use any content from the Site without the prior written
              consent of the Takama Laboratory, except for personal,
              non-commercial use or as permitted by applicable fair use
              doctrines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">
              4. User Conduct
            </h2>
            <p>When using the Site, you agree not to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Engage in any activity that could disable, overburden, or impair
                the proper functioning of the Site.
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the Site,
                other accounts, computer systems, or networks connected to the
                Site.
              </li>
              <li>
                Use any robot, spider, or other automated means to access the
                Site for any purpose without our express written permission.
              </li>
              <li>
                Transmit any viruses, worms, defects, Trojan horses, or any
                items of a destructive nature.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">
              5. Disclaimer of Warranties
            </h2>
            <p>
              The Site and all information, content, materials, and services
              included on or otherwise made available to you through the Site
              are provided on an "as is" and "as available" basis. The Takama
              Laboratory makes no representations or warranties of any kind,
              express or implied, as to the operation of the Site or the
              information, content, materials, or services included on or
              otherwise made available to you through the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              To the full extent permissible by applicable law, the Takama
              Laboratory and Tokyo Metropolitan University will not be liable
              for any damages of any kind arising from the use of the Site,
              including, but not limited to direct, indirect, incidental,
              punitive, and consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">
              7. Changes to Terms
            </h2>
            <p>
              We reserve the right to make changes to our Site, policies, and
              these Terms of Use at any time. Your continued use of the Site
              following the posting of changes will mean that you accept and
              agree to the changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
