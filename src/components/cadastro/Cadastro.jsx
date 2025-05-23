import './Cadastro.css'
import logo from '../../assets/imgCadastro/logo.rosa.png'

export default function Cadastro(){
    return(
        <>
    <head>
        <div class="divlogo">
        <img src={logo} alt=""/>
        </div>
    </head>
    <section class="cadastro">
    <div class="div1">
        <h1>Criar Conta</h1>

        <p>Informações Pessoais</p>
        <hr width="680px" style="margin-right: 900px;"/>
    </div>

        <label for="nome">Nome completo *</label>
        <input type="text" id="nome"
        placeholder="Insira seu nome" required/>
        
        <label for="cpf">CPF *</label>
        <input type="text" required
        placeholder="Insira seu CPF" />

        <label for="celular">Celular *</label>
        <input type="text" id="celular" required
        placeholder="Insira seu celular"/> 
    
    <div class="div2">
        <p>Informações de entrega</p>
        <hr width="680px" style="margin-right: 900px;"/>
    </div>
       <label for="endereco">Endereço *</label>
       <input type="text" id="endereco" required
       placeholder="Insira seu Endereço"/>

       <label for="bairro">Bairro *</label>
       <input type="text" id="bairro" required
       placeholder="Insira seu bairro"/>

       <label for="cidade">Cidade *</label>
       <input type="text" id="cidade" required
       placeholder="Insira sua cidade"/>

       <label for="cep">CEP *</label>
       <input type="text" name="cep" id="cep"
       placeholder="Insira seu CEP"/>
       <br/><br/>

    <div class="div3">
       <input type="checkbox" class="caixinhaTermo"/>
       <p class="ptermo">Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente</p>
    </div>
       <br/><br/>
       <button class="botao">Criar Conta</button>
     </section>
  
  
</>
);
}