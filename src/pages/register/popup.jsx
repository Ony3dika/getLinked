import man from "../../assets/success.png";
import tick from "../../assets/done.png";
import starp from "../../assets/sata gra.png"
import { Link } from "react-router-dom";

function Popup(props) {
  return (
    <main className='absolute top-0 left-0 w-full body z-50 flex justify-center items-center bg-main/90 h-full'>
      <div className='h-fit lg:w-[55%] w-[85%] relative bg-gray-900/10 border-2 border-alt/80 rounded'>
        <img
          src={starp}
          className='absolute lg:h-6 h-4 bottom-4 right-4'
          alt='pink star'
        />
        <img
          src={starp}
          className='absolute lg:h-6 h-4 top-4 left-8'
          alt='pink star'
        />

        <div className='flex justify-around relative isolate'>
          <img
            src={tick}
            className='absolute lg:h-auto h-56 left-0 lg:left-[20%] -z-10'
            alt='tick'
          />
          <img
            src={man}
            className='lg:h-auto lg:ml-0 ml-12 h-64'
            alt='man celebrating'
          />
        </div>

        <p className='font-semibold text-center mt-5'>
          Congratulations <br /> you have successfully{" "}
          <br className='lg:hidden block' /> Registered!
        </p>

        <p className='text-center mt-5 text-sm'>
          Yes, it was easy and you did it! <br /> check your mail box for next
          step
        </p>

        <div className='flex justify-center mt-5 mb-12'>
          <button onClick={()=>props.pop()} className='text-base w-[80%] bg-gradient-to-r font-bold lg:px-10 px-8 py-4 from-[#FE34B9] to-[#903AFF] rounded'>
            Back
          </button>
        </div>
      </div>
    </main>
  );
}

export default Popup;
