import bigboy from "../assets/bigboy.svg";
const Jumbotron = () => {
  return (
    <section className="relative isolate mx-auto flex h-[716px] w-[1440px] flex-row items-start px-[80px] py-[60px]">
      <div className="absolute left-[112px] top-[620px] z-[1] flex h-[64px] w-[320px] flex-row items-start gap-8 p-1">
        {/* Button 1 */}
        <button className="flex h-[56px] w-[56px] flex-row items-center justify-center gap-2 rounded-md bg-black p-4">
          <div className="h-[20px] w-[20px] bg-white" />
        </button>

        {/* Button 2 */}
        <button className="flex h-[56px] w-[56px] flex-row items-center justify-center gap-2 rounded-md border-2 border-black p-4">
          <div className="h-[20px] w-[20px] bg-black" />
        </button>

        {/* Button 3 */}
        <button className="flex h-[56px] w-[56px] flex-row items-center justify-center gap-2 rounded-md border-2 border-black p-4">
          <div className="h-[20px] w-[20px] bg-black" />
        </button>

        {/* Button 4 */}
        <button className="flex h-[56px] w-[56px] flex-row items-center justify-center gap-2 rounded-md border-2 border-black p-4">
          <div className="h-[20px] w-[20px] bg-black" />
        </button>
      </div>
      <div className="relative z-[0] flex h-[596px] w-[1280px] flex-row items-center justify-between px-[32px]">
        <div className="absolute left-0 z-10 mx-auto flex h-[376px] w-[700px] flex-col items-start gap-[48px] py-[20px]">
          <div className="relative flex h-[336px] w-[700px] flex-col items-start gap-[32px]">
            <div className="font-sora flex h-[208px] w-[700px] flex-col items-start gap-5 p-0 text-[48px] leading-[56px] tracking-[-0.02em] text-black">
              <div className="flex h-[56px] w-auto flex-row items-start gap-4 p-0">
                <h2 className="h-[56px] font-normal">I’m</h2>
                <h2 className="h-[56px] font-extrabold">Muhammad Masyhuda.</h2>
              </div>

              <div className="flex h-[56px] w-auto flex-row items-start gap-4 p-0">
                <h2 className="h-[56px] font-extrabold">Frontend</h2>
                <h2 className="border-3 h-[56px] border-black font-extrabold">
                  Developer
                </h2>
              </div>

              <div className="flex h-[56px] w-auto flex-row items-start gap-4 p-0">
                <h2 className="h-[56px] font-normal">Based In</h2>
                <h2 className="h-[56px] font-extrabold">Indonesia.</h2>
              </div>
            </div>

            <p className="h-[96px] w-[600px] text-[16px] font-normal leading-[24px] tracking-[0.02em] text-zinc-500">
              I’m Muhammad Masyhuda Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to specimen
              book.
            </p>
          </div>
        </div>
        <div className="absolute right-0 isolate z-0 mx-auto flex h-[596px] w-[889px] flex-col items-end justify-center">
          <img className="object-cover" src={bigboy} alt="bigboy" />
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
