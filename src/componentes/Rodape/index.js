import('./Rodape.css')

const Rodape = () => {
    return (
        <footer className='rodape'>
            <ul className='lista__links'>
                <li>
                    <a href="www.facebook.com">
                        <img src="/imagens/fb.png" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="www.x.com.br">
                        <img src="/imagens/tw.png" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="www.instagram.com">
                        <img src="/imagens/ig.png" alt=""/>
                    </a>
                </li>
            </ul>
            <div className='div__central'>
                <img src="/imagens/logo.png" alt=""/>
            </div>
            <div className='div__empresa'>
                <p>Desenvolvidor por Alura</p>
            </div>
        </footer>
    )
}

export default Rodape