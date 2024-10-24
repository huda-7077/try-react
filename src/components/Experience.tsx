const Experience = () => {
  return (
    <div className="order-3 mx-auto flex h-[956px] w-[1440px] flex-none flex-grow-0 flex-row items-start bg-black p-[60px_80px]">
      {/* Content goes here */}
      <div className="order-0 flex h-[836px] w-[1280px] flex-none flex-grow-0 flex-col items-center justify-center gap-5 p-8">
        {/* Row Component */}
        <div className="order-0 flex h-[96px] w-[1216px] flex-none flex-grow-0 flex-row items-center justify-center gap-4 self-stretch p-5">
          <div className="h-[56px] w-[70px]">
            {/* My Content */}
            <h2 className="font-sora text-[48px] font-normal leading-[56px] tracking-[-0.02em] text-white">
              My
            </h2>
          </div>
          <div className="h-[56px] w-[272px]">
            {/* Experience Content */}
            <h2 className="font-sora text-[48px] font-extrabold leading-[56px] tracking-[-0.02em] text-white">
              Experience
            </h2>
          </div>
        </div>

        {/* Main Experience Content */}
        <div className="order-1 flex h-[720px] w-[1216px] flex-none flex-grow-0 flex-col items-start gap-[32px] self-stretch p-[40px_24px]">
          <div className="order-0 box-border flex h-[192px] w-[1168px] flex-none flex-grow-0 flex-col items-start gap-[28px] self-stretch rounded-[10px] border border-[#71717A] p-[30px_24px]">
            {/* Experience Row */}
            <div className="order-0 flex h-[32px] w-[1120px] flex-none flex-grow-0 flex-row items-center justify-between self-stretch">
              <div className="order-0 m-auto flex h-[32px] w-[1018px] flex-none flex-grow-0 flex-row items-center gap-[30px] self-stretch">
                <div className="h-[32px] w-[32px]">{/* Google Logo */}</div>

                <h4 className="font-sora flex items-center text-[24px] font-semibold leading-[28px] text-white">
                  Lead Software Engineer at Google
                </h4>
                <h6 className="font-sora m-auto text-[16px] font-semibold leading-[20px] text-[#D4D4D8]">
                  Nov 2019 - Present
                </h6>
              </div>
            </div>

            {/* Description */}
            <p className="font-sora h-[72px] w-[1120px] text-[16px] font-normal leading-[24px] text-[#D4D4D8]">
              As a Senior Software Engineer at Google, I played a pivotal role
              in developing innovative solutions for Google's core search
              algorithms. Collaborating with a dynamic team of engineers, I
              contributed to the enhancement of search accuracy and efficiency,
              optimizing user experiences for millions of users worldwide.
            </p>
          </div>

          {/* Another Experience Section */}
          <div className="order-1 box-border flex h-[192px] w-[1168px] flex-none flex-grow-0 flex-col items-start gap-[28px] self-stretch rounded-[10px] bg-[#27272A] p-[30px_24px]">
            <div className="order-0 flex h-[32px] w-[1120px] flex-none flex-grow-0 flex-row items-center justify-between self-stretch">
              <div className="order-0 m-auto flex h-[32px] w-[1018px] flex-none flex-grow-0 flex-row items-center gap-[30px] self-stretch">
                <div className="h-[32px] w-[32px]">{/* Apple Logo */}</div>

                <h4 className="font-sora flex items-center text-[24px] font-semibold leading-[28px] text-white">
                  Lead Software Engineer at Apple
                </h4>
                <h6 className="font-sora m-auto text-[16px] font-semibold leading-[20px] text-[#D4D4D8]">
                  Nov 2019 - Present
                </h6>
              </div>
            </div>
            <p className="font-sora h-[72px] w-[1120px] text-[16px] font-normal leading-[24px] text-[#D4D4D8]">
              As a Senior Software Engineer at Apple, I contributed to the
              development of groundbreaking software applications that have
              transformed the tech landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
