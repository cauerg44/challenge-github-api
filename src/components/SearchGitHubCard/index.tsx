import './styles.css'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ButtonSubmit from '../ButtonSubmit'

type FormData = {
    githubUser: string
}

export default function SearchGithubCard() {

    const [formData, setFormData] = useState<FormData>({ githubUser: '' })

    const navigate = useNavigate()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleInputChange(event: any) {
        const value = event.target.value
        const name = event.target.name
        setFormData({ ...formData, [name]: value })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleFormSubmit(event: any) {
        event.preventDefault()
        navigate(`/search/${formData.githubUser}`)
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
                            <div className='pt30 dblock'>
                                <ButtonSubmit text='Encontrar'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}