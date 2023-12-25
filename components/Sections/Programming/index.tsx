import { memo } from 'react'
import {
  Heading,
  Text,
  Link,
  Stack,
  SimpleGrid,
  Divider,
  useColorModeValue,
  Icon
} from '@chakra-ui/react'
import { PlatformsList } from 'config/programming'

const  Programming = () => {
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
  const borderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.100')
  const alphaHover = useColorModeValue(
    'rgba(49, 151, 149, 0.06)',
    'rgba(157, 236, 249, 0.06)'
  )
const emphasis = useColorModeValue('teal.500', 'cyan.200')

  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Programming
      </Heading>
      <Text variant="description">
        I have a keen interest in competitive programming. Check out my various platforms
      </Text>
      
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 10 }}>
        {PlatformsList.map((item:any) => (
          <Link
            aria-label={item.title}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            key={item.id}
            color="currentcolor"
            _hover={{ textDecoration: 'none' }}
            transition="all 0.5s ease"
            role="group"
          >
            <Stack
              spacing={3}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="1em"
              padding={{ base: '1em', '2xl': '1.5em' }}
              height="100%"
              transition="all 0.2s ease-in-out"
              backgroundColor={bg}
              _hover={{
                background: alphaHover,
              }}
              as="article"
            >
              <Heading fontSize="larger" paddingX={2}>
                {item.title} <Icon marginBottom={1} marginLeft={4} as={item.icon} color={emphasis}  />
              </Heading>
              <Divider borderColor="#A6A6A6" width="95%" />
              <Stack spacing={1}>
                <Heading
                  fontSize="small"
                  paddingX={2}
                  variant="accentAlternative"
                >
                  {item.rating}
                </Heading>
                <Heading fontSize="smaller" variant="description" paddingX={2}>
                  {item.problems}
                </Heading>
              </Stack>
            </Stack>
          </Link>
        ))}
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Programming)
