import { Link } from "react-router-dom";

function Footer(){
    return(
        <div>
            <h1>Meu footer</h1>
            <Link to="/">Voltar para Home</Link>
        </div>
    );
}

export default Footer