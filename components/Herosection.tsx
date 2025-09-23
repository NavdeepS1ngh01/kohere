'use client';

import Image from 'next/image';

export default function Herosection() {
  return (
    <>
      <div className="herosection-container">
        <section className="herosection patrick-hand-regular">
          <div className="herosection-content">
            <h1 className="herosection-headline">
              Tailored Tech Solutions <br />
              That Drive Real Growth
            </h1>

            <p className="herosection-subheadline">
              From cutting-edge web apps to intuitive mobile experiences,
              <br />
              we craft tools that supercharge your team and wow your users.
            </p>
          </div>
          <div className="herosection-invite">
            <input
              className="herosection-invite-input"
              type="email"
              placeholder="Enter your email"
            />
            <button className="herosection-invite-button">
              Book a free wireframe!
            </button>
          </div>
        </section>
            <div className="card-container">
              <div className="card-heading">Wong Accounting Limited - Webapp </div>
              <div className="card-content">
                <Image
                  src="/hero-section-image.png"
                  alt="Wilson Wong project"
                  width={80}
                  height={75}
                  className="contentinfo-image"
                />
                <div className="card-contentinfo">
                  <p className="contentinfo-name">Wilson Wong</p>
                  <p className="contentinfo-title">Hong Kong Accounting Firm</p>
                  <p className="contentinfo-progress">In progress</p>
                </div>
              </div>
            </div>
      </div>
    </>
  );
}
