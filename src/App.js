import { t } from 'i18next';
import React, { Component, Suspense } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import './App.css';


// page uses the hook
function Page() {
const { t, i18n } = useTranslation();

const changeLanguage = (lng) => {
i18n.changeLanguage(lng);
};
document.body.dir = t('dir')
return (
<div className="App">
  <div className="App-header">
    
  
    <button type="button" onClick={()=> changeLanguage('de')}>
      de
    </button>
    <button type="button" onClick={()=> changeLanguage('en')}>
      en
    </button>
        < button type = "button"
        onClick = {
            () => changeLanguage('fa')
          } >
          فارسی </button>
  </div>
   < div > {
     t('loading...')} </div>
  <div className="App-intro">

  </div>
  <div>{t('description.part2')}</div>
</div>
);
}

// loading component for suspense fallback
const Loader = () => (
<div className="App">
 
  <div>{t('loading...')}</div>
</div>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
return (
<Suspense fallback={<Loader />}>
<Page />
</Suspense>
)}