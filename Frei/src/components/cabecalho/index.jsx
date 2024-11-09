import { Link } from 'react-router-dom';
import './index.scss';

export default function Cabecalho (){
    return (
    <div className="cabecalho">
 
        <div className="pri">
    
            <img src="/assets/image/img.frei.png" alt="" />

            <h1 className='p1'> React FreiS </h1>

        </div>

        <div className="seg">

            <Link to='/'>

                <h1 className="inicio"> Inicio </h1>

            </Link> 
    
            <Link to="/sobre">

                <h1 className="sobre"> Sobre </h1>

            </Link>
        </div>

</div> ) }



