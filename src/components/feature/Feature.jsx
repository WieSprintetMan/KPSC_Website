import React from 'react'
import './feature.css'
const Feature = (props) => {
    return (
        <div className='kpsc__features-container__feature'>
            <div className='kpsc__features-container__feature-title'>
                <h1>{props.title}</h1>
                {props.enableSeperator && (
                    <div />
                )}
            </div>
            <div className='kpsc__features-container__feature-text'>
                {props.children}
            </div>
        </div>
    )
}

export default Feature