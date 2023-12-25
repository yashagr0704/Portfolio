import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaGithub,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/yashagr._/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yash-agarwal-175376203/',
    icon: FaLinkedin,
  },
  {
    label: 'Github',
    href: 'https://github.com/yashagr0704',
    icon: FaGithub,
  },
  {
    label:'Gmail',
    href:'mailto:yashagr070403@gmail.com',
    icon: FaEnvelope,
  }
]
