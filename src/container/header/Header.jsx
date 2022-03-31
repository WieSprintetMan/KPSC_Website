import React from 'react'
import { RiMailLine, RiLinkedinLine } from 'react-icons/ri';
import './header.css'
const Header = (props) => {
    return (
        <div className='kpsc__header'>
            <div className='kpsc__header-image'>
                <img src={props.image} alt="er" />
                <div className='kpsc__header-image-text '>
                    <h2>{props.title}</h2>
                    {props.children}
                </div>
                <div className='kpsc__header-image-cta'>
                    <a href="mailto:info@kpsc.com">
                        <RiMailLine size={30} />
                    </a>
                    <a href='https://www.linkedin.com/company/kpsc-gmbh/' target='_blank' rel="noreferrer">
                        <RiLinkedinLine size={30} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header