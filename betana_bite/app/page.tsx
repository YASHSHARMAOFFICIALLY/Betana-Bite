import React from "react";
import Navbar from "./component/ui/navbar";
import Hero from "./component/ui/Hero";
import Features from "./component/ui/Feature";
import Mission from "./component/ui/Mission";
import Contact from "./component/ui/contact";

export default function App(){
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Mission/>
      <Contact/>

    </div>
  )
}


