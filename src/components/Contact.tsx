const Contact = () => {
  return (
    <div className="mx-auto flex h-[604px] w-[1440px] flex-col items-start p-[60px] px-[80px]">
      <div className="flex h-[484px] w-[1280px] flex-row items-center justify-between gap-10 px-8">
        {/* Column */}
        <div className="mx-auto flex h-[484px] w-[608px] flex-col items-start justify-center gap-6 py-5">
          {/* Input Area */}
          <div className="flex h-[444px] w-[608px] flex-col items-start gap-5">
            {/* Component 1 */}
            <div className="flex h-[56px] w-[500px] flex-col items-start gap-3">
              <div className="flex h-[56px] w-[500px] flex-row items-center rounded-md border-[1.4px] border-black px-6 py-4">
                <span className="h-[20px] w-[452px] text-sm font-normal leading-5 text-[#71717A]">
                  Your name
                </span>
              </div>
            </div>

            {/* Component 2 */}
            <div className="flex h-[56px] w-[500px] flex-col items-start gap-3">
              <div className="flex h-[56px] w-[500px] flex-row items-center rounded-md border-[1.4px] border-black px-6 py-4">
                <span className="h-[20px] w-[452px] text-sm font-normal leading-5 text-[#71717A]">
                  Your name
                </span>
              </div>
            </div>

            {/* Component 3 */}
            <div className="flex h-[56px] w-[500px] flex-col items-start gap-3">
              <div className="flex h-[56px] w-[500px] flex-row items-center rounded-md border-[1.4px] border-black px-6 py-4">
                <span className="h-[20px] w-[452px] text-sm font-normal leading-5 text-[#71717A]">
                  Your name
                </span>
              </div>
            </div>

            {/* Component 4 */}
            <div className="flex h-[140px] w-[500px] flex-col items-start gap-3">
              <div className="flex h-[140px] w-[500px] flex-row items-start rounded-md border-[1.4px] border-black px-6 py-4">
                <span className="h-[108px] w-[452px] text-sm font-normal leading-5 text-[#71717A]">
                  How can I help?
                </span>
              </div>
            </div>
          </div>

          {/* Button Section */}
          <div className="flex h-[56px] w-[493px] flex-row items-start gap-6">
            {/* Button */}
            <button className="flex h-[56px] w-[173px] flex-row items-center justify-center gap-2 rounded-md bg-black px-5 py-4 text-white">
              Resume
            </button>

            {/* Social Buttons */}
            <div className="flex flex-row gap-4">
              <button className="flex h-[56px] w-[56px] items-center justify-center rounded-md border-2 border-black bg-black">
                <span className="h-[20px] w-[20px] text-white"></span>
              </button>
              <button className="flex h-[56px] w-[56px] items-center justify-center rounded-md border-2 border-black bg-white">
                <span className="h-[20px] w-[20px] text-black"></span>
              </button>
              <button className="flex h-[56px] w-[56px] items-center justify-center rounded-md border-2 border-black bg-black">
                <span className="h-[20px] w-[20px] text-white"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
