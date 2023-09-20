import idea from "../assets/idea.png";
import starpu from "../assets/star pu.png";
import arrow from "../assets/arrow.png";
import sata from "../assets/sata gra.png";

function Intro() {
  return (
    <main className='flex lg:flex-row flex-col justify-between py-10 container mx-auto px-10 lg:px-24 border-white/[18%] border-b-[1.5px]'>
      <section className='lg:basis-[48%] flex justify-center relative basis-full'>
        <img
          src={sata}
          className='absolute lg:left-0 left-10 lg:h-7 h-4 top-1/3'
          alt='pink-star'
        />
        <img
          src={arrow}
          className='absolute lg:bottom-0 -bottom-6 lg:h-auto h-7 right-[46%] lg:right-8'
          alt='pink-star'
        />
        <img src={idea} alt='idea bulb' className='lg:h-auto h-48' />

        <p className='body font-bold lg:text-2xl text-center text-sm absolute top-[50%]'>
          The Big
          <br />
          Idea!
        </p>
      </section>

      <section className='lg:basis-[48%] flex relative lg:mt-0 mt-10 items-center basis-full'>
        <img
          src={starpu}
          className='absolute top-8 right-0 h-4 lg:right-16 lg:h-7 lg:top-20'
          alt='purple-star'
        />

        <article>
          <p className='head lg:text-3xl text-xl text-center lg:text-start lg:leading-[42px] leading-7'>
            Introduction to getlinked <br />
            <span className='text-alt'>tech Hackathon 1.0</span>
          </p>

          <p className='body lg:text-base text-[13px] font-normal text-center lg:text-start mt-5 leading-7 lg:leading-9'>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as <br className='lg:block hidden' /> day: to shape the
            future. Whether you're a coding genius, a{" "}
            <br className='lg:block hidden' /> design maverick, or a concept
            wizard, you'll have the chance to transform{" "}
            <br className='lg:block hidden' /> your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world,{" "}
            <br className='lg:block hidden' /> that's what we're all about!
          </p>
        </article>
      </section>
    </main>
  );
}

export default Intro;
