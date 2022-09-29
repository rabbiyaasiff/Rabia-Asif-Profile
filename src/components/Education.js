import React from 'react'
import './Education.css';
import {NavLink,Link} from 'react-router-dom'

function Education() {
  const currentlink=({isActive})=>{
    return{
      fontWeight: isActive? 'bold':'normal',
      
      }
   }
  return (
    <><div className="container">
    <div className="section__title">Education</div>
    <table>
        <><tr>
            <><th>Degree</th>
            <th>Institute</th>
            <th>Session</th>
            <th>Grade</th></>
        </tr>
        <tr>
          <><td>Bachelor in Computer Science</td>
          <td>LCWU Lahore</td>
          <td>2016-2020</td>
          <td>3.4</td></>
        </tr>
        <tr>
            <><td>Intermediate Computer Science</td>
            <td>PGC Lahore</td>
            <td>2014-2016</td>
            <td>A+</td></>
        </tr>
        <tr>
            <><td>Matriculation</td>
            <td>AL-Ayesha Lahore</td>
            <td>2012-2014</td>
            <td>A+</td></>
        </tr></>
    </table>
    
     {/* <div className="section">
        <div className="section__title">Projects</div> 
          <div className="section__list">
            <div className="section__list-item">
              <div className="name">Paint Software</div>
              <div className="text">A graphics software developed with c++ </div>
           </div>
            <div className="section__list-item">
              <div className="name">Shopping Website</div>
              <div className="text"> Academic web development project using html, css, and php.  </div>
           </div>
            <div className="section__list-item">
              <div className="name">INGO</div>
              <div className="text"> FYP using Unity </div>
            </div>
        </div>
    </div> */}
    <NavLink className='li underline-hover-effect' style={currentlink} to='/'>About</NavLink>
         <NavLink className='li underline-hover-effect' style={currentlink} to='/education'>Education</NavLink>
         <NavLink className='li underline-hover-effect' style={currentlink} to='/experience'>Experience</NavLink>
         <NavLink className='li underline-hover-effect' style={currentlink} to='/skills'>Skills</NavLink>
         <NavLink className='li underline-hover-effect' style={currentlink} to='/interests'>Interests</NavLink>

         
    
</div>
    </>
  )
}

export default Education