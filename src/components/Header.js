import React from 'react'
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4">

        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-800 tracking-tight">
          Personal Blog
        </h1>

        {/* ADD SEARCHBAR HERE */}
        <div className="mt-4">
          <SearchBar />
        </div>

      </div>
    </header>
  )
}

export default Header;