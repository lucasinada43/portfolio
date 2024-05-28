import "./../Styles/contact.css"
export function Contact() {
    return(
        <div id="contact" className="contact">  
        <h1>Contato</h1>
            <form action="https://formsubmit.co/lucasinada43@gmail.com" method="POST">
                <input type="text" name="name" placeholder="Digite seu nome" required />
                <input type="email" name="email" placeholder="Digite seu e-mail" required />
                <textarea cols="30" rows="10" name="message" 
                placeholder="Digite sua mensagem" required></textarea>  
                <button type="submit">ENVIAR</button>
                <input className="invisible" type="hidden" name="_subject" value="Novo Contato!" />
                <input className="invisible" type="text" name="_honey" />
                <input className="invisible" type="hidden" name="_captcha" value="false" />
            </form>
        </div>

    )
}