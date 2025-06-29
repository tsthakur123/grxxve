import { useEffect, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const AppNew = () => {
  const [registered, setRegistered] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const enableSound = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1;
        videoRef.current.play().catch((err) => {
          console.warn("Playback failed:", err);
        });
      }

      // Remove listeners after first interaction
      window.removeEventListener("click", enableSound);
      window.removeEventListener("touchstart", enableSound);
    };

    // Add once on load
    window.addEventListener("click", enableSound);
    window.addEventListener("touchstart", enableSound);

    return () => {
      window.removeEventListener("click", enableSound);
      window.removeEventListener("touchstart", enableSound);
    };
  }, []);

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
    <div className="w-full h-screen relative overflow-hidden bg-black bg-cover bg-center">
      <Toaster />
      <nav className="w-full h-20 relative z-50 ">
        <div className="w-full h-full flex justify-center items-end">
          {/* <h3 className="text-center text-white font-orbitron font-semibold md:text-lg">
            GRXXVE
          </h3> */}
        </div>
        <div className="flex items-center h-0">
          <img src="/grxxve.svg" className="scale-70 -translate-y-1/5" alt="" />
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
      <div className="w-full h-screen overflow-hidden relative">
        <video
          src="video.mp4"
          ref={videoRef}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover object-center scale-[1.82] md:scale-100"
        ></video>
        <div className="font-ysabeau text-center font-bold tracking-wider mt-24 md:mt-20">
          <p className="text-[#C42424] text-7xl md:text-9xl mix-blend-color-dodge">
            Coming Soon
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center ">
          <div className="font-ysabeau text-xl md:text-4xl text-center font-bold tracking-wider mb-8">
            <p className="text-white">Street. Bold. Culture.</p>
          </div>

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

export default AppNew;
