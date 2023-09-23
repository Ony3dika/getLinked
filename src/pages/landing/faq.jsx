import star from "../../assets/star.png";
import starpu from "../../assets/star pu.png";
import starp from "../../assets/sata gra.png";
import starw from "../../assets/starw.png";
import pflare from "../../assets/pflare.png";
import pimark from "../../assets/pimark.svg";
import pumark from "../../assets/pumark.svg";
import casual from "../../assets/casual.png";
import { motion } from "framer-motion";

function Faq() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "60%" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className='flex lg:flex-row flex-col py-10 lg:py-32 container mx-auto px-10 lg:px-32 border-white/[18%] border-b-[1.5px]'
    >
      <section className='lg:basis-1/2 overflow-x-clip flex relative isolate  items-center basis-full'>
        <img
          src={pflare}
          className='absolute lg:block hidden contrast-150 brightness-75 -z-10 lg:-top-52 lg:right-auto'
          alt='purple-flare'
        />
        <img
          src={starpu}
          className='lg:h-6 h-4 animate-pulse absolute lg:-top-8 -top-4 -left-0'
          alt='star'
        />
        <img
          src={star}
          className='absolute animate-pulse lg:left-auto lg:block hidden left-1/3 lg:right-0 lg:h-7 h-4 -bottom-6 lg:bottom-1/3'
          alt='white-star'
        />
        <article>
          <p className='head lg:text-3xl text-xl text-center lg:text-start leading-7 lg:leading-[42px]'>
            Frequently Asked
            <br />
            <span className='text-alt'>Question</span>
          </p>

          <p className='body lg:text-base text-[13px] font-normal text-center lg:text-start lg:mt-5 leading-7 lg:leading-9'>
            We got answers to the questions that you might{" "}
            <br className='hidden lg:block' /> want to ask about getlinked
            Hackathon 1.0
          </p>

          <div className='mt-8 body lg:text-base text-sm'>
            <p className='py-2 lg:py-4 border-b-2 flex justify-between border-alt'>
              Can I work on a project I started before the hackathon?{" "}
              <span className='text-alt ml-5'>+</span>
            </p>

            <p className='py-2 lg:py-4 border-b-2 mt-3 text flex justify-between border-alt'>
              What happens if I need help during the hackathon?
              <span className='text-alt ml-5'>+</span>
            </p>

            <p className='py-2 lg:py-4 border-b-2 mt-3 text flex justify-between border-alt'>
              What happens if I don&apos;t have an idea for a project?
              <span className='text-alt ml-5'>+</span>
            </p>

            <p className='py-2 lg:py-4 border-b-2 mt-3 text flex justify-between border-alt'>
              Can I join a team or do I have to come with one?
              <span className='text-alt ml-5'>+</span>
            </p>

            <p className='py-2 lg:py-4 border-b-2 mt-3 text flex justify-between border-alt'>
              What happens after the hackathon ends
              <span className='text-alt ml-5'>+</span>
            </p>

            <p className='py-2 lg:py-4 border-b-2 mt-3 text flex justify-between border-alt'>
              Can I work on a project I started before the hackathon?
              <span className='text-alt ml-5'>+</span>
            </p>
          </div>
        </article>
      </section>

      <section className='lg:basis-1/2 lg:mt-0 mt-28 flex relative justify-center basis-full'>
        <img
          src={pumark}
          className='absolute left-8 animate-bounce h-8 lg:h-16'
          alt='purple question mark'
        />
        <img
          src={pimark}
          className='absolute h-12 animate-bounce lg:h-28 -top-20 left-1/3'
          alt='pink question mark'
        />
        <img
          src={starp}
          className='absolute animate-pulse lg:h-7 h-4'
          alt='pink star'
        />
        <img
          src={pumark}
          className='absolute left-2/3 animate-bounce -top-8 h-8 lg:h-16'
          alt='purple question mark'
        />
        <img src={casual} className='lg:h-auto h-72' alt='man thinking' />
        <img
          src={starw}
          className='absolute animate-pulse bottom-0 lg:h-7 h-4 right-1/4'
          alt='white star'
        />
      </section>
    </motion.div>
  );
}

export default Faq;
