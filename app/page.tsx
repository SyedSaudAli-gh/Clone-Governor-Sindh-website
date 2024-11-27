import Image from "next/image";
export default function Home() {
  return (
      <div className="w-full h-[597px] flex justify-between mt-5">
        {/* Left section */}
        <div className="w-1/2 ml-20 mt-20">
         
          <h1 className=" text-[#044e83] text-6xl font-extrabold">
            Governor Sindh
          </h1>
          <p className="text-[#044e83] text-[45px] font-sans tracking-wider -mt-3">
            Kamran Khan Tessori
          </p>
          <h1 className="text-[#2eb6e8] text-4xl font-extrabold whitespace-nowrap my-5">
            Certified Cloud <br /> Applied Generative AI <br /> Engineer
            (GenEng)
          </h1>
          <h1 className="text-[#044e83] text-2xl font-extrabold my-5">
            Earn up to $5,000 / month
          </h1>
          <h1 className="text-[#044e83] text-2xl font-extrabold mb-12">
            Now admissions are open in <br /> Hyderabad
          </h1>
          <div className="flex gap-20">
            <button className="py-4 px-12 font-extrabold text-white bg-[#044e83] rounded-lg transition-all hover:translate-y-1 ">
              APPLY NOW
            </button>
            <div className="flex text-[#044e83]">
              <div className="flex-col text-center text-2xl tracking-widest">
                <div className="font-[900]">562,143</div>
                <div className="text-center text-sm tracking-wider ">
                  Accepted Applications
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="w-1/2 ml-80">
          <Image src="/cover.1d863e39.png" alt="" width={500} height={500} 
          />
        </div>
      </div>
  );
}
