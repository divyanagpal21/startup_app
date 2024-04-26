import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/Navbar.css'
import Icon from '../assets/images/elon.png';
import React from 'react'
import '../css/NavbarNew.css'

const Navbar = () => {
  return (
    <ul style = {{paddingTop: '1rem', paddingRight:'4rem', fontSize:'1.4rem'}} class="nav justify-content-end">

        <div>
          <img class = "icon" src = {Icon} height = "7rem" width = "7rem"/>
        </div>
        <li class="nav-item" style={{ marginRight: '1rem' }}>
            <a class="nav-link active text common" href="/"><span class = "firstLetter common">H</span><span class="common">OME</span></a>
        </li>
        <li class="nav-item" style={{ marginRight: '1rem' }}>
            <a class="nav-link text common" href="/NewOwner"><span class = "firstLetter common">N</span>EW FOUNDER</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text common" href="/ExistingOwner"><span class = "firstLetter common">E</span>XISTING FOUNDER</a>
        </li>
    </ul>
  )
}

// const Navbar = () => {
//   return (
//     <div class = "container">
//       <div class = "icon-container">
//         {/* <img src = {Icon} height = '5rem' width = '5rem'/> */}
//       </div>

//       <ul class = "nav-container">
//           <li class="navItem" style={{ marginRight: '1rem' }}>
//               <a  class="navLink" href="/">Home</a>
//           </li>
//           <li class="navItem" style={{ marginRight: '1rem' }}>
//               <a class="navLink" href="/NewOwner">New Founder</a>
//           </li>
//           <li class="navItem">
//               <a  class="navLink" href="/ExistingOwner">Existing Founder</a>
//           </li>
//       </ul>
//     </div>
//   )
// }

export default Navbar
