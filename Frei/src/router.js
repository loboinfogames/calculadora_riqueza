import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Home from './pages/home';
import Sobre from './pages/sobre';
import Exe01 from './pages/exe01';


export default function Navegacao (){

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/'element={<Home/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
                <Route path='/exe01' element={<Exe01/>}/>
            </Routes>
        </BrowserRouter>

    );



}

