import { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import './PaginaInicial.css'
import { Link, useNavigate } from 'react-router-dom';

const PaginaInicial = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.User){
            navigate('/')
        }
    }, [])


    return (
        <div>
            <NavBar />
            <div className="paginaInicial">
            </div>
        </div>
    )
}

export default PaginaInicial;