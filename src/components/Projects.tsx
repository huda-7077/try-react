import imageMe from "../assets/image.png";
const Projects = () => {
  return (
    <div
      id="projects"
      className="mx-auto flex h-[1824px] w-[1440px] flex-col items-start bg-black p-[60px] px-[80px]"
    >
      <div className="flex h-[1704px] w-[1280px] flex-col items-start gap-5 px-8">
        {/* Heading */}
        <div className="flex h-[96px] w-[1216px] flex-row items-center justify-center gap-4 py-5">
          <div className="font-sora h-[56px] w-[70px] text-[48px] font-normal leading-[56px] tracking-[-0.02em] text-white">
            My
          </div>
          <div className="font-sora h-[56px] w-[203px] text-[48px] font-extrabold leading-[56px] tracking-[-0.02em] text-white">
            Projects
          </div>
        </div>

        {/* Project 1 */}
        <div className="flex h-[516px] w-[1216px] flex-row items-center gap-10 py-5">
          <div className="flex h-[476px] w-[594px] flex-row items-center">
            <div className="h-[397.73px] w-[530px] rounded-[18.7611px] bg-[url('/path-to-your-image/profile-pic.jpg')] shadow-[0_8px_18px_-6px_rgba(24,39,75,0.12),0_12px_42px_-4px_rgba(24,39,75,0.12)]"></div>
            <img
              className="rounded-[2rem] object-cover"
              // src="https://i.seadn.io/s/raw/files/4393e64fb2353c32b857bc19fa17f31d.png?auto=format&dpr=1&w=1000"
              src={imageMe}
              alt="Me"
            />
          </div>
          {/* Details */}
          <div className="flex h-[296px] w-[582px] flex-col items-start justify-center gap-6">
            <div className="font-sora h-[56px] w-[582px] text-[48px] font-extrabold leading-[56px] tracking-[-0.02em] text-white">
              01
            </div>
            <div className="font-sora h-[40px] w-[582px] text-[32px] font-bold leading-[40px] tracking-[-0.02em] text-white">
              Crypto Screener Application
            </div>
            <div className="font-sora h-[96px] w-[582px] text-[16px] font-normal leading-[24px] tracking-[0.02em] text-[#71717A]">
              I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry.
            </div>
            <div className="relative h-[20px] w-[20px]"></div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex h-[516px] w-[1216px] flex-row items-center gap-10 py-5">
          {/* Details */}
          <div className="flex h-[384px] w-[582px] flex-col items-start justify-center gap-6">
            <div className="font-sora h-[56px] w-[582px] text-[48px] font-extrabold leading-[56px] tracking-[-0.02em] text-white">
              02
            </div>
            <div className="font-sora h-[80px] w-[582px] text-[32px] font-bold leading-[40px] tracking-[-0.02em] text-white">
              Euphoria - Ecommerce (Apparels) Website Template
            </div>
            <div className="font-sora h-[144px] w-[582px] text-[16px] font-normal leading-[24px] tracking-[0.02em] text-[#71717A]">
              I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry.
            </div>
            <div className="relative h-[20px] w-[20px]"></div>
          </div>
          {/* Image */}
          <div className="flex h-[476px] w-[594px] flex-row items-center justify-end">
            <div className="h-[397.73px] w-[530px] rounded-[18.7611px] bg-[url('/path-to-your-image/mock-up.jpg')] shadow-[0_8px_18px_-6px_rgba(24,39,75,0.12),0_12px_42px_-4px_rgba(24,39,75,0.12)]"></div>
            <img
              className="rounded-[2rem] object-cover"
              // src="https://i.seadn.io/s/raw/files/4393e64fb2353c32b857bc19fa17f31d.png?auto=format&dpr=1&w=1000"
              src={imageMe}
              alt="Me"
            />
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex h-[516px] w-[1216px] flex-row items-center gap-10 py-5">
          {/* Image */}
          <div className="flex h-[476px] w-[594px] flex-row items-center">
            <div className="h-[397.73px] w-[530px] rounded-[18.7611px] bg-[url('/path-to-your-image/banner-mockup.jpg')] shadow-[0_8px_18px_-6px_rgba(24,39,75,0.12),0_12px_42px_-4px_rgba(24,39,75,0.12)]"></div>
            <img
              className="rounded-[2rem] object-cover"
              // src="https://i.seadn.io/s/raw/files/4393e64fb2353c32b857bc19fa17f31d.png?auto=format&dpr=1&w=1000"
              src={imageMe}
              alt="Me"
            />
          </div>
          {/* Details */}
          <div className="flex h-[302px] w-[582px] flex-col items-start justify-center gap-6">
            <div className="font-sora h-[56px] w-[582px] text-[48px] font-extrabold leading-[56px] tracking-[-0.02em] text-white">
              03
            </div>
            <div className="font-sora h-[40px] w-[582px] text-[32px] font-bold leading-[40px] tracking-[-0.02em] text-white">
              Blog Website Template
            </div>
            <div className="font-sora h-[96px] w-[582px] text-[16px] font-normal leading-[24px] tracking-[0.02em] text-[#71717A]">
              I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry.
            </div>
            <div className="relative h-[20px] w-[20px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
