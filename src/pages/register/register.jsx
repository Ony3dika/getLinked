import  Form  from "./form";
import NavbarReg from "../../components/navbarReg";
import designer from "../../assets/designer.png"
import pflare from "../../assets/pflare.png";
import starpu from "../../assets/star pu.png";
import starp from "../../assets/sata gra.png";
import starw from "../../assets/starw.png";

function Register() {
  return (
    <main className='relative overflow-y-clip bg-main min-h-screen isolate text-white'>
      <NavbarReg />
      <img
        src={pflare}
        className='absolute lg:-left-44 -left-20 -top-10 -z-10 lg:-top-20'
        alt='flare'
      />
      <div className='flex lg:flex-row flex-col container mx-auto relative lg:px-36 lg:py-16 px-10'>
        <img
          src={starp}
          className='lg:h-7 absolute lg:left-[10%] lg:top-auto top-20 left-[80%] h-4'
          alt='purple star'
        />
        <img
          src={starpu}
          className='lg:h-7 absolute lg:left-[40%] left-4 top-[80%] lg:top-[50%] h-4'
          alt='purple star'
        />
        <img
          src={starw}
          className='lg:h-7 absolute lg:right-20 right-4 top-[70%] h-4'
          alt='purple star'
        />
        <div className='lg:basis-[40%] basis-full'>
          <img src={designer} alt='designer at work' />
        </div>
        <Form />
      </div>
    </main>
  );
}

export default Register;
