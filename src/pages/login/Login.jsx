import "./login.css"



export default function Login() {
    return (
        <>
            <header classNme="logo">
                <img src="src/assets/img/logo.png" alt="Logo Digital College" />
            </header>
            <main className="main">
                <div className="formulario">
                    <h2>Acesse sua conta</h2>
                    <p>Novo cliente? Então registre-se<a href="#">aqui.</a></p>

                    <form className="form">
                        <label htmlFor="login">Login</label>
                        <input
                            type="text"
                            id="login"
                            name="login"
                            placeholder="Insira seu login ou email"
                        />

                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Insira sua senha"
                        />
                        <a href="#">Esqueci minha senha</a>


                        <button type="submit">Acessar conta</button>

                        <div className="facebook">
                            <p>Ou faça o login com</p>
                            <img
                                src="src/assets/img/redes.png"
                                alt="Login com Facebook"
                                width="55"
                            />
                        </div>

                    </form>
                </div>


                <div className="imagens">
                    <img
                        src="src/assets/img/pexels-melvin-buezo-2529148 1.png"
                        alt="Homem usando moletom e boné"
                    />
                    <img
                        src="src/assets/img/pexels-melvin-buezo-2529148 2.png"
                        alt="Homem com moletom olhando para o lado"
                    />
                </div>
            </main >

        </>
    );
}
