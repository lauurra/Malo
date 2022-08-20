import React from "react"
import Logo from "./Icons/logo";
import NavBar from "./NavBar";
import img1 from './img1.jpg';



const Home = () => {
return(
    <div>
        <NavBar/>
        <div style={{ }}>
            <p>MALO Reinigung GmbH</p>
            <p>Wir bieten Reinigungsdienste für alle Kategorien,
große und kleine Unternehmen
sowie Privathaushalte.</p>
        <img style={{width: "30%"}} src={img1} alt="Img1" ></img>
        </div>
    </div>
)
}

export default Home;