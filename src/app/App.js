
import { useMemo } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Home from "../pages/home";
import Sobre from "../pages/sobre";
import Contato from "../pages/contato";
import Quemsomos from "../pages/quemsomos";
import Solucoes from "../pages/solucoes";

// AQUI FICA O CONTEUDO DO SEU SITE
function App() {
  return (
     
    <BrowserRouter>
      <div className="Content flex min-h-screen flex-col">
        <Header/>
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home/>} ></Route> {/* PATH = ROTA NO NAVEGADOR | ELEMENT É O CONTEUDO  */} {/* PRECISA DA INICIAL MAISCULA POIS SAO COMPONETES */}
            <Route path="/Sobre" element={<Sobre/>}></Route>
            <Route path="/Contato" element={<Contato/>}></Route>
            <Route path="/Quemsomos" element={<Quemsomos/>}></Route>
            <Route path="/Solucoes" element={<Solucoes/>}></Route>
          </Routes>
        </main>
        
        {/* ESTAMOS IMPORTANDO O FOOTER */}
        <Footer/>
      </div>  
    </BrowserRouter>
  );
}

export default App;
