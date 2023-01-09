import React from 'react';
import { Spacer, HStack, Box, Image, Text } from '@chakra-ui/react';

function Nav() {

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <Box
      position="fixed"
      top='0'
      left='0'
      right='0'
      zIndex='9999'
    >
      <HStack
        backgroundColor='#2AAC80' // 背景色为RGB (42, 172, 128)
        color='white' // 内部字体颜色为白色
        h='60px' // 高度30px
      >
        <Spacer/>
        <Image src={require("./assets/Asset 0@3x_H.png")} onClick={handleClick("landing")} cursor='pointer' alt='' height='80%' />
        <Spacer />
        <Text color='white' href='#home' cursor='pointer' onClick={handleClick("landing")}>Home</Text>
        <Spacer maxWidth='50px' />
        <Text color='white' href='#products' cursor='pointer' onClick={handleClick("products")}>Products</Text>
        <Spacer maxWidth='50px' />
        <Text color='white' href='#about' cursor='pointer' onClick={handleClick("about")}>About</Text>
        <Spacer maxWidth='50px' />
        <Text color='white' href='#appointment' cursor='pointer' onClick={handleClick("appointment")}>Appointment</Text>
        <Spacer />
      </HStack>
    </Box>
  )
}

export default Nav;
