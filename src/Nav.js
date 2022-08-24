import React, { useEffect, useState } from 'react'
import "./Nav.css"


function Nav() {

    const [show, handleShow] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        })
        return () =>{
            window.removeEventListener("scroll")    
        }
    }, [])
    return (
        <div className = {`nav ${ show && "nav__black" }`}>

            <img className = "nav__logo"
                src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.51.88"
                alt="Zee5 Logo"
            />
            

            {/* <div> */}
                

            <img className = "nav__avtar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="Zee5 Logo"
            />
            {/* </div> */}
            
        </div>
    )
}

export default Nav;
