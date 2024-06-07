import React from 'react'
import HeadersTitles from  "../components/HeadersTitles"

const LinkItem = ({Link, image, mainHeader, description}) => {
    return (
        <a href={Link} className=' bg-white p-4 rounded-3xl flex items-center  max-w-lg mx-auto mt-2 
                                    md:mt-4 md:rounded-full
                                    hover:scale-105 hover:shadow-md hover:transition-all'>
                <img src={image} alt="Image" className='w-14 h-14 bg-gray-400 rounded-full' />
                <div className=" px-6">
                    <HeadersTitles
                        subHeader={mainHeader}
                        description={description}
                    />
                </div>
        </a>
    )
}

export default LinkItem
