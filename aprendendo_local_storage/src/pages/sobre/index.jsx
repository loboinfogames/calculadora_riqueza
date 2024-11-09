import { useState } from 'react';
import './index.scss';

export default function TabelaCanais(){
  const [array, setArray] = useState()
    return(
        <div className="canais">

            <div className="table">
          <table className='tabela'>
            <thead>
              <tr>
                <th>ID</th>
                <th>canal</th>
                <th>numero</th>
                <th>aberto</th>
              </tr>
            </thead>
            <tbody>
           
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
               

            </tbody>
          </table>
        </div>
        </div>
    )
}