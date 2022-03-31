import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/kpsc-gmbh-logo-2x-c683d9da-164w.webp';
import { useTranslation } from 'react-i18next';
import './navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { t } = useTranslation()
  return (
    <div className='kpsc__navbar'>
      <div className='kpsc__navbar-links'>
        <div className='kpsc__navbar-links_logo'>
          <a href='/'>
            <img src={logo} alt='logo' />
          </a>

        </div>
        <div className='kpsc__navbar-links_container'>
          <p><NavLink to="/solution">{t('Header_Solutions')}</NavLink></p>
          <p><NavLink to="/references">{t('Header_References')}</NavLink></p>
          <p><NavLink to="/support">{t('Header_Support')}</NavLink></p>
          <p><NavLink to="/company">{t('Header_Company')}</NavLink></p>
          <p><NavLink to="/contact">{t('Header_Contact')}</NavLink></p>
        </div>
      </div>
      <div className='kpsc__navbar-language'>

      </div>
      <div className='kpsc__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='kpsc__navbar-menu_container scale-up-center'>
            <div className='kpsc__navbar-menu_container-links'>
              <p><NavLink to="/solution">{t('Header_Solutions')}</NavLink></p>
              <p><NavLink to="/references">{t('Header_References')}</NavLink></p>
              <p><NavLink to="/support">{t('Header_Support')}</NavLink></p>
              <p><NavLink to="/company">{t('Header_Company')}</NavLink></p>
              <p><NavLink to="/contact">{t('Header_Contact')}</NavLink></p>
              <div className='kpsc__navbar-menu_container-links-language'>
                <p>Sign in</p>
                <button type='button'>Sign-Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default Navbar