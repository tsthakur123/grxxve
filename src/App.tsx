import React from "react";

const App = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden bg-[url(/bg.svg)] bg-cover bg-center">
      <nav className="w-full h-20 ">
        <div className="w-full h-full flex justify-center items-end">
          <h3 className="text-center text-white font-orbitron font-semibold md:text-lg">
            GRXXVE
          </h3>
        </div>
        <div className="flex items-center h-0">
          <img src="/arrow.svg" className="scale-70" alt="" />
          <div className="mr-6 w-full">
            <hr className="text-white" />
          </div>
          <div className=" hidden md:block mr-4">
            <button className="bg-white w-2/3 md:w-48 h-10 rounded-full flex items-center px-1">
              <div className="w-15 flex items-center translate-y-0.5">
                <img src="/arrow.svg" className="filter invert" alt="" />
              </div>
              <p className="text-sm font-semibold">PRE-REGISTER</p>
            </button>
          </div>
        </div>
      </nav>
      <div className="relative w-full md:w-1/3 mx-auto">
        <div className="hidden md:block">
          <div className="w-full flex justify-between items-center font-abnes text-3xl text-white tracking-[.24em] absolute top-1/3 ">
            <h3 className="-translate-x-[70%]">COMING</h3>
            <h3 className="translate-x-[70%]">SOON</h3>
          </div>
        </div>
        <div className="md:hidden w-60 mx-auto">
          <img src="/logo2.png" className="scale-125" alt="" />
        </div>
        <div className="hidden md:block -mt-8">
          <img
            src="/logo-b.png"
            className="scale-[1.3] -translate-y-7"
            alt=""
          />
        </div>
        <div className="mx-auto w-60 md:w-80 absolute top-1/2 left-1/2 -translate-x-1/2">
          <img src="/sofa.png" className="scale-[1.3]" alt="" />
        </div>
        <div className="hidden md:block w-96 font-urbanist text-white bg-white/10 border border-white/15 rounded-[42px] p-8 tracking-wider absolute top-2/5 right-0 translate-x-3/5 scale-75">
          <h2 className="font-semibold text-xl">
            Streetwear isn’t dead — it just got its groove back.
          </h2>
          <br />
          <p>
            GRXXVE is the next-gen hip-hop drip. Loud prints. Rare drops. No
            cap.
          </p>
        </div>
        <div className="hidden md:w-[28rem] md:block w-fit font-urbanist text-white bg-white/10 border border-white/15 rounded-[42px] p-8 tracking-wider absolute  scale-75 left-0 -translate-x-1/2 bottom-0 translate-y-1/3">
          <h2 className="font-semibold text-xl">
            For the ones whose style speaks louder than words.
          </h2>
          <br />
          <p>
            Not mass-produced. Not for everyone. Just raw, rhythmic, rebel
            energy—stitched in every thread.
          </p>
          <br />
          <p>IYKYK</p>
        </div>
      </div>
      <div className="relative px-14 mt-15 flex flex-col items-center gap-4">
        <p className="md:hidden text-base w-60 text-white/65 text-center font-oswald tracking-wider">
          Streetwear isn’t dead — it just got its groove back.
        </p>
        <button className="bg-white w-2/3 md:w-48 h-10 rounded-full flex items-center px-1">
          <div className="w-15 flex items-center translate-y-0.5">
            <img src="/arrow.svg" className="filter invert" alt="" />
          </div>
          <p className="text-sm font-semibold">PRE-REGISTER</p>
        </button>
      </div>
      <div className="flex w-full justify-end -m-2 md:-mt-0">
        <img src="/pa.png" className="scale-60 md:scale-100" alt="" />
      </div>
    </div>
  );
};

export default App;
