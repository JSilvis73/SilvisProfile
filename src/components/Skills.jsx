import React from "react";
import SkillsCard from "./SkillsCard";

export default function Skills() {
  return (
    <div className="mt-6">
      <div className="container mx-auto  p-4 bg-scifi/50 rounded-lg bg-glow text-white text-center">
        <h3 className="text-3xl font-bold">Skills</h3>
        <p className="bg-slate-500/95 rounded-lg p-2">
          This paragraph will be used to talk about skills
        </p>
        <div className="flex md:flex-row mt-4 gap-4 justify-center">
          <SkillsCard
            title="HTML"
            imgURL=""
            altTxt="HTML Symbol"
            skillDesc="Basic language used for structural design of websites."
          />
           <SkillsCard
            title="CSS"
            imgURL=""
            altTxt="CSS Symbol"
            skillDesc="Basic language used for artistic design of websites."
          />
            <SkillsCard
            title="JavaScript"
            imgURL=""
            altTxt="JavaScript Symbol"
            skillDesc="Basic language used for artistic design of websites."
          />

        </div>
      </div>
    </div>
  );
}