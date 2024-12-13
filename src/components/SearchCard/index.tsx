import { NavLink, Outlet } from 'react-router-dom'
import './styles.css'
import { useState } from 'react'

type FormData = {
    githubUser: string
}

export default function SearchCard() {

    const [showGithubUser, setGithubUser] = useState<string>()

    const [formData, setFormData] = useState<FormData>({ githubUser: '' })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleInputChange(event: any) {
        const value = event.target.value
        const name = event.target.name
        setFormData({ ...formData, [name]: value })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleFormSubmit(event: any) {
        event.preventDefault()
        setGithubUser(formData.githubUser + " ")
    }

    return (
        <div className='container-search-card'>
            <div className='search-card mt45'>
                <div className='content-search-card'>
                    <form onSubmit={handleFormSubmit}>
                        <h3 className='pb20'>Encontre um perfil Github</h3>
                        <input
                            name='githubUser'
                            value={formData.githubUser}
                            type="text"
                            placeholder='Usuário Github'
                            onChange={handleInputChange} />
                        <NavLink to="/search/profile" className='pt30 dblock'>
                            <button type='submit'>Encontrar</button>
                        </NavLink>
                    </form>
                </div>
            </div>
        </div>
    )
}