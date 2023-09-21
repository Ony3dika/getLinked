import linkedin from "../assets/linkedin.svg"
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import insta from "../assets/insta.svg";
import call from "../assets/call.svg";
import location from "../assets/location.svg";
import starw from "../assets/starw.png";
import starpu from "../assets/star pu.png";


function Footer() {
  return (
    <footer className='bg-[#120b21] py-10 body relative lg:leading-9 lg:text-base text-[13px] font-normal leading-7'>
      <img
        src={starw}
        className='lg:h-5 absolute left-[5%] top-1/4 h-4'
        alt='white star'
      />
      <img
        src={starpu}
        className='lg:h-5 absolute left-1/2 top-2/4 lg:top-3/4 h-4'
        alt='purple star'
      />
      <img
        src={starw}
        className='lg:h-5 absolute right-[10%] bottom-1/3 h-4'
        alt='white star'
      />
      <div className='flex lg:flex-row flex-col container mx-auto px-16 lg:px-32'>
        <section className='lg:basis-2/4 basis-full'>
          <p className='head lg:text-3xl text-xl'>
            get<span className='text-alt'>linked</span>
          </p>

          <p className='mt-5 '>
            Getlinked Tech Hackathon is a technology innovation program{" "}
            <br className='hidden lg:block' />
            established by a group of organizations with the aim of showcasing{" "}
            <br className='hidden lg:block' />
            young and talented individuals in the field of technology
          </p>

          <p className='lg:mt-20 mt-10 '>
            Terms of Use <span className='text-alt mx-3 font-black'>|</span>{" "}
            Privacy Policy
          </p>
        </section>

        <section className='lg:basis-1/4 lg:mt-0 mt-10 basis-full'>
          <ul className='leading-10'>
            <li className='text-alt font-extrabold'>Useful links</li>
            <li>Overview</li>
            <li>Timeline</li>
            <li>FAQs</li>
            <li>Register</li>
            <li className='font-extrabold flex items-center'>
              <span className='text-alt'>Follow us</span>
              <img
                src={insta}
                className='h-4 lg:h-5 mx-2 lg:mx-3'
                alt='instagram logo'
              />
              <img
                src={twitter}
                className='h-4 lg:h-5 mx-2 lg:mx-3'
                alt='twitter logo'
              />
              <img
                src={facebook}
                className='h-4 lg:h-5 mx-2 lg:mx-3'
                alt='facebok logo'
              />
              <img
                src={linkedin}
                className='h-4 lg:h-5 mx-2 lg:mx-3'
                alt='linkedin logo'
              />
            </li>
          </ul>
        </section>

        <section className='lg:basis-1/4 lg:mt-0 mt-10 basis-full'>
          <p className='text-alt font-extrabold'>Contact Us</p>

          <div className='flex items-center mt-5'>
            <img src={call} className='h-4 lg:h-5 mr-4' alt='telephone' />
            <p>+234 6707653444</p>
          </div>
          <div className='flex lg:items-center items-start mt-5'>
            <img src={location} className='h-4 lg:h-5 mr-4' alt='address' />
            <p>
              27,Alara Street <br /> Yaba 100012 <br /> Lagos State
            </p>
          </div>
        </section>
      </div>

      <p className='body text-center mt-10'>
        All rights reserved. © getlinked Ltd.
      </p>
    </footer>
  );
}

export default Footer