import React from 'react';
import { HStack, Spacer, Heading, Image, Box, Text } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';

function Main_About() {
  return (
    <FullScreenSection
      padding='60px'
      backgroundColor='#EE9972'
      align='stretch'
      color='white'
      id="about-section"
    >
      <Heading as="h1" marginBottom={50} >
        ABOUT US
      </Heading>
      <HStack>
        <Box>
          <Text fontSize={22}>
            Based in Tuscon, Arizona, Lucky Shrub is a medium-sized garden design firm that specializes in garden design and creation, maintenance and landscaping. The company also runs a small plant nursery that sells indoor and outdoor plants, making them a one-stop shop for clients to "transform any space into an oasis you can be proud of".
          </Text>
          <Text fontSize={22}>
            Lucky Shrub was started by a husband and wife team, Jason and Maria, who share a long-time love for plants. Jason is the garden architect. He creates and oversees all designs while managing his team of landscapers. Maria manages all the marketing for the company and oversees the nursery.
          </Text>
        </Box>
        <Spacer minW={100}/>
        <Image src={require("./assets/about us.jpg")} alt='' borderRadius="15" width='600px' />
      </HStack>
    </FullScreenSection>
  );
}

export default Main_About;
