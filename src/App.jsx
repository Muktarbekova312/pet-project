import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Photos from './componen/photos/index.jsx'
import Todos from './componen/Todos/index.jsx'
import Header from './componen/Header/index.jsx'
import Footer from './componen/Footer/index.jsx'
import Cinema from './componen/Movies/index.jsx'




function App() {
    return (
        <>
            <Header />
        <Routes>
            <Route path='/' element={<Todos/>}/>
            <Route path='/Movie' element={<Cinema/>}/>
            <Route path='*' element={<Photos/>}/>
        </Routes>
            
            <Footer />
        </>
    )
}

export default App