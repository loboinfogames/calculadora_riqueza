import './index.scss';
import axios from 'axios';
import { useState } from 'react';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';

export default function Home(){
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();
    

    async function Cadastrar(){
        try {
            await axios.post(`http://localhost:5000/inserir/cliente/${nome}/${senha}`)
            alert('foi, parabens, foi sua obrigação')
        } catch (error) {
            alert('puta merda' + error)
        }
    }

    async function Entrar(){
        try {
            const response = await axios.post(`http://localhost:5000/entrar/${nome}/${senha}`)
            const x = response.data;
            
            storage('cliente-logado', x)
            alert('foi sa merda')
            navigate('/sobre')  

        } catch (error){
            alert('moio' + error)
        }
    }

    return(
        <div className="home">
        
            <div className="cadastro">
                
                <h1> Sejam muito bem vistos! </h1>
                <h1> Faça seu Login </h1>

                <h1> Usuario </h1>
                <input type="text" placeholder='nome'  value={nome} onChange={e=>setNome(e.target.value)}/>

                <h1>Senha </h1>
                <input type="text" placeholder='senha' value={senha} onChange={e=>setSenha(e.target.value)} />

                <button onClick={Cadastrar}> cadastrar </button>
                <button onClick={Entrar}> Entrar </button>
            </div>

        </div>
    )
}