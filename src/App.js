import { Switch, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Services from './pages/services/Services';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;