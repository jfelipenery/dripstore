import Card from "../../components/card/Card"
import Filtro from "../../components/filtro/filtro"
import "./pagina2.css"


export default function Pagina2(){
    const cards = [
        {nome: "K-Swiss V8 - Masculino", imgT: "src/assets/img/Tenis.png", preco: 300, desconto: 150},
        {nome: "Nike Air Max - Feminino", imgT: "src/assets/img/Tenis.png", preco: 400, desconto: 200},
        {nome: "Adidas Ultraboost - Masculino", imgT: "src/assets/img/Tenis.png", preco: 500, desconto: 250},
        {nome: "Puma RS-X - Feminino", imgT: "src/assets/img/Tenis.png", preco: 350, desconto: 175},
        {nome: "Calenciaga Triple S - Masculino", imgT: "src/assets/img/Tenis.png", preco: 800, desconto: 400},
        {nome: "Calenciaga Triple S - Masculino", imgT: "src/assets/img/Tenis.png", preco: 800, desconto: 400},
    ] 
    
    return (
    <>
       <div className="pagina2">
           <div className="filtro"><Filtro/></div>
           <div className="card">
              {cards.map((card) => (
                <Card
                  key={card.nome}
                  nome={card.nome}
                  imgT={card.imgT}
                  preco={card.preco}
                  desconto={card.desconto}
                />
              ))}
             
           </div>
       </div>
    </>


    );
}