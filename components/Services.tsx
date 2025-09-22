'use client'
import { motion } from "motion/react"
export default function Services() {
  return (
    <>
      <div className="services-container patrick-hand-regular">
        <p className="serivces-heading">What We Deliver</p>
        <div className="services">
          <motion.section whileHover={{ scale: 1.025 }} className="service-fullstack service-card">
            <h2 className="service-subheading">Full-Stack Development</h2>
            <p>
              We create powerful native mobile apps and responsive web
              applications that transform how your business connects with
              customers. From iOS and Android apps to cutting-edge web
              platforms, we build scalable solutions designed to drive growth,
              enhance user experiences, and streamline your operations for
              maximum impact.
            </p>
          </motion.section>
          <motion.section whileHover={{ scale: 1.025 }} className="service-quality service-card">
            <h2 className="service-subheading">Enterprise-Grade Quality</h2>
            <p>
              Every line of code meets industry standards through rigorous
              version control, comprehensive documentation, and team-reviewed
              processes. We follow established development frameworks and coding
              best practices, ensuring your software is maintainable, secure,
              and ready for seamless team onboarding and future enhancements.
            </p>
          </motion.section>
          <motion.section whileHover={{ scale: 1.025 }} className="service-testing service-card">
            <h2 className="service-subheading">Comprehensive Testing & Assurance</h2>
            <p>
              Your software undergoes thorough quality assurance including
              functionality testing, user experience validation, performance
              optimization, and security auditing. We employ automated testing
              suites and manual review processes to ensure your application
              performs flawlessly across all platforms and user scenarios.
            </p>
          </motion.section>
          <motion.section whileHover={{ scale: 1.025 }} className="service-support service-card">
            <h2 className="service-subheading">Full-Cycle Support</h2>
            <p>
              From initial consultation through deployment and beyond, we
              provide end-to-end project management and technical support. Our
              transparent communication ensures you’re informed at every stage,
              with dedicated post-launch monitoring, maintenance, and feature
              enhancement services to keep your software running at peak
              performance.
            </p>
          </motion.section>
        </div>
      </div>
    </>
  );
}
