import insta from "../../assets/insta.svg";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";

function Assist() {
  return (
    <div className='lg:basis-1/2 basis-full lg:mt-0 mt-10 lg:bg-[#1c162f] lg:shadow-xl rounded lg:p-12'>
      <p className='text-xl text-alt:text-start font-semibold head text-alt'>
        Questions or need assistance? <br />
        Let us know about it!
      </p>

      <p className='text-base body mt-5 lg:hidden'>
        Email us below to any question related to our event
      </p>

      <input
        type='text'
        placeholder='First Name'
        className='mt-8 body placeholder:text-white text-white w-full py-3 px-8 bg-transparent rounded border-2 border-white/70'
      />
      <input
        type='email'
        placeholder='Mail'
        className='mt-10 body placeholder:text-white text-white w-full py-3 px-8 bg-transparent rounded border-2 border-white/70'
      />

      <textarea
        name='message'
        placeholder='Message'
        className='mt-10 body placeholder:text-white resize-none h-40 text-white w-full py-3 px-8 bg-transparent rounded border-2 border-white/70'
      ></textarea>

      <div className='flex justify-center'>
        <button className='text-base body bg-gradient-to-r lg:px-10 lg:py-4 px-8 py-2.5 mt-5 lg:mt-10 from-[#903AFF] to-[#FE34B9] rounded'>
          Submit
        </button>
      </div>

      <div className="flex flex-col mt-8 items-center">
        <p className='mt-5 text-alt font-semibold'>Share on</p>

        <div className='h-8 flex w-1/3 justify-between mt-3'>
          <img
            src={insta}
            className='h-4 lg:h-6'
            alt='instagram logo'
          />
          <img
            src={twitter}
            className='h-4 lg:h-6'
            alt='twitter logo'
          />
          <img
            src={facebook}
            className='h-4 lg:h-6'
            alt='facebok logo'
          />
          <img
            src={linkedin}
            className='h-4 lg:h-6'
            alt='linkedin logo'
          />
        </div>
      </div>
    </div>
  );
}

export default Assist;
