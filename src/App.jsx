import { useState } from "react";
import "./index.css";

import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function App() {
  const [active, setActive] = useState("about");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Mobile Shop App",
      desc: "E-commerce mobile shopping application built using React.",
      images: [
        "/in2.png",
        "/in3.png",
        "/in4.png",
        "/in5.png",
        "/in6.png",
        "/in7.png",
      ],
    },
  ];

  return (
    <div className="app">

      {/* MENU */}
      <div className="menu">
        {["about", "skills", "experience", "projects", "certifications", "contact"].map((item) => (
          <button
            key={item}
            className={`menu-item ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            {"< " + item.toUpperCase() + " >"}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="content">

        {/* ABOUT */}
        {/* ABOUT */}
{active === "about" && (
  <section className="box about-box">

    {/* IMAGE SIDE */}
    <div className="about-left">
      <img src="/sanjeev.jpeg" alt="Sanjeev" />
    </div>

    {/* CONTENT SIDE */}
    <div className="about-right">

      <h2>About Me</h2>

      <h3>Frontend Developer</h3>

      <p>
        I am <b>Sanjeev</b>, a passionate Frontend Developer and B.Tech IT student
        with strong interest in building modern, responsive, and user-friendly web applications.
      </p>

      <p>
        I specialize in <b>React.js, JavaScript, HTML, and CSS</b>, and I enjoy
        transforming UI/UX designs into fully functional web interfaces.
      </p>

      <p>
        My focus is on creating <b>fast, responsive, and visually appealing</b> websites
        with clean code and reusable components.
      </p>

      <div className="about-tags">
        <span>React Developer</span>
        <span>Frontend Engineer</span>
        <span>UI Developer</span>
      </div>
      <div className="resume-btn">
             <a href="/sanjeev-resume.pdf" target="_blank" rel="noopener noreferrer">
                 <button>View Resume</button>
             </a>
      </div>

    </div>

  </section>
)}

        {/* SKILLS */}
{active === "skills" && (
  <section className="box">
    <h2>Skills</h2>

    <div className="skill-grid">

      {/* LANGUAGES */}
      <div className="skill-card">
        <h3>Programming Languages</h3>
        <div className="skill-items">
          <span>C</span>
          <span>C++</span>
          <span>Java</span>
          <span>Python</span>
        </div>
      </div>

      {/* FRONTEND */}
      <div className="skill-card">
        <h3>Frontend</h3>
        <div className="skill-items">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </div>

      {/* TOOLS */}
      <div className="skill-card">
        <h3>Tools</h3>
        <div className="skill-items">
          <span>Git</span>
          <span>GitHub</span>
          <span>VS Code</span>
          <span>Figma</span>
        </div>
      </div>

    </div>
  </section>
)}

       {/* EXPERIENCE */}
{active === "experience" && (
  <section className="box">
    <h2>Experience</h2>

    <div className="exp-card">

      {/* LEFT LOGO */}
      <div className="exp-logo">
        <img src="/company.png" alt="Company Logo" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="exp-content">

        <div className="exp-top">
          <h3>Frontend Developer Intern</h3>
          <span className="exp-badge">Internship</span>
        </div>

        <p className="exp-company">
          Live Stream Technology
        </p>

        <p className="exp-duration">
          Apr 2026 – May 2026
        </p>

        <ul>
          <li>Developed responsive React.js web interfaces</li>
          <li>Built reusable UI components for scalable architecture</li>
          <li>Improved performance and loading speed of pages</li>
          <li>Collaborated with backend team for API integration</li>
          <li>Worked on mobile-first responsive design system</li>
        </ul>

      </div>

    </div>
  </section>
)}

        {/* PROJECTS */}
       {/* PROJECTS */}
{active === "projects" && (
  <section className="box">
    <h2>Projects</h2>

    <div className="project-grid">

      {projects.map((p) => (
        <div
          key={p.id}
          className="project-card"
          onClick={() => setSelectedProject(p)}
        >

          <img src={p.images[0]} alt={p.title} />

          <div className="project-content">

            <h3>{p.title}</h3>

            <p>{p.desc}</p>

            {/* TECH TAGS */}
            <div className="project-tags">
              <span>React</span>
              <span>Frontend</span>
              <span>UI</span>
            </div>

            <button>View Details</button>

          </div>

        </div>
      ))}

    </div>
  </section>
)}
        {/* CERTIFICATIONS */}
{active === "certifications" && (
  <section className="box">
    <h2>Certifications</h2>

    <div className="cert-grid">

      {/* IBM CERTIFICATE */}
      <div className="cert-card">
        <h3>IBM SkillsBuild</h3>
        <p>Professional Skills Development Program</p>

        <a
          href="/IBM.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>View Certificate</button>
        </a>
      </div>

      {/* GOOGLE CERTIFICATE */}
      <div className="cert-card">
        <h3>Google Cybersecurity Professional Certificate</h3>
        <p>Security fundamentals, threat detection & protection</p>

        <a
          href="/Google.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>View Certificate</button>
        </a>
      </div>

    </div>
  </section>
)}

        {/* CONTACT */}
        {active === "contact" && (
          <section className="box">
            <h2>Contact</h2>

            <div className="contact-grid">

              <div className="contact-card">
                <FaPhone className="icon phone" />
                <h3>Phone</h3>
                <p>+91-7639117461</p>
              </div>

              <div className="contact-card">
                <FaEnvelope className="icon email" />
                <h3>Email</h3>
                <a href="mailto:sanjeevlakshmanan1804@gmail.com?subject=Hello Sanjeev">
                  Send Email
                </a>
              </div>

              <div className="contact-card">
                <FaLinkedin className="icon linkedin" />
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/sanjeev-lakshmanan-2866182a2" target="_blank">
                  View Profile
                </a>
              </div>

              <div className="contact-card">
                <FaGithub className="icon github" />
                <h3>GitHub</h3>
                <a href="https://github.com/Sanjeev-31" target="_blank">
                  View Projects
                </a>
              </div>

            </div>
          </section>
        )}

      </div>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>

            <div className="modal-gallery">
              {selectedProject.images.map((img, i) => (
                <img key={i} src={img} />
              ))}
            </div>

            <button onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}

      {/* CERT MODAL */}
      {selectedCert && (
        <div className="modal" onClick={() => setSelectedCert(null)}>
          <div className="modal-box cert-modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedCert} className="cert-image" />
            <button onClick={() => setSelectedCert(null)}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
}