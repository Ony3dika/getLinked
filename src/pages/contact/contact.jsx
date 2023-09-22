import NavbarAlt from "../../components/navbarAlt"
import Assist from "./assist"
import Touch from "./touch"
import pflare from "../../assets/pflare.png"
import starpu from "../../assets/star pu.png";
import starp from "../../assets/sata gra.png"
import starw from "../../assets/starw.png";


function Contact() {
  return (
    <main className='relative overflow-y-clip bg-main min-h-screen isolate text-white'>
      <NavbarAlt />
      <img
        src={pflare}
        className='absolute lg:-left-44 -left-20 -top-10 -z-10 lg:-top-20'
        alt='flare'
      />
      <div className='flex lg:flex-row flex-col container mx-auto relative lg:px-36 lg:py-16 px-10'>
        <img src={starp} className='lg:h-7 absolute lg:left-[10%] left-1/2 h-4' alt='purple star' />
        <img
          src={starpu}
          className='lg:h-7 absolute lg:left-[50%] left-8 top-[80%] lg:top-[50%] h-4'
          alt='purple star'
        />
        <img
          src={starw}
          className='lg:h-7 absolute lg:right-20 right-4 top-[70%] h-4'
          alt='purple star'
        />

        <Touch />
        <Assist />
      </div>
    </main>
  );
}

export default Contact