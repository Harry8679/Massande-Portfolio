import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(""); // Message de succès ou erreur
  const [showModal, setShowModal] = useState(false); // État du popup modal

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email envoyé :", result.text);
          setStatus("Votre message a été envoyé avec succès ! ✅");
          formRef.current.reset(); // Réinitialise le formulaire
          setShowModal(true); // Affiche le popup modal
        },
        (error) => {
          console.error("Erreur lors de l'envoi :", error.text);
          setStatus("Erreur lors de l'envoi du message. ❌ Veuillez réessayer.");
          setShowModal(true); // Affiche le popup modal
        }
      );
  };

  return (
    <main className="main">
      <section id="contact" className="contact section py-5">
        <div className="container section-title text-center" data-aos="fade-up">
          <h2>Contact</h2>
          <p>Cet espace est réservé si vous voulez me contacter.</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* Contact Infos */}
            <div className="col-lg-5">
              <div className="info-wrap">
                {renderInfoItem("bi-geo-alt", "Adresse", "Bikélé", 200)}
                {renderInfoItem("bi-telephone", "Phone", "074743480", 300)}
                {renderInfoItem("bi-envelope", "Email", "massandegerda@gmail.com", 400)}

                {/* Google Maps */}
                <iframe
                  title="Google Maps Location - Libreville"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3978.0302472168674!2d9.4544!3d0.3901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106003bffffffffff%3A0x7abf5e5ff14772f7!2sLibreville%2C%20Gabon!5e0!3m2!1sen!2sga!4v1707900000000!5m2!1sen!2sga"
                  frameBorder="0"
                  style={{ border: "0", width: "100%", height: "270px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <form ref={formRef} onSubmit={sendEmail} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <label htmlFor="name-field" className="pb-2">Votre Nom</label>
                    <input type="text" name="name" id="name-field" className="form-control" required />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email-field" className="pb-2">Votre Email</label>
                    <input type="email" name="email" id="email-field" className="form-control" required />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="subject-field" className="pb-2">Sujet</label>
                    <input type="text" name="subject" id="subject-field" className="form-control" required />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="message-field" className="pb-2">Message</label>
                    <textarea name="message" id="message-field" className="form-control" rows="10" required></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-primary mt-3">Envoyez</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Popup de Confirmation */}
      <div className={`modal fade ${showModal ? "show d-block" : "d-none"}`} tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Notification</h5>
              <button type="button" className="close btn btn-danger" onClick={() => setShowModal(false)}>&times;</button>
            </div>
            <div className="modal-body">
              <p>{status}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Fonction pour afficher les blocs d'information
function renderInfoItem(icon, title, content, delay) {
  return (
    <div className="info-item d-flex align-items-center mb-4" data-aos="fade-up" data-aos-delay={delay}>
      <i className={`bi ${icon} flex-shrink-0 text-primary fs-3`}></i>
      <div className="ms-3">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}