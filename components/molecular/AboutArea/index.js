import React from 'react'
import {
    AboutAreaWrapper,
    SectionTitle,
    Text,
    Bar,
    AboutInnerArea,
    Heading
} from './style'
import { Box, Flex, Image } from 'rebass'
import TeamImage from '../../../images/1.png'

class AboutArea extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <AboutAreaWrapper p={3}>

                <Flex flexWrap="wrap">
                    <Box width={[1, 1 / 2]}>
                        <Image src={TeamImage} alt="Remori" />
                    </Box>

                    <Box width={[1, 1 / 2]} p={3}>
                        <SectionTitle>
                            <Heading>About Us</Heading>
                            <Bar></Bar>

                            <Text>We need a system that helps us to be tolerant to failures.</Text>
                        </SectionTitle>
                        <Text># 3 goals of our platform</Text>
                        <Text>Failures are the lessons that we should get through, but it shouldn't drown us.
                        </Text>
                        <Text>Our goal is to build secure foundation which allows us to commit failures fast and get key lessons quickly with out big damages.
                        </Text>
                        <Text>Mesurement are the most important tool to clirify aspects of business.
                        </Text>
                        <Text>Our goal is to make sure to collect all data needed to use it in every decisions.
                        </Text>

                        <Text>Sharing ideas, experiences, data, opportunites among us will help everyone in this community.
                        </Text>
                        <Text>Our goal is to create open records which help us grow with healthy community.
                        </Text>
                    </Box>
                </Flex>

                <AboutInnerArea>
                    <Flex flexWrap="wrap">
                        <Box width={[1, 1 / 3]} p={2}>
                            <Heading>Our History</Heading>
                            <Text>After various failures and lessons, we decided to create "Remori" to help individuals and entrepreneurs who have great creativity. We started this platform at 2019.</Text>
                        </Box>

                        <Box width={[1, 1 / 3]} p={2}>
                            <Heading>Our Mission</Heading>
                            <Text>We are building platform that connects individuals and entrepreneurs. We hope we can share experiences, knowledges, opportunities and data to make our community stronger.
                                </Text>
                        </Box>

                        <Box width={[1, 1 / 3]} p={2}>
                            <Heading>Who we are</Heading>
                            <Text>We are aiming to create transparent community. So we can share experience and opportunites with confidence.</Text>
                        </Box>
                    </Flex>
                </AboutInnerArea>

            </AboutAreaWrapper>
        )
    }

}

export default AboutArea