import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Cabecalho02 from '../../components/cabecalho02';

export default function Exe01 () {
    return (
    <div className="exe01">
        
        <Cabecalho/>

        <div className="session-01">
            <Cabecalho02/>
        </div>

        <div className="section2">
        <div className="card">
                    <h1>Informe o valor do pedido</h1>
                        <input type="text" placeholder='0'/>
                        

                </div>
            </div>    


    </div>
    );
}