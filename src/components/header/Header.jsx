import './Header.css';
import logo from "../../assets/logo.png";
import lupa from "../../assets/Search.png";
import { useState } from 'react';


export default function Header() {
    const [selectionLink, setSelectionLink] = useState('Home');

    const handleClick = (linkname) => { setSelectionLink(linkname)};




    return (
        <header className="cabeca">
            <div className="divheadertoda">

                <div className="imagemlogodigital">
                    <Link to= ><img src={logo} alt="logotipo da drip store" /></Link>
                </div>

                <div className="container-pesquisa">
                    <input type="text" className="input-pesquisa" placeholder="Pesquisar produto..." />
                    <Link to= ><img src={lupa} alt="Buscar" className="icone-lupa" /></Link>
                </div>

                <div className="linkcadastro">
                    <LInk to= className="linkcadastrese btn-cadastro">Cadastre-se</Link>

                    <Link to= > <button type="button" className="entrar">Entrar</button></Link>

                    <Link to= > <img className="imagemcarrinho" src="./images/carrinhodecompras.png" alt="" /> </Link>


                </div>

            </div>

            <div className="links">
                <ul className="lista">

                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'./pagina2'}>Produtos</Link></li>
                    <li><Link to={'./pagina3'}>Categorias</Link></li>
                    <li><Link to={''}>Meus Produtos</Link></li>

                </ul>
            </div>
        </header>

    );
}