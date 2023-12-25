
export type School = 'IIT'|'Spectrum'

export type SchoolDetail = {
id:string
title:string
duration:string
coursename:string
description:string
}
export const Education: {
  [key in School]: SchoolDetail
} = {
  IIT: {
    id:'1',
    title:'IIT(ISM) Dhanbad',
    duration:"Dec 2020 - May 2024",
    coursename:"Bachelor of Technology",
    description:"Currently final year under grad student pursuing bachelor's in electronics and communication engineering with CGPA of 7.5"
  },
  Spectrum:{
    id:'2',
    title:'Spectrum Global Academy',
    duration:"July 2018 - July 2020",
    coursename:"AICSSE",
    description:"Completed 12th class examination from RBSE board with PCM as majors with 94%."
  }
  
   
}

export const EducationList = [
  Education.IIT,
  Education.Spectrum
]