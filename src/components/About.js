import React,{useState} from 'react'
import './About.css'
import avatar from './avatar.jpeg'
import {NavLink,Link} from 'react-router-dom'

function About() {
 const currentlink=({isActive})=>{
  return{
    fontWeight: isActive? 'bold':'',
    
    }
 }
//  const className=({isActive})=>
//  {return{
//   className: isActive? "underline-hover-effect":"" }
//  }
  return (
    <div className='container'>
          <img src={avatar} className="image"/>
          <div className="full-name">
            <span className="first-name">Rabia Asif</span>
            <br/>
            <span className="position">React-js Developer </span>
          </div>
          <br/><br/>
          <div className="contact-info">
            <span className="val">rabbiya.asiff@gmail.com
            <br/>
            03090983356
            <br/>Lahore, Pakistan</span>
          </div>
          <div>
            <span>I'm a young graduate with a degree of Bachelor in Computer Science. I'm strongly inclined towards  web designing and content writing. I've been doing freelancing projects of content writing for more than two years now. Besides, I'm keenly interested in the education department and have an experience of more than 3 years in teaching. I'm always eager to learn more and would love to bring this passion to your company.
            </span></div>
            <div class="specialities"><h3 className='position'>Specialities</h3>
            <ul>
        <li>
          <svg >
            <circle cx="80" cy="50" r="45"></circle>
          </svg>
        </li>
        <li>
          <svg >
            <circle cx="80" cy="50" r="45"></circle>
          </svg>
        </li>
        <li>
          <svg >
            <circle cx="80" cy="50" r="45"></circle>
          </svg>
        </li>
        <li>
          <svg>
            <circle cx="80" cy="50" r="45"></circle>
          </svg>
        </li></ul></div>
         
         <NavLink className='li underline-hover-effect' style={currentlink} to='/'>About</NavLink>
         <NavLink className='li underline-hover-effect' style={currentlink} to='/education'>Education</NavLink>
         <NavLink className='li underline-hover-effect' style={currentlink} to='/experience'>Experience</NavLink>
         <NavLink className='li underline-hover-effect' style={currentlink} to='/skills'>Skills</NavLink>
         <NavLink className='li underline-hover-effect' style={currentlink} to='/interests'>Interests</NavLink>

         <nav>
        
         <Link className="li " to="linkedin.com/in/rabia-asif-48b447158"> Rabia Asif</Link> </nav>
     </div>
  )
}

export default About