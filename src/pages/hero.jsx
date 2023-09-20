import blue from "../assets/blue.png";
import bulb from "../assets/bulb.svg";
import curve from "../assets/curve.png";
import flare from "../assets/flare.png";
import pflare from "../assets/pflare.png";
import metrix from "../assets/metrix.png";
import chain from "../assets/chain.png";
import star from "../assets/star.png";
import starw from "../assets/starw.png";
import flame from "../assets/flame.png";
import vr from "../assets/vr.png";

function Hero() {
  return (
    <main className='container mx-auto lg:px-24 border-white/[18%] border-b-[1.5px] flex lg:flex-row flex-col px-10'>
      {/* section 1 */}
      <section className='lg:pt-40 isolate relative lg:order-1 order-2  basis-full lg:basis-1/2'>
        <img
          src={starw}
          className='absolute lg:left-0 left-24 h-4 lg:top-16 top-20 lg:h-7'
          alt='white-star'
        />
        <img
          src={star}
          className='absolute right-0 h-4 lg:top-auto top-20 lg:h-7'
          alt='gray-star'
        />
        <img
          src={star}
          className='absolute right-0 lg:right-36 h-4 lg:bottom-40 bottom-32 lg:h-7'
          alt='gray-star'
        />
        <img
          src={pflare}
          className='absolute -left-16 lg:left-auto contrast-150 brightness-75 lg:-top-36 -z-10'
          alt='purple-flare'
        />
        <div className='relative lg:hidden block'>
          <p className='body text-base lg:text-3xl font-bold mt-8'>
            Igniting a Revolution in HR Innovation
          </p>
          <img
            src={curve}
            className='lg:right-24 right-5 lg:h-auto h-2 absolute'
            alt=''
          />
        </div>
        <img
          src={bulb}
          alt='glowing bulb'
          className='absolute lg:right-40 right-16 lg:h-auto h-8 top-24'
        />
        <p className='lg:text-7xl text-3xl mt-16 lg:mt-0 head leading-10 lg:leading-none text-center lg:text-start'>
          getlinked Tech <br /> Hackathon <span className='text-alt'>1.0 </span>
          <img src={chain} alt='chain' className='inline lg:h-16 h-8' />
          <img src={flame} alt='chain' className='flame inline lg:h-16 h-8' />
        </p>

        <p className='body my-5 text-center lg:text-start'>
          Participate in getlinked tech Hackathon 2023 stand
          <br className='lg:block hidden' /> a chance to win a Big prize
        </p>

        <div className='flex lg:justify-start justify-center'>
          <button className=' text-base body bg-gradient-to-r px-10 py-3 mt-3 from-[#903AFF] to-[#FE34B9] rounded'>
            Register
          </button>
        </div>

        <p className='num lg:my-16 my-8 text-5xl text-center lg:text-start lg:text-6xl'>
          00<span className='text-sm'>H</span> 00
          <span className='text-sm'>M</span> 00
          <span className='text-sm'>S</span>
        </p>
      </section>

      {/* section 2 */}
      <section className='lg:order-2 order-2 lg:overflow-visible lg:overflow-y-clip overflow-hidden basis-full lg:basis-1/2'>
        <div className='relative lg:block hidden'>
          <p className='body text-base lg:text-3xl font-bold mt-8'>
            Igniting a Revolution in HR Innovation
          </p>
          <img
            src={curve}
            className='lg:right-24 right-5 lg:h-auto h-2 absolute'
            alt=''
          />
        </div>

        <div className='w-full relative h-auto mt-5'>
          <img
            src={vr}
            className='hue-rotate-180 grayscale contrast-125'
            alt='man in VR-headset'
          />
          <img
            src={blue}
            className='absolute saturate-200 h-fit contrast-200 top-0'
            alt='blue ball'
          />
          <img
            src={metrix}
            className='absolute top-0 lg:-right-16 -right-20'
            alt='starry metrix'
          />
          <img
            src={flare}
            className='absolute -right-24 hidden lg:block -top-24'
            alt='purple flare'
          />
        </div>
      </section>
    </main>
  );
}

export default Hero;
