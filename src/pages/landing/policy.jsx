import safe from "../../assets/safe.png";
import lock from "../../assets/lock.png";
import tick from "../../assets/tick.svg";
import starpu from "../../assets/star pu.png";
import star from "../../assets/star.png";
import { motion } from "framer-motion";

function Policy() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "50%" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className='x-10 lg:px-32 py-16 flex lg:flex-row relative justify-between flex-col border-white/[18%] border-t-[1.5px]'
    >
      <img
        src={star}
        className='lg:h-7 absolute animate-pulse lg:left-1/3 left-2/3 top-10 lg:top-auto h-4'
        alt='gray star'
      />
      <img
        src={starpu}
        className='lg:h-7 absolute animate-pulse lg:left-[45%] right-0 top-1/4 h-4'
        alt='purple star'
      />
      <section className='lg:basis-1/2 basis-full'>
        <p className='head lg:text-3xl text-xl text-center lg:text-justify leading-7 lg:leading-[42px]'>
          Privacy Policy and
          <br />
          <span className='text-alt'>Terms</span>
        </p>

        <p className='lg:text-base text-[13px] font-normal text-center lg:text-start body mt-3 text-[#c4c3c9]'>
          Last updated on September 12, 2023
        </p>
        <p className='body lg:text-base text-[13px] font-normal text-center lg:text-start mt-5 leading-7 lg:leading-9'>
          Below are our privacy & policy, which outline a lot of goodies.
          <br className='hidden lg:block' /> it&apos;s our aim to always take of
          our participant
        </p>

        <div className='flex lg:justify-start justify-center'>
          <article className='lg:px-16 py-8 p-8 border-2 w-[90%] lg:h-full border-alt/50 rounded backdrop-blur-3xl bg-gray-600/10 mt-10'>
            <p className='body leading-7 lg:text-start text-center lg:leading-9 lg:text-base text-[13px] font-normal'>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>

            <p className='mt-5 text-alt font-black body'>Licensing Policy</p>

            <p className='font-black body mt-2'>
              Here are terms of our Standard License:
            </p>

            <div className='flex items-center'>
              <img
                src={tick}
                className='h-6 w-6 bg-[#2DE100] rounded-full p-1'
                alt='tick mark'
              />
              <p className='mt-5 body ml-3 lg:ml-5 leading-7 lg:leading-9 lg:text-base text-[13px] font-normal'>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </div>

            <div className='flex items-center'>
              <img
                src={tick}
                className='h-6 w-6 bg-[#2DE100] rounded-full p-1'
                alt='tick mark'
              />
              <p className='mt-5 body ml-3 lg:ml-5 leading-7 lg:leading-9 lg:text-base text-[13px] font-normal'>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </div>

            <div className='flex justify-center'>
              <button className=' text-base body bg-gradient-to-r lg:px-10 lg:py-4 px-8 py-2.5 mt-5 lg:mt-10 from-[#903AFF] to-[#FE34B9] rounded'>
                Read More
              </button>
            </div>
          </article>
        </div>
      </section>

      <section className='lg:basis-1/2 relative lg:mt-0 mt-10 flex justify-center basis-full'>
        <img src={safe} className='lg:h-2/3 h-72' alt='safeguarded' />
        <img
          src={lock}
          className='absolute left-0 lg:h-2/3 h-[90%] right-0 mx-auto -bottom-16 lg:bottom-20'
          alt='man standing on lock'
        />
      </section>
    </motion.div>
  );
}

export default Policy;
