import { Link } from '@chakra-ui/react'

export type Company = 'Parishram'| 'Jio' | 'Minemagma'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light?: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Parishram: {
    name: 'Parishram',
    longName: 'Parishram Education',
    subDetail: '',
    url: 'https://tests.parisharam.com/signin',
    position: 'Front-end Developer(Part-Time)',
    duration: 'Dec 2023 - Feb 2024',
    logo: {
      light: '/worked_at_logos/Parishram/Parishram_logo.jpg',
      dark: '/worked_at_logos/Parishram/Parishram_logo.jpg',
    },
    roles: [
      <>
  Developed a robust test portal using the <b>MERN stack</b>, incorporating MongoDB, Express.js, React.js, and Node.js for scalability and performance.
      </>,
      <>
       Implemented key features like user authentication, interactive dashboards, and categorized tests, enhancing user experience and facilitating efficient test taking
      </>,

     
      <> Successfully facilitated over <b>1000 test sessions</b>, demonstrating the platform's scalability and reliability in handling a large user base while ensuring a secure testing environment.       
      </>,
     
    ],
  },
  Jio: {
    name: 'Jio',
    longName: 'Jio Platforms Limited',
    subDetail: '',
    url: 'https://www.jio.com/platforms',
    position: 'Software Engineer Development Intern',
    duration: 'May 2023 - July 2023',
    logo: {
      light: '/worked_at_logos/Jio/jio_logo.png',
      dark: '/worked_at_logos/Jio/jio_logo.png',
    },
    roles: [
      <>
  Contributed to the development of <b>Automator.AI</b> under <b>Jio Meet Team</b>. Developed the entire frontend and
integrated the APIs from scratch.
      </>,
      <>
       This platform helps users with minimal coding exposure to build end to end test automation using plain english with the
   added benefit of <b>30%</b> reduction in testing time
      </>,

     
      <>
    Utilized <b>Next.js, TypeScript and Tailwind CSS </b>for crafting the UI and implementing the requried functionality leads
to reduction the initial load time by approximately <b>25%</b> and achieved improvement of approximately <b>30%</b> in overall
application efficiency
        
      </>,
      <>
    Implemented features like <b>infinte folder structure, visual testing, dynamic animations </b>using lottie leads to
approximately <b>20%</b> improvement in performance and many more enhancing user engagement within
      </>,
    ],
  },
  Minemagma: {
    name: 'Minemagma',
    longName: 'Minemagma',
    subDetail: 'A Mining based Consulting firm',
    url: 'https://minemagma.com/',
    position: 'Full Stack Developer Intern',
    duration: 'Sept 2022 - Feb 2023',
    logo: {
      light: '/worked_at_logos/mm/minemagma.png',
      dark: '/worked_at_logos/mm/minemagma.png',
    },
    roles: [
      <>
      Responsible for the development of MineMagma's Compliance Management System using the<b> MERN stack</b>.
      </>,
      <>
        Implemented automation features, reducing compliance management process time by <b>one month</b>.

      </>,
      <>
       Communalized compliance data for over <b>20 mining sites</b>, leading to improved data accuracy and accessibility.
      </>,
      
      <>
       Achieved a <b>50% increase</b> in customer retention by providing a transparent and efficient compliance process.
      </>,
    ],
  },
   
}

export const ExperiencesList = [
  Experiences.Parishram,
  Experiences.Jio,
  Experiences.Minemagma,
]
