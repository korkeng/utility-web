import React from 'react';
import { Images } from '@web-assets';
import { useTranslation } from 'react-i18next';
import './NavigationBar.css';

const NavigationBar = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <a href="/#">
            <img src={Images.icLogo} alt="" />
          </a>
        </div>
        <a href="/#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="/#">{t('navigation_menu.home')}</a>
            </li>
            <li>
              <a href="/#">{t('navigation_menu.ragnarok_game')}</a>
            </li>
            <li>
              <a href="/#">{t('navigation_menu.pangya_game')}</a>
            </li>
            <li>
              <a href="/#">{t('navigation_menu.register')}</a>
            </li>
            <li>
              <button className="log-in">{t('navigation_menu.login')}</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
