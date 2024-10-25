// import xboy from "../assets/xboy.svg";
const AboutMe = () => {
  return (
    <div className="mx-auto flex h-[692px] w-[1440px] flex-row items-center justify-center p-[60px_80px]">
      <div className="flex h-[572px] w-[1280px] flex-row items-center justify-between p-[0px_32px]">
        <div className="mx-auto h-[572px] w-[525.45px]">
          <img
            className="rounded-[2rem] object-cover"
            src="https://i.seadn.io/s/raw/files/4393e64fb2353c32b857bc19fa17f31d.png?auto=format&dpr=1&w=1000"
            alt="bigboy"
          />
        </div>
        <div className="mx-auto flex h-[572px] w-[610px] flex-col items-start gap-5 p-0">
          {/* Frame 1000015861 */}
          <div className="flex h-[96px] w-[610px] flex-row items-start gap-4 p-5">
            <div className="order-0 h-[56px] w-[149px] flex-none flex-grow-0">
              <span className="font-sora text-[48px] font-normal leading-[56px] tracking-[-0.02em] text-black">
                About
              </span>
            </div>
            <div className="order-1 h-[56px] w-[77px] flex-none flex-grow-0">
              <span className="font-sora text-[48px] font-extrabold leading-[56px] tracking-[-0.02em] text-black">
                Me
              </span>
            </div>
          </div>

          {/* Text Sections */}
          <p className="order-0 font-sora h-[120px] w-[610px] flex-none flex-grow-0 text-[16px] font-normal leading-[24px] tracking-[0.02em] text-zinc-500">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className="font-sora order-1 h-[144px] w-[610px] flex-none flex-grow-0 text-[16px] font-normal leading-[24px] tracking-[0.02em] text-zinc-500">
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p className="font-sora order-2 h-[120px] w-[610px] flex-none flex-grow-0 text-[16px] font-normal leading-[24px] tracking-[0.02em] text-zinc-500">
            When I'm not in full-on developer mode, you can find me hovering
            around on Twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
