import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import baseUrl from "../baseUrl";

const SearchPage = () => {
  const { query } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/posts/search?q=${query}`)
      .then(res => res.json())
      .then(data => setPosts(data.posts));
  }, [query]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Search results for "{query}"
      </h1>

      {posts.map(post => (
        <div key={post.id} className="mb-6 border-b pb-4">
          <h2 className="font-semibold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;