import insta from "../../assets/insta.svg"
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";

function Touch() {
  return (
    <main className='lg:basis-1/2 basis-full items-center lg:flex hidden body'>
      <div>
        <p className='text-3xl text-alt:text-start head text-alt leading-[42px]'>
          Get in touch
        </p>

        <p className='text-base mt-5'>
          Contact <br /> information
        </p>

        <p className='text-base mt-5'>
          27,Alara Street <br /> Yaba 100012 <br /> Lagos State
        </p>

        <p className='text-base mt-5'>Call Us : 07067981819</p>

        <p className='text-base mt-5'>
          we are open from Monday-Friday <br /> 08:00am - 05:00pm
        </p>

        <p className='mt-5 text-alt font-semibold'>Share on</p>

        <div className='h-8 flex w-1/3 mt-3'>
          <img
            src={insta}
            className='h-4 lg:h-6 lg:mr-3'
            alt='instagram logo'
          />
          <img
            src={twitter}
            className='h-4 lg:h-6 lg:mx-3'
            alt='twitter logo'
          />
          <img
            src={facebook}
            className='h-4 lg:h-6 lg:mx-3'
            alt='facebok logo'
          />
          <img
            src={linkedin}
            className='h-4 lg:h-6 lg:mx-3'
            alt='linkedin logo'
          />
        </div>
      </div>
    </main>
  );
}

export default Touch