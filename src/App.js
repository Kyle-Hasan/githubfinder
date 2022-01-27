import logo from './logo.svg';
import './App.css';
import './index.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import About from './pages/About'
import UserList from './components/UserList';
import { GithubProvider } from './components/context/GithubContext';
import {AlertContextProvider} from './components/context/AlertContext'
import User from "./pages/User"
function App() {
  
  return (
    <GithubProvider>
      <AlertContextProvider>
    <Router>
    
   <div className = 'flex flex-col justify-between h-screen'>

   
      <Navbar></Navbar>
      <main className = 'container mx-auto px-3 pb-12'>
        <Routes>
        
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='*' element={<NotFound />} />
              
        </Routes>
        
      </main>
      <Footer></Footer>
      </div>
    
    </Router>
    </AlertContextProvider>
    </GithubProvider>
    
  );
}

export default App;
