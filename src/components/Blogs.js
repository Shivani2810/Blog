import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

const Blogs = () => {

  const { loading, posts } = useContext(AppContext);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 flex-1 overflow-y-auto px-4">

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
                className="bg-green-100 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-green-800 hover:-translate-y-1 transform"
              >

                {/* Title */}
                

<Link to={`/post/${post.id}`}>
  <h2 className="text-2xl font-bold hover:text-blue-600">
    {post.title}
  </h2>
</Link>

                {/* Body */}
                <p className="text-black-600 mb-4 leading-tight">
                  {post.body}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 ">
                  {post.tags.map((tag, index) => (
                    <Link to={`/tag/${tag}`} key={index}>
  <span className="bg-blue-100 px-3 py-1 rounded-full">
    #{tag}
  </span>
</Link>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-3">
                  <div className="flex gap-4">
                    <span className="text-red-800">👍 {post.reactions.likes}</span>
                    <span className="text-red-800">👎 {post.reactions.dislikes}</span>
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