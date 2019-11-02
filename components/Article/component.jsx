import React from "react";
import Link from "next/link";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton
} from "react-share";
import { Wrapper, Image, Head, Content, SharePost } from "./style";
import Icon from "../Icon";

const Article = ({ head, url, imgUrl, href, as, date, children }) => {
  return (
    <Wrapper>
      <Image src={imgUrl} />

      <Content>
        {/* <ul className="category">
                  <li>
                    <Link href="#">
                      <a>IT</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Mobile</a>
                    </Link>
                  </li>
                </ul> */}

        <Head>{head}</Head>

        {children}

        <SharePost className="share-Article">
          <ul>
            <li>
              <FacebookShareButton url={url}>
                <a>
                  <Icon name="Facebook" />
                </a>
              </FacebookShareButton>
            </li>
            <li>
              <TwitterShareButton url={url}>
                <a>
                  <Icon name="Twitter" />
                </a>
              </TwitterShareButton>
            </li>
            <li>
              <LinkedinShareButton url={url}>
                <a>
                  <Icon name="Instagram" />
                </a>
              </LinkedinShareButton>
            </li>
          </ul>
        </SharePost>
      </Content>
    </Wrapper>
  );
};

export default Article;
