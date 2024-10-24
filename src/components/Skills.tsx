const Skills = () => {
  return (
    <div className="mx-auto flex h-[728px] w-[1440px] flex-col items-center justify-center p-[60px_80px]">
      <div className="flex h-[608px] w-[1280px] flex-col items-start gap-5 px-8">
        {/* Header Row */}
        <div className="flex h-[96px] w-[1216px] flex-row items-center justify-center gap-4 py-5">
          <div className="h-[56px] w-[70px] text-[48px] font-normal leading-[56px] tracking-[-0.02em] text-black">
            My
          </div>
          <div className="h-[56px] w-[134px] text-[48px] font-extrabold leading-[56px] tracking-[-0.02em] text-black">
            Skills
          </div>
        </div>

        {/* Skills Column */}
        <div className="flex h-[492px] w-[1216px] flex-col items-center py-5">
          <div className="flex h-[226px] w-[1216px] flex-row items-center justify-between py-5">
            {/* Skill Item */}
            <div className="m-auto flex h-[186px] w-[186px] flex-col items-center justify-center gap-8 rounded border-2 border-black bg-white p-6">
              <div className="relative h-[56px] w-[56px]">
                <div className="absolute inset-[10%] bg-black" />
                <div className="absolute inset-0 bg-white" />
              </div>
              <div className="h-[24px] w-[138px] text-center text-[20px] font-bold capitalize leading-[24px] tracking-[-0.02em] text-black">
                JavaScript
              </div>
            </div>

            {/* Repeat Skill Items for other skills... */}
            <div className="m-auto flex h-[186px] w-[186px] flex-col items-center justify-center gap-8 rounded border-2 border-black bg-black p-6">
              <div className="relative h-[56px] w-[56px]">
                <div className="absolute inset-0 bg-white" />
                <div className="absolute inset-[25%] bg-black" />
              </div>
              <div className="h-[24px] w-[138px] text-center text-[20px] font-bold capitalize leading-[24px] tracking-[-0.02em] text-white">
                SASS
              </div>
            </div>

            {/* Add additional skill items similarly... */}
            {/* Each skill item follows the same structure */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
