import React from 'react'

import { Header } from '../../container'

import backImg from '../../assets/headerBackgrounds/kpsc-referenzen-kunden-partner.webp'
import { useTranslation } from 'react-i18next'
const References = () => {
    const {t} = useTranslation()
    return (
        <div>
            <Header image={backImg} title={t('References_Header_Title')}>
                <p>{t('References_Header_FirstRow')}</p>
                <p>{t('References_Header_SecRow')}</p>
            </Header>
        </div>
    )
}

export default References