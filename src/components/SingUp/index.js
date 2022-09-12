import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"    
    
function SingUp(){
    
        const[email, setEmail]= useState('')
        const[password, setPassword] = useState('')
        const[name, setName]= useState('')
        const [confirmPassword, setConfirmPassword] = useState('')
        const navigate = useNavigate();
    
        async function handleSubmit(e){
            e.preventDefault();
    
            const info = {
                'email': email,
                'password': password,
                'confirmPassword': confirmPassword
            }

            try {
                await axios.post('http://localhost:4000/sign-up', info)
                navigate('/')
            }

            catch (error) {
                console.log("Erro ao cadastrar usuário")
            }
        }
    
    
        return(
            <>
                <form onSubmit={SingUp}>
                    <input 
                    type='text' 
                    placeholder="Nome" 
                    onChange={(e)=> setName(e.target.value)} 
                    required/>
                    <input 
                    type='email' 
                    placeholder="Email" 
                    onChange={(e)=> setEmail(e.target.value)} 
                    required/>
                    <input 
                    type='password' 
                    placeholder="Senha" 
                    onChange={(e)=> setPassword(e.target.value)} 
                    required/>
                    <Button type="submit" onClick={handleSubmit}>Cadastrar</Button> 
                </form>
                <Link to="/"> <p>Já tem uma conta? Faça login!</p> </Link>
    
            </>
            
        );
}

export default SingUp;