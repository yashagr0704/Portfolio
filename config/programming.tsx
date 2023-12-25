import {SiCodeforces, SiCodechef, SiLeetcode} from "react-icons/si";
export type Platforms = 'Codeforces'|'Codechef'|'Leetcode'|'GeeksforGeeks'

export type PlatformsDetail = {
id:string
title:string
rating?:string
problems:string
url:string
icon?:any
}
export const Programming: {
  [key in Platforms]: PlatformsDetail
} = {
    Codeforces: {
    id:'1',
    title:'Codeforces',
    rating:'Pupil with rating approximately 1350',
    problems:'Solved more than 250 problems',
    url:'https://codeforces.com/profile/yashagr070403',
    icon:SiCodeforces
  },
  Codechef: {
    id:'2',
    title:'Codechef',
    rating:'4 star with rating approximately 1900',
    problems:'Solved more than 100 problems',
    url:'https://www.codechef.com/users/yash070403',
    icon:SiCodechef
  },
  Leetcode: {
    id:'3',
    title:'Leetcode',
    problems:'Solved more than 250 problems',
    url:'https://leetcode.com/yashagr070403/',
    icon:SiLeetcode
  },
  GeeksforGeeks: {
    id:'4',
    title:'GeeksforGeeks',
    problems:'Solved more than 150 problems',
    url:'https://geeksforgeeks.org/user/yashagr070403',
  },
  
   
}

export const PlatformsList = [
  Programming.Codeforces,
  Programming.Codechef,
  Programming.Leetcode,
  Programming.GeeksforGeeks

]