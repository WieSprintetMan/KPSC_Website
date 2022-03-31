import React from 'react'
import { useTranslation } from 'react-i18next';
import './footer.css'
import diwishLogo from '../../assets/kpsc-partner-diwish_logo.png'
import thebayareaLogo from '../../assets/kpsc-partner-the-bay-areas.png'
import sporthilfekielLogo from '../../assets/kpsc_KielLeuchtet_Silberpartner-logo.png'
import startupshLogo from '../../assets/kpsc-startup-ueberflieger-logo.jpeg'
import dhshLogo from '../../assets/kpsc-partner-DHSH.png'
import shLogo from '../../assets/kpsc-partner-schleswig-holstein.png'
import digiwocheLogo from '../../assets/kpsc-digitale-woche-kiel-2021.png'
import { RiMailLine, RiPhoneLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className='kpsc__footer'>

      <div className='kpsc__footer-header'>
        <h1 className='gradient__text'>{t('Footer_Header_Header')}</h1>
      </div>

      <div className='kpsc__footer-btn'>
        <div className='kpsc__footer-btn_phone'>
        <RiPhoneLine color='orange' size={50}/>
          <div className='kpsc__footer-btn_call_text'>
            <h1>{t('Footer_Header_Call_Header')}</h1>
            <a href={'tel:' + t('PhoneNumber')}>{t('PhoneNumber')}</a>
          </div>
        </div>
        <div className='kpsc__footer-btn_mail'>
        <RiMailLine color='orange' size={50}/>
          <div className='kpsc__footer-btn_mail_text'>
            <h1>{t('MailPrefix')}</h1>
            <a href={'mailto:' + t('Mail')}>{t('Mail')}</a>
          </div>
        </div>
      </div>
      <div className='kpsc__footer-brands'>
        <a href='https://www.diwish.de/' target='_blank' rel="noreferrer"><img src={diwishLogo} alt='bla'/></a>
        <a href="https://www.the-bay-areas.de/de" target='_blank' rel="noreferrer"><img src={thebayareaLogo} alt='bla'/></a>
        <a href='https://sporthilfe-kiel.de/' target='_blank' rel="noreferrer"><img src={sporthilfekielLogo} alt='bla'/></a>
        <a href="https://www.startupsh.de" target='_blank' rel="noreferrer"><img src={startupshLogo} alt='bla'/></a>
        <a href="https://www.dhsh.de/" target='_blank' rel="noreferrer"><img src={dhshLogo} alt='bla'/></a>
        <a href="https://www.dhsh.de/" target='_blank' rel="noreferrer"><img src={shLogo} alt='bla'/></a>
        <a href="https://digitalewochekiel.de" target='_blank' rel="noreferrer"><img src={digiwocheLogo} alt='bla'/></a> 
      </div>

      <div className='kpsc__footer-cta'>
        <div className='kpsc__footer-cta-links'>
        <p><NavLink to='/'>{t('Footer_Footer_Home')}</NavLink></p>
          <p><NavLink to='/jobs'>{t('Footer_Footer_Jobs')}</NavLink></p>
          <p><NavLink to='/contact'>{t('Footer_Footer_Contact')}</NavLink></p>
          <p><NavLink to='/imprint'>{t('Footer_Footer_Imprint')}</NavLink></p>
          <p><NavLink to='/data-Protection'>{t('Footer_Footer_DataProtection')}</NavLink></p>
          <p><NavLink to='/MSdata-Protection'>{t('Footer_Footer_MSDataProtection')}</NavLink></p>
          <p><NavLink to='/agb'>{t('Footer_Footer_AGB')}</NavLink></p>
        </div>
      </div>
    </div>
  )
}

export default Footer