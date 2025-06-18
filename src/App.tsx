import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const App = () => {
  const [registered, setRegistered] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handlePreRegister = async () => {
    setRegistered(true);
    setTimeout(() => setShowPrompt(true), 1000);

    toast.success("You're pre-registered! 🎉");

    try {
      await fetch("/api/preregister", { method: "POST" });
    } catch (err) {
      toast.error("Error increasing count");
      console.error("Error increasing count:", err);
    }
  };

  const handleEmailSubmit = async () => {
    try {
      await fetch("/api/collect-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubmitted(true);
      toast.success("Email submitted. We'll notify you! ✉️");
    } catch (err) {
      toast.error("Failed to save email");
      console.error("Error saving email:", err);
    }
  };

  return (
    <div className="w-full h-screen relative overflow-hidden bg-[url(/bg.svg)] bg-cover bg-center">
      <Toaster />
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
            <button
              onClick={handlePreRegister}
              disabled={registered}
              className="bg-white w-2/3 md:w-48 h-10 rounded-full flex items-center px-1 cursor-pointer"
            >
              <div className="w-15 flex items-center translate-y-0.5">
                <img src="/arrow.svg" className="filter invert" alt="" />
              </div>
              <p className="text-sm font-semibold">
                {registered ? "✅ YOU'RE IN" : "PRE-REGISTER"}
              </p>
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
        <div className="md:hidden w-[23rem] mx-auto -translate-y-5">
          <img src="/logo-b.png" className="scale-[1.4]" alt="" />
        </div>
        <div className="hidden md:block -mt-8">
          <img
            src="/logo-b.png"
            className="scale-[1.3] -translate-y-7"
            alt=""
          />
        </div>
        <div className="mx-auto w-60 md:w-80 absolute top-1/2 left-1/2 translate-y-12 -translate-x-1/2">
          <img src="/sofa.png" className="scale-[1.6] md:scale-[1.5]" alt="" />
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
        <button
          onClick={handlePreRegister}
          disabled={registered}
          className="bg-white w-2/3 md:w-48 h-10 rounded-full flex items-center px-2 cursor-pointer"
        >
          <div className="w-15 hidden small:block items-center translate-y-0.5">
            <img src="/arrow.svg" className="filter invert" alt="" />
          </div>
          <p className="w-full text-sm font-semibold">
            {registered ? "✅ YOU'RE IN" : "PRE-REGISTER"}
          </p>
        </button>
      </div>

      {showPrompt && !submitted && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-xs bg-opacity-60 z-40"></div>

          {/* Centered Popup */}
          <div className="fixed z-50 top-1/2 left-1/2 w-72 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-6 shadow-xl">
            <p className="font-semibold text-sm mb-2 text-black">
              Want early access? Drop your email.
            </p>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border p-2 rounded-full mb-4 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleEmailSubmit}
              className="w-full bg-black text-white py-2 rounded-full text-sm"
            >
              Notify Me
            </button>
          </div>
        </>
      )}

      {submitted && (
        <p className="absolute text-green-400 bottom-0 text-sm font-semibold mt-4">
          🎉 You’re on the list. See you at the drop!
        </p>
      )}

      <div className="flex w-full justify-end -m-2 md:-mt-0">
        <img src="/pa.png" className="scale-60 md:scale-100" alt="" />
      </div>
    </div>
  );
};

export default App;
