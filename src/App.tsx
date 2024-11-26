import HomePage from './pages/HomePage/HomePage'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage'

import { FormProvider } from './context/FormContext'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <section className='app'>
      <FormProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/AboutUs' element={<AboutUsPage />} />
          <Route path='/PrivacyPolicy' element={<PrivacyPolicyPage />} />
        </Routes>
      </FormProvider>
    </section>
  )
}

export default App
