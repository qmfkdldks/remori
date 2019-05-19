import React from 'react'
import { Box, Flex } from 'rebass'
import { MainBannerContainer, HeroContentHeading, HeroContentText, StyledButton } from './style'
import Worker from '../../animations/Worker'
import { Shape1, Shape2, Shape3, Shape4, Shape5, Shape6, Shape7, Shape8 } from '../../atomic/Shape'

const MainBanner = () => {
  return (
    <MainBannerContainer>
      <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
        <Box p={3} px={[3, 5]} width={[1, 1, 1 / 2]}>
          {/* <HeroContent> */}
          <HeroContentHeading>Remori IT Startup Platform Argentina</HeroContentHeading>
          <HeroContentText>
            "Data Driven Business"
            We gather and measure all business' aspects of startups to eventually accumulate experience of success and failures.
            Share your idea and experience! Together we can build concrete foundation of our challenges.
            </HeroContentText>

          {/* <Link href="#"> */}
          <StyledButton>Be Our Partners!</StyledButton>
          {/* </Link> */}
          {/* </HeroContent> */}
        </Box>
        <Box p={3} mw={3} width={[1, 1, 1 / 2]}>
          <Worker />
        </Box>
      </Flex>

      <Shape1 />
      <Shape2 />
      <Shape3 />
      <Shape4 />
      <Shape5 />
      <Shape6 />
      <Shape7 />
      <Shape8 />

    </MainBannerContainer>
  )
}

export default MainBanner