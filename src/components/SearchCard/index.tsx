import './styles.css'

export default function SearchCard() {

    return (
        <div className='container-search-card'>
            <div className='search-card mt45'>
                <div className='content-search-card'>
                    <h3 className='pb20'>Encontre um perfil Github</h3>
                    <input type="text" placeholder='Usuário Github' />
                    <div className='pt30'>
                        <button>Encontrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}