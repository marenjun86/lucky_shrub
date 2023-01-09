import { useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { Heading, VStack, HStack, Text, Button, Select, FormLabel, Spacer, Box, Input, Textarea } from '@chakra-ui/react';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validateDate = (date) => {
  return String(date)
    .toLowerCase()
    .match(
      /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])$/ //yyyy-mm-dd
      // /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ //mm/dd/yyyy
    );
}

function Main_Appointment() {
  const [name, setName] = useState({ value: "", isValid: true });
  const [email, setEmail] = useState({ value: "", isValid: true });
  const [date, setDate] = useState({ value: "", isValid: true });
  const [guest, setGuest] = useState(1);
  const [comment, setComment] = useState("");
  const [purpose, setPurpose] = useState("retail");

  const getIsFormValid = () => {
    // Implement this function
    return (
      name.isValid &&
      email.isValid &&
      date.isValid
    );
  };

  const clearForm = () => {
    // Implement this function
    setName({ value: "", isValid: true });
    setEmail({ value: "", isValid: true });
    setDate({ value: "", isValid: true });
    setGuest(1);
    setPurpose("retail");
    setComment("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submit Successfully! We look forward to seeing you soon!");
    clearForm();
  };

  return (
    <FullScreenSection
      padding='60px'
      backgroundColor='#EDE7F1' //237, 231, 241
      align='stretch'
      color='black'
      id="appointment-section"
    >
      <VStack minWidth="800px" alignItems="flex-start">
        <Heading as='h1'>
          MAKE AN APPOINTMENT
        </Heading>
        <Box p={6} rounded="md" w="100%" fontSize='20'>
          <VStack paddingLeft='10' paddingRight='10' align='left'>
            <FormLabel paddingTop='20'>Name</FormLabel>
            <Input borderRadius='5px' borderWidth='1px' fontSize='20' height='30' placeholder='name' value={name.value}
              onChange={(e) => setName({ ...name, value: e.target.value })}
              onBlur={() => setName({ ...name, isValid: (name.value.length === 0) ? false : true })}
            />
            <Text color='red' fontStyle='italic' >{!name.isValid && "* Invalid"}</Text>

            <Spacer minHeight='10px' />

            <FormLabel>Email Address</FormLabel>
            <Input borderRadius='5px' borderWidth='1px' fontSize='20' height='30' placeholder='user@domain.com' value={email.value}
              onChange={(e) => setEmail({ ...email, value: e.target.value })}
              onBlur={() => setEmail({ ...email, isValid: validateEmail(email.value) ? true : false })}
            />
            <Text color='red' fontStyle='italic' >{!email.isValid && "* Invalid"}</Text>

            <Spacer minHeight='10px' />

            <FormLabel>Date</FormLabel>
            <Input type='date' borderRadius='5px' borderWidth='1px' fontSize='20' height='30' value={date.value}
              onChange={(e) => setDate({ ...date, value: e.target.value })}
              onBlur={() => {
                setDate({ ...date, isValid: validateDate(date.value) ? true : false });
                console.log(date.value);
              }}
            />
            <Text color='red' fontStyle='italic' >{!date.isValid && "* Invalid"}</Text>

            <Spacer minHeight='10px' />

            <FormLabel>Guests</FormLabel>
            <HStack>
              <Button borderRadius='5px' width='30px' height='30px' fontSize='20' onClick={() => setGuest(Math.max(1, guest - 1))}>
                -
              </Button>
              <FormLabel>{guest}</FormLabel>
              <Button borderRadius='5px' width='30px' height='30px' fontSize='20' onClick={() => setGuest(guest + 1)}>
                +
              </Button>
            </HStack>

            <Spacer minHeight='10px' />

            <FormLabel>Visit Purpose</FormLabel>
            <Select borderRadius='5px' borderWidth='1px' fontSize='20' height='30' value={purpose} onChange={(e) => setPurpose(e.target.value)}>
              <option value="retail">Retail</option>
              <option value="wholesale">Wholesale</option>
            </Select>

            <Spacer minHeight='10px' />

            <FormLabel>Comment</FormLabel>
            <Textarea borderRadius='5px' borderWidth='1px' fontSize='20' height='80' placeholder='your comment' value={comment} onChange={(e) => setComment(e.target.value)} />

            <Spacer minHeight='30px' />

            <Button borderRadius='5px' fontSize='20' height='40px' onClick={handleSubmit} disabled={!getIsFormValid()}>Submit</Button>

          </VStack>
        </Box>
      </VStack>
    </FullScreenSection>
  );
}

export default Main_Appointment;
