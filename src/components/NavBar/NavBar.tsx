import './NavBar.css'

const NavBar = () => {

    return (
        <header>
            <div className='logo' >
                <img src="/logoNavBarBranco.png" alt="" />
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Filmes</li>
                    <li>
                        Gênero: 
                        <select style={{marginLeft: '10px'}} name="" id="">
                            <option value="">Todos</option>
                            <option value="">Ação</option>
                            <option value="">Suspense</option>
                            <option value="">Drama</option>
                        </select>
                    </li>
                    <li>Fórum</li>
                </ul>
            </div>
            <div>
                <input type="text" />
            </div>
        </header>
    )
}

export default NavBar