import './Hosting.css'
import Circle from '..//..//img-assets/circle.svg'

const Hosting = () => {
  return (
    <>
        
    <section className='Hosting'>
    <div className='Balls'>
            <img className='ball-1' src={Circle} alt="" />
            <img className='ball-2' src={Circle} alt="" />
            <img className='ball-3' src={Circle} alt="" />
            <img className='ball-4' src={Circle} alt="" />
            <img className='ball-5' src={Circle} alt="" />
            <img className='ball-6' src={Circle} alt="" />
            <img className='ball-7' src={Circle} alt="" />
            <img className='ball-9' src={Circle} alt="" />
            <img className='ball-10' src={Circle} alt="" />
            <img className='ball-11' src= {Circle} alt="" />
    
            <img className='ball-13' src= {Circle} alt="" />
        </div>
    <div className='Third'>
        <h1 className='HostingTitle'>Hosting Pricing</h1>
    </div>
    <div className='HostingCards'>
        <div className='HostingCard'>
            <div className='HostingsCardContent'>
            <h3>Basic</h3>
            <p className='Basic-p'>for very small businesses
                and freelancers.</p>
                <div className='Description'>
                <p>Disk Space: <b>500 M.B</b></p>
                <p>Bandwidth: <b>500 M.B</b></p>
                <p>SubDomains: <b>500 M.B</b></p>
                <p>Parked Domains: <b>500 M.B</b></p>
                <p>E-mail Accounts: <b>500 M.B</b></p>
                <p>Cpanel (control panel): <b>500 M.B</b></p>
                <p>Money Back Guarantee: <b>500 M.B</b></p>
                </div>
                <div className='BtnPosition'>
                <button className='HostBtn'>You Will Have 1 Gift</button>
                </div>
                
            </div>
            
        </div>
        <div className='HostingCard2'>
            <div className='HostingsCardContent'>
            <h3>Pro</h3>
            <p className='Basic-p'>for Individuals that need sharing
vlogs or need huge portfolio.</p>
                <div className='Description'>
                <p>Disk Space: <b>3000 M.B</b></p>
                <p>Bandwidth: <b> 3 TERA</b></p>
                <p>SubDomains: <b>Unlimited</b></p>
                <p>Parked Domains: <b>Unlimited</b></p>
                <p>E-mail Accounts: <b>Unlimited</b></p>
                <p>Cpanel (control panel): <b>Yes</b></p>
                <p>Money Back Guarantee: <b>14 Days</b></p>
                </div>
                <div className='BtnPosition'>
                <button className='HostBtn2'>1 Gift per/mo for year</button>
                </div>
                
            </div>
            
        </div>
        <div className='HostingCard3'>
            <div className='HostingsCardContent'>
            <h3>Business</h3>
            <p className='Basic-p'>for Team that need sharing
                                    and reporting.</p>
                <div className='Description'>
                <p>Disk Space: <b>5000 M.B</b></p>
                <p>Bandwidth: <b>5 TERA</b></p>
                <p>SubDomains: <b>Unlimited</b></p>
                <p>Parked Domains: <b>Unlimited</b></p>
                <p>E-mail Accounts: <b>Unlimited</b></p>
                <p>Cpanel (control panel): <b>Yes</b></p>
                <p>Money Back Guarantee: <b>14 Days</b></p>
                </div>
                <div className='BtnPosition'>
                <button className='HostBtn3'>3 Gifts per/mo for year</button>
                </div>
                
            </div>
            
        </div>
        <div className='HostingCard4'>
            <div className='HostingsCardContent'>
            <h3>Enterprise</h3>
            <p className='Basic-p'>for large companies that need
                                    admins & security.</p>
                <div className='Description'>
                <p>Disk Space: <b>10000 M.B</b></p>
                <p>Bandwidth: <b>10 TERA</b></p>
                <p>SubDomains: <b>Unlimited</b></p>
                <p>Parked Domains: <b>Unlimited</b></p>
                <p>E-mail Accounts: <b>Unlimited</b></p>
                <p>Cpanel (control panel): <b>Yes</b></p>
                <p>Money Back Guarantee: <b>14 Days</b></p>
                </div>
                <div className='BtnPosition'>
                <button className='HostBtn4'>Just Call Us</button>
                </div>
                
            </div>
            
        </div>
 
        

    </div>

    </section>
    
    
    </>
  )
}

export default Hosting