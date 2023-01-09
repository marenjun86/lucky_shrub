import React from "react";
import FullScreenSection from "./FullScreenSection";
import { FormControl, FormLabel, Box, Button, VStack, Input, Select, Heading} from '@chakra-ui/react'

function Main_Appointment() {
  return (
    <FullScreenSection
      padding='60px'
      backgroundColor='#EDE7F1' //237, 231, 241
      align='stretch'
      color='black'
      id="appointment-section"
    >
      <Heading as="h1" marginTop='50'>
        MAKE AN APPOINTMENT
      </Heading>
      <VStack paddingLeft='20px' paddingRight='20px' alignItems="flex-start">
      <Box p={6} rounded="md" w="100%"> 
        <FormControl>
          <FormLabel htmlFor="firstName">Name</FormLabel>
          <Input
            id="firstName"
            name="firstName"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="type"># of visitors</FormLabel>
          <Select id="type" name="type">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="comment">Your message</FormLabel>
          <Input
            id="comment"
            name="comment"
          />
        </FormControl>
        <Button type="submit" colorScheme="purple" width="full">
          Submit
        </Button>
        </Box>
      </VStack>
    </FullScreenSection>
  );
}

export default Main_Appointment;
