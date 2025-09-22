"use client";

import { useState } from "react";

export default function Herosection() {
  const [heading, setHeading] = useState("web");

  function handleHeadingSelect(event: React.MouseEvent<HTMLParagraphElement>) {
    const selectedHeading = event.currentTarget.dataset.value;
    if (selectedHeading) {
      setHeading(selectedHeading);
    }
  }

  return (
    <>
      <div className="herosection-container">
        <section className="herosection patrick-hand-regular">
          <div className="herosection-content">
            <h1 className="herosection-headline">
              Tailored Tech Solutions <br></br>
              That Drive Real Growth
            </h1>

            <p className="herosection-subheadline">
              From cutting-edge web apps to intuitive mobile experiences,
              <br></br>we craft tools that supercharge your team and wow your
              users.
            </p>
          </div>
          <div className="herosection-invite">
            <input
              className="herosection-invite-input"
              type="email"
              placeholder="Enter your email"
            ></input>
            <button className="herosection-invite-button">
              Book a free wireframe!
            </button>
          </div>
        </section>
        <section className="herosection-right">
          <section className="left-card">
          <div className="card-container">
            <div className="card-heading">In-process</div>
            <div className="card-content">
              <img
                src="/hero-section-image.png"
                className="contentinfo-image"
              ></img>
              <div className="card-contentinfo">
                <p className="contentinfo-name">Wilson Wong</p>
                <p className="contentinfo-title">Hong Kong Accounting Firm</p>
                <p className="contentinfo-progress">In progress</p>
              </div>
            </div>
          </div>
          </section>
         <section className="right-card">
          <div className="card-container">
            <div className="card-heading">Cathay's Cupcakes</div>
            <div className="card-content">
              <img
                src="/hero-section-image2.png"
                className="contentinfo-image"
              ></img>
              <div className="card-contentinfo">
                <p className="contentinfo-name">Cathy Lee</p>
                <p className="contentinfo-title">Hong Kong Homemade Bakery</p>
                <p className="contentinfo-progress">Completed</p>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card-heading">Charles Consultation Limited</div>
            <div className="card-content">
              <img
                src="/hero-section-image3.png"
                className="contentinfo-image"
              ></img>
              <div className="card-contentinfo">
                <p className="contentinfo-name">Charles & co.</p>
                <p className="contentinfo-title">Foreign Consulting Firm</p>
                <p className="contentinfo-progress">Completed</p>
              </div>
            </div>
          </div>
          </section>
        </section>
      </div>
    </>
  );
}
