import { Flex, Heading, Input, Button, useColorMode, useColorModeValue } from "@chakra-ui/react"
import React from 'react'

const mypage = () => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")


  return (
    <div>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Heading mb={1}>
            Log In
          </Heading>
          <Input placeholder="lazar@chakra-ui.com" variant="filled" mb={3} type="email" />
          <Input placeholder="******" variant="filled" mb={6} type="password" />
          <Button mb={6} colorScheme="teal">Log In</Button>
          <Button onClick={toggleColorMode}>Toggle Color!</Button>
        </Flex>
      </Flex>

    </div>
  )
}

export default mypage

