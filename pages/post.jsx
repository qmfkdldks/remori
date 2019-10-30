import React from "react";
import { RichText, Date } from "prismic-reactjs";
import Link from "next/link";
import { client } from "../config/prismic";

const Post = props => (
  <div>
    <Link href="/">
      <a>back to blog list</a>
    </Link>
    {RichText.render(props.post.data.head)}
    <span>{Date(props.post.data.date).toString()}</span>
    {RichText.render(props.post.data.content)}
  </div>
);

Post.getInitialProps = async context => {
  const { uid } = context.query;
  const post = await client.getByUID("image-post", uid);

  return { post };
};

export default Post;
