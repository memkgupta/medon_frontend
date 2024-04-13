import React from 'react'

const QuickCard = ({ title, imageUrl, link }:{title:string,imageUrl:string,link:string}) => {
  return (
    <a href={link} className=" flex justify-center w-52  bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
   <div>
   <img src={imageUrl} alt={title} className=" max-h-40 object-contain" />
    <div className="p-4">
      <h2 className=" font-semibold mb-2 text-xl text-center">{title}</h2>
      
    </div>
   </div>
  </a>
  )
}

export default QuickCard
