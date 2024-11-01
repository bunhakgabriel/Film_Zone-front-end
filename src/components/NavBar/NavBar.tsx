import { useState } from 'react'
import './NavBar.css'
import { genreMap } from '../utils/genreMapping'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { log } from 'console';

interface ComponenteFilhoProps {
    busca?: (tipo: 'F' | 'G', value: string) => void;
}
const NavBar = ({ busca }: ComponenteFilhoProps) => {

    const logout = () => {
        const confirmLogout = 
            window.confirm('Deseja realmente desconectar sua sessão?');
        if (confirmLogout) {
            localStorage.clear();
            window.location.reload();
        }
    }

    return (
        <header>
            <div className='logo' >
                <img src="/logoNavBarBranco.png" alt="" />
            </div>
            <div>
                <ul>
                    <li><Link className='link' to="/Home" >Home</Link></li>
                    <li><Link className='link' to="/filmes" >Filmes</Link></li>
                    <li>
                        Gênero:
                        <select style={{ marginLeft: '10px' }} name="" id="" onChange={(e) => busca!('G', e.target.value)}>
                            <option value="">Todos</option>
                            {Object.entries(genreMap).map(([key, value]) => {
                                return <option key={key} value={key}>{value}</option>
                            })}
                        </select>
                    </li>
                    <li>Fórum</li>
                </ul>
            </div>
            <div className='inputBusca' >
                <input type="text" onChange={(e) => busca!('F', e.target.value)} />
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "white", }} size='xl' />
                <FontAwesomeIcon
                    onClick={logout}
                    style={{ marginLeft: '40px' }}
                    icon={faArrowRightFromBracket}
                    size='xl'
                    className='logout' />
            </div>
        </header>
    )
}

export default NavBar