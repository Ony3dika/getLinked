import star from "../../assets/star.png";
import starw from "../../assets/starw.png";
import starp from "../../assets/star pu.png"

function Timeline() {
  return (
    <div className='py-16 container mx-auto px-10 lg:px-32'>
      <p className='head lg:text-3xl text-xl text-center leading-7 lg:leading-[42px]'>
        Timeline
      </p>

      <p className='body lg:text-base text-[13px] font-normal text-center mt-5 leading-7 lg:leading-9'>
        Here is the breakdown of the time we anticipate{" "}
        <br className='lg:block hidden' /> using for the upcoming event.
      </p>

      <section className='mt-10 relative'>
        <img
          src={starp}
          className='lg:h-6 h-4 absolute lg:top-0 -top-6 left-1/4 lg:left-[20%]'
          alt='purple star'
        />
        <img
          src={starw}
          className='lg:h-6 h-2 absolute top-[45%] left-[90%] lg:left-[85%]'
          alt='white star'
        />
        <img
          src={star}
          className='lg:h-6 h-3 absolute bottom-0 lg:left-0'
          alt='white star'
        />
        {/* Article 1 */}
        <article className='flex'>
          <div className='lg:basis-2/5 basis-5/6 flex lg:order-1 order-3 justify-start items-end'>
            <div className='text-left lg:text-right'>
              <p className='body font-bold text-xs lg:text-2xl text-alt'>
                Hackathon Announcement
              </p>
              <p className='lg:mt-3 mt-2 lg:text-base text-xs body'>
                The getlinked tech hackathon 1.0 is formally announced{" "}
                <br className='lg:block hidden' /> to the general public and
                teams begin to get ready to register
              </p>

              <p className='body font-bold text-xs mt-2 lg:hidden block lg:text-2xl text-alt'>
                November 18, 2023
              </p>
            </div>
          </div>

          {/* Number */}
          <div className='lg:basis-1/5 basis-1/6 lg:order-2 order-1 flex flex-col justify-center items-center'>
            <hr className='lg:w-1 w-[2px] lg:h-32 h-[50%] mb-2 border-0 bg-alt' />
            <p className='bg-gradient-to-r from-alt body lg:text-base text-xs font-bold to-sub lg:w-16 w-6 lg:h-16 h-6 flex justify-center items-center rounded-full'>
              1
            </p>
          </div>

          <div className='basis-2/5 order-3 hidden lg:flex justify-start items-end'>
            <p className='body font-bold text-xs lg:text-2xl text-alt'>
              November 18, 2023
            </p>
          </div>
        </article>

        {/* Article 2 */}
        <article className='flex mt-4 lg:mt-8'>
          <div className='lg:basis-2/5 basis-5/6 flex lg:order-3 order-3 justify-start items-end'>
            <div className='text-left'>
              <p className='body font-bold text-xs lg:text-2xl text-alt'>
                Team Registration begins
              </p>
              <p className='lg:mt-3 mt-2 lg:text-base text-xs body'>
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>

              <p className='body font-bold text-xs mt-2 lg:hidden block lg:text-2xl text-alt'>
                November 18, 2023
              </p>
            </div>
          </div>

          {/* Number */}
          <div className='lg:basis-1/5 basis-1/6 lg:order-2 order-1 flex flex-col justify-center items-center'>
            <hr className='lg:w-1 w-[2px] lg:h-20 h-[50%] mb-2 border-0 bg-alt' />
            <p className='bg-gradient-to-r from-alt body lg:text-base text-xs font-bold to-sub lg:w-16 w-6 lg:h-16 h-6 flex justify-center items-center rounded-full'>
              2
            </p>
          </div>

          <div className='basis-2/5 order-1 hidden lg:flex justify-end items-end'>
            <p className='body font-bold text-xs lg:text-2xl text-alt'>
              November 18, 2023
            </p>
          </div>
        </article>

        {/* Article 3 */}
        <article className='flex mt-4 lg:mt-8'>
          <div className='lg:basis-2/5 basis-5/6 flex lg:order-1 order-3 justify-end items-end'>
            <div className='text-left lg:text-right'>
              <p className='body font-bold text-xs lg:text-2xl text-alt'>
                Teams Registration ends
              </p>
              <p className='lg:mt-3 mt-2 lg:text-base text-xs body'>
                Interested Participants are no longer Allowed to{" "}
                <br className='lg:block hidden' /> register
              </p>

              <p className='body font-bold text-xs mt-2 lg:hidden block lg:text-2xl text-alt'>
                November 18, 2023
              </p>
            </div>
          </div>

          {/* Number */}
          <div className='lg:basis-1/5 basis-1/6 lg:order-2 order-1 flex flex-col justify-center items-center'>
            <hr className='lg:w-1 w-[2px] lg:h-32 h-[50%] mb-2 border-0 bg-alt' />
            <p className='bg-gradient-to-r from-alt body lg:text-base text-xs font-bold to-sub lg:w-16 w-6 lg:h-16 h-6 flex justify-center items-center rounded-full'>
              3
            </p>
          </div>

          <div className='basis-2/5 order-3 hidden lg:flex justify-start items-end'>
            <p className='body font-bold text-xs lg:text-2xl text-alt'>
              November 18, 2023
            </p>
          </div>
        </article>

        {/* Article 4 */}
        <article className='flex mt-4 lg:mt-8'>
          <div className='lg:basis-2/5 basis-5/6 flex lg:order-3 order-3 justify-start items-end'>
            <div className='text-left'>
              <p className='body font-bold text-xs lg:text-2xl text-alt'>
                Announcement of the accepted teams and ideas
              </p>
              <p className='lg:mt-3 mt-2 lg:text-base text-xs body'>
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>

              <p className='body font-bold text-xs mt-2 lg:hidden block lg:text-2xl text-alt'>
                November 18, 2023
              </p>
            </div>
          </div>

          {/* Number */}
          <div className='lg:basis-1/5 basis-1/6 lg:order-2 order-1 flex flex-col justify-center items-center'>
            <hr className='lg:w-1 w-[2px] lg:h-20 h-[50%] mb-2 border-0 bg-alt' />
            <p className='bg-gradient-to-r from-alt body lg:text-base text-xs font-bold to-sub lg:w-16 w-6 lg:h-16 h-6 flex justify-center items-center rounded-full'>
              4
            </p>
          </div>

          <div className='basis-2/5 order-1 hidden lg:flex justify-end items-end'>
            <p className='body font-bold text-xs lg:text-2xl text-alt'>
              November 18, 2023
            </p>
          </div>
        </article>

        {/* Article 5 */}
        <article className='flex mt-4 lg:mt-8'>
          <div className='lg:basis-2/5 basis-5/6 flex lg:order-1 order-3 justify-end items-end'>
            <div className='text-left lg:text-right'>
              <p className='body font-bold text-xs lg:text-2xl text-alt'>
                Getlinked Hackathon 1.0 Offically Begins
              </p>
              <p className='lg:mt-3 mt-2 lg:text-base text-xs body'>
                Accepted teams can now proceed to build their
                <br className='lg:block hidden' /> ground breaking skill driven
              </p>

              <p className='body font-bold text-xs mt-2 lg:hidden block lg:text-2xl text-alt'>
                November 18, 2023
              </p>
            </div>
          </div>

          {/* Number */}
          <div className='lg:basis-1/5 basis-1/6 lg:order-2 order-1 flex flex-col justify-center items-center'>
            <hr className='lg:w-1 w-[2px] lg:h-32 h-[50%] mb-2 border-0 bg-alt' />
            <p className='bg-gradient-to-r from-alt body lg:text-base text-xs font-bold to-sub lg:w-16 w-6 lg:h-16 h-6 flex justify-center items-center rounded-full'>
              5
            </p>
          </div>

          <div className='basis-2/5 order-3 hidden lg:flex justify-start items-end'>
            <p className='body font-bold text-xs lg:text-2xl text-alt'>
              November 18, 2023
            </p>
          </div>
        </article>

        {/* Article 6 */}
        <article className='flex mt-4 lg:mt-8'>
          <div className='lg:basis-2/5 basis-5/6 flex lg:order-3 order-3 justify-start items-end'>
            <div className='text-left'>
              <p className='body font-bold text-xs lg:text-2xl text-alt'>
                Demo Day
              </p>
              <p className='lg:mt-3 mt-2 lg:text-base text-xs body'>
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>

              <p className='body font-bold text-xs mt-2 lg:hidden block lg:text-2xl text-alt'>
                November 18, 2023
              </p>
            </div>
          </div>

          {/* Number */}
          <div className='lg:basis-1/5 basis-1/6 lg:order-2 order-1 flex flex-col justify-center items-center'>
            <hr className='lg:w-1 w-[2px] lg:h-20 h-[50%] mb-2 border-0 bg-alt' />
            <p className='bg-gradient-to-r from-alt body lg:text-base text-xs font-bold to-sub lg:w-16 w-6 lg:h-16 h-6 flex justify-center items-center rounded-full'>
              6
            </p>
          </div>

          <div className='basis-2/5 order-1 hidden lg:flex justify-end items-end'>
            <p className='body font-bold text-xs lg:text-2xl text-alt'>
              November 18, 2023
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Timeline;
