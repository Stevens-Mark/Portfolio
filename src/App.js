import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import projects data
import data from './assets/data/projectsData.json'
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

  return (
      <Router>
        <Header />   
          <Switch>
            <Route path="/" exact component={()=> <Home siteData={data} />}/>
            <Route path="/about" exact component={Construction} />
            <Route path="/project/:id" exact component={()=><Project siteData={data} />} />
            <Route component={Error} />
          </Switch> 
          <Footer />
      </Router>  
      )
  }
  
  export default App