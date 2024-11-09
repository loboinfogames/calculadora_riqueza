import './index.scss';

export default function Card (titulo, tituloum){
    let corPrimaria = '#A3E5BA'
    let corSegundaria = '#EFFBE2'
    return (
        <div className='cards'>
            <div className='card' style={{ backgroundColor: corSegundaria }}>
                <div className='card-cabecalho' style={{ backgroundColor: corPrimaria }}>
                    <h2>{titulo}</h2>
                </div>
                <div className='card-conteudo'>
                    <h3>{tituloum}</h3>
                    <pre>
                        - Objetos e Listas de Objetos<br />
                        - Componentes
                    </pre>
                </div>
                <p className='tag'>26/agosto</p>
            </div>
        </div>

    )
}