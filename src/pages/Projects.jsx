import React from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my work and skills.",
    tools: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/EmmanuelKeziah/Portfolio-Deployment",
    live: "https://portfolio-deployment-virid.vercel.app/",
  },
  {
    id: 2,
    title: "Form Validation App",
    description: "A web application that validates user input in forms.",
    tools: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/EmmanuelKeziah/SignUp-Form_REACTJS",
    live: "https://sign-up-form-reactjs-iota.vercel.app/",
    loom: "https://www.loom.com/share/76bb6362f1e444a29e66406c747a7ead?sid=e91132e1-27bf-4538-ab66-385e68fe39e4",
  },
  {
    id: 3,
    title: "Fetch API App",
    description:
      "A simple application that fetches data from an API and displays it.",
    tools: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/EmmanuelKeziah/Movies_Dev",
    live: "https://movies-dev-blue.vercel.app/",
  },
  {
    id: 4,
    title: "Simple Product Card",
    description: "A simple product card component built with React.",
    tools: ["React", "Tailwind CSS", "JavaScript", "CSS"],
    github:
      "https://github.com/EmmanuelKeziah/Building_A_Simple_Product_Card_Using_Props",
    live: "https://building-a-simple-product-card-usin-eight.vercel.app/",
  },

  {
    id: 5,
    title: "PiggyVest Website Clone",
    description:
      "A clone of the PiggyVest website built with React and Tailwind CSS.",
    tools: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/EmmanuelKeziah/New-PiggyClone_With_ReactJS",
    live: "https://new-piggy-clone-with-react-js-1xqi.vercel.app/",
  },
  {
    id: 6,
    title: "Simple Calculator",
    description: "A simple calculator application built with JavaScript.",
    tools: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/EmmanuelKeziah/SIMPLE-BLUE-CALCULATOR",
    live: "https://simple-blue-calculator.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-[#0f172a] py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-100 text-center mb-10">
        Projects
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#1e293b] shadow-md hover:shadow-lg transition-shadow p-6 rounded-2xl border border-gray-700"
          >
            <h3 className="text-xl font-semibold text-gray-100 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-[#334155] text-gray-100 px-2 py-1 rounded-md"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex justify-between  items-center text-sm font-medium max-w-[300px]">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-[#14b8a6] text-white hover:bg-[#0d9488] px-4 py-2 rounded-md transition "
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#14b8a6] text-white px-4 py-2 rounded-md hover:bg-[#0d9488] transition"
              >
                Live Demo
              </a>

              {project.loom && (
                <a
                  href={project.loom}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#14b8a6] text-white px-4 py-2 rounded-md hover:bg-[#0d9488] transition"
                >
                  Loom Video
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
