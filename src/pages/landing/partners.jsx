import partner from "../../assets/partners.png"
import pflare from "../../assets/pflare.png";
import starpu from "../../assets/star pu.png";
import starw from "../../assets/starw.png";
import { motion } from "framer-motion";

function Partners() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "60%" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className='py-16 relative isolate container mx-auto px-10 lg:px-32'
    >
      <img
        src={pflare}
        className='absolute h-40 lg:h-96 top-16 left-0'
        alt='purple flare'
      />
      <img
        src={starpu}
        className='absolute animate-pulse h-4 lg:h-7 lg:top-1/4 top-1/4 left-1/4'
        alt='purple star'
      />
      <img
        src={starw}
        className='absolute h-4 lg:h-7 animate-pulse lg:top-3/4 top-2/4 left-[70%]'
        alt='white star'
      />
      <img
        src={pflare}
        className='absolute h-40 lg:h-96 bottom-0 right-0'
        alt='purple flare'
      />

      <p className='head lg:text-3xl text-xl text-center leading-7 lg:leading-[42px]'>
        Partners and Sponsors
      </p>

      <p className='body lg:text-base text-[13px] font-normal text-center mt-5 leading-7 lg:leading-9'>
        Getlinked Hackathon 1.0 is honored to have the following major{" "}
        <br className='lg:block hidden' /> companies as its partners and
        sponsors
      </p>

      <section className='flex justify-center mt-10'>
        <div className='w-[90%] border-2 lg:px-32 px-6 lg:py-28 py-7 rounded border-alt/50'>
          <img src={partner} alt='getLinked partners and sponsors' />
        </div>
      </section>
    </motion.div>
  );
}

export default Partners