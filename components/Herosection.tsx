"use client";
import Image from "next/image";
export default function Herosection() {
  // function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
  //   e.preventDefault();
  // }
  return (
    <>
      <div className="herosection-container">
        <section className="herosection patrick-hand-regular">
          <div className="herosection-content">
            <h1 className="herosection-headline">
              Tailored Tech Solutions That Drive
              <span className="herosection-headline-underline">
                Real Growth
              </span>
            </h1>

            <p className="herosection-subheadline">
              From cutting-edge web apps to intuitive mobile experiences,
              <br></br>we craft tools that supercharge your team and wow your
              users.
            </p>
            <p className="herosection-cta">Let&apos;s Build Something Great</p>
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
        <div className="herosection-image">
          <Image
            src="/hero-image.png"
            alt="Screenshot of Visual Studio Code Workspace"
            width={420}
            height={420}
          />
        </div>
      </div>
    </>
  );
}
