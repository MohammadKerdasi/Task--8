import './Footer.css'
import Focal_x_logo from '..//..//img-assets/logoFocal-x.png'
import Facebookimg from '..//..//img-assets/facebook -white.png'
import beimg from '..//..//img-assets/behance -white.png'
import linkedinimg from '..//..//img-assets/linkdin-white.png'
import instaimg from '..//..//img-assets/instgram -white.png'
import ximg from '..//..//img-assets/twitter -white.png'

const Footer = () => {
  return (
    <section className='TheFooter'>
        <div className='FooterCards container '>
            <div className='FooterCard1'>
              
              <img src= {Focal_x_logo} alt="" /> <span className='OrangeColor FontText'>.agency</span>
              <h1 className='h1-color'>Head Office</h1>
              <p className='whiteColor'>Syria - Latakia - grh2+hjx
                  35.5199518</p>
         
            
            </div>
            <div className='FooterCard'>
              <h3>Sales</h3>
              <p>contact@focal-x.com
              +963 953 666 056</p>
              <h3>Public Relations</h3>
              <p>pr@focal-x.com
                  +963 953 666 052</p>
            </div>
            <div className='FooterCard'>
              <h3>Customer Support</h3>
              <p>info@focal-x.com
                  +963 953 666 054</p>
              <h3>Human Resources</h3>
              <p>hr@focal-x.com</p>
            </div>
            <div className='FooterCard'>
              <h3>Useful Links</h3>
              <p>Clients & Partners</p>
              <p>Check Certificat ID</p>
              <p>Check for employee</p>
              <p>Our Brand ID guidlines</p>
            </div>
            <div className='FooterCard'>
              <h3 className='TextCenter'>Keep In Touch</h3>
              <ul className='List-2'>
                <li className='ListItem-2'><a href="https://www.facebook.com/focal.x.agency/"><img src={Facebookimg} alt="" /></a></li>
                <li className='ListItem-2'><a href="https://www.behance.net/focal-x-agency"><img src= {beimg}  alt="" /></a></li>
                <li className='ListItem-2'><a href="https://www.linkedin.com/company/focal-x-agency"><img src= {linkedinimg} alt="" /></a></li>
                <li className='ListItem-2'><a href="http://focal-x.com/Www.Instagram.com/focal.x.agency"><img src= {instaimg}  alt="" /></a></li>
                <li className='ListItem-2'><a href="http://x.com/focal_x_agency"><img src= {ximg} alt="" /></a></li>
              </ul>
              
            </div>
         
        </div>
        <div className='w-100 flex-center'>
        <p className='whiteColor container-2'>© 2021 - 2023 focal X L.L.C All Right Reserved </p> 
        <span className='hr'></span>
        </div>


    </section>
  )
}

export default Footer