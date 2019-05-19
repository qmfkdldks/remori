import React from 'react'
// import Link from 'next/link'
import { SigleWorkWrapper, SingleWork, WorkContent, Heading, Text, Image } from './style'
// import { Flex, Box } from 'rebass'
// import * as Icon from 'react-feather'

const ProjectCard = (props) => {
    const { img, title, description } = props
    return (
        <SigleWorkWrapper>
            <SingleWork className="single-works">
                <Image src={img} />

                {/* <Link href="#">
                        <a className="icon">
                            <Icon.Settings />
                        </a>
                    </Link> */}

                <WorkContent className="works-content">
                    <Heading>
                        {/* <Link href="#"> */}
                        {/* <a> */}
                        {title}
                            {/* </a> */}
                        {/* </Link> */}
                    </Heading>
                    <Text>{description}</Text>
                </WorkContent>
            </SingleWork>
        </SigleWorkWrapper>
    )
}

export default ProjectCard