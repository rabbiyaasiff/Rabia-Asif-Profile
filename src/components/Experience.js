import React from 'react'
import {NavLink,Link} from 'react-router-dom'
function Experience() {
  const currentlink=({isActive})=>{
          return{
            fontWeight: isActive? 'bold':'normal',
          }
         }  
           return (
         
    <><div class="container">
   <div class="section__title">Experience</div>
     <div class="section__list">
        <div class="section__list-item">
          <div class="left">
            <div class="name">Content writer</div>
            <div class="addr">Freelance</div>
            <div class="duration">Jan 2019 - Current</div>
          </div>
          <div class="right">
            <div class="name">Lecturer</div>
            <div class="addr">Scholor College</div>
            <div class="duration">Sep 2020 - Mar 2021</div>
          </div>
        </div>
        <div class="section__list-item">
          <div class="left">
            <div class="name">Lecturer</div>
            <div class="addr">Sarwar Institute, SIPS</div>
            <div class="duration">Aug 2021 - Current</div>
          </div>
          <div class="right">
            <div class="name">Program Supervisor</div>
            <div class="addr">Sarwar Institute, SIPS</div>
            <div class="duration">Aug 2021 - Current</div>
          </div>
        </div>
     </div>
     <NavLink className='li underline-hover-effect' style={currentlink} to='/'>About</NavLink>
         <NavLink className='li underline-hover-effect' style={currentlink} to='/education'>Education</NavLink>
         <NavLink className='li underline-hover-effect' style={currentlink} to='/experience'>Experience</NavLink>
         <NavLink className='li underline-hover-effect' style={currentlink} to='/skills'>Skills</NavLink>
         <NavLink className='li underline-hover-effect' style={currentlink} to='/interests'>Interests</NavLink>

    </div></>
  )
}

export default Experience