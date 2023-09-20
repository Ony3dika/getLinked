function Timeline() {
  return (
    <div className='py-16 container mx-auto px-10 lg:px-32 border-white/[18%] border-b-[1.5px]'>
      <p className='head lg:text-3xl text-xl text-center leading-7 lg:leading-[42px]'>
        Timeline
      </p>

      <p className='body lg:text-base text-[13px] font-normal text-center mt-5 leading-7 lg:leading-9'>
        Here is the breakdown of the time we anticipate{" "}
        <br className='lg:block hidden' /> using for the upcoming event.
      </p>

      <section className='mt-10'>
        {/* Article 1 */}
        <article className='flex'>
          <div className='lg:basis-2/5 basis-4/5 flex lg:order-1 order-3 justify-start items-end'>
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
          <div className='basis-1/5 lg:order-2 order-1 flex flex-col justify-center items-center'>
            <hr className='lg:w-1 w-[2px] lg:h-32 h-[50%] mb-3 border-0 bg-alt' />
            <p className='bg-gradient-to-r from-alt body lg:text-base text-xs font-bold to-sub lg:w-16 w-8 lg:h-16 h-8 flex justify-center items-center rounded-full'>
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
        <article className='flex mt-8'>
          <div className='lg:basis-2/5 basis-4/5 flex lg:order-3 order-3 justify-start items-end'>
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
          <div className='basis-1/5 lg:order-2 order-1 flex flex-col justify-center items-center'>
            <hr className='lg:w-1 w-[2px] lg:h-20 h-[50%] mb-3 border-0 bg-alt' />
            <p className='bg-gradient-to-r from-alt body lg:text-base text-xs font-bold to-sub lg:w-16 w-8 lg:h-16 h-8 flex justify-center items-center rounded-full'>
              2
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
