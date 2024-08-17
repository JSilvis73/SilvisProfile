import React from "react";
import SkillsCard from "./SkillsCard";
import { faJs, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons";



export default function Skills() {
  return (
    <div className="mt-6">
      <div className="container mx-auto  p-4 bg-scifi/50 rounded-lg bg-glow text-white text-center">
        <h3 className="text-3xl font-bold">Skills</h3>
        <p className="mt-2 border-2 border-black bg-slate-500/95 rounded-lg p-2">
          Of course, you can't get anywhere without them!
          <br />
          Here are some of mine.
        </p>
        <div className="flex md:flex-row mt-4 gap-4 justify-center">
          <SkillsCard
            title="HTML"
            imgURL=""
            faIcon={faHtml5}
            altTxt="HTML Symbol"
            skillDesc="Basic language used for structural design of websites."
          />
           <SkillsCard
            title="CSS"
            imgURL=""
            faIcon={faCss3}
            altTxt="CSS Symbol"
            skillDesc="Basic language used for artistic design of websites."
          />
            <SkillsCard
            title="JavaScript"
            imgURL=""
            faIcon={faJs}
            altTxt="JavaScript Symbol"
            skillDesc="Basic language used for artistic design of websites."
          />

        </div>
      </div>
    </div>
  );
}
