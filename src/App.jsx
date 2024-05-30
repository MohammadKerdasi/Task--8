import Footer from "./assets/Componentes/Footer/Footer"
import Hosting from "./assets/Componentes/Hosting/Hosting"
import NavBar from "./assets/Componentes/NavBar/NavBar"
import Services from "./assets/Componentes/Services/Services"
import Hero from "./assets/Componentes/hero/Hero"



const App = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <div className="margin container">
    <Services />
    </div>
    <Hosting />
    <Footer />
    </>
  )
}

export default App
