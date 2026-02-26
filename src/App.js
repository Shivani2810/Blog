import Header from "./components/Header" 
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
// import AppContextProvider from "./context/AppContext";
import { AppContext } from "./context/AppContext";
import React from "react"


export default function App() {
  return (<div>
    
     <div className="bg-blue-100 flex flex-col h-screen">
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
     </div>

     <Routes>
      <Route path="/post/:id" element={<PostDetails />} />
      <Route path="/tag/:tag" element={<TagPage />} />

     </Routes>

  </div>
  
)
}
