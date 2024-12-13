import './styles.css'
import { UserDTO } from '../../models/user'

const user: UserDTO = {
    avatar_url: "https://avatars.githubusercontent.com/u/128049128?v=4",
    followers: 2,
    login: "cauerg44",
    location: "Salvador, Brazil",
    name: "Cauê da Rocha Garcia"
}

export default function CardResult() {

    return (
        <div className='github-profile-card-container github-profile-card mt45 mb45'>
            <div className='aux-container dflex'>
                <div className='profile-photo'>
                    <img src={user.avatar_url} alt="Profile photo" />
                </div>
                <div className='informations-card'>
                    <div className='informations-card-container'>
                        <div>
                            <h6>Informações</h6>
                        </div>
                        <div className='card-content-section'>
                            <div className='card-item'>
                                <p><h5 className='div-h5 dinline'>Perfil:</h5> <span className='link'>https://api.github.com/users/{user.login}</span></p>
                            </div>
                            <div className='card-item'>
                                <p>Seguidores: <span>{user.followers}</span></p>
                            </div>
                            <div className='card-item'>
                                <p>Localidade: <span>{user.location}</span></p>
                            </div>
                            <div className='card-item'>
                                <p>Nome: <span>{user.name}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}