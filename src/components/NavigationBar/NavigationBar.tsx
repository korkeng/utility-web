import React from 'react';
import { Images } from '@web-assets';
import { useTranslation } from 'react-i18next';
import './NavigationBar.css';

const NavigationBar = () => {
  const { t, i18n } = useTranslation();

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
            <li className="language-list">
              <img
                src={Images.icLanguageEN}
                width="25px"
                height="20px"
                alt=""
                onClick={() => i18n.changeLanguage('en')}
              />
              <img
                src={Images.icLanguageTH}
                width="25px"
                height="20px"
                alt=""
                onClick={() => i18n.changeLanguage('th')}
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
