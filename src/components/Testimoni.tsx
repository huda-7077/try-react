const Testimoni = () => {
  return (
    <div className="mx-auto flex h-[714px] w-[1440px] flex-row items-start bg-white p-[60px] px-[80px]">
      <div className="flex h-[594px] w-[1280px] flex-col items-center justify-center gap-5 px-8">
        {/* Row */}
        <div className="flex h-[96px] w-[1216px] flex-row items-center justify-center gap-4 py-5">
          <div className="h-[56px] w-[70px] text-[48px] font-normal leading-[56px] tracking-[-0.02em] text-black">
            My
          </div>
          <div className="h-[56px] w-[284px] text-[48px] font-extrabold leading-[56px] tracking-[-0.02em] text-black">
            Testimonial
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="flex h-[478px] w-[1216px] flex-row items-center justify-between gap-4 p-[40px_24px]">
          {/* Card 1 */}
          <div className="m-auto flex h-[398px] w-[370px] flex-col items-center justify-center gap-6 rounded-[20px] bg-white p-10 shadow-lg">
            <div className="relative flex h-[96px] w-[96px] flex-row items-start gap-2">
              <div className="h-[96px] w-[96px] border border-black bg-[url('cool-beard-man-vector-logo-260nw-1719020434.png')]"></div>
              <div className="absolute left-[66px] top-[66px] h-[30px] w-[30px] rounded-full bg-black"></div>
            </div>
            <div className="h-[80px] w-[290px] text-center text-[16px] font-normal leading-[20px] text-gray-700">
              I recently had to jump on 10+ different calls across eight
              different countries to find the right owner.
            </div>
            <div className="h-[2px] w-[120px] bg-black"></div>
            <div className="h-[24px] w-[290px] text-center text-[20px] font-semibold capitalize text-gray-700">
              Evren Shah
            </div>
            <div className="h-[20px] w-[290px] text-center text-[16px] font-semibold text-gray-500">
              Designer
            </div>
          </div>

          {/* Card 2 */}
          <div className="m-auto flex h-[398px] w-[370px] flex-col items-center justify-center gap-6 rounded-[20px] bg-black p-10 shadow-lg">
            <div className="relative flex h-[96px] w-[96px] flex-row items-start gap-2">
              <div className="h-[96px] w-[96px] border border-white bg-[url('609997d1a9466157ebd54ae5c8fa45a6')]"></div>
              <div className="absolute left-[66px] top-[66px] h-[30px] w-[30px] rounded-full bg-white"></div>
            </div>
            <div className="h-[80px] w-[290px] text-center text-[16px] font-normal leading-[20px] text-white">
              I recently had to jump on 10+ different calls across eight
              different countries to find the right owner.
            </div>
            <div className="h-[2px] w-[120px] bg-white"></div>
            <div className="h-[24px] w-[290px] text-center text-[20px] font-semibold capitalize text-white">
              Evren Shah
            </div>
            <div className="h-[20px] w-[290px] text-center text-[16px] font-semibold text-white">
              Designer
            </div>
          </div>

          {/* Card 3 */}
          <div className="m-auto flex h-[398px] w-[370px] flex-col items-center justify-center gap-6 rounded-[20px] bg-white p-10 shadow-lg">
            <div className="relative flex h-[96px] w-[96px] flex-row items-start gap-2">
              <div className="h-[96px] w-[96px] border border-black bg-[url('cool-beard-man-vector-logo-260nw-1719020434.png')]"></div>
              <div className="absolute left-[66px] top-[66px] h-[30px] w-[30px] rounded-full bg-black"></div>
            </div>
            <div className="h-[80px] w-[290px] text-center text-[16px] font-normal leading-[20px] text-gray-700">
              I recently had to jump on 10+ different calls across eight
              different countries to find the right owner.
            </div>
            <div className="h-[2px] w-[120px] bg-black"></div>
            <div className="h-[24px] w-[290px] text-center text-[20px] font-semibold capitalize text-gray-700">
              Evren Shah
            </div>
            <div className="h-[20px] w-[290px] text-center text-[16px] font-semibold text-gray-500">
              Designer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
