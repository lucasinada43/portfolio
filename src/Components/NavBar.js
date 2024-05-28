import "../Styles/navBar.css";
export function NavBar() {
    return(
        <header>
            <nav>
                <div>
                    LucasInada 
                </div>
                <ul>
                    <li>home</li>
                    <li><a href="#sobre">about</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>
        </header>
    )
}