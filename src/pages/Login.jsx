import { useState } from "react";

function Login (){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    console.log(email);
    console.log(senha);




    return(
        <div className="flex-grow flex shadow m-6 rounded-[12px] bg-slate-200 justify-center items-center">
            <div className=" p-6 flex flex-col min-w-[398px]  gap-3">

                <h3 className="text-center text-2xl">Faça login em sua conta</h3>

                <div className="field flex flex-col w-[100%]">
                    <span className="text-2xl">E-mail</span>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-[10px] min-h-[30px] p-2 text-center" placeholder="Informeu seu E-mail" />
                </div>

                <div className="field flex flex-col w-[100%]">
                    <span className="text-2xl">Senha</span>
                    <input type="password" name="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} className="rounded-[10px] min-h-[30px] p-2 text-center" placeholder="Informe sua Senha"/>
                </div>

                <span>Esqueceu sua Senha?</span>

                <button className="bg-teal-400 hover:bg-teal-600 rounded-[8px] uppercase font-bold min-h-[40px] " type="submit">Entrar</button>

            </div>
            
        </div>
    );

}

export default Login;