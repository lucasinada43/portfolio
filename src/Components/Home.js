import './../Styles/home.css'
import imagem from './../Image/my-foto.jpg'
import instagram from './../Image/instagram-icon.svg'
import github from './../Image/github-icon.svg'
import linkedin from './../Image/linkedin-icon.svg'
export function Home() {
    
    return(
        <main>
            <div>
                <h1>
                    Lucas <br /> Inada
                </h1>
                <p>
                    Front-end developer
                </p>
                <div className="icons">
                    <a target='_blank' href='https://www.instagram.com/lucasgabriel9241?igsh=MXdycDVsNGd2aHpzbQ=='>
                        <img className="icons-image" alt='instagram' src={instagram} />
                    </a>
                    <a target="_blank" href='https://github.com/lucasinada43'>
                        <img className="icons-image" alt='github' src={github} />
                    </a>
                    <a target="_blank" href='https://www.linkedin.com/in/lucas-gabriel-da-cruz-inada-35591b205/'>
                        <img className="icons-image" alt='linkedin' src={linkedin} />
                    </a>
                    
                </div>
            </div>
            <div>
                <img className="minha-foto" alt='minha-foto' src={imagem} />
            </div>
        </main>
        
    )
}