import './Hero.css';
import { Partners } from '../../components/Partners/Partners';

export const Hero = () => {
  return (
    <>
    <section className="Hero py-5 ">
          <div className='px-lg-5 py-3 py-md-5'>
              <div id='Hero-div-1' className="mx-auto px-5 py-5 text-center">
                <h1 className="fw-bold mb-4 mb-lg-5 text-white">Learn from the best, be your best..</h1>
                <p className="mb-4 mb-lg-5 mx-auto text-secondary">
                  Give yourself an upgrade with our inspiring online courses and join a
                  global community of learners
                </p>
                <a href="#aboutus">
                  <button className="btn btn-warning fw-bold px-4 py-3 rounded-5">
                    Get Started
                  </button>
                </a>
              </div>
          </div>
    </section>
    <Partners/>
    </>
  );
};
