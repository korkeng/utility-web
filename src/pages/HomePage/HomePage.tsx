import React from 'react';
import { NavigationBar } from '@web-components';
import { useTranslation } from 'react-i18next';
import './HomePage.css';

const HomePage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="HomePage">
      <NavigationBar />
      <div className="buttonContainer">
        <button onClick={() => i18n.changeLanguage('th')}>TH</button>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      </div>
      <p>{t('homepage.welcome_message')}</p>
    </div>
  );
};

export default HomePage;
