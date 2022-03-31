import React from 'react'
import { Header, PTP, Features } from '../../container'
import { Brand, Solution } from '../../components'
import { useTranslation } from 'react-i18next'
import backImage from '../../assets/headerBackgrounds/kpsc-digitale-prozesse.webp'
import sapSilverImg from '../../assets/kpsc-sap-silver-partner.webp'
const Home = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Header image={backImage} title={t('Main_Header_Image_Head')}>
        <p>{t('Main_Header_Image_Content')}</p>
        <h3>{t('Main_Header_Image_Footer')}</h3>
      </Header>
      <Brand alt='Sap Silver Partner' title={t('Main_Brand_Head')} text={t('Main_Brand_Content')} image={sapSilverImg} />
      <PTP />
      <Solution title={t('Main_Solution_Header')} enableSeperator={true}>
        <p>{t('Main_Solution_Content')}</p>
        <a href='/solution'>
          {t('Main_Solution_Button')}
        </a>
      </Solution>
      <Features />
    </div>
  )
}

export default Home