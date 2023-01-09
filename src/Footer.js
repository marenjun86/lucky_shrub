import React from 'react';
import { Spacer, HStack } from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; 
import { 
  faFacebook, 
  faTwitter, 
  faTiktok, 
 } from "@fortawesome/free-brands-svg-icons"; 

const socials = [ 
  { 
    icon: faEnvelope, 
    url: "mailto: hello@example.com", 
  },
  { 
    icon: faFacebook, 
    url: "https://www.facebook.com/", 
  }, 
  { 
    icon: faTwitter, 
    url: "https://www.twitter.com/", 
  }, 
  { 
    icon: faTiktok, 
    url: "https://tiktok.com/", 
  }
 ]; 

function Footer() {
  return (
    <HStack
      backgroundColor='#2AAC80' // 背景色为RGB (42, 172, 128)
      color='white' // 内部字体颜色为白色
      marginTop='10px' // 上下margin各为30px
      borderRadius='10px' // 圆角10px
      h='80px' // 高度
    >
    <Spacer/>
    <h5>© 2022 Lucky Shrub. All rights reserved.</h5> 
    <Spacer/>
    <nav> 
      <HStack spacing={25}> 
        {socials.map(({ icon, url }) => ( 
          <a 
            key={url} 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
          > 
            <FontAwesomeIcon icon={icon} size="2x" color="white" key={url} /> 
          </a> 
        ))} 
      </HStack> 
    </nav> 
    <Spacer/>
  </HStack>
  );
}

export default Footer;
