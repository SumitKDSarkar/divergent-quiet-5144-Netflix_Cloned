import React, { useEffect, useState } from 'react'
import "./Nav.css"
import {Link} from "react-router-dom";




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

            <div className='seconddiv'>
                <h3 className='Home'>Home</h3>
                <h3 className='Home'>TV Show</h3>
                <h3 className='Home'>Movie</h3>
                <h3 className='Home'>Web Series</h3>
                <h3 className='Home'>News</h3>

            </div>

            <div className='searchbox'>
                <input  className='search' placeholder='Search for Movies, Shows, Chanels etc.' ></input>

            </div>
            

            <div className='trddiv'>

                <button className='login'>LogIn</button>
                <button className='buy'>Buy Now</button>

                
                </div>
           
            
            
        </div>
    )
}

export default Nav;
