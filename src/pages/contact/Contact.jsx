import React from 'react'
import { useTranslation } from 'react-i18next'
import './contact.css'
const Contact = () => {
  const { t } = useTranslation()
  return (
    <div className='kpsc__contact section__margin'>
      <div className='kpsc__contact_sideInfos'>
        <h1>{t('Contact_Title')}</h1>
        <p>{t('Street')}</p>
        <p>{t('PLZ')}</p>
        <a href='tel:+494348919000'>{t('Contact_ButtonText')}</a>
        <p>{t('PhonePrefix')} <a href={'tel:' + t('PhoneNumber')}>{t('PhoneNumber')}</a></p>
        <p>{t('MailPrefix')} <a href={'mailto:' + t('Mail')}>{t('Mail')}</a></p>
        <p>{t('TradeRegisterPrefix') + t('TradeRegisterNumber')}</p>
        <p>{t('RegistrationCourtPrefix') + t('RegistrationCourt')}</p>
        <p>{t('VatIDPrefix') + t('VatID')}</p>
      </div>
      <div className='kpsc__contact_inputContainer'>
        <form>
          <div className='kpsc__contact_inputContainer-firstRow'>
            <input />
            <input />
          </div>
          <div className='kpsc__contact_inputContainer-secondRow'>
            <input className='kpsc__contact_inputContainer-secondRow_phone'/>
            <input className='kpsc__contact_inputContainer-secondRow_reference'/>
            <input className='kpsc__contact_inputContainer-secondRow_message'/>
          </div>
          <button type='reset' />
          <button>
            <p> {t('Contact_SendButton')}</p>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact