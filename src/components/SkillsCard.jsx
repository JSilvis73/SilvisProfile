import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function SkillsCard({
  title,
  imgURL,
  faIcon,
  altTxt,
  skillDesc,
}) {
  return (
    <div className="card-container border-2 border-black bg-slate-500 rounded-lg p-2 h-48 w-36 ">
      <div>
        <h4>{title}</h4>
      </div>
      {imgURL ? (
        <img src={imgURL} aria-label={altTxt} />
      ) : (
        faIcon && (
            <FontAwesomeIcon className="size-16 m-2 hover:text-blue-400 transition-colors duration-300" icon={faIcon} />
        )
      )}

      <div className="card-desc-container">
        <p className="text-sm">{skillDesc}</p>
      </div>
    </div>
  );
}
