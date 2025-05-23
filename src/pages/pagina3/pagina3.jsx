import avaliacao from "../../assets/img/imgpagina3/avaliação.png";
import estrela from "../../assets/img/imgpagina3/stars.png";
import mainImage from "../../assets/img/imgpagina3/main-image.png";
import shoes1 from "../../assets/img/imgpagina3/shoes1.png";
import shoes2 from "../../assets/img/imgpagina3/shoes2.png";
import shoes3 from "../../assets/img/imgpagina3/shoes3.png";
import shoes4 from "../../assets/img/imgpagina3/shoes4.png";
import shoes5 from "../../assets/img/imgpagina3/shoes5.png";
import "./pagina3.css";


export default function Pagina3() {
    return (
        <>
             <div className="container">
        <div className="menu">
            <label>Home /</label>
            <label>Produtos /</label>
            <label>Tênis /</label>
            <label>Nike /</label>
            <label>Tênis Nike Revolution 6 Next Nature Masculino</label>
        </div>
    
    <div className="content">
        <main>
        
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={mainImage} className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={mainImage} className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={mainImage} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            {/* <img className="main-image" src={mainImage} alt="Large tênis " /> */}
            <div className="secondary-image">
                <img src={shoes1} alt=""/>
                <img src={shoes2} alt=""/>
                <img src={shoes3} alt=""/>
                <img src={shoes4} alt=""/>
                <img src={shoes5} alt=""/>                
            </div>
        </main>
    
        <aside>
            <h1>Tênis Nike Revolution <br/>6 Next Nature Masculino</h1>
            <p>Casual | Nike | REF:38416711</p>
            <img src={estrela} alt="estrela de pontuação"/>
            <img className="avalie" src={avaliacao} alt="avaliação"/>
            <p>219,00</p>
            <p>219,00</p>
        </aside>
    </div>

    </div>
        </>
    );
}