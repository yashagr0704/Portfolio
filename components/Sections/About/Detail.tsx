import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Tooltip,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiReact,
  SiNextDotJs,
  SiNodeDotJs,
  SiExpress,
  SiTailwindcss,
  SiMysql
} from 'react-icons/si'
import { GiCoffeePot } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        What i do.
      </Heading>
      <Text variant="description">
        I am a final year under graduate student at <b>IIT(ISM) Dhanbad</b>.I am a{' '}
        <Tooltip
         
          aria-label="Tech Debt?"
          hasArrow
        >
          <Text as="span" variant="emphasis">
            <b>Full Stack Web Developer</b>
          </Text>
        </Tooltip>{' '}
        and {' '}
        <Tooltip
          
          aria-label="Tech Debt?"
          hasArrow
        >
          <Text as="span" variant="emphasis">
            <b>Competitive Coder</b>
          </Text>
        </Tooltip>{' '}. I have keen interest in <b>Data Structures and Algorithms </b> and implementing them in real life.
        <br /> <br />
        Here are few technologies that are cup of my{' '}
        <Tooltip
          label="I only drink tea if I needed too!"
          aria-label="I hate Tea!"
          hasArrow
        >
          <Text as="span" variant="emphasis" textDecorationLine="line-through">
            tea
          </Text>
        </Tooltip>{' '}
        coffee <Icon as={GiCoffeePot} color={emphasis} />.
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiCplusplus} color={emphasis} fontSize="2em" />
            C++
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
            Javascript (ES6+)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            Typescript
          </ListItem>

          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNodeDotJs} color={emphasis} fontSize="2em" />
            Node
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
          <ListIcon as={SiTailwindcss} color={emphasis} fontSize="2em" />
            Tailwind CSS 
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiExpress} color={emphasis} fontSize="2em" />
            Express
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            React
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextDotJs} color={emphasis} fontSize="2em" />
            NextJS
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiMongodb} color={emphasis} fontSize="2em" />
            MongoDB
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
          <ListIcon as={SiMysql} color={emphasis} fontSize="2em" />
            MySQL
          </ListItem>
        </List>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
