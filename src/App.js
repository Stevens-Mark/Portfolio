import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
// import projects data depending on language
import dataFR from './assets/data/projectsDataFR.json'
import dataEN from './assets/data/projectsDataEN.json'
// import components
import Header from './components/HeaderNav'
import Home from './pages/Home'
// import About from './pages/About'
import Construction from './pages/Construction'
import Project from './pages/Project'
import Error from './pages/Error'
import Footer from './components/Footer'

/**
 * Manages routes & renders pages
 * Gets the data FR/EN? (from file) for the site & passes it to the components
 * @function App
 * @returns {JSX}
 */
const App = () => {

  const [language, toggleLanguage] = useState(true)
  const dataToLoad = language? dataFR : dataEN
  
  return (
    <Router>
      <Header language={language} toggleLanguage={toggleLanguage}/>   
        <Switch>
          <Route path="/" exact component={()=> <Home siteData={dataToLoad} />}/>
          <Route path="/about" exact component={()=> <Construction siteText={dataToLoad.siteText} />} />
          <Route path="/project/:id" exact component={()=><Project siteData={dataToLoad} />} />
          <Route path="*" component={()=> <Error siteText={dataToLoad.siteText} />} />
        </Switch> 
      <Footer language={language} />
    </Router>  
    )
  }
  
  export default App