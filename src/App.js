import './App.css';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import Form from './pages/Form/Form';
import { Hero } from './pages/Hero/Hero';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
          <Header/>
            <Routes>
                <Route path='/' element={<Hero/>}/>
                <Route path='/form' element={<Form/>}/>
            </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
