import React from 'react'

export default function SkillsCard({title, imgURL, altTxt, skillDesc}) {
  return (
    <div className='card-container'>
        <div>
            <h4>{title}</h4>
        </div>
        <div className='card-img-container'>
            <img src={imgURL} alt={altTxt}/>
        </div>
        <div className='card-desc-container'>
            <p>
                {skillDesc}
            </p>
        </div>
    </div>
  )
}
