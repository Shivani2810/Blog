import { createContext, useState } from "react";
import baseUrl from "../baseUrl";
import { useEffect } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  async function fetchBlogData(page = 1) {
    try {
      setLoading(true);

      const limit = 25;
      const skip = (page - 1) * limit;

      const result = await fetch(
        `${baseUrl}/posts?limit=${limit}&skip=${skip}`
      );

      const data = await result.json();
      console.log(data);

      setPage(page); // current page
      setPosts(data.posts); // correct key
      setTotalPages(Math.ceil(data.total / limit)); // calculate manually
      console.log("Total pages:", Math.ceil(data.total / limit));
    } 
    catch (error) {
      console.log("Error in fetching data");
      setPage(1);
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
    setPage(page)
    fetchBlogData(page);
  }

 
  const value = {
    posts,
    setPosts,
    page,
    setPage,
    loading,
    setLoading,
    totalPages,
    setTotalPages,
    fetchBlogData,
    handlePageChange,
   
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;