import React from 'react'
import './Slider.css'
import {Link} from 'react-router-dom'


const Slider = (props) => {

    return (
        <div className="slider" >
            <div className="cross" onClick={()=>props.slide()}>X</div>
              <ul>
                    <li><div className="navbar">
                        <div className="dropdown">
                            <button className="dropbtn1">ABOUT</button>
                            <div className="dropdown-content">
                                <Link to="/establishment">Establishment</Link>
                                <Link to="/founder">About Founder</Link>
                                <Link to="/co-founder">About Co-Founder</Link>
                                <Link to="/Executive">Executive Committee</Link>
                                <Link to="/Vision">Vision & Mission</Link>
                            </div>
                        </div>
                    </div></li>
                    <li><div className="navbar">
                        <div className="dropdown">
                            <button className="dropbtn1">ADMISSION</button>
                            <div className="dropdown-content">
                                <a href="#a">Flora College of Architecture</a>
                                <a href="#a">Flora Valley School and Junior College</a>
                                <a href="#a">Flora Institute of Technology</a>
                                <a href="#a">Flora Skill Centre</a>
                                <a href="#a">Flora Skill Centre</a>
                            </div>
                        </div>
                    </div></li>
                    <li><a href="#footer">CONTACT</a></li>
                </ul>

        </div>
    )
}

export default React.memo(Slider)
