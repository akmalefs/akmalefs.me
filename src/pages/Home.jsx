import Navbar from "../components/Navbar";

export default function Home() {
  const handleDownload = () => {
    const fileUrl = "/Akmal Widad Iskandar.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "AkmalWidadIskandar.pdf";
    link.click();
  };

  return (
    <>
      <Navbar />

      <section className="max-w-6xl mx-auto mt-24">
        <div className="flex flex-col md:flex-row md:items-center md:gap-x-40 gap-y-8">
          <div className="flex flex-col gap-y-8 items-center md:items-start">
            <img
              src="/me.jpg"
              alt="Profile"
              className="h-28 w-28 rounded-full border-4 border-gray-300 shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <h1 className="text-4xl text-black w-full font-medium tracking-[-0.7px] leading-normal md:block hidden">
              Hello! I&apos;m Akmal Widad Iskandar
            </h1>
          </div>

          <div className="flex flex-col gap-y-8 items-center md:items-start">
            <h1 className="text-4xl text-black font-medium tracking-[-0.7px] text-center md:text-start leading-normal">
              A Frontend Developer based in Jakarta, Indonesia
            </h1>
            <p className="text-black font-normal tracking-[-0.7px] leading-relaxed md:w-5/6 w-full text-center md:text-start">
              I&apos;m a frontend developer passionate about creating responsive
              and visually appealing user interfaces.
            </p>

            <div className="flex items-center gap-x-4">
              <button
                className="bg-black font-medium text-white py-3 px-7 tracking-[-0.7px] rounded-full hover:scale-105 transition-all duration-300"
                onClick={handleDownload}
              >
                Download CV
              </button>

              <button className="bg-gray-200 text-black border font-medium tracking-[-0.7px] py-3 px-7 rounded-full hover:scale-105 transition-all duration-300">
                See my works
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
