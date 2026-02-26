import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import baseUrl from "../baseUrl";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-4">{post.body}</p>
      <div className="text-sm text-gray-500">
        👍 {post.reactions.likes} | 👁 {post.views}
      </div>
    </div>
  );
};

export default PostDetails;