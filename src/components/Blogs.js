import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner"; // if you have one
import { useEffect } from "react";

const Blogs = () => {

  const { loading, posts } = useContext(AppContext);

  console.log("posts:", posts);
console.log("loading:", loading);

  return (
    <div className="max-w-2xl mx-auto p-4">

      {
        loading ? (
          <Spinner />
        ) : posts.length === 0 ? (
          <div className="text-center text-xl font-semibold">
            No Posts Found
          </div>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="border-b py-6">

              <h2 className="text-2xl font-bold mb-2">
                {post.title}...
              </h2>

              <p className="text-gray-600 mb-3">
                {post.body}
              </p>

              <div className="flex gap-2 flex-wrap mb-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-gray-200 text-sm px-2 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="text-sm text-gray-500">
                👍 {post.reactions.likes} | 👎 {post.reactions.dislikes} | 👁 {post.views}
              </div>

            </div>
          ))
        )
      }

    </div>
  );
};

export default Blogs;  