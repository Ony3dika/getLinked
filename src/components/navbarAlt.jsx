import { Link } from "react-router-dom";
import back from "../assets/back.svg"

function NavbarAlt() {
  const navItems = [
    { name: "Timeline", link: "/" },
    { name: "Overview", link: "/" },
    { name: "FAQs", link: "/" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className='sticky top-0 z-50'>
      <div className='flex lg:h-24 h-20 pt-6 pb-2 items-center backdrop-blur-sm justify-between lg:justify-normal container mx-auto lg:px-24 px-10'>
        <section className='lg:basis-2/5'>
          <Link to={"/"} className='head lg:block hidden lg:text-3xl text-xl'>
            get<span className='text-alt'>linked</span>
          </Link>

          <Link to={"/"} className='head lg:hidden block lg:text-3xl text-xl'>
            <img src={back} className="h-7" alt="back button" />
          </Link>
        </section>

        <section className='lg:flex hidden justify-between basis-2/5'>
          {navItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className={`body text-base font-normal ${
                index === 3
                  ? "bg-gradient-to-r from-sub to-alt text-transparent bg-clip-text"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </section>

        <section className='basis-1/5 lg:flex hidden justify-end'>
          <button className='text-base body bg-gradient-to-r px-10 py-3 from-[#903AFF] to-[#FE34B9] rounded'>
            Register
          </button>
        </section>
      </div>
    </nav>
  );
}

export default NavbarAlt;
