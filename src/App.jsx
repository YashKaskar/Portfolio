import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from './components';
import StarsCanvas from './components/canvas/Stars';



const App =() => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-#5C469C">
        <div className="bg-hero-pattern bg-cover bg-no-repeat">   
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div> 
          < Contact />
          <StarsCanvas /> 
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
