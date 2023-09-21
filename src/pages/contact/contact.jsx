import NavbarAlt from "../../components/navbarAlt"
import Assist from "./assist"
import Touch from "./touch"
import pflare from "../../assets/pflare.png"

function Contact() {
  return (
    <main className='relative overflow-y-clip bg-main min-h-screen isolate text-white'>
      <NavbarAlt />
      <img src={pflare} className="absolute lg:-left-44 -left-20 -top-10 -z-10 lg:-top-20" alt="flare"/>
      <div className='flex lg:flex-row flex-col container mx-auto lg:px-36 lg:py-20 px-10'>
        <Touch />
        <Assist />
      </div>
    </main>
  );
}

export default Contact