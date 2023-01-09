import React from 'react';
import FullScreenSection from "./FullScreenSection";
import { VStack, HStack, Heading, Box, Image, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// 定义一个layout结构叫Card，方便重复使用
const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      color="black"
      backgroundColor="white"
      cursor="pointer"
      borderRadius="15"
    >
      <Image borderRadius="15" src={imageSrc} alt={title} marginTop={20} maxWidth={'450'} />
      <VStack spacing={4} p={4} padding={20} alignItems="flex-start">
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as="h2" size="md">
            {title}
          </Heading>
        </HStack>
        <Text color="#64748b" fontSize="lg">
          {description}
        </Text>
        <HStack spacing={2} alignItems="center">
          <p>See more</p>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

// 定义一个array，显示每个Card里的内容
const products = [
  {
    title: "New Arrivals",
    description:
      "Our new arrivals are the most on trend and in-season plants! These plants are new to our greenhouse and are all the rage. They are perfect to liven up any home, office or garden!",
    getImageSrc: () => require("./assets/new arrivals.jpg"),
  },
  {
    title: "Landscape Design",
    description:
      "Thoughtful landscape design is the key to creating an outdoor oasis, we rounded up inspiring landscaping ideas and examples that truly make the most of their natural surroundings.",
    getImageSrc: () => require("./assets/landscape design.jpg"),
  },
  {
    title: "Seasonal Services",
    description:
      "Lucky Shrub is a team of premier New Jersey landscapers who can help you with seasonal lawn maintenance, hardscape designs, retaining walls, masonry, snow removal, and more.",
    getImageSrc: () => require("./assets/seasonal services.jpg"),
  },
  {
    title: "Event Planning",
    description:
      "Greenhouse wedding venues feature see-through glass walls and ceilings that make you and your guests feel like you’re outside, without being exposed to the elements.",
    getImageSrc: () => require("./assets/event planning.png"),
  },
];


function Main_Products() {
  return (
    <FullScreenSection
      padding='60px'
      backgroundColor='bisque'
      align='stretch'
      alignItems="flex-start" 
      color='black'
      id="products-section"
    >
      <Heading as="h1">
        PRODUCTS
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={20}
      >
        {products.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            url="#"
            imageSrc={item.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
}

export default Main_Products;
