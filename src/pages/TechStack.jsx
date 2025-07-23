import css from "../assets/css.png";
import js from "../assets/js.png";
import download from "../assets/download.jpg";
import physics from "../assets/physics.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import mongo from "../assets/mongo.jpg";
import vite from "../assets/vite.jpg";
import typescript from "../assets/typescript.png";

const TechStack = () => {
  return (
    <section className="bg-[#0f172a]  py-20 px-6">
      <h2 className="text-3xl font-bold text-gray-100 flex items-center justify-center text-center mb-10">
        Tech Stack
      </h2>
      <div className="flex flex-wrap justify-center gap-10 text-5xl ">
        <img />
        <img src={html} alt="HTML" className="w-16 h-16" />
        <img src={css} alt="CSS" className="w-16 h-16" />
        <img src={js} alt="JavaScript" className="w-16 h-16" />
        <img src={download} alt="Download" className="w-16 h-16" />
        <img src={physics} alt="Physics" className="w-16 h-16" />
        <img src={github} alt="GitHub" className="w-16 h-16" />
        <img
          src={mongo}
          alt="MongoDB"
          className="w-16 h-16 object-contain
        "
        />
        <img src={vite} alt="Vite" className="w-16 h-16" />
        <img src={typescript} alt="TypeScript" className="w-16 h-16" />
      </div>
    </section>
  );
};

export default TechStack;
