import React from "react";
import Navbar from "./component/ui/navbar";
import Hero from "./component/ui/Hero";
import Features from "./component/ui/Feature";
import Mission from "./component/ui/Mission";
import Contact from "./component/ui/contact";
import Footer from "./component/ui/Footer";
import { useState } from "react";

export default function App(){
  const [cartOpen, setCartOpen] = useState(false);
  return(
    <div>
      <Navbar
        setCartOpen={setCartOpen}
        totalItems={0} 
        onLoginClick={() => console.log("Login")} 
        onLogout={() => console.log("Logout")}
      />
      <Hero/>
      <Features/>
      <Mission/>
      <Contact/>
      <Footer/>

    </div>
  )
}


