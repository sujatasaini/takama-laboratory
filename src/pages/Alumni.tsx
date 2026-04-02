import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Alumni = () => {
  useScrollAnimation();

  const alumniList = [
    {
      year: "2023",
      name: "Kenji Sato",
      degree: "Ph.D.",
      current: "Google Japan",
    },
    { year: "2023", name: "Yuki Tanaka", degree: "M.S.", current: "Sony" },
    {
      year: "2022",
      name: "Hiroshi Watanabe",
      degree: "M.S.",
      current: "Toyota",
    },
    {
      year: "2021",
      name: "Aya Suzuki",
      degree: "Ph.D.",
      current: "Assistant Professor, TMU",
    },
    { year: "2020", name: "Takeshi Ito", degree: "B.S.", current: "NTT Data" },
  ];

  return (
    <div className="pt-20">
      <section className="bg-brand-black text-white py-32 fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Alumni
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Our former members and their current endeavors.
          </p>
        </div>
      </section>

      <section className="py-24 fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-brand-black">
                  <th className="py-4 px-6 font-bold uppercase tracking-widest text-sm text-gray-500">
                    Graduation Year
                  </th>
                  <th className="py-4 px-6 font-bold uppercase tracking-widest text-sm text-gray-500">
                    Name
                  </th>
                  <th className="py-4 px-6 font-bold uppercase tracking-widest text-sm text-gray-500">
                    Degree
                  </th>
                  <th className="py-4 px-6 font-bold uppercase tracking-widest text-sm text-gray-500">
                    Current Affiliation
                  </th>
                </tr>
              </thead>
              <tbody>
                {alumniList.map((alumnus, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6 font-mono text-brand-red">
                      {alumnus.year}
                    </td>
                    <td className="py-4 px-6 font-medium text-brand-black">
                      {alumnus.name}
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {alumnus.degree}
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {alumnus.current}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
