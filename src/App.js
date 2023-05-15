// libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// style
import './App.css';

// pages
import Navbar from './Navbar';
import Home from './Home'
import ShowText from './Practice/ShowText';
import ShowTextCustomHook from './Practice/ShowTextCustomHook';
import FetchCat from './Practice/FetchCat'
import Counter from './Practice/Exercise/Counter';


function App() {
  return (
    <div className="App">
        <Router>
          <div className='navigation'>
            <Navbar/>
          </div>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/normalHook' element={<ShowText/>}/>
            <Route path='/customHook' element={<ShowTextCustomHook/>}/>
            <Route path='/abstrakCustomHook' element={<FetchCat/>}/>
            <Route path='/exercise' element={<Counter/>}/>
          </Routes>
        </Router>

    </div>
  );
}

export default App;
