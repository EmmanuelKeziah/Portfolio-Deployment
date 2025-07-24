import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("All fields are required. Please check your input.");
      return;
    }

    setSuccess("Thank you, your message has been sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-5 md:px-20 bg-[#0f172a] text-[#f1f5f9]"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-100 text-center mb-10">
          Contact Me
        </h2>
        <p className="text-gray-400 mb-8">
          Got a question, feedback, or an opportunity to collaborate? I'd love
          to hear from you. Fill out the form below and I'll get back to you
          soon.
        </p>
        {error && (
          <p className="mb-4 text-red-400 font-medium bg-red-950 p-2 rounded">
            {error}
          </p>
        )}
        {success && (
          <p className="mb-4 text-green-400 font-medium bg-green-950 p-2 rounded">
            {success}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 border-2 border-gray-300  rounded-lg p-4 text-left"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-[#f1f5f9]">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 bg-[#1e293b] text-[#f1f5f9] border border-[#334155] rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-[#f1f5f9]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 bg-[#1e293b] text-[#f1f5f9] border border-[#334155] rounded"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-[#f1f5f9]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type something..."
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 bg-[#1e293b] text-[#f1f5f9] border border-[#334155] rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className=" bg-[#14b8a6] hover:bg-[#0d9488] text-[white] font-semibold py-3 px-6 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
