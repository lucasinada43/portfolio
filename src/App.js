import { Contact } from "./Components/Contact";
import { Home } from "./Components/Home";
import { NavBar } from "./Components/NavBar";
import { Projects } from "./Components/Projects";
import { Sobre } from "./Components/Sobre";

export function App(){
    return(
        <>
            <NavBar />
            <Home />
            <Sobre />
            <Projects /> 
            <Contact /> 
        </>
    )
}