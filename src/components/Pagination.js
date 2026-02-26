import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Pagination = () => {

  const { page, totalPages, handlePageChange } = useContext(AppContext);

  if (!totalPages) return null;

  return (
    <div className="mt-10 flex flex-col items-center gap-4 bg-white shadow-md py-4">

      <div className="flex items-center gap-6 bg-white px-6 py-3 rounded-xl shadow-md border border-gray-100">

        {/* Previous Button */}
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            ← Previous
          </button>
        )}

        {/* Page Info */}
        <p className="text-gray-700 font-semibold">
          Page <span className="text-blue-600">{page}</span> of{" "}
          <span className="text-blue-600">{totalPages}</span>
        </p>

        {/* Next Button */}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Next →
          </button>
        )}

      </div>

    </div>
  )
}

export default Pagination;