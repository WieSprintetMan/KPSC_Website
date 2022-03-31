import React from 'react'
import './brand.css'
const Brand = ({title, text, image, alt}) => {
    return (
        <div className='kpsc__brand-content section__padding'>
            <div className='kpsc__brand-content-text'>
                <h1>{title}</h1>
                <div className='kpsc__brand-content_seperator'/>
                <p>{text}</p>  
            </div>
            <div className='kpsc__brand-content-image'>
                <img src={image} alt={alt} />
            </div>
        </div>
    )
}

export default Brand