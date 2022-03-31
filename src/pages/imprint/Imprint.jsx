import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './imprint.css'
import { Header } from '../../container'

import backImg from '../../assets/headerBackgrounds/kpsc-referenzen-kunden-partner.webp'
const Imprint = () => {
  const { t } = useTranslation()
  return (
    <div className='kpsc__imprint'>
      <Header image={backImg} title={t('Imprint_Header_Title')}/>
      <div className='section__margin'>
        <h1>{t('Imprint_Title')}</h1>
        <p>{t('Name')}</p>
        <p>{t('Street')}</p>
        <p>{t('PLZ')}</p>
        <p>{t('Country')}</p>

        <h3>{t('Imprint_Represantation_Title')}</h3>
        <p>{t('Represantor')}</p>
        <p>Phone: {t('PhoneNumber')}</p>
        <p>E-Mail: {t('Mail')}</p>
        <Link to='/'>Allgemeine Geschäfftsbedingungen</Link>
        <h3>{t('Imprint_Registration_Title')} </h3>
        <p>{t('TradeRegisterPrefix')} {t('TradeRegisterNumber')}</p>
        <p>{t('RegistrationCourtPrefix')} {t('RegistrationCourt')}</p>
        <p>{t('VatIDLongPrefix')} {t('VatID')}</p>
        <h2>{t('Imprint_Warranty_Title')}</h2>
        <h3>{t('Imprint_Warranty_LFC_Title')}</h3>
        <p>{t('Imprint_Warranty_LFC_Text')}</p>
        <h3>{t('Imprint_Warranty_LFL_Title')}</h3>
        <p>{t('Imprint_Warranty_LFL_Text')}</p>
        <h3>{t('Imprint_Warranty_DP_Title')}</h3>
        <p>{t('Imprint_Warranty_DP_Text')}</p>
      </div>


    </div>
  )
}

export default Imprint