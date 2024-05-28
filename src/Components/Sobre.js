import './../Styles/global.css'
import './../Styles/sobre.css'
export function Sobre() {
    return (
       <>
        <h1 className="titulo-sobre">Sobre Mim</h1>
        <div id='sobre' className="display">
            
            <div className="sobre-mim">
                <p>
                    Desenvolvedor front-end apaixonado pela tecnologia, estou sempre disposto a aprender coisas novas e dar o melhor de mim em tudo o que eu me propor a fazer, estou em busca da minha primeira oportunidade na área da tecnologia da informação.
                </p>
                <p className='skills'>
                    Html / Css / JavaScript / React
                </p>
                <p className='skills'>
                    Styled-Components / Github / Git / TypeScript / React Native
                </p>
            </div>
            <div>
                <img alt="minha-foto" src="https://avatars.githubusercontent.com/u/86728737?v=4"/> 
            </div>
        </div>
       </>
    )
}