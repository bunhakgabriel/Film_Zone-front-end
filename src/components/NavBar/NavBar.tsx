import { useState } from 'react'
import './NavBar.css'
import { genreMap } from '../utils/genreMapping'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface ComponenteFilhoProps {
    busca?: (tipo: 'F' | 'G', value: string) => void;
}
const NavBar = ({ busca }: ComponenteFilhoProps) => {

    return (
        <header>
            <div className='logo' >
                <img src="/logoNavBarBranco.png" alt="" />
            </div>
            <div>
                <ul>
                    <li><Link className='link' to="/" >Home</Link></li>
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
            <div className='input' >
                <input type="text" onChange={(e) => busca!('F', e.target.value)} />
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "white", }} size='xl' />
            </div>
        </header>
    )
}

export default NavBar