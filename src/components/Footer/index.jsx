import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="flex items-center gap-3 flex-col">
            <h1>Meu footer</h1>
            <Link to="/" className="bg-Orange rounded-md text-2xl  ">Voltar para Home</Link>
        </div>
    );
}

export default Footer