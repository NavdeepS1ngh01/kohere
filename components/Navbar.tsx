'use client'
export default function Navbar() {
    function handleClick(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault()
    }
  return (
    <>
    <div className="navbar patrick-hand-regular">
      <div className="navbar-logo">
        <h1>Koherent Limited</h1>
      </div>
      <div className="navbar-links">
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
      </div>
      <div className="navbar-button-container">
        <button className="rounded-full border-2 border-black navbar-button" onClick={handleClick}>Contact Us</button>
      </div>
    </div>
    </>
  );
}
