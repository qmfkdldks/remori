import React from "react";
import Link from "next/link";
import TruncateString from "react-truncate-string";
import {
  Wrapper,
  ImageWrapper,
  ContentWrapper,
  Head,
  Body,
  ReadMoreButton,
  Anchor
} from "./style";
import Icon from "../Icon";

/* <ImageWrapper>
<Link href={href} as={as} passHref prefetch>
  <a>
    <img src={img} alt="image" />
  </a>
</Link>

<Date className="date">
  <Icon name="Calendar" size={35} />
  {date}
</Date>
</ImageWrapper> */

const Post = ({ head, content, img, href, as, date }) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Head>
          <Link href={href} as={as} passHref prefetch>
            <Anchor>{head}</Anchor>
          </Link>
        </Head>

        <Body>
          <TruncateString text={content} truncateAt={150} />
        </Body>
        <Link href={href} as={as} passHref prefetch>
          <ReadMoreButton>
            Read More
            <Icon name="ArrowRight" />
          </ReadMoreButton>
        </Link>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Post;
