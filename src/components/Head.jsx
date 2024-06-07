import React from 'react'

const Head = ({ProfilePic}) => {
    return (
        <div className='py-8 text-center'>
            <img
                className='w-44 rounded-full h-44 my-4 bg-white m-auto object-cover'
                src={ProfilePic}
                alt="Imagen"  />
            <h1 className='text-white text-3xl font-bold'>Manuel Navarro</h1>
            <p className='text-gray-800 font-bold text-sm'>Software Engineering</p>
        </div>
    )
}

export default Head
