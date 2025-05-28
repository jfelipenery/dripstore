import "../../components/airJordan/AirJordan.css"
import imgAirJordan from "../../assets/imgAirJordan/frame.png/"

export default function () {
    return (

        <section className="jordan">
            <div className="jordangeral">
                <div className="jordanimg"><img src={imgAirJordan} alt="air jordan" />
                </div>

                <div className="divJordan">
                    <p className="jordanp">Oferta especial</p>
                    
                    <h2 className="jordanp2">Air Jordan edição de colecionador</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,  sed
                        psa. Itaque, porro ut Architecto eius incidunt velit eaque illum hic,
                        odio sed qui praesentium autem minima porro voluptatibus sunt?
                    </p>


                    <div>
                        <a href="../pagina2/pagina2.html"><button className="button">Ver ofertas</button></a>
                    </div>

                </div>
            </div>
        </section>
    );
}