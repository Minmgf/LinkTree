import React from 'react'
import gitHubIcon from "../assets/icons/github.svg"
import linkedInIcon from "../assets/icons/linkedin.svg"
import igIcon from "../assets/icons/ig.svg"

const SocialNetworks = ({ igLink, linkedinLink, gitLink }) => {
    return (
        <div className='flex justify-center gap-4'>
            <a href={igLink}  target="blank" className='hover:scale-125 hover:transition-all'>
                <img src={igIcon} className='w-8 h-8' alt="" />
            </a>
            {/* <a href={linkedinLink} target="blank"  className=''>
                <img src={linkedInIcon} className='w-8 h-8' alt="" />
            </a> */}
            <a href={gitLink} target="blank"  className='hover:scale-125 hover:transition-all'>
                <img src={gitHubIcon} className='w-8 h-8' alt="" />
            </a>
        </div>
    )
}

export default SocialNetworks
