import React from 'react'
import Road from "../../../assets/road.png";

function MembershipLevel() {
    const levels = [
        { name: 'Basic', price: '14.00' },
        { name: 'Medium', price: '20.00' },
        { name: 'Advanced', price: '39.00' },
      ];
  return (
    <>
    <div className="max-w-5xl mx-auto p-4 mt-36 shadow-md mb-6">
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b">
          <th className="text-left py-2 px-4 font-normal text-gray-600">Level</th>
          <th className="text-left py-2 px-4 font-normal text-gray-600">Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {levels.map((level, index) => (
          <tr key={index} className="border-b">
            <td className="py-4 px-4">{level.name}</td>
            <td className="py-4 px-4">
              <span className="font-bold">${level.price}</span> now.
            </td>
            <td className="py-4 px-4">
              <button className="bg-[#1b3a4b] text-white py-2 px-4 rounded-lg w-full hover:bg-[#1b3a4b]/90 transition-colors">
                Select
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>


  {/* gaddi */}
  <div className="relative flex">
        <img src={Road} alt="Road" className="w-full h-16 lg:h-24  bg-[#f1f5f9]"  />
      </div>
  </>
  )
}

export default MembershipLevel