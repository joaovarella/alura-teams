import './Colaborador.css'

const Colaborador = (props) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho__card' style={{backgroundColor: props.corPrimaria}}>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className='rodape__card'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;