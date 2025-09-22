'use client'
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    router.push('/contact');
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <h1>Kohere</h1>
        </div>
        <div className="navbar-links patrick-hand-regular">
          <a href="/" className={pathname === '/' ? 'active' : ''}>Home</a>
          <a href="/about" className={pathname === '/about' ? 'active' : ''}>About</a>
          <a href="/project" className={pathname === '/project' ? 'active' : ''}>Projects</a>
        </div>
        <div className="navbar-button-container">
          <button className="border-2 border-black navbar-button" onClick={handleClick}>Contact Us</button>
        </div>
      </div>
      <div className="navbar-underline"></div>
    </>
  );
}
