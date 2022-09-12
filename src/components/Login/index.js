import axios from "axios";
import {useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { UserContext } from "src/Contexts/UserContext.js";
import logo from "src/assets/img/wallet.png";

function Login(){
    const {setUser} = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        try{
            const {data} = await axios.post("http://localhost:4000/Login", {email, password});
            setUser(data);
            navigate("/Home");
        }catch(error){
            console.log("Erro ao fazer login");
        }
    }

    return (
        <>
                <img className="logo" src={logo} alt="logo"/>
                    <form onSubmit={SingUp}>
                        <input 
                        type='email' 
                        placeholder="Email" 
                        onChange={(e)=> setEmail(e.target.value)}
                        required
                        />
                        <input 
                        type='password' 
                        placeholder="password" 
                        onChange={(e)=> setPassword(e.target.value)} 
                        required
                        />
                        <button type="submit" onClick={handleSubmit}>Entrar</button>
                    </form>
                    <Link to="/SingUp"> Não tem uma conta? cadastre-se!</Link>
        </>
    )
}

export default Login;