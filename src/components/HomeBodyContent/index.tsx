import { NavLink } from 'react-router-dom'
import './styles.css'

export default function HomeBodyContent() {

    return (
        <div className="home-container mt30">
            <h2 className="title-section-home">Desafio Github API</h2>
            <h3 className="sub-title-section-home mb25">DevSuperior - Escola de programação</h3>
            <NavLink to="/search">
                <button className="btn-home">
                    Começar
                </button>
            </NavLink>
        </div>
    )
}