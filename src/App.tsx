import { useEffect } from 'react'

import HomePage from './pages/HomePage/HomePage'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'
import SolomonPage from './pages/SolomonPage/SolomonPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage'

import { FormProvider } from './context/FormContext'

import { Routes, Route } from 'react-router-dom'

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='app'>
      <FormProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/AboutUs' element={<AboutUsPage />} />
          <Route path='/Solomon' element={<SolomonPage />} />
          <Route path='/PrivacyPolicy' element={<PrivacyPolicyPage />} />
        </Routes>
      </FormProvider>
    </section>
  )
}

export default App
