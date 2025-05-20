import "../Card/card.css"

export default function Card(){
    return(


        <div>
          <div className="imagem">
            <p className="balão">30% off</p>
            <img className="tenis" src="img/Tenis.png" alt="Tênis" />
          </div>
          <div className="textos">
            <p className="textotenis">Tênis</p>
            <p className="modelotenis">K-Swiss V8 - Masculino</p>
            <div className="preco">
              <p className="preco1">$200</p>
              <p className="preco2">$100</p>
            </div>
          </div>
        </div>
    );
    }