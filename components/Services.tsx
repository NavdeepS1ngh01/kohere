"use client";
import { IoIosCheckboxOutline } from "react-icons/io";

const servicesData = [
  {
    title: "Development",
    description: "Full stack solutions for modern apps across all platforms.",
    points: [
      "Native app & web builds",
      "Scalable architecture",
      "Superior user interfaces",
      "Efficient workflows",
    ],
  },
  {
    title: "Quality",
    description: "High standards built into every layer—from code to user experience.",
    points: [
      "Industry standards",
      "Robust version control",
      "Clean code",
      "Smooth onboarding",
    ],
  },
  {
    title: "Testing",
    description: "Comprehensive validation to ensure reliability and efficiency.",
    points: [
      "Thorough QA testing",
      "Real user feedback",
      "Optimization",
      "Security audits",
    ],
  },
  {
    title: "Support",
    description: "Dedicated help, monitoring, and growth—every step of the way.",
    points: [
      "End-to-end project care",
      "Responsive support",
      "Continuous monitoring",
      "Ongoing upgrades",
    ],
  },
];

export default function Services() {
  return (
    <section className="services-main">
    <div className="services-container">
      <div className="services-heading">
        <h1>Take a quick look at what we provide</h1>
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-info">
              <h3 className="info-heading">{service.title}</h3>
              <p className="info-description">{service.description}</p>
            </div>
            <div className="checkpoints">
              <ul>
                {service.points.map((point, i) => (
                  <li key={i}>
                    <IoIosCheckboxOutline />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
