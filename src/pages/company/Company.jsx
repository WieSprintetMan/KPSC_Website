import React from 'react'
import { useTranslation } from 'react-i18next'

import { Header } from '../../container'

import { Solution } from '../../components'
import backImg from '../../assets/headerBackgrounds/kpsc-produkte-digitalisierung.webp'
import './company.css'

import startupshLogo from '../../assets/kpsc-startup-ueberflieger-logo.jpeg'
import sapSilverImg from '../../assets/kpsc-sap-silver-partner.webp'

import kielleuchtet from '../../assets/kpsc-kielleuchtet.jpeg'
const Company = () => {
    const {t} = useTranslation()
    return (
        <div>
            <Header image={backImg} title={t('Main_Header_Image_Head')}>
                <p>{t('Main_Header_Image_Content')}</p>
                <h3>{t('Main_Header_Image_Footer')}</h3>
            </Header>
            <Solution title={t('Company_Description_Title')} enableSeperator={true}>
                <p>{t('Company_Description_First_Text')}</p>
                <p>{t('Company_Description_Second_Text')}</p>
                <p>{t('Company_Description_Third_Text')}</p>
                <p>{t('Company_Description_Fourth_Text')}</p>
            </Solution>
            <div className='kpsc__company-imageContainer'>
            <img alt='SAP Silver Partner' src={sapSilverImg}/>
            <img alt='SAP Silver Partner' src={startupshLogo}/>
            </div>
           
           
            <Solution title={t('Company_Startup_Title')} enableSeperator={true}>
                <p>{t('Company_Startup_Text')}</p>
                <p>{t('Company_Startup_LinkText')} <a href='http://www.startupsh.de'>http://www.startupsh.de</a></p>
                <p>{t('Company_Startup_Hashtags')}</p>
            </Solution>

            <div className='kpsc__company-imageContainer'>
            <img alt='SAP Silver Partner' src={kielleuchtet}/>
            </div>
            <Solution title={t('Company_KielLeuchtet_Title')} enableSeperator={true}>
                <p>{t('Company_KielLeuchtet_Text')}</p>
               
            </Solution>
        </div>
    )
}

export default Company