import React from "react";
import profile from "../assets/profile.jpg";
import Button from "../components/Button";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen px-6 py-16 bg-[#1f2937] text-gray-100 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            Hi, I'm Keziah Emmanuel
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
            I am a frontend developer. I design and build seamless web
            experiences using React and Tailwind CSS. From logic-driven
            interfaces to clean UI components, I turn ideas into interactive
            solutions that work.
          </p>

          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="https://github.com/EmmanuelKeziah?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-gray-300 hover:text-white transition"
            >
              <Button text="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/keziah-emmanuel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-gray-300 hover:text-white transition"
            >
              <Button text="LinkedIn" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className=" inline-block bg-[#14b8a6] text-white px-6 py-3 rounded-md hover:bg-[#0d9488] transition"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={profile}
            alt="Keziah's Profile"
            className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover rounded-lg border-2 border-gray-600 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
