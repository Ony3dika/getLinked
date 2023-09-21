import trophy from "../../assets/trophy.png";
import rewards from "../../assets/rewards.png";
import pflare from "../../assets/pflare.png";
import starpu from "../../assets/star pu.png";
import starw from "../../assets/starw.png";

function Prizes() {
  return (
    <div className='bg-[#120b21] py-10 flex lg:flex-row flex-col container mx-auto px-10 lg:px-32'>
      <section className='lg:basis-1/3 relative isolate flex lg:flex-row flex-col items-center basis-full'>
        <div className='lg:hidden block'>
          <p className='head lg:text-3xl text-xl text-center lg:ml-20 lg:text-justify leading-7 lg:leading-[42px]'>
            Prizes and
            <br />
            <span className='text-alt'>Rewards</span>
          </p>

          <p className='body lg:text-base lg:ml-20 text-[13px] font-normal text-center lg:text-start lg:mt-5 leading-7 lg:leading-9'>
            Highlight of the prizes or rewards for winners and
            <br className='hidden lg:block' /> for participants.
          </p>
        </div>
        <img src={trophy} className='lg:h-auto h-64' alt='trophy asset' />
        <img
          src={starpu}
          className='lg:h-7 h-4 top-0 absolute left-1/4'
          alt='purple star'
        />
        <img src={pflare} className='absolute -z-10 lg:left-auto -left-8 lg:top-auto -top-16' alt='purple flare' />
      </section>

      <section className='lg:basis-2/3 relative isolate flex justify-center basis-full'>
        <img
          src={starw}
          className='lg:h-7 h-4 top-1/3 absolute left-1/4'
          alt='purple star'
        />
        <img
          src={starw}
          className='lg:h-7 h-4 top-2/3 absolute right-0'
          alt='purple star'
        />

        <div>
          <div className='lg:block hidden'>
            <p className='head lg:text-3xl text-xl text-center lg:ml-20 lg:text-justify leading-7 lg:leading-[42px]'>
              Prizes and
              <br />
              <span className='text-alt'>Rewards</span>
            </p>

            <p className='body lg:text-base lg:ml-20 text-[13px] font-normal text-center lg:text-start lg:mt-5 leading-7 lg:leading-9'>
              Highlight of the prizes or rewards for winners and
              <br className='hidden lg:block' /> for participants.
            </p>
          </div>

          <img src={rewards} className='h-auto mt-10' alt='trophy podium' />
        </div>
      </section>
    </div>
  );
}

export default Prizes;
