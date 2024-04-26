import React from 'react'
import '../css/Home.css'
import myImage from '../assets/images/elon.png'



const Home = () => {
  return (
    <div class = "container">
        <div class = "textContainer">
            <div class = 'titleContainer'>
                <h1 class = "title1">START UP?</h1>
                <h1 class = "title2">START <span class ="orange">NOW</span></h1>
            </div>
            <div class = "description">
              <p>
              Elon Musk's bakery startup would blend cutting-edge technology with artisanal craftsmanship, offering sustainably sourced ingredients and innovative baking techniques. From automated ovens to eco-friendly packaging, the mission would be to redefine bakery excellence, delivering exceptional taste while minimizing environmental impact.
              </p> 
            </div>
            <div class = "buttonContainer">
              <button class = "newFounderButton">
                <p>New Founder</p>
              </button>

              <button class = "existingFounderButton">
              <p>Existing Founder</p>
              </button>
            </div>
        </div>
        <div class = "muskContainer">
          <div class = "elonMusk">
            <img src = {myImage} alt = "yes" height = '480' width = '480' />
          </div>

        </div>
    </div>
  )
}




// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/Home1.css'

// const Home = () => {
//   return (
//     <div style = {{maxWidth: '100vw'}} class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
//     <div class="col-lg-5 p-3 p-lg-5 pt-lg-4">
//       <h1 style = {{color: 'whitesmoke'}} class="display-1 fw-bold lh-1  title">START UP?</h1>
//       <h1 class="display-1 fw-bold lh-1 title">START <span style = {{color:'orangered'}}>NOW</span></h1>
//       <p class="lead">Elon Musk's bakery startup would blend cutting-edge technology with artisanal craftsmanship, offering sustainably sourced ingredients and innovative baking techniques. From automated ovens to eco-friendly packaging, the mission would be to redefine bakery excellence, delivering exceptional taste while minimizing environmental impact. </p>
//       <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
//         <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">New Founder </button>
//         <button type="button" class="btn btn-outline-secondary btn-lg px-4 fw-bold">Existing Founder</button>
//       </div>
//     </div>
//     <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
//         <img  class="rounded-lg-1" src="../assets/images/Kanye.jpg" alt="yes" width="450"/>
//     </div>
//   </div>
//   )
// }

export default Home