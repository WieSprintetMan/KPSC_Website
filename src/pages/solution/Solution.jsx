import React from 'react'

import { Header } from '../../container'
import { Brand } from '../../components'
import { useTranslation } from 'react-i18next'

import sapcert from '../../assets/SAPCerti_PowSAPNet.webp'
import backImg from '../../assets/headerBackgrounds/kpsc-loesungen-digitalisierung.webp'
import sapSilverImg from '../../assets/kpsc-sap-silver-partner.webp'
import logo from '../../assets/kpsc-gmbh-logo-2x-c683d9da-164w.webp';
const Solution = () => {
    const {t} = useTranslation()
    return (
        <div>
            <Header image={backImg} title={t('Solution_Header_Title')}>
                <p>{t('Solution_Header_FirstRow')}</p>
                <p>{t('Solution_Header_SecRow')}</p>
                <p>{t('Solution_Header_ThirdRow')}</p>
            </Header>
            <Brand alt='Sap Global Solution' title={t('Solution_Branch_First_Header')} text={t('Solution_Branch_First_Content')} image={sapcert} />
            <Brand alt='Sap Silver Partner' title={t('Main_Header_Image_Head')} text={t('Main_Header_Image_Content')} image={sapSilverImg} />
            <Brand alt='Sap Silver Partner' title={t('Solution_Branch_Second_Header')} text={t('Solution_Branch_Second_Content')} image={logo} />
        </div>
    )
}

export default Solution