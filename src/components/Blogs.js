import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {

  const { loading, posts } = useContext(AppContext);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">

      {
        loading ? (
          <div className="flex justify-center items-center h-60">
            <Spinner />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center text-2xl font-semibold text-gray-600">
            No Posts Found
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <div 
                key={post.id} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
              >

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 cursor-pointer transition">
                  {post.title}
                </h2>

                {/* Body */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.body}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-600 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-3">
                  <div className="flex gap-4">
                    <span>👍 {post.reactions.likes}</span>
                    <span>👎 {post.reactions.dislikes}</span>
                  </div>
                  <span>👁 {post.views} views</span>
                </div>

              </div>
            ))}
          </div>
        )
      }

    </div>
  );
};

export default Blogs;