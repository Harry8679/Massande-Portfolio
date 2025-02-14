import React from "react";
// import profileImage from "../assets/img/profile-img.jpg";
import profileImage from "../assets/img/hens.jpg";
// import profileImage from "../assets/img/profile.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  return (
    <main className="main">
      {/* About Section */}
      <section id="about" className="about section py-5">
        <div className="container section-title text-center" data-aos="fade-up">
          <h2>A Propos de moi</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4 text-center">
              <img src={profileImage} className="img-fluid rounded-circle shadow" alt="Profile" />
            </div>
            {/* <div className="col-lg-4 text-center">
              <img src={profileImage} className="img-fluid rounded-profile" alt="Profile" />
            </div> */}
            <div className="col-lg-8 content">
              <h2>UI/UX Designer & Web Developer</h2>
              <p className="fst-italic py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="list-unstyled">
                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="list-unstyled">
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>email@example.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills section py-5 bg-light">
        <div className="container section-title text-center" data-aos="fade-up">
          <h2>Skills</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-6">
              {renderSkill("HTML", 100)}
              {renderSkill("CSS", 90)}
              {renderSkill("JavaScript", 75)}
            </div>
            <div className="col-lg-6">
              {renderSkill("PHP", 80)}
              {renderSkill("WordPress/CMS", 90)}
              {renderSkill("Photoshop", 55)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Fonction pour afficher les compétences avec une barre de progression
function renderSkill(skill, percentage) {
  return (
    <div className="progress my-3">
      <span className="skill d-flex justify-content-between">
        <span>{skill}</span> <i className="val">{percentage}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}