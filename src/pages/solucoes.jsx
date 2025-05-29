import { useMemo } from "react";
import Carousel from "../components/Carousel";

function Solucoes(){

    // AQUI É UM VETOR
    const marcas = useMemo(() => [
        'MicroSoft',
        'Apple',
        'Google',
        'Andoid',
        'Furukawa',
        'Samsung',
        'LG',
        'Ubiquiti',
        'Cisco'
    ], [])

    
    

    return(
        <div className="mt-[110px]">
            <h1>Pagina de Solucoes </h1>
            <p>Bem vindo a Pagina De Solucoes</p>
            <Carousel dados={marcas}/>
        </div>
    );
}

export default Solucoes