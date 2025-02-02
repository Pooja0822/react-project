import './Partners.css'
import P1 from '../../assets/logo/airbnb.png' 
import P2 from '../../assets/logo/client-8.png' 
import P3 from '../../assets/logo/Lifegroups.png' 
import P4 from '../../assets/logo/myob.png' 
import P5 from '../../assets/logo/tailus.png' 
import P6 from '../../assets/logo/microsoft.png' 
import P7 from '../../assets/logo/coty.png' 
import P8 from '../../assets/logo/lilly.png' 
import I1 from '../../assets/img/medal.4f14f3bf6466c21f6a52.png'
import I2 from '../../assets/img/thought.png'
import I3 from '../../assets/img/training.png'
import Dashboard from '../../assets/img/AboutDashboard.png'
import DashBoard from '../Dashboard/DashBoard'

export const Partners = () => {
    const Partners = [P1,P2,P3,P4,P5,P6,P7,P8]; 
  return (
    <>
        {/* Partner section */}
        <section className='Partners mx-auto text-center'>
                <div className='px-5  py-5'>
                    <h2 className='fw-bold py-5 fw-bold text-white'> Our Placement Partners </h2>
                    <div className='row m-0 Partners-Logo-Div'>
                        {Partners.map((P,index) => 
                         (
                            <div className='col-6 col-md-3 p-3 align-content-center' key={index}>
                                <img src={P} alt='partner' />
                            </div>
                        ))}
                        
                    </div>
                </div>
            <p className='btn rounded-5 px-5 py-1'> and, more <br/> companies</p>
        </section>

        {/* Components section */}

        <section className='Components text-center mx-auto'>
            <div className='px-5 py-5 mx-auto'>
               <div className='px-md-5 col-lg-9 mx-auto'>
                       <div className='px-xl-5'>
                           <h6 className="text-info fw-bold pb-3 text-capitalize">Open Source Theme and UI Components</h6>
                            <h2 className='fw-bold pb-5 fw-bold text-white XL-Heading'> Geaux Astro helps you craft beautiful websites efficiently </h2>
                       </div>
               </div>
            </div>
            <div className='row m-0 px-lg-5 py-5 text-white'>
                <div className='col-12 col-lg-5 align-content-center'>
                    <div className="row m-0 p-0">
                        <div className='col-2 col-md-1 col-lg-2'>
                            <img src={I1} alt="icon" id='Icon'/>
                        </div>
                        <div className="col-10 col-md-11 col-lg-10 text-start">
                            <h4 className="fw-bold">Certificate Distribution</h4>
                            <p className="">We offer certificates to validate and recognize your achievement.</p>
                        </div>
                    </div>
                    <div className="row m-0 p-0">
                        <div className='col-2 col-md-1 col-lg-2'>
                            <img src={I2} alt='icon' id='Icon'/>
                        </div>
                        <div className="col-10 col-md-11 col-lg-10 text-start">
                            <h4 className="fw-bold">Knowledge</h4>
                            <p className="">We deliver transformative knowledge that empowers and inspires.</p>
                        </div>
                    </div>
                    <div className="row m-0 p-0">
                        <div className='col-2 col-md-1 col-lg-2'>
                            <img src={I3} alt='icon' id='Icon'/>
                        </div>
                        <div className="col-10 col-md-11 col-lg-10 text-start">
                            <h4 className="fw-bold">Hands-on Experience</h4>
                            <p className="">We provide hands-on experience for real-world learning. You learn best by doing.</p>
                        </div>
                    </div>
                    
                </div>
                <div className='col-12 col-lg-7 align-content-center pt-4 pt-lg-0'>
                    <img src={Dashboard} alt='dashboard' height='auto' width="95%"/>
                </div>
            </div>
        </section>
        <DashBoard/>
    </>
  )
}
