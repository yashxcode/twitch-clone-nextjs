import Image from "next/image"
import React from "react"

const CategoriesItem = ({ img, title, viewers, tag1, tag2 }) => {
  return (
    <div className="p-2">
        <Image src={img} width="165" height="220" alt="/" />
        <div>
            <p className="font-bold">{title}</p>
            <p className="text-sm text-gray-500 py-[2px]">{viewers} viewers</p>
            <div className="flex">
                <div className="pr-1">
                    <p className="text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3">{tag1}</p>
                </div>
                <div>
                    {tag2 ? <p className="text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3">{tag2}</p> : null}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoriesItem