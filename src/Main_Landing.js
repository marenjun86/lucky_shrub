import React from 'react';
import { Spacer, VStack, Button } from '@chakra-ui/react';
import Background from './assets/plants on sale.jpg';
import FullScreenSection from './FullScreenSection';

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

function Main_Landing() {
  return (
    <FullScreenSection
      padding='60px'
      backgroundImage={`url('${Background}')`}
      backgroundSize='cover' // 如果页面宽度大于图片，则拉伸图片填充整个页面宽度
      backgroundPosition='center' // 图片居中
      backgroundColor='black'
      minWidth='90%' // 保证图片左右充满
      color='white'
      id="landing-section"
    >
      <VStack>
        <h1>
          PLANTS ON SALE
        </h1>
        <h2>
          Save 10% on site between Jan 15 and Feb 10 with our New Year sale!
        </h2>
        <Button type="button" onClick={handleClick("appointment")} cursor='pointer' style={{ borderRadius: '10px', borderColor: '#2AAC80', paddingLeft: '20px', paddingRight: '20px', marginTop: '30px', marginBottom: '60px' }}>
          <h2>Plan a Visit</h2>
        </Button>

        <video
          muted
          loop
          autoPlay
          src={require("./assets/garden_plants.mp4")}
          type="video/mp4"
          width="65%"
        >
        </video>

        <Spacer />
        <h4 style={{ textAlign: 'center', paddingLeft: '250px', paddingRight: '250px', marginTop: "30px" }}>
          Clearance gardening supplies at Lucky Shurb! Here you'll find a wide selection of affordable gardening tools and discounted accessories that will complete your gardening arsenal.
        </h4>
      </VStack>
    </FullScreenSection>
  );
}

export default Main_Landing;
