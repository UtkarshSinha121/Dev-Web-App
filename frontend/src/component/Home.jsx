import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div  className='dev'>
      <div className='container'>
        <div className='row '>
          <div className='col-md-2 my-3'>
            <div className='card ' style={{marginLeft:'-50px'}}>
              <div className='card-body'>
                <h5 className='fw-bold'>DEV Community is a community of 1,106,019 amazing developers</h5>
                <p>We're a place where coders share, stay up-to-date and grow their careers.</p>
                <div className='text-center'>
                <button className='btn btn-outline-primary fw-bold w-100'>
                  Create account
                </button>
                </div>
                <NavLink className='nav-link text-center my-2' to='login'>
                   Log in
                </NavLink>
              </div>
            </div>

            <p className='pt-4 icon' ><i class="fa-solid fa-house mx-2"></i>Home</p>
            <p className=' icon' ><i class="fa-solid fa-scroll mx-2"></i>Listing</p>
            <p className=' icon' ><i class="fa-solid fa-microphone mx-2"></i>Podcast</p>
            <p className=' icon' ><i class="fa-solid fa-video mx-2"></i>Videos</p>
            <p className=' icon' ><i class="fa-solid fa-tag mx-2"></i>Tags</p>
            <p className=' icon' ><i class="fa-solid fa-lightbulb mx-2"></i>FAQ</p>
            <p className=' icon' ><i class="fa-solid fa-paragraph mx-2"></i>Forum Shop</p>
            <p className=' icon' ><i class="fa-solid fa-heart mx-2"></i>Sponsers</p>
            <p className=' icon' ><i class="fa-solid fa-clipboard mx-2"></i>About</p>
            <p className=' icon' ><i class="fa-solid fa-address-book mx-2"></i>Contact</p>
            <p className=' icon' ><i class="fa-solid fa-book-open mx-2"></i>Guide</p>
            <p className=' icon fw-bold mx-2'>Others</p>
            <p className=' icon' ><i class="fa-solid fa-thumbs-up mx-2" style={{color:'yellow'}}></i>Code of Contact</p>
            <p className=' icon' ><i class="fa-solid fa-lock mx-2"></i>Privacy Policy</p>
            <p className=' icon' ><i class="fa-solid fa-list-ul mx-2"></i>Terms of Use</p>
            <div className='key'>
            <i  class=" fa-brands fa-twitter mx-2"></i>
            <i class=" fa-brands fa-instagram mx-2"></i>
            <i class="  fa-brands fa-github mx-2"></i>
            <i class="  fa-brands fa-square-facebook mx-2"></i>
            <i class=" fa-brands fa-twitch mx-2"></i>
            </div>
          </div>
          <div className='col-md-7 my-3'>
            <div className='d-flex'>
              <button className='btn buttons'>Relevent</button>
              <button className='btn buttons'>Latest</button>
              <button className='btn buttons'>Top</button>

              <button className='btn buttons ms-auto'>Week</button>
              <button className='btn buttons ms-auto'>Month</button>
              <button className='btn buttons ms-auto'>Year</button>
              <button className='btn buttons ms-auto'>Infinity</button>

            </div>
            <div className='card mt-3'>
              <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--4qm82Vzf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uylo2e7e1xuq0leui3gj.png" alt="" />
              <div className='card-body'>
                <div className='row'>
                  <div className='col-md-1'>
                    <img className='img1 ' src="https://res.cloudinary.com/practicaldev/image/fetch/s--LN8EL5O6--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1120159/a4b64cae-0836-452e-88fd-32a37d929df0.png" alt="" />
                     </div>
                     <div className='col-md'>
                      <h6>DevGeniusAI</h6>
                      <p>Jul 24</p>
                     </div>
                     <div className='container mx-4'>
                     <h3 className='fw-bold head' >The Latest Update on Next.js in 2023</h3>
                     <div className='d-flex'>
                        <button className='btn buttons2'>#webdev</button>
                        <button className='btn buttons2'>#javascript</button>
                        <button className='btn buttons2'>#next.js</button>
                        <button className='btn buttons2'>#react</button>
                     </div>
                        <div className='d-flex mt-2'>
                        💖🔥<p>3 reactions</p>
                        🗨️ <p>Add Comment</p>
                        </div>
                     </div>
                </div>


              </div>

            </div>
            <div className='card mt-2 '>
              <div>
                  <p className='mx-3 my-2' >DEV Community</p>
                  <div className='container'>
                     <img className='img3' src="https://res.cloudinary.com/practicaldev/image/fetch/s---UXjdvws--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_775/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wixrm7ejmrua4su7agha.jpg" alt="" />
                    <h5 className='fw-bold mx-3 mt-3'>Need to stay up-to-date with the most relevant trends in software?</h5>
                    <p className='mx-3'>Look no further.</p>
                    <p className='mx-3'>You can do so much more once you create your account. Follow the devs and topics you care about, and keep up-to-date.</p>
                     <a href="#" className='mx-3 fw-bolder '>StartNow</a>
                     <p className='mx-3 mt-2'>Happy Coding ❤️</p>
                  </div>

                 </div>
            </div>
          </div>
          <div className='col-md-3 my-3'>
            <div className='card ' style={{marginRight:'-50px'}} >
              
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--sHHbPqt4--/c_limit,f_auto,fl_progressive,q_auto,w_500/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ylq17e4fm8gfs75ur7nf.jpg" width='100%' alt="" />
                <div className='card-body'>
                  <a className='uline' href=""><h5 className='fw-bold my-2'>refine DEV Hackathon (24)</h5></a>
                 <hr />
                 <a className='uline' href=""><p >WhatsApp Web Scraper-Find and Export Contacts!</p></a>
                 
                 <hr />
                 <a className='uline' href="#"><p>React-Analytics</p></a>
                 <hr />
                 <a className='uline' href="#"><p>Competee:An online competition platform to useleash hidden talents 🏆</p></a>
                 <hr />
                 <a className='uline' href="#"><p>Create animations with Keronote ui</p></a>
                 <hr />
                 <a className='uline' href="#"><p>Rappy:The All-In-One job Hunting Assistant</p></a>
                
                 <button className='btn btn-primary w-100 mb-2 mt-3 '>Share your project</button>
                 <button className='btn btn-secondary w-100'>See all posts</button>

              </div>

            </div>
                <div className='card mt-3' style={{marginRight:'-50px'}}>
              <div className='card-body'>
                  <div className='d-flex'>
                       <h5 className=' fw-bold'>Listings</h5>
                       <a className='ms-auto see fw-bold' href="#">See all</a>
                  </div>
                  <hr />
                  <p className='hove'>typerflow.com-A place to publish coding articles</p>
                  <p className='small'>education</p>
                  <hr />
                  <p className='hove'>🚀 Build your first app with React & Next.js! Start the online course for free today!</p>
                  <p className='small'>education</p>
                  <hr />
                  <p className='hove'>What is Kubernets and how shouls you moniter it? 💡</p>
                  <p className='small'>education</p>
                  <hr />
                  <p className='hove'>Apply for ezpie maintainer</p>
                  <p className='small'>collabs</p>
                  <hr/>
                  <p className='hove'>Loking for devlopers to Build Resume Matcher together!</p>
                  <p className='small'>collabs</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Home