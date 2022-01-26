import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
// import projects data depending on language
import dataFR from './assets/data/projectsData2.json'
import dataEN from './assets/data/projectsDataEN.json'
// import components
import Header from './components/Header'
import Home from './pages/Home'
// import About from './pages/About'
import Construction from './pages/Construction'
import Project from './pages/Project'
import Error from './pages/Error'
import Footer from './components/Footer'

/**
 * Manages routes & renders pages
 * Gets the data (from file) for the site & passes it to the components
 * @function App
 * @returns {array} siteData: all data
 * @returns {JSX}
 */
const App = () => {
  const [language, toggleLanguage] = useState(true)

  return (
    
      <Router>
        <Header language={language} toggleLanguage={toggleLanguage}/>   
          <Switch>
            <Route path="/" exact component={()=> <Home siteData={language? dataFR : dataEN} />}/>
            <Route path="/about" exact component={Construction} />
            <Route path="/project/:id" exact component={()=><Project siteData={language? dataFR : dataEN} />} />
            <Route component={Error} />
          </Switch> 
          <Footer />
      </Router>  
      )
  }
  
  export default App