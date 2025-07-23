import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-[#f1f5f9] py-6 px-4 mt-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © 2025 Emmanuel Keziah. All rights reserved.
        </p>

        <div className="flex gap-5 text-xl">
          <a
            href="mailto:keziahema@gmail.com"
            className="hover:text-[#14b8a6]"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/EmmanuelKeziah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#14b8a6]"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="www.linkedin.com/in/keziah-emmanuel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#14b8a6]"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <a href="#top" className="text-sm underline hover:text-[#14b8a6]">
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
