import './Services.css'
import Focal_x_img from '..//..//img-assets/brandingOrange.png'
import Focal_x_img2 from '..//..//img-assets/markitingPurple.png'

const Services = () => {
  return (
    <>
    <section id='Services' className=' Services'>
        <div className='Second'>
        <h1 className='servicesTitle'>Our Services</h1>
        </div>
        <div className='Cards'>
            <div className='Card'>
                <h2 className='BrandingText'>Branding</h2>
                    <p className='BrandP'>The brand is hope,
                    It is also the source of inspiration for everything you do when you
                    deal with your customers and that is the important and emotional
                    thing. Your Brand and Visual identity represents an intrinsic Value
                    to your company.</p>
                    <p><b>In focal X agency, we provide:</b></p>
                    <div className='DownText'>
                        <div className='P-text'>
                            <p className='DownText-p'>Visual identity design</p>
                            <p className='DownText-p'>Define Brand Identity.</p>
                            <p className='DownText-p'>Define Brand personality..</p>
                            <p className='DownText-p'>Building Your brand strategy.</p>
                            <p className='DownText-p'>Market research and competitors study</p>
                        </div>
                        <div><img className='FocalxImg' src={Focal_x_img} alt="" /></div>
                    </div>
                    <p><b>We walk with you from A to Z.</b></p>
            </div>
            <div className='Card'>
                <h2 className='MarketingText'>Marketing</h2>
                    <p className='BrandP'>Talk to your customers and tell them you and your company's
                                                story through us the way you want.
                                                Let us plan the content that will bring your audience closer to you</p>
                    <p><b>In our marketing agency, we provide</b></p>
                    <div className='DownText-2'>
                        <div className='P-text'>
                            <p className='DownText-p'>E-mail marketing.</p>
                            <p className='DownText-p'>Affiliate marketing.</p>
                            <p className='DownText-p'>Influencer marketing.</p>
                            <p className='DownText-p'>App store optimization ( ASO ).</p>
                            <p className='DownText-p'>Search engine Marketing ( SEM ).</p>
                            <p className='DownText-p'>Search engine optimization ( SEO ).</p>
                            <p className='DownText-p'>Social media marketing & campaigns</p>
                        </div>
                        <div><img className='FocalxImg' src={Focal_x_img2} alt="" /></div>
                    </div>
                    
            </div>
        </div>
    
    </section>
    </>
  )
}

export default Services