import Header from "./components/Header" 
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
// import AppContextProvider from "./context/AppContext";
import { AppContext } from "./context/AppContext";
import React from "react"


export default function App() {
  return (<div>
    
     <div>
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
     </div>

  </div>
  
)
}
