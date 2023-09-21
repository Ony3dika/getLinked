import { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu.png";
import close from "../assets/close.png";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navItems = [
    { name: "Timeline", link: "/" },
    { name: "Overview", link: "/" },
    { name: "FAQs", link: "/" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className='border-white/[18%] sticky top-0 bg-main z-50 border-b-[1.5px]'>
      <div className='flex lg:h-24 h-20 pt-6 pb-2 items-center justify-between lg:justify-normal container mx-auto lg:px-24 px-10'>
        <section className='lg:basis-2/5'>
          <Link to={"/"} className='head lg:text-3xl text-xl'>
            get<span className='text-alt'>linked</span>
          </Link>
        </section>

        <section className='lg:flex hidden justify-between basis-2/5'>
          {navItems.map((item, index) => (
            <Link to={item.link} key={index} className='body text-base'>
              {item.name}
            </Link>
          ))}
        </section>

        <section className='basis-1/5 lg:flex hidden justify-end'>
          <button className='text-base body bg-gradient-to-r px-10 py-3 from-[#903AFF] to-[#FE34B9] rounded'>
            Register
          </button>
        </section>

        <div className='lg:hidden block'>
          <img src={menu} alt='menu' onClick={() => setMobileMenu(true)} />

          {mobileMenu && (
            <div className='w-full h-screen absolute top-0 right-0 z-50 rounded container mx-auto px-10 bg-main'>
              <div className='flex h-20 justify-end items-center'>
                <img
                  src={close}
                  alt='close'
                  onClick={() => setMobileMenu(false)}
                />
              </div>

              <div>
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    className='my-8 body font-semibold'
                  >
                    <Link to={item.link}>{item.name}</Link>
                  </div>
                ))}
              </div>

              <button className='text-base body bg-gradient-to-r px-12 py-4 mb-24 from-[#903AFF] to-[#FE34B9] rounded'>
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
