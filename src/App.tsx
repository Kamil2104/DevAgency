import HomePage from './pages/HomePage/HomePage'

import { FormProvider } from './context/FormContext'

function App() {
  return (
    <section className='app'>
      <FormProvider>
        <HomePage />
      </FormProvider>
    </section>
  )
}

export default App
