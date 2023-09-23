import { Link } from "react-router-dom";

function NavbarReg() {
  const navItems = [
    { name: "Timeline", link: "#timeline" },
    { name: "Overview", link: "#overview" },
    { name: "FAQs", link: "#faq" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <nav className='sticky top-0 z-50'>
      <div className='flex lg:h-24 h-20 pt-6 pb-2 items-center backdrop-blur-sm justify-between lg:justify-normal container mx-auto lg:px-24 px-10'>
        <section className='lg:basis-2/5'>
          <Link to={"/"} className='head lg:block hidden lg:text-3xl text-xl'>
            get<span className='text-alt'>linked</span>
          </Link>

          <Link
            to={"/"}
            className='head text-alt lg:hidden block lg:text-3xl text-xl'
          >
            <p>Register</p>
          </Link>
        </section>

        <section className='lg:flex hidden justify-between basis-2/5'>
          {navItems.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className={`body text-base font-normal ${
                index === 3
                  ? "bg-gradient-to-r from-sub to-alt text-transparent bg-clip-text"
                  : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </section>

        <section className='basis-1/5 lg:flex hidden justify-end'>
          <Link
            to={"/register"}
            className='text-base body gradient-border px-10 py-3'
          >
            Register
          </Link>
        </section>
      </div>
    </nav>
  );
}

export default NavbarReg;
