import man from "../../assets/man.svg";
import woman from "../../assets/woman.svg";

function Form() {
  return (
    <div className='lg:basis-[60%] basis-full lg:bg-[#1c162f] lg:shadow-xl rounded lg:p-16'>
      <p className='text-xl lg:block hidden text-alt:text-start font-semibold head text-alt'>
        Register
      </p>

      <div className='text-base body flex items-baseline mt-5'>
        <p>Be part of this movement!</p>
        <div className=' border-b-2 flex w-1/5 justify-center ml-2 items-baseline border-alt border-dashed'>
          <img src={woman} className='h-6' alt='woman walking' />
          <img src={man} className='h-8' alt='man walking' />
        </div>
      </div>

      <p className='text-2xl lg:text-start text-center lg:mt-5 mt-3'>
        CREATE YOUR ACCOUNT
      </p>

      <form className='' action=''>
        <section className='flex justify-between lg:flex-row flex-col '>
          <div className='mt-5 basis-[48%]'>
            <p>Team&apos;s Name</p>
            <input
              type='text'
              placeholder='Enter the name of your group'
              className='body mt-2 placeholder:text-[#5a5668] h-12 w-full text-white outline-none px-6 bg-transparent rounded border-2 border-white/70'
            />
          </div>

          <div className='mt-5 basis-[48%]'>
            <p>Phone</p>
            <input
              type='number'
              placeholder='Enter your phone number'
              className='body mt-2 placeholder:text-[#5a5668] h-12 w-full text-white outline-none px-6 bg-transparent rounded border-2 border-white/70'
            />
          </div>
        </section>

        {/* Mail */}
        <section className='flex justify-between lg:flex-row flex-col '>
          <div className='mt-5 basis-[48%]'>
            <p>Email</p>
            <input
              type='email'
              placeholder='Enter your email address'
              className='body mt-2 placeholder:text-[#5a5668] h-12 w-full text-white outline-none px-6 bg-transparent rounded border-2 border-white/70'
            />
          </div>

          <div className='mt-5 basis-[48%]'>
            <p>Project Topic</p>
            <input
              type='text'
              placeholder='What is your group project topic'
              className='body mt-2 placeholder:text-[#5a5668] h-12 w-full text-white outline-none px-6 bg-transparent rounded border-2 border-white/70'
            />
          </div>
        </section>

        <div className='flex justify-center'>
          <button className='text-base body lg:w-full bg-gradient-to-r lg:px-10 lg:py-4 px-8 py-2.5 mt-5 lg:mt-10 from-[#903AFF] to-[#FE34B9] rounded'>
            Register Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
