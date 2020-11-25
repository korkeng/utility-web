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
        <button className="button" onClick={() => i18n.changeLanguage('th')}>
          {t('language_switch.thai')}
        </button>
        <button className="button" onClick={() => i18n.changeLanguage('en')}>
          {t('language_switch.english')}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
