import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import React, { lazy, Suspense } from 'react'
// import projects data depending on language
import dataFR from './assets/data/projectsDataFR.json'
import dataEN from './assets/data/projectsDataEN.json'
import aboutDataEN from './assets/data/aboutDataEN.json'
import aboutDataFR from './assets/data/aboutDataFR.json'
// import components
import Header from './components/HeaderNav'
import Footer from './components/Footer'
// import Construction from './pages/Construction'
import Error from './pages/Error'
// import components when needed using lazy loading
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Project = lazy(() => import('./pages/Project'))
// const Error = lazy(() => import('./pages/Error'))
const GoToTop = lazy(() => import('./utils/Functions/GoToTop'))
const renderLoader = () => <p>Loading...</p>

/**
 * Manages routes & renders pages
 * Gets the data FR/EN? (from file) for the site & passes it to the components
 * @function App
 * @returns {JSX}
 */
const App = () => {

  const [language, toggleLanguage] = useState(true)
  const dataToLoad = language? dataFR : dataEN
  const aboutToLoad = language? aboutDataFR : aboutDataEN

  return (
    <Suspense fallback={renderLoader()}>
      <Router>
        <Header language={language} toggleLanguage={toggleLanguage} siteText={dataToLoad.siteText}/>   
          <Switch>
            <Route path="/" exact component={()=> <Home siteData={dataToLoad} />}/>
            <Route path="/about" exact component={()=> <About aboutText={aboutToLoad} />} />
            <Route path="/project/:id" exact component={()=><Project siteData={dataToLoad} />} />
            <Route path="*" component={()=> <Error siteText={dataToLoad.siteText} />} />
          </Switch> 
        <Footer siteText={dataToLoad.siteText} />
        <GoToTop /> 
      </Router> 
    </Suspense>
    )
  }
  
  export default App