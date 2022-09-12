import { useState } from "react";
import HeroSection from "./components/HeroSection";
import MobileNav from "./components/MobileNav";
import NavBar from "./components/NavBar";


function App() {
  const [showMobileNav,setShowMobileNav]=useState(false)
  function HideMobileNav(){
		setShowMobileNav(false)
	}
  function ShowMobileNav(){
		setShowMobileNav(true)
	}
  return (
    <div className="App w-screen h-screen">
     <NavBar showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} HideMobileNav={HideMobileNav} ShowMobileNav={ShowMobileNav}  />
    {showMobileNav&& <MobileNav showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} HideMobileNav={HideMobileNav}  ShowMobileNav={ShowMobileNav} />}
   <HeroSection  />
    </div>
  );
}

export default App;
