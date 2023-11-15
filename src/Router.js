import {React} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home';
import Prueba from './components/Prueba';
import { Formulario } from './components/Formulario';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/prueba' element={<Prueba />} />
                    <Route path='/formulario' element={<Formulario/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

