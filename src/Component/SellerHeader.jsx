import React from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
const data = []

function SellerHeader() {
  const [searchQuery, setSearchQuery] = useState('')
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value)
  }
  const filteredData = data.filter((item) => {
    // Perform filtering logic here based on your data structure
    return item.toLowerCase().includes(searchQuery.toLowerCase())
  })
  return (
    <div className="text-center relative p-[10px]">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        className="w-[50%] inline-block text-[black] border-[#3E64DA] border-[1px] border-solid rounded-[10px] p-[5px] hover:border-[#F39E31] outline-none"
      />
      <div className=" inline-block inset-y-0 left-0 pl-3 items-center  cursor-pointer hover:text-[#F39E31]">
        <FaSearch className="h-5 w-5 text-[#3E64DA] hover:text-[#F39E31]" />
      </div>
      {searchQuery && (
        <ul className="w-[50%] text-left text-[black] absolute top-[50px] right-1/2 overflow-hidden transform translate-x-1/2 bg-[#eee] hover:border-[#F39E31] border-[#3E64DA] border-[1px] border-solid rounded-[10px]">
          {filteredData.map((item, index) => (
            <li key={index} className="p-[5px] hover:bg-[#F39E31]">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default SellerHeader
