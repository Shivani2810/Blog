import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import PostDetails from "./components/PostDetails";
import TagPage from "./components/TagPage";
import SearchPage from "./components/SearchPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col">

      {/* Header Always Visible */}
      <Header />

      {/* Routes Control What Shows Below */}
      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <div className="flex flex-col flex-1">
              <Blogs />
              <Pagination />
            </div>
          }
        />

        {/* POST DETAILS */}
        <Route path="/post/:id" element={<PostDetails />} />

        {/* TAG PAGE */}
        <Route path="/tag/:tag" element={<TagPage />} />

        {/* SEARCH PAGE */}
        <Route path="/search/:query" element={<SearchPage />} />

      </Routes>

    </div>
  );
}