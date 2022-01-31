import {Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Header from './components/Header'
import './App.css'

const App = () => (
  <div className="bg-container">
    <div className="card">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
