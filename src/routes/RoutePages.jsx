import Pagina1 from "../pages/pagina1/Pagina1";
import Pagina2 from "../pages/pagina2/pagina2";
import Pagina3 from "../pages/pagina3/pagina3";
import { Route, Routes } from "react-router-dom";



export default function RoutePages() {
    return (
        
        <Routes>
            
                <Route path="/" index element={<Pagina1 />} />
                <Route path="/pagina2" element={<Pagina2 />} />
                <Route path="/pagina3" element={<Pagina3 />} />
            
        </Routes>
    );
}