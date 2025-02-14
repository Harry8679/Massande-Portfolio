import React from "react";
import "../assets/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

// Données des services
const servicesData = [
  {
    id: 1,
    title: "Nesciunt Mete",
    description: "Provident nihil minus qui consequatur non omnis maiores.",
    icon: "bi bi-activity",
    color: "item-cyan",
  },
  {
    id: 2,
    title: "Eosle Commodi",
    description: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.",
    icon: "bi bi-broadcast",
    color: "item-orange",
  },
  {
    id: 3,
    title: "Ledo Markt",
    description: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.",
    icon: "bi bi-easel",
    color: "item-teal",
  },
  {
    id: 4,
    title: "Asperiores Commodit",
    description: "Non et temporibus minus omnis sed dolor esse consequatur.",
    icon: "bi bi-bounding-box-circles",
    color: "item-red",
  },
  {
    id: 5,
    title: "Velit Doloremque",
    description: "Cumque et suscipit saepe. Est maiores autem enim facilis.",
    icon: "bi bi-calendar4-week",
    color: "item-indigo",
  },
  {
    id: 6,
    title: "Dolori Architecto",
    description: "Hic molestias ea quibusdam eos. Fugiat enim doloremque.",
    icon: "bi bi-chat-square-text",
    color: "item-pink",
  },
];

// Composant ServiceItem
const ServiceItem = ({ service }) => (
  <div className="col-lg-4 col-md-6" data-aos="fade-up">
    <div className={`service-item ${service.color} position-relative`}>
      <div className="icon">
        <i className={service.icon}></i>
      </div>
      <Link href="#" className="stretched-link">
        <h3>{service.title}</h3>
      </Link>
      <p>{service.description}</p>
    </div>
  </div>
);

// Composant principal Services
const Services = () => {
  return (
    <main className="main">
      <section id="services" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="container">
          <div className="row gy-4">
            {servicesData.map((service) => (
              <ServiceItem key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
