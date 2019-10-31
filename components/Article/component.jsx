import React from "react";
import Link from "next/link";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton
} from "react-share";
import { Wrapper, ImageWrapper, Head, Content, SharePost } from "./style";
import Icon from "../Icon";

const Article = ({ head, url, img, href, as, date, children }) => {
  return (
    <Wrapper>
      <div className="blog-details">
        <ImageWrapper>
          {/* <img
                  src={require("../../static/images/blog-details.jpg")}
                  alt="blog-details"
                /> */}
        </ImageWrapper>

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
                <Link href="#">
                  <a>
                    <Icon name="Instagram" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>
                    <Icon name="Linkedin" />
                  </a>
                </Link>
              </li>
            </ul>
          </SharePost>
        </Content>
      </div>
    </Wrapper>
  );
};

export default Article;
