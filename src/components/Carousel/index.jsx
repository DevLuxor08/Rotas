import { useState } from "react";

// CRIAÇÂO DE UM CARROSEL
function Carousel({dados}){

    const [indiceAtual, setIndiceAtual] = useState(0);
    const prevSlide = () => {
        setIndiceAtual((prev) => (prev === 0 ? dados?.length -1 : prev -1)); //CARROSEL CONTARA DO FINAL AO COMEÇO
    }

   const nextSlide = () => {
        setIndiceAtual((prev) => (prev === dados.length - 1 ? 0 : prev + 1)) //CARROSEL 
   }

    return(
        <div className="relative w-full max-w-md mx-auto bg-color-second p-8 rouded-lg shadow-md rounded-xl text-">
            <div className="text-center ">
                <h2 className="text-2x1 font-bold text-white">
                    {dados[indiceAtual]}
                </h2>
            </div>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full hover:bg-gray-70 transition-colors" onClick={prevSlide}>{'<'}</button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full hover:bg-gray-70 transition-colors" onClick={nextSlide}>{'>'}</button>
        </div>

    );

}

export default Carousel;