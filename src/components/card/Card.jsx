import "../../components/card/card.css";


export default function Card(props) {
  return (

    <>
      <div>
        <div className="imagem">
          <p className="balão">30% off</p>
          <img className="tenis" src={props.imgT} alt="Tênis" />
        </div>
        <div className="textos">
          <p className="textotenis">Tênis</p>
          <p className="modelotenis">{props.nome} </p>
          <div className="preco">
            <p className="preco1">${props.preco}</p>
            <p className="preco2">${props.desconto}</p>
          </div>
        </div>
      </div>
    </>
  );
}