import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const About = () => {
  const favoriteSong = [
    "https://open.spotify.com/embed/track/4e6TmHCC4PRUj75knNplNP?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/track/5hkQFKFRrr5gKdbbxsg6Lj?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/track/0daEJMXc3b4ZMTnvtHpuTt?utm_source=generator&theme=0",
  ];


  return (
    <>
      <Navbar />

      <section className="max-w-6xl mx-auto my-24">
        <div className="flex flex-col md:flex-row gap-y-10 items-center">
          <div className="flex flex-col gap-y-12 order-2 md:order-1">
            <header className="flex flex-col items-center md:items-start gap-y-1">
              <h1 className="text-4xl text-black text-center md:text-start font-medium tracking-[-0.7px] leading-normal">
                &quot;Watashi wa zettai ni makenai&quot;
              </h1>
              <div className="flex items-center gap-x-2">
                <hr className="w-8 border-gray-300 md:block hidden" />
                <p className="text-gray-400 font-normal tracking-[-0.7px]">
                  Akashi Seijuro.
                </p>
              </div>
            </header>

            <div className="flex flex-col items-center md:items-start gap-y-5">
              <p className="text-black font-normal tracking-[-0.7px] w-4/5 leading-relaxed">
                Hi, I&apos;m designer and developer with an interest in merging
                design aesthetics and code functionality. Combining UI design
                skills with expertise in HTML, CSS, and JavaScript. Always eager
                to collaborate on projects that blend aesthetics and technology.
              </p>

              <p className="text-black font-normal tracking-[-0.7px] w-4/5 leading-relaxed">
                Creating simple and functional applications is my hobby. I can
                spend hours every day exploring coding. You can see some of my
                coding explorations on{" "}
                <Link
                  to={"https://github.com/akmalefs"}
                  className="font-semibold"
                >
                  Github.
                </Link>
              </p>

              <p className="text-black font-normal tracking-[-0.7px] w-4/5 leading-relaxed">
                I have a deep passion for design exploration and can easily lose
                track of time diving into creative ideas. You can check out some
                of my works and concepts on{" "}
                <Link
                  to={"https://www.figma.com/@applepe"}
                  className="font-semibold"
                >
                  Figma!
                </Link>
              </p>
            </div>
          </div>
          <img
            src="/akashi.jpg"
            alt="Profile picture"
            className="w-full max-w-[10rem] sm:max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl order-1 md:order-2"
          />
        </div>

        <div className="mt-24 flex flex-col gap-y-1 md:px-0 px-5 ">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="md:text-4xl text-2xl text-black md:text-start text-center font-medium tracking-[-0.7px]">
              Currently My Favorite Song
            </h1>
            <p className="text-gray-500 text-center md:text-start mt-4 md:text-lg text-sm italic leading-relaxed max-w-2xl">
              Every line of code and every pixel I design is often accompanied
              by these tunes. Here's a glimpse into the soundtrack of my
              creative journey.
            </p>
          </div>

          <div className="flex flex-col  md:flex-row gap-y-2 gap-x-5 mt-10 justify-between items-center ">
            {favoriteSong.map((song, index) => (
              <SpotifyEmbed key={index} src={song} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const SpotifyEmbed = ({ src }) => {
  return (
    <iframe
      src={src}
      className="w-full md:w-2/5 h-40"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default About;
