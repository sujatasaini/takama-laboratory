import React from "react";
import { useLanguage } from "../context/LanguageContext";

const PrivacyPolicy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-white min-h-screen py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-brand-black mb-12 uppercase">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">
              1. Introduction
            </h2>
            <p>
              Welcome to the Takama Laboratory website, affiliated with Tokyo
              Metropolitan University. We are committed to protecting your
              privacy and ensuring that your personal information is handled in
              a safe and responsible manner in accordance with standard
              university protocols and applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">
              2. Information Collection
            </h2>
            <p>
              We may collect the following types of information when you
              interact with our website:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>Voluntary Information:</strong> Information you provide
                when contacting us via email, applying for positions, or
                submitting inquiries (e.g., name, email address, academic
                background).
              </li>
              <li>
                <strong>Automated Information:</strong> Standard server log
                information, such as IP addresses, browser types, and access
                times, collected automatically for website analytics and
                security purposes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">
              3. Use of Information
            </h2>
            <p>
              The information collected is strictly used for academic, research,
              and administrative purposes, including:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Responding to your inquiries and correspondence.</li>
              <li>
                Processing applications for laboratory membership, internships,
                or collaborative research.
              </li>
              <li>Improving the content and functionality of our website.</li>
              <li>
                Maintaining the security and integrity of our digital
                infrastructure.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">
              4. Data Sharing and Disclosure
            </h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally
              identifiable information to outside parties. Information may only
              be shared:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                With authorized university personnel for administrative or
                academic evaluation purposes.
              </li>
              <li>When required by law or to comply with legal processes.</li>
              <li>
                To protect the rights, property, or safety of the laboratory,
                the university, or others.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">
              5. Data Security
            </h2>
            <p>
              We implement a variety of security measures to maintain the safety
              of your personal information. However, please note that no method
              of transmission over the Internet or electronic storage is 100%
              secure. We strive to use commercially acceptable means to protect
              your personal information but cannot guarantee its absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4">
              6. Contact Information
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, you may
              contact us using the information below:
            </p>
            <p className="mt-4 font-medium">
              Takama Laboratory
              <br />
              Tokyo Metropolitan University
              <br />
              Email: ytakama@tmu.ac.jp
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
