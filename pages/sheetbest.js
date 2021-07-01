import { Flex, Heading, Input, Button, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react"
import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const sheetbest = () => {
  const [data, setData] = useState();
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")

  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/2a05af4f-1069-4130-b0a3-fcfd0d7318e6?_format=index"
      );
      const data = await res.json();
      setData(Object.keys(data).map((key) => data[key]));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (rowIndex) => {
    try {
      const res = await fetch(
        `https://sheet.best/api/sheets/2a05af4f-1069-4130-b0a3-fcfd0d7318e6/${rowIndex}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        const updatedData = data.filter((_, i) => i !== rowIndex);
        setData(updatedData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>

      <VStack spacing={20} height="100vh" direction="column" pt={25}>
        <Button onClick={toggleColorMode}>Toggle Color!</Button>
        <form action="sheetbestapi" method="POST">
          <Flex direction="column" background={formBackground} p={12} rounded={6}>

            <Heading mb={1}>
              Request Shuttle
            </Heading>

            <Input placeholder="Name*" variant="filled" mb={3} required="true" />
            <Input placeholder="Email Address*" variant="filled" mb={3} type="email" required="true" />
            <Input placeholder="Mobile #*" variant="filled" mb={3} type="number" required="true" />
            <Input placeholder="Dropoff Address*" variant="filled" mb={3} required="true" />
            <Input placeholder="RO #" variant="filled" mb={3} required="true" />

            <Button mb={6} colorScheme="teal" type="submit">Submit</Button>


          </Flex>
        </form>
      </VStack>



    </>
  )
}

export default sheetbest

