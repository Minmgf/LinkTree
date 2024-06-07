import React from 'react'

const SocialNetworks = ({ igLink, linkedinLink, gitLink }) => {
    return (
        <div className='flex justify-center gap-4'>
            <a href={igLink}  target="blank" className='hover:scale-125 hover:transition-all'>
                <img src="/src/assets/icons/ig.svg" className='w-8 h-8' alt="" />
            </a>
            {/* <a href={linkedinLink} target="blank"  className=''>
                <img src="/src/assets/icons/linkedin.svg" className='w-8 h-8' alt="" />
            </a> */}
            <a href={gitLink} target="blank"  className='hover:scale-125 hover:transition-all'>
                <img src="/src/assets/icons/github.svg" className='w-8 h-8' alt="" />
            </a>
        </div>
    )
}

export default SocialNetworks
