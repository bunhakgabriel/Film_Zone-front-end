import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import './PaginaInicial.css'
import { Link, useNavigate } from 'react-router-dom';

const PaginaInicial = () => {
    const navigate = useNavigate()
    const [usuario, setUsuario] = useState<{user: string}>({user: ''})

    useEffect(() => {
        if(!localStorage.User){
            navigate('/')
        } else {
            setUsuario(JSON.parse(localStorage.User))
        }
    }, [])



    return (
        <div>
            <NavBar />
            <div className="paginaInicial">
                <h1>Olá {usuario.user}, seja Bem-Vindo!</h1>
            </div>
        </div>
    )
}

export default PaginaInicial;