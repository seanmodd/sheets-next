import { Flex, Heading, Input, Button, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react"
import React from 'react'

const mypage = () => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")


  return (
    <>

      <VStack spacing={20} height="100vh" direction="column" pt={25}>
        <Button onClick={toggleColorMode}>Toggle Color!</Button>
        <form action="https://sheetdb.io/api/v1/kowx8uge7jpuu" method="POST">
          <Flex direction="column" background={formBackground} p={12} rounded={6}>

            <Heading mb={1}>
              Request Shuttle
            </Heading>

            <Input name="data[name]" placeholder="Name*" variant="filled" mb={3} required="true" />
            <Input name="data[email]" placeholder="Email Address*" variant="filled" mb={3} type="email" required="true" />
            <Input name="data[mobile]" placeholder="Mobile #*" variant="filled" mb={3} type="number" required="true" />
            <Input name="data[address]" placeholder="Dropoff Address*" variant="filled" mb={3} required="true" />
            <Input name="data[ro#]" placeholder="RO #" variant="filled" mb={3} required="true" />

            <Button mb={6} colorScheme="teal" type="submit">Submit</Button>


          </Flex>
        </form>
      </VStack>

    </>
  ) 
}

export default mypage

