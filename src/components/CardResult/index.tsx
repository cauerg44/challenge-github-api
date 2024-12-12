import './styles.css'
import auxImg from '../../assets/im-beautiful.jpg'

export default function CardResult() {

    return (
        <div className='github-profile-card-container github-profile-card mt45 mb45'>
            <div className='aux-container dflex'>
                <div className='profile-photo'>
                    <img src={auxImg} alt="" />
                </div>
                <div className='informations-card'>
                    <div className='informations-card-container'>
                        <div>
                            <h6>Informações</h6>
                        </div>
                        <div className='card-content-section'>
                            <div className='card-item'>
                                <p><h5 className='div-h5 dinline'>Perfil:</h5> <span className='link'>https://api.github.com/users/acenelio</span></p>
                            </div>
                            <div className='card-item'>
                                <p>Seguidores: <span>2</span></p>
                            </div>
                            <div className='card-item'>
                                <p>Localidade: <span>Salvador, Bahia, Brazil</span></p>
                            </div>
                            <div className='card-item'>
                                <p>Nome: <span>Cauê</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}