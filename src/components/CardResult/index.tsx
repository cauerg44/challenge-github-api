import './styles.css'
import { UserDTO } from '../../models/user'

type Props = {
    user: UserDTO
}

export default function CardResult({ user }: Props) {

    return (
        <div className='github-profile-card-container github-profile-card mt45 mb45'>
            <div className='aux-container dflex'>
                <div className='profile-photo'>
                    <img src={user.avatar_url} alt={user.name} />
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