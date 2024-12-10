import { NavLink } from 'react-router-dom'
import './styles.css'

export default function Header() {

    return (
        <header>
            <NavLink to="/home" className='container-header'>
                <h1>Github API</h1>
            </NavLink>
        </header>
    )
}