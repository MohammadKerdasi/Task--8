import './Hero.css'
import Hero_Footer_img from './../../img-assets/footer.svg'
import Back_Footer_img from './../../img-assets/pattren.png'
import Game_img from './../../img-assets/gameBoy-min.png'
import press_start_img from './../../img-assets/pressStart.svg'
import facebook_img from './../../img-assets/facebook.png'
import be_img from './../../img-assets/behance.png'
import linkedin_img from './../../img-assets/linkedin.png'
import insta_img from './../../img-assets/instgram.png'
import x_img from './../../img-assets/twitter.png'

const Hero = () => {
  return (
    <>
    <section className='Home'>
    <div className='Hero'>
        <div className="content">
            <p className='Text'>Hey !! Mario still here, But don’t forget that</p>
            <p>At focal X agency, we are working to build somthing different. Here you’ll have a group of creative people who specialize in:
            Branding, Digital Marketing, Web/App Development, Ui/Ux
            Content creation, Graphic design, Social media and More........
            So you can take a tour in our website, OR just <b>Press Start  :)</b></p>
        </div>
        <div className='Hero-Footer'>
            <img className='Footer-img' src={Hero_Footer_img} alt="" />
            <img className='back' src={Back_Footer_img} alt="" />
            <img className='Game' src={Game_img} alt="" />
            <img className='Press' src={press_start_img} alt="" />
            <a className='Start' href="http://focal-x.com/mario">START</a>
            
                <div className='row'>
                    <div>
                            <ul className='links-2'>
                                <li className='li-none'><a href="https://www.facebook.com/focal.x.agency/"><img src={facebook_img} alt="" /></a></li>
                                <li className='li-none'><a href="https://www.behance.net/focal-x-agency"><img src={be_img} alt="" /></a></li>
                                <li className='li-none'><a href="https://www.linkedin.com/company/focal-x-agency"><img src={linkedin_img} alt="" /></a></li>
                                <li className='li-none'><a href="https://www.instagram.com/focal.x.agency"><img src={insta_img} alt="" /></a></li>
                                <li className='li-none'><a href="https://x.com/focal_x_agency?mx=2"><img src={x_img} alt="" /></a></li> 
                            </ul>
                    </div>
                    <div>
                        <p className='copy-right'>© 2021 - 2022 focal X agency All Right Reserved</p>
                    </div>
                </div>
            
        </div>
    </div>
    </section>
    </>
    
  )
}

export default Hero