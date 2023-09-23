import judge from "../../assets/judge.png";
import { motion } from "framer-motion";

function Judge() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "40%" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className='flex lg:flex-row flex-col py-10 lg:pb-40 container mx-auto px-10 lg:px-32 border-white/[18%] border-b-[1.5px]'
    >
      <section className='lg:basis-1/2 flex justify-center items-center basis-full'>
        <img src={judge} className='lg:h-2/3 h-auto' alt='brain storming duo' />
      </section>
      <section className='lg:basis-1/2 flex items-center basis-full'>
        <article>
          <p className='head lg:text-3xl text-xl text-center lg:text-start leading-7 lg:leading-[42px]'>
            Judging Criteria
            <br />
            <span className='text-alt'>Key attributes</span>
          </p>

          <p className='body lg:text-base text-[13px] lg:font-bold font-normal text-center lg:text-start leading-6 mt-5 lg:leading-9'>
            <span className='text-pink font-bold'>
              Innovation and Creativity:
            </span>{" "}
            Evaluate the uniqueness and creativity of the lution. Consider
            whether it addresses a real-world problem in a novel ay or
            introduces innovative features.
          </p>

          <p className='body lg:text-base text-[13px] lg:font-bold font-normal text-center lg:text-start mt-3 leading-6 lg:leading-9'>
            <span className='text-pink font-bold'>Functionality:</span> Assess
            how well the solution works. Does it perform its intended functions
            effectively and without major issues? Judges would consider the
            completeness and robustness of the solution,
          </p>

          <p className='body lg:text-base text-[13px] lg:font-bold font-normal text-center lg:text-start mt-3 leading-6 lg:leading-9'>
            <span className='text-pink font-bold'>Impact and Relevance: </span>
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social. economic,
            or environmental benefits.
          </p>

          <p className='body lg:text-base text-[13px] lg:font-bold font-normal text-center lg:text-start mt-3 leading-6 lg:leading-9'>
            <span className='text-pink font-bold'>Technical Complexity: </span>
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity Of the code. the use Of advanced
            technologies or algorithms, and the scalability Of the solution.
          </p>

          <p className='body lg:text-base text-[13px] lg:font-bold font-normal text-center lg:text-start mt-3 leading-6 lg:leading-9'>
            <span className='text-pink font-bold'>
              Adherence to Hackathon Rules:{" "}
            </span>
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines. use of specific technologies
            or APIs, and any other competition-specific requirements.
          </p>

          <div className='flex lg:justify-start justify-center'>
            <button className=' text-base body bg-gradient-to-r lg:px-10 lg:py-4 px-8 py-2.5 mt-5 lg:mt-10 from-[#903AFF] to-[#FE34B9] rounded'>
              Read More
            </button>
          </div>
        </article>
      </section>
    </motion.div>
  );
}

export default Judge;
