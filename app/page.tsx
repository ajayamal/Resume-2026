"use client";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useRef } from "react";
import { Header } from "@/components/Header";
import { Profile } from "@/components/Profile";
import { SkillSection } from "@/components/SkillSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { PersonalProjects } from "@/components/PersonalProjects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

export default function Home() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <main className="font-outfit hyphens-manual bg-zinc-900 min-h-screen py-8">
      <div className="max-w-2xl md:max-w-letter mx-auto mb-6 flex justify-end px-4 no-print">
        <button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-zinc-200 transition-colors shadow-lg"
        >
          <FontAwesomeIcon icon={faDownload} />
          Download PDF
        </button>
      </div>

      {/* // <!-- Page --> */}
      <div
        ref={resumeRef}
        className="
          mx-auto
          page
          max-w-2xl
          md:max-w-letter
          shadow-2xl
          shadow-gray-700
          bg-zinc-950
          text-zinc-300
          pb-[16px]
          rounded-lg
          "
      >
        {/* <!-- Prodile section --> */}
        <Header />
        {/* <!-- End Profile Section --> */}

        {/* <!-- End Contact / Links --> */}

        {/* <!-- Profile --> */}
        <div className="mt-4 px-4 md:px-6">
          <Profile />
        </div>

        {/* <!-- Grid 2 1 --> */}
        <div className="grid grid-cols-3 gap-10 mt-4 px-4 md:px-6">
          {/* <!-- Column 2 (Right Side) Smaller --> */}
          <section className="col-span-3 md:col-span-1">
            {/* <!-- Skills Section --> */}
            <SkillSection />
            {/* <!-- End Skills Section --> */}

            <PersonalProjects />

            {/* <!-- Education Section --> */}
            <EducationSection />
            {/* <!-- End Education Section --> */}
          </section>
          {/* <!-- End Column 2 Smaller --> */}
          {/* <!-- Grid Items Span 2 Larger --> */}
          <section className="col-span-3 md:col-span-2">
            {/* <!-- End Profile --> */}

            {/* <!-- Experience Section --> */}
            <ExperienceSection />
            {/* <!-- End Experience Section --> */}

            {/* <!-- End Experience Section --> */}
          </section>
          {/* <!-- End Grid Items Span 2 Larger --> */}
        </div>
        {/* <!-- end Grid 2 1 --> */}
      </div>
      {/* // <!-- end Page --> */}
    </main>
  );
}
