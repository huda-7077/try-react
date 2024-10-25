const Navbar = () => {
  return (
    <header className="font-sora mx-auto flex h-[104px] w-[1440px] flex-row items-start px-[80px] py-[24px] text-[20px] font-semibold capitalize leading-[24px] tracking-[-0.02em]">
      <div className="mx-auto flex h-[40px] w-[139.91px] flex-row items-center gap-[12px]">
        <h1>MM</h1>
        <h1>Personal</h1>
      </div>
      <div className="flex h-[56px] w-[1280px] flex-row items-center justify-between px-[32px]">
        <div className="mx-auto flex h-[24px] w-[437px] flex-row items-center justify-center gap-[32px] text-black">
          <h1>About Me</h1>
          <h1>Skills</h1>
          <h1>Projects</h1>
          <h1>Contact Me</h1>
        </div>
      </div>
      <button className="mx-auto flex h-[56px] w-[153px] flex-row items-center justify-center gap-[8px] rounded-[4px] bg-black px-[20px] py-[16px] text-white">
        Resume
      </button>
    </header>
  );
};

export default Navbar;
