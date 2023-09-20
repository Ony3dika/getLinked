import woman from "../../assets/woman.png";
import ellipse from "../../assets/ellipse.png"
import star from "../../assets/star.png";
import starw from "../../assets/starw.png";
import pflare from "../../assets/pflare.png";

function Rules() {
  return (
    <div className='flex lg:flex-row flex-col py-10 container mx-auto px-10 lg:px-32 border-white/[18%] border-b-[1.5px]'>
      <section className='lg:basis-1/2 lg:order-1 overflow-x-clip order-2 flex relative isolate  items-center basis-full'>
        <img
          src={pflare}
          className='absolute contrast-150 brightness-75 -z-10 lg:-top-20 lg:right-auto'
          alt='purple-flare'
        />
        <img
          src={star}
          className='lg:h-6 h-4 absolute top-1/4 left-1/3'
          alt='star'
        />
        <img
          src={starw}
          className='absolute lg:left-auto left-1/3 lg:right-0 lg:h-7 h-4 -bottom-6 lg:bottom-1/3'
          alt='white-star'
        />
        <article>
          <p className='head lg:text-3xl text-xl text-center lg:text-start leading-7 lg:leading-[42px]'>
            Rules and
            <br />
            <span className='text-alt'>Guidelines</span>
          </p>

          <p className='body lg:text-base text-[13px] font-normal text-center lg:text-start mt-5 leading-7 lg:leading-9'>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as <br className='lg:block hidden' /> day: to shape the
            future. Whether you&apos;re a coding genius, a{" "}
            <br className='lg:block hidden' /> design maverick, or a concept
            wizard, you&apos;ll have the chance to transform{" "}
            <br className='lg:block hidden' /> your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world,{" "}
            <br className='lg:block hidden' /> that&apos;s what we&apos;re all
            about!
          </p>
        </article>
      </section>

      <section className='lg:basis-1/2 lg:order-2 relative overflow-x-clip order-1 isolate flex justify-center basis-full'>
        <img
          src={ellipse}
          className='absolute hidden lg:block top-24 right-32 -z-10'
          alt='ellipse-gradient'
        />
        <img
          src={woman}
          className='lg:h-auto h-80'
          alt='woman sitting on chair'
        />
        <img
          src={pflare}
          className='absolute right-0 contrast-150 brightness-75 -z-10'
          alt='purple-flare'
        />
      </section>
    </div>
  );
}

export default Rules;
