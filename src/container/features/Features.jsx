import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Feature } from '../../components'
import './features.css'
const Features = () => {
    const {t} = useTranslation()
    return (
        <div className='kpsc__features section__padding'>
            <Feature title={t('Main_Feature_PTP')} enableSeperator={true}>
                <p><Link to="/">{t('Main_Feature_PTP_PR')}</Link></p>
                <p><Link to="/">{t('Main_Feature_PTP_OC')}</Link></p>
                <p><Link to="/">{t('Main_Feature_PTP_DN')}</Link></p>
                <p><Link to="/">{t('Main_Feature_PTP_GR')}</Link></p>
                <p><Link to="/">{t('Main_Feature_PTP_RT')}</Link></p>
                <p><Link to="/">{t('Main_Feature_PTP_FI')}</Link></p>
                <p><Link to="/">{t('Main_Feature_PTP_PC')}</Link></p>
            </Feature>

            <Feature title={t('Main_Feature_OTC')}  enableSeperator={true}>
                <p><Link to="/">{t('Main_Feature_OTC_SO')}</Link></p>
                <p><Link to="/">{t('Main_Feature_OTC_BD')}</Link></p>
            </Feature>

            <Feature title={t('Main_Feature_ADM')}  enableSeperator={true}>
                <p><Link to="/">{t('Main_Feature_ODM_BP')}</Link></p>
                <p><Link to="/">{t('Main_Feature_ODM_TE')}</Link></p>
            </Feature>
        </div>
    )
}

export default Features