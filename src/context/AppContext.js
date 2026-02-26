import { createContext, useState } from "react";
import baseUrl from "../baseUrl";
import { useEffect } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  async function fetchBlogData(page = 1) {
    try {
      setLoading(true);

      const limit = 10;
      const skip = (page - 1) * limit;

      const result = await fetch(
        `${baseUrl}/posts?limit=${limit}&skip=${skip}`
      );

      const data = await result.json();
      console.log(data);

      setPages(page); // current page
      setPosts(data.posts); // correct key
      setTotalPages(Math.ceil(data.total / limit)); // calculate manually
    } catch (error) {
      console.log("Error in fetching data");
      setPages(1);
      setPosts([]);
      setTotalPages(null);
    }

    setLoading(false);
  }
  useEffect(() => {
    fetchBlogData(1);
  }, []);


  function handlePageChange(page)
  {
    setPages(page)
    fetchBlogData(page);
  }

  const value = {
    posts,
    setPosts,
    pages,
    setPages,
    loading,
    setLoading,
    totalPages,
    setTotalPages,
    fetchBlogData,
    handlePageChange
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;