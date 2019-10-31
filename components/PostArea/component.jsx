import React from "react";
import { RichText, Date } from "prismic-reactjs";
import { Section } from "./style";
import Post from "../Post";
import { linkResolver, hrefResolver } from "../../config/prismic";

const PostArea = ({ posts }) => {
  return (
    <Section>
      {posts.results.map(post => (
        <Post
          img={post.data.image.thumbnail.url}
          head={RichText.render(post.data.head)}
          content={RichText.asText(post.data.content)}
          date={Date(post.data.date).toString()}
          href={hrefResolver(post)}
          as={linkResolver(post)}
        />
      ))}
    </Section>
  );
};

export default PostArea;
